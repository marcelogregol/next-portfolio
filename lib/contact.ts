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

export const defaultContact: ContactContent = {
    id: null,
    email: "",
    whatsapp: "",
    linkedin: "",
    github: "",
    ctaTitle: "Let's work together",
    ctaSubtitle: "Available for professional opportunities.",
    ctaButtonText: "Get in Touch",
    ctaButtonHref: "#contact",
};

export async function getContactContent() {
    try {
        const row = await prisma.contact.findFirst({
            orderBy: { id: "asc" },
        });

        return row ?? defaultContact;
    } catch (error) {
        console.error("Failed to load contact content. Using defaults.", error);
        return defaultContact;
    }
}

export async function saveContact(input: ContactContent) {
    const existing = await prisma.contact.findFirst({
        orderBy: { id: "asc" },
    });

    if (!existing) {
        await prisma.contact.create({
            data: {
                email: input.email ?? "",
                whatsapp: input.whatsapp ?? "",
                linkedin: input.linkedin ?? "",
                github: input.github ?? "",
                ctaTitle: input.ctaTitle ?? "",
                ctaSubtitle: input.ctaSubtitle ?? "",
                ctaButtonText: input.ctaButtonText ?? "",
                ctaButtonHref: input.ctaButtonHref ?? "",
            },
        });
    } else {
        await prisma.contact.update({
            where: { id: existing.id },
            data: {
                email: input.email ?? "",
                whatsapp: input.whatsapp ?? "",
                linkedin: input.linkedin ?? "",
                github: input.github ?? "",
                ctaTitle: input.ctaTitle ?? "",
                ctaSubtitle: input.ctaSubtitle ?? "",
                ctaButtonText: input.ctaButtonText ?? "",
                ctaButtonHref: input.ctaButtonHref ?? "",
            },
        });
    }

    return getContactContent();
}
