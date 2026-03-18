import { hasAdminSession } from "@/lib/admin-auth";
import { getAbout, saveAbout } from "@/lib/about";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const about = await getAbout();
        return NextResponse.json(about);
    } catch (error) {
        console.error("GET /api/about error:", error);

        return NextResponse.json(
            { error: "Erro ao buscar about" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    if (!(await hasAdminSession())) {
        return NextResponse.json(
            { error: "Nao autorizado" },
            { status: 401 }
        );
    }

    try {
        const body = await req.json();
        const about = await saveAbout({
            title: body.title ?? "",
            text: body.text ?? "",
            highlights: Array.isArray(body.highlights)
                ? body.highlights.filter((item: unknown) => typeof item === "string")
                : [],
        });

        return NextResponse.json(about);
    } catch (error) {
        console.error("PUT /api/about error:", error);

        return NextResponse.json(
            { error: "Erro ao salvar about" },
            { status: 500 }
        );
    }
}
