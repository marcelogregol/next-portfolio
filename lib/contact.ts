import { prisma } from "./prisma";

export type ContactContent = {
    id: number | null;
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButtonText: string;
    ctaButtonHref: string;
};

type ContactRow = {
    id: number;
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButtonText: string;
    ctaButtonHref: string;
};

export const defaultContact: ContactContent = {
    id: null,
    email: "marcelo.dev@email.com",
    whatsapp: "5514999999999",
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-user",
    ctaTitle: "Let's work together",
    ctaSubtitle: "Available for professional opportunities across Ireland, whether on-site, hybrid or remote.",
    ctaButtonText: "Get in Touch",
    ctaButtonHref: "#contact",
};

export async function ensureContactTable() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS contact (
            id INTEGER NOT NULL AUTO_INCREMENT,
            email VARCHAR(191) NOT NULL,
            whatsapp VARCHAR(191) NOT NULL,
            linkedin VARCHAR(191) NOT NULL,
            github VARCHAR(191) NOT NULL,
            ctaTitle VARCHAR(191) NOT NULL,
            ctaSubtitle LONGTEXT NOT NULL,
            ctaButtonText VARCHAR(191) NOT NULL,
            ctaButtonHref VARCHAR(191) NOT NULL,
            createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            updatedAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);
}

export async function getContactContent() {
    await ensureContactTable();

    const rows = await prisma.$queryRaw<ContactRow[]>`
        SELECT id, email, whatsapp, linkedin, github, ctaTitle, ctaSubtitle, ctaButtonText, ctaButtonHref
        FROM contact
        ORDER BY id ASC
        LIMIT 1
    `;

    return rows[0] ?? defaultContact;
}

export async function saveContact(input: ContactContent) {
    await ensureContactTable();

    const existing = await prisma.$queryRaw<ContactRow[]>`
        SELECT id, email, whatsapp, linkedin, github, ctaTitle, ctaSubtitle, ctaButtonText, ctaButtonHref
        FROM contact
        ORDER BY id ASC
        LIMIT 1
    `;

    if (existing.length === 0) {
        await prisma.$executeRaw`
            INSERT INTO contact (email, whatsapp, linkedin, github, ctaTitle, ctaSubtitle, ctaButtonText, ctaButtonHref)
            VALUES (
                ${input.email ?? ""},
                ${input.whatsapp ?? ""},
                ${input.linkedin ?? ""},
                ${input.github ?? ""},
                ${input.ctaTitle ?? ""},
                ${input.ctaSubtitle ?? ""},
                ${input.ctaButtonText ?? ""},
                ${input.ctaButtonHref ?? ""}
            )
        `;
    } else {
        await prisma.$executeRaw`
            UPDATE contact
            SET
                email = ${input.email ?? ""},
                whatsapp = ${input.whatsapp ?? ""},
                linkedin = ${input.linkedin ?? ""},
                github = ${input.github ?? ""},
                ctaTitle = ${input.ctaTitle ?? ""},
                ctaSubtitle = ${input.ctaSubtitle ?? ""},
                ctaButtonText = ${input.ctaButtonText ?? ""},
                ctaButtonHref = ${input.ctaButtonHref ?? ""}
            WHERE id = ${existing[0].id}
        `;
    }

    return getContactContent();
}
