import { prisma } from "./prisma";

export type ProjectContent = {
    id: number | null;
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: string[];
    imageUrl: string;
    demoUrl: string;
    codeUrl: string;
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
        codeUrl: "#",
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
        codeUrl: "#",
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
        codeUrl: "#",
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
        codeUrl: row.codeUrl || "",
        featured: Boolean(row.featured),
        enabled: Boolean(row.enabled),
        order: row.displayOrder,
    };
}

export async function ensureProjectsTable() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS project (
            id INTEGER NOT NULL AUTO_INCREMENT,
            title VARCHAR(191) NOT NULL,
            shortDesc VARCHAR(191) NOT NULL,
            longDesc LONGTEXT NOT NULL,
            tagsJson LONGTEXT NULL,
            imageUrl VARCHAR(191) NULL,
            demoUrl VARCHAR(191) NULL,
            codeUrl VARCHAR(191) NULL,
            featured BOOLEAN NOT NULL DEFAULT false,
            enabled BOOLEAN NOT NULL DEFAULT true,
            displayOrder INTEGER NOT NULL DEFAULT 1,
            createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            updatedAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);

    await prisma.$executeRawUnsafe(`
        ALTER TABLE project ADD COLUMN IF NOT EXISTS tagsJson LONGTEXT NULL AFTER longDesc;
    `);
    await prisma.$executeRawUnsafe(`
        ALTER TABLE project ADD COLUMN IF NOT EXISTS imageUrl VARCHAR(191) NULL AFTER tagsJson;
    `);
}

export async function getProjectsContent() {
    await ensureProjectsTable();

    const rows = await prisma.$queryRaw<ProjectRow[]>`
        SELECT id, title, shortDesc, longDesc, tagsJson, imageUrl, demoUrl, codeUrl, featured, enabled, displayOrder
        FROM project
        ORDER BY displayOrder ASC, id ASC
    `;

    if (rows.length === 0) {
        return defaultProjects;
    }

    return rows.map(mapProject);
}

export async function getEnabledProjects() {
    const projects = await getProjectsContent();
    return projects.filter((project) => project.enabled);
}

export async function saveProjects(input: ProjectContent[]) {
    await ensureProjectsTable();

    await prisma.$executeRawUnsafe(`DELETE FROM project`);

    for (const [index, project] of input.entries()) {
        await prisma.$executeRaw`
            INSERT INTO project (title, shortDesc, longDesc, tagsJson, imageUrl, demoUrl, codeUrl, featured, enabled, displayOrder)
            VALUES (
                ${project.title ?? ""},
                ${project.shortDesc ?? ""},
                ${project.longDesc ?? ""},
                ${JSON.stringify(project.tags ?? [])},
                ${project.imageUrl || "/images/demo.jpg"},
                ${project.demoUrl || null},
                ${project.codeUrl || null},
                ${project.featured},
                ${project.enabled},
                ${project.order || index + 1}
            )
        `;
    }

    return getProjectsContent();
}
