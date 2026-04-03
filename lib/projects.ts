import { prisma } from "./prisma";
import { parseProjectCodeLinks, serializeProjectCodeLinks, type ProjectCodeLink } from "./project-code-links";

export type ProjectContent = {
    id: number | null;
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: string[];
    imageUrl: string;
    demoUrl: string;
    codeLinks: ProjectCodeLink[];
    featured: boolean;
    enabled: boolean;
    order: number;
};

type ProjectRow = {
    id: number;
    title: string;
    shortDesc: string;
    longDesc: string;
    tagsJson: string | null;
    imageUrl: string | null;
    demoUrl: string | null;
    codeUrl: string | null;
    featured: boolean | number;
    enabled: boolean | number;
    displayOrder: number;
};

export const defaultProjects: ProjectContent[] = [
    {
        id: 1,
        title: "Financial Dashboard",
        shortDesc: "Dashboard with key metrics and data visualisation.",
        longDesc: "Project focused on data visualisation, performance and a polished user experience.",
        tags: ["Next.js", "API", "DB"],
        imageUrl: "/images/demo.jpg",
        demoUrl: "#",
        codeLinks: [{ label: "Code", url: "#" }],
        featured: true,
        enabled: true,
        order: 1,
    },
    {
        id: 2,
        title: "E-Commerce Store",
        shortDesc: "Online store with checkout flow and admin area.",
        longDesc: "Project with catalogue, cart, authentication and third-party integrations.",
        tags: ["Next.js", "Node", "Stripe"],
        imageUrl: "/images/demo.jpg",
        demoUrl: "#",
        codeLinks: [{ label: "Code", url: "#" }],
        featured: true,
        enabled: true,
        order: 2,
    },
    {
        id: 3,
        title: "Weather App",
        shortDesc: "Responsive weather app with forecast data and clean UI.",
        longDesc: "Consumes an external API and presents key information with a strong focus on clarity and usability.",
        tags: ["Next.js", "API", "UI"],
        imageUrl: "/images/demo.jpg",
        demoUrl: "#",
        codeLinks: [{ label: "Code", url: "#" }],
        featured: false,
        enabled: true,
        order: 3,
    },
];

function parseTags(value: string | null) {
    if (!value) return [];

    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed.filter((tag) => typeof tag === "string") : [];
    } catch {
        return [];
    }
}

function mapProject(row: ProjectRow): ProjectContent {
    return {
        id: row.id,
        title: row.title,
        shortDesc: row.shortDesc,
        longDesc: row.longDesc,
        tags: parseTags(row.tagsJson),
        imageUrl: row.imageUrl || "/images/demo.jpg",
        demoUrl: row.demoUrl || "",
        codeLinks: parseProjectCodeLinks(row.codeUrl),
        featured: Boolean(row.featured),
        enabled: Boolean(row.enabled),
        order: row.displayOrder,
    };
}

export async function getProjectsContent() {
    try {
        const rows = await prisma.project.findMany({
            orderBy: [{ displayOrder: "asc" }, { id: "asc" }],
        });

        if (rows.length === 0) {
            return defaultProjects;
        }

        return rows.map(mapProject);
    } catch (error) {
        console.error("Failed to load projects content. Using defaults.", error);
        return defaultProjects;
    }
}

export async function getEnabledProjects() {
    const projects = await getProjectsContent();
    return projects.filter((project) => project.enabled);
}

export async function getProjectById(id: number) {
    const projects = await getProjectsContent();
    return projects.find((project) => project.id === id) ?? null;
}

export async function saveProjects(input: ProjectContent[]) {
    const existingProjects = await prisma.project.findMany({
        select: { id: true },
    });
    const existingIds = new Set(existingProjects.map((project) => project.id));
    const persistedIds = input
        .map((project) => (typeof project.id === "number" && project.id > 0 ? project.id : null))
        .filter((id): id is number => id !== null);
    const idsToDelete = existingProjects
        .map((project) => project.id)
        .filter((id) => !persistedIds.includes(id));

    await prisma.$transaction(async (tx) => {
        if (idsToDelete.length > 0) {
            await tx.project.deleteMany({
                where: {
                    id: { in: idsToDelete },
                },
            });
        }

        for (const [index, project] of input.entries()) {
            const data = {
                title: project.title ?? "",
                shortDesc: project.shortDesc ?? "",
                longDesc: project.longDesc ?? "",
                tagsJson: JSON.stringify(project.tags ?? []),
                imageUrl: project.imageUrl || "/images/demo.jpg",
                demoUrl: project.demoUrl || null,
                codeUrl: serializeProjectCodeLinks(project.codeLinks ?? []),
                featured: project.featured,
                enabled: project.enabled,
                displayOrder: project.order || index + 1,
            };

            if (typeof project.id === "number" && project.id > 0 && existingIds.has(project.id)) {
                await tx.project.update({
                    where: { id: project.id },
                    data,
                });
                continue;
            }

            await tx.project.create({ data });
        }
    });

    return getProjectsContent();
}
