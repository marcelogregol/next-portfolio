import { prisma } from "./prisma";

export type AboutContent = {
    id: number | null;
    title: string;
    text: string;
    highlights: {
        id: number;
        title: string;
    }[];
};

export const defaultAbout: AboutContent = {
    id: null,
    title: "About",
    text: "Full-stack development focused on modern, scalable applications across front-end, back-end and databases.",
    highlights: [
        { id: 1, title: "Architecture" },
        { id: 2, title: "Performance" },
        { id: 3, title: "Clean Code" },
        { id: 4, title: "User Experience" },
    ],
};

export async function getAbout() {
    try {
        const about = await prisma.about.findFirst({
            include: {
                abouthighlight: {
                    orderBy: { id: "asc" },
                },
            },
        });

        if (!about) {
            return defaultAbout;
        }

        return {
            id: about.id,
            title: about.title,
            text: about.text,
            highlights: about.abouthighlight.map((item) => ({
                id: item.id,
                title: item.title,
            })),
        };
    } catch (error) {
        console.error("Failed to load about content. Using defaults.", error);
        return defaultAbout;
    }
}

export async function saveAbout(input: { title: string; text: string; highlights: string[] }) {
    let about = await prisma.about.findFirst();

    if (!about) {
        about = await prisma.about.create({
            data: {
                title: input.title,
                text: input.text,
                updatedAt: new Date(),
            },
        });
    } else {
        await prisma.about.update({
            where: { id: about.id },
            data: {
                title: input.title,
                text: input.text,
                updatedAt: new Date(),
            },
        });
    }

    await prisma.abouthighlight.deleteMany({
        where: { aboutId: about.id },
    });

    if (input.highlights.length > 0) {
        await prisma.abouthighlight.createMany({
            data: input.highlights.map((title) => ({
                aboutId: about!.id,
                title,
            })),
        });
    }

    const updated = await prisma.about.findUnique({
        where: { id: about.id },
        include: {
            abouthighlight: {
                orderBy: { id: "asc" },
            },
        },
    });

    return {
        id: updated?.id ?? null,
        title: updated?.title ?? defaultAbout.title,
        text: updated?.text ?? defaultAbout.text,
        highlights:
            updated?.abouthighlight.map((item) => ({
                id: item.id,
                title: item.title,
            })) ?? defaultAbout.highlights,
    };
}
