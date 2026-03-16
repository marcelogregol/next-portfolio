import { prisma } from "@/lib/prisma";

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
        const hero = await prisma.hero.findFirst({
            orderBy: { id: "asc" },
        });

        return hero ?? defaultHero;
    } catch (error) {
        console.error("Failed to load hero content. Using defaults.", error);
        return defaultHero;
    }
}
