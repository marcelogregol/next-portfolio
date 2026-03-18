import { prisma } from "@/lib/prisma";
import { ensureHeroTable } from "./content-tables";

export type HeroContent = {
    id: number | null;
    greeting: string;
    title: string;
    subtitle: string;
    cta1Text: string;
    cta1Href: string;
    cta2Text: string;
    cta2Href: string;
};

export const defaultHero: HeroContent = {
    id: null,
    greeting: "Hello, I'm Marcelo",
    title: "Full-Stack Developer",
    subtitle:
        "I build modern web applications with a strong focus on performance, usability and clean architecture.",
    cta1Text: "View Projects",
    cta1Href: "#projects",
    cta2Text: "Get in Touch",
    cta2Href: "#contact",
};

export async function getHeroContent() {
    try {
        await ensureHeroTable();

        const hero = await prisma.hero.findFirst({
            orderBy: { id: "asc" },
        });

        return hero ?? defaultHero;
    } catch (error) {
        console.error("Failed to load hero content. Using defaults.", error);
        return defaultHero;
    }
}

export async function saveHeroContent(input: HeroContent) {
    await ensureHeroTable();

    const existing = await prisma.hero.findFirst({
        orderBy: { id: "asc" },
    });

    if (!existing) {
        await prisma.hero.create({
            data: {
                greeting: input.greeting ?? "",
                title: input.title ?? "",
                subtitle: input.subtitle ?? "",
                cta1Text: input.cta1Text ?? "",
                cta1Href: input.cta1Href ?? "",
                cta2Text: input.cta2Text ?? "",
                cta2Href: input.cta2Href ?? "",
            },
        });
    } else {
        await prisma.hero.update({
            where: { id: existing.id },
            data: {
                greeting: input.greeting ?? "",
                title: input.title ?? "",
                subtitle: input.subtitle ?? "",
                cta1Text: input.cta1Text ?? "",
                cta1Href: input.cta1Href ?? "",
                cta2Text: input.cta2Text ?? "",
                cta2Href: input.cta2Href ?? "",
            },
        });
    }

    return getHeroContent();
}
