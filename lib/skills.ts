import { prisma } from "./prisma";
import { normalizeSkillIconKey, type SkillIconKey } from "./skill-icons";

export type SkillContent = {
    id: number | null;
    name: string;
    description: string;
    category: string;
    level: string;
    iconKey: SkillIconKey;
    enabled: boolean;
    order: number;
};

type SkillRow = {
    id: number;
    name: string;
    description: string;
    category: string;
    level: string | null;
    iconKey: string | null;
    enabled: boolean | number;
    displayOrder: number;
};

export const defaultSkills: SkillContent[] = [
    {
        id: 1,
        name: "React & Next.js",
        description: "UI moderna, SSR/SSG, roteamento e otimizacao.",
        category: "Front-end",
        level: "Avancado",
        iconKey: "react",
        enabled: true,
        order: 1,
    },
    {
        id: 2,
        name: "Node.js",
        description: "APIs, jobs e integracoes com foco em performance.",
        category: "Back-end",
        level: "Avancado",
        iconKey: "nodejs",
        enabled: true,
        order: 2,
    },
    {
        id: 3,
        name: "TypeScript",
        description: "Codigo escalavel com types e boas praticas.",
        category: "Front-end",
        level: "Avancado",
        iconKey: "typescript",
        enabled: true,
        order: 3,
    },
    {
        id: 4,
        name: "APIs REST",
        description: "Design de endpoints, auth e integracoes.",
        category: "Back-end",
        level: "Avancado",
        iconKey: "gear",
        enabled: true,
        order: 4,
    },
    {
        id: 5,
        name: "Banco de Dados",
        description: "Modelagem, queries e performance (SQL/NoSQL).",
        category: "Database",
        level: "Intermediario",
        iconKey: "database",
        enabled: true,
        order: 5,
    },
    {
        id: 6,
        name: "Git & Deploy",
        description: "Versionamento, PRs e deploy continuo.",
        category: "Outros",
        level: "Intermediario",
        iconKey: "git",
        enabled: true,
        order: 6,
    },
];

function mapSkill(row: SkillRow): SkillContent {
    return {
        id: row.id,
        name: row.name,
        description: row.description,
        category: row.category,
        level: row.level ?? "",
        iconKey: normalizeSkillIconKey(row.iconKey),
        enabled: Boolean(row.enabled),
        order: row.displayOrder,
    };
}

function renumberSkills(skills: SkillContent[]) {
    return skills.map((skill, index) => ({
        ...skill,
        order: index + 1,
    }));
}

function getSkillNameKey(skill: SkillContent) {
    return skill.name.trim().toLowerCase();
}

function normalizeSkillList(skills: SkillContent[]) {
    return skills.map((skill, index) => ({
        id: typeof skill.id === "number" ? skill.id : null,
        name: skill.name ?? "",
        description: skill.description ?? "",
        category: skill.category ?? "Outros",
        level: skill.level ?? "",
        iconKey: normalizeSkillIconKey(skill.iconKey),
        enabled: Boolean(skill.enabled),
        order: Number(skill.order || index + 1),
    }));
}

function getSkillQualityScore(skill: SkillContent) {
    let score = 0;

    if (skill.description.trim()) score += 2;
    if (skill.level.trim()) score += 1;
    if (skill.enabled) score += 1;
    if (skill.iconKey !== "gear") score += 4;

    return score;
}

function dedupeSkills(skills: SkillContent[]) {
    const normalized = normalizeSkillList(skills).sort((a, b) => a.order - b.order);
    const uniqueSkills = new Map<string, SkillContent>();

    for (const skill of normalized) {
        const key = getSkillNameKey(skill);
        const existing = uniqueSkills.get(key);

        if (!existing) {
            uniqueSkills.set(key, skill);
            continue;
        }

        const existingScore = getSkillQualityScore(existing);
        const incomingScore = getSkillQualityScore(skill);

        if (incomingScore > existingScore) {
            uniqueSkills.set(key, {
                ...skill,
                order: Math.min(existing.order, skill.order),
            });
        }
    }

    return renumberSkills(
        [...uniqueSkills.values()].sort((a, b) => a.order - b.order)
    );
}

async function replaceSkillsInDb(input: SkillContent[]) {
    const normalized = dedupeSkills(input);

    await prisma.$transaction(async (tx) => {
        await tx.$executeRawUnsafe(`DELETE FROM skill`);

        for (const [index, skill] of normalized.entries()) {
            await tx.$executeRaw`
                INSERT INTO skill (name, description, category, level, iconKey, enabled, displayOrder)
                VALUES (
                    ${skill.name},
                    ${skill.description},
                    ${skill.category},
                    ${skill.level || null},
                    ${skill.iconKey},
                    ${skill.enabled},
                    ${skill.order || index + 1}
                )
            `;
        }
    });
}

export async function ensureSkillsTable() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS skill (
            id INTEGER NOT NULL AUTO_INCREMENT,
            name VARCHAR(191) NOT NULL,
            description LONGTEXT NOT NULL,
            category VARCHAR(191) NOT NULL,
            level VARCHAR(191) NULL,
            iconKey VARCHAR(191) NULL,
            enabled BOOLEAN NOT NULL DEFAULT true,
            displayOrder INTEGER NOT NULL DEFAULT 1,
            createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            updatedAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);

    await prisma.$executeRawUnsafe(`
        ALTER TABLE skill
        ADD COLUMN IF NOT EXISTS iconKey VARCHAR(191) NULL AFTER level;
    `);
}

async function readSkillsFromDb() {
    await ensureSkillsTable();

    const rows = await prisma.$queryRaw<SkillRow[]>`
        SELECT id, name, description, category, level, iconKey, enabled, displayOrder
        FROM skill
        ORDER BY displayOrder ASC, id ASC
    `;

    return rows.map(mapSkill);
}

export async function getSkillsContent(options?: { includeFallback?: boolean }) {
    const includeFallback = options?.includeFallback ?? true;
    const skills = await readSkillsFromDb();
    const dedupedSkills = dedupeSkills(skills);

    if (skills.length !== dedupedSkills.length) {
        await replaceSkillsInDb(dedupedSkills);
    }

    if (dedupedSkills.length === 0 && includeFallback) {
        return defaultSkills;
    }

    return dedupedSkills;
}

export async function getEnabledSkills() {
    const skills = await getSkillsContent({ includeFallback: true });
    return skills.filter((skill) => skill.enabled);
}

export async function saveSkills(input: SkillContent[]) {
    await ensureSkillsTable();

    const dedupedSkills = dedupeSkills(input);
    await replaceSkillsInDb(dedupedSkills);

    return getSkillsContent({ includeFallback: false });
}
