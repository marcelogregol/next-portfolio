import { getHeroContent, saveHeroContent } from "@/lib/hero";
import { hasAdminSession } from "@/lib/admin-auth";
import { NextRequest, NextResponse } from "next/server";

function getErrorPayload(error: unknown, fallback: string) {
    if (process.env.NODE_ENV === "production") {
        return { error: fallback };
    }

    if (error && typeof error === "object") {
        const maybePrismaError = error as {
            message?: string;
            code?: string;
            meta?: unknown;
        };

        return {
            error: fallback,
            details: maybePrismaError.message ?? String(error),
            code: maybePrismaError.code,
            meta: maybePrismaError.meta,
        };
    }

    return {
        error: fallback,
        details: typeof error === "string" ? error : fallback,
    };
}

export async function GET() {
    try {
        const hero = await getHeroContent();

        return NextResponse.json(hero);
    } catch (error) {
        console.error("GET /api/hero error:", error);

        return NextResponse.json(
            getErrorPayload(error, "Erro ao buscar hero"),
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
        const updatedHero = await saveHeroContent({
            id: typeof body.id === "number" ? body.id : null,
            greeting: body.greeting ?? "",
            title: body.title ?? "",
            subtitle: body.subtitle ?? "",
            cta1Text: body.cta1Text ?? "",
            cta1Href: body.cta1Href ?? "",
            cta2Text: body.cta2Text ?? "",
            cta2Href: body.cta2Href ?? "",
        });

        return NextResponse.json(updatedHero);
    } catch (error) {
        console.error("PUT /api/hero error:", error);

        return NextResponse.json(
            getErrorPayload(error, "Erro ao salvar hero"),
            { status: 500 }
        );
    }
}
