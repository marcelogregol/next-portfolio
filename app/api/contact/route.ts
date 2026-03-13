import { hasAdminSession } from "@/lib/admin-auth";
import { getContactContent, saveContact } from "@/lib/contact";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const contact = await getContactContent();
        return NextResponse.json(contact);
    } catch (error) {
        console.error("GET /api/contact error:", error);

        return NextResponse.json(
            { error: "Erro ao buscar contato" },
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
        const updatedContact = await saveContact({
            id: typeof body.id === "number" ? body.id : null,
            email: body.email ?? "",
            whatsapp: body.whatsapp ?? "",
            linkedin: body.linkedin ?? "",
            github: body.github ?? "",
            ctaTitle: body.ctaTitle ?? "",
            ctaSubtitle: body.ctaSubtitle ?? "",
            ctaButtonText: body.ctaButtonText ?? "",
            ctaButtonHref: body.ctaButtonHref ?? "",
        });

        return NextResponse.json(updatedContact);
    } catch (error) {
        console.error("PUT /api/contact error:", error);

        return NextResponse.json(
            { error: "Erro ao salvar contato" },
            { status: 500 }
        );
    }
}
