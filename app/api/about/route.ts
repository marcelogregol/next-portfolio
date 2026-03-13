import { hasAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const about = await prisma.about.findFirst();

        return NextResponse.json(
            about ?? {
                id: null,
                title: "",
                text: "",
            }
        );
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

        let about = await prisma.about.findFirst();

        if (!about) {
            about = await prisma.about.create({
                data: {
                    title: body.title ?? "",
                    text: body.text ?? "",
                },
            });
        } else {
            about = await prisma.about.update({
                where: { id: about.id },
                data: {
                    title: body.title ?? "",
                    text: body.text ?? "",
                },
            });
        }

        return NextResponse.json(about);
    } catch (error) {
        console.error("PUT /api/about error:", error);

        return NextResponse.json(
            { error: "Erro ao salvar about" },
            { status: 500 }
        );
    }
}
