import { findHero, getHeroContent, ensureHeroTable } from "@/lib/hero";
import { hasAdminSession } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const hero = await getHeroContent();

        return NextResponse.json(hero);
    } catch (error) {
        console.error("GET /api/hero error:", error);

        return NextResponse.json(
            { error: "Erro ao buscar hero" },
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
        await ensureHeroTable();
        const body = await req.json();
        const hero = await findHero();

        if (!hero) {
            await prisma.$executeRaw`
                INSERT INTO hero (greeting, title, subtitle, cta1Text, cta1Href, cta2Text, cta2Href)
                VALUES (
                    ${body.greeting ?? ""},
                    ${body.title ?? ""},
                    ${body.subtitle ?? ""},
                    ${body.cta1Text ?? ""},
                    ${body.cta1Href ?? ""},
                    ${body.cta2Text ?? ""},
                    ${body.cta2Href ?? ""}
                )
            `;
        } else {
            await prisma.$executeRaw`
                UPDATE hero
                SET
                    greeting = ${body.greeting ?? ""},
                    title = ${body.title ?? ""},
                    subtitle = ${body.subtitle ?? ""},
                    cta1Text = ${body.cta1Text ?? ""},
                    cta1Href = ${body.cta1Href ?? ""},
                    cta2Text = ${body.cta2Text ?? ""},
                    cta2Href = ${body.cta2Href ?? ""}
                WHERE id = ${hero.id}
            `;
        }

        const updatedHero = await getHeroContent();

        return NextResponse.json(updatedHero);
    } catch (error) {
        console.error("PUT /api/hero error:", error);

        return NextResponse.json(
            { error: "Erro ao salvar hero" },
            { status: 500 }
        );
    }
}
