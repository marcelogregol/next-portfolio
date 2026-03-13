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

type HeroRow = {
    id: number;
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

export async function ensureHeroTable() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS hero (
            id INTEGER NOT NULL AUTO_INCREMENT,
            greeting VARCHAR(191) NOT NULL,
            title VARCHAR(191) NOT NULL,
            subtitle LONGTEXT NOT NULL,
            cta1Text VARCHAR(191) NOT NULL,
            cta1Href VARCHAR(191) NOT NULL,
            cta2Text VARCHAR(191) NOT NULL,
            cta2Href VARCHAR(191) NOT NULL,
            createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            updatedAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);
}

export async function findHero() {
    const rows = await prisma.$queryRaw<HeroRow[]>`
        SELECT id, greeting, title, subtitle, cta1Text, cta1Href, cta2Text, cta2Href
        FROM hero
        ORDER BY id ASC
        LIMIT 1
    `;

    return rows[0] ?? null;
}

export async function getHeroContent() {
    await ensureHeroTable();
    return (await findHero()) ?? defaultHero;
}
