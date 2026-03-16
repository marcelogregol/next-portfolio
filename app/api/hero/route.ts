import { getHeroContent } from "@/lib/hero";
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
        const body = await req.json();
        const hero = await prisma.hero.findFirst({
            orderBy: { id: "asc" },
        });

        if (!hero) {
            await prisma.hero.create({
                data: {
                    greeting: body.greeting ?? "",
                    title: body.title ?? "",
                    subtitle: body.subtitle ?? "",
                    cta1Text: body.cta1Text ?? "",
                    cta1Href: body.cta1Href ?? "",
                    cta2Text: body.cta2Text ?? "",
                    cta2Href: body.cta2Href ?? "",
                },
            });
        } else {
            await prisma.hero.update({
                where: { id: hero.id },
                data: {
                    greeting: body.greeting ?? "",
                    title: body.title ?? "",
                    subtitle: body.subtitle ?? "",
                    cta1Text: body.cta1Text ?? "",
                    cta1Href: body.cta1Href ?? "",
                    cta2Text: body.cta2Text ?? "",
                    cta2Href: body.cta2Href ?? "",
                },
            });
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