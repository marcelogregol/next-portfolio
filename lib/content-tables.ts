import { prisma } from "./prisma";

let ensureContentTablesPromise: Promise<void> | null = null;

async function createAboutTables() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`about\` (
            \`id\` INTEGER NOT NULL AUTO_INCREMENT,
            \`title\` VARCHAR(191) NOT NULL,
            \`text\` LONGTEXT NOT NULL,
            \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (\`id\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);

    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`abouthighlight\` (
            \`id\` INTEGER NOT NULL AUTO_INCREMENT,
            \`aboutId\` INTEGER NOT NULL,
            \`title\` VARCHAR(191) NOT NULL,
            PRIMARY KEY (\`id\`),
            INDEX \`AboutHighlight_aboutId_fkey\` (\`aboutId\`),
            CONSTRAINT \`AboutHighlight_aboutId_fkey\`
                FOREIGN KEY (\`aboutId\`) REFERENCES \`about\`(\`id\`)
                ON DELETE RESTRICT ON UPDATE CASCADE
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);
}

async function createHeroTable() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`hero\` (
            \`id\` INTEGER NOT NULL AUTO_INCREMENT,
            \`greeting\` VARCHAR(191) NOT NULL,
            \`title\` VARCHAR(191) NOT NULL,
            \`subtitle\` LONGTEXT NOT NULL,
            \`cta1Text\` VARCHAR(191) NOT NULL,
            \`cta1Href\` VARCHAR(191) NOT NULL,
            \`cta2Text\` VARCHAR(191) NOT NULL,
            \`cta2Href\` VARCHAR(191) NOT NULL,
            \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (\`id\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);
}

async function createSkillTable() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`skill\` (
            \`id\` INTEGER NOT NULL AUTO_INCREMENT,
            \`name\` VARCHAR(191) NOT NULL,
            \`description\` LONGTEXT NOT NULL,
            \`category\` VARCHAR(191) NOT NULL,
            \`level\` VARCHAR(191) NULL,
            \`iconKey\` VARCHAR(191) NULL,
            \`enabled\` BOOLEAN NOT NULL DEFAULT true,
            \`displayOrder\` INTEGER NOT NULL DEFAULT 1,
            \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (\`id\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);
}

async function createProjectTable() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`project\` (
            \`id\` INTEGER NOT NULL AUTO_INCREMENT,
            \`title\` VARCHAR(191) NOT NULL,
            \`shortDesc\` VARCHAR(191) NOT NULL,
            \`longDesc\` LONGTEXT NOT NULL,
            \`tagsJson\` LONGTEXT NULL,
            \`imageUrl\` VARCHAR(191) NULL,
            \`demoUrl\` VARCHAR(191) NULL,
            \`codeUrl\` VARCHAR(191) NULL,
            \`featured\` BOOLEAN NOT NULL DEFAULT false,
            \`enabled\` BOOLEAN NOT NULL DEFAULT true,
            \`displayOrder\` INTEGER NOT NULL DEFAULT 1,
            \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (\`id\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);
}

async function createContactTable() {
    await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS \`contact\` (
            \`id\` INTEGER NOT NULL AUTO_INCREMENT,
            \`email\` VARCHAR(191) NOT NULL,
            \`whatsapp\` VARCHAR(191) NOT NULL,
            \`linkedin\` VARCHAR(191) NOT NULL,
            \`github\` VARCHAR(191) NOT NULL,
            \`ctaTitle\` VARCHAR(191) NOT NULL,
            \`ctaSubtitle\` LONGTEXT NOT NULL,
            \`ctaButtonText\` VARCHAR(191) NOT NULL,
            \`ctaButtonHref\` VARCHAR(191) NOT NULL,
            \`createdAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
            \`updatedAt\` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
            PRIMARY KEY (\`id\`)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    `);
}

export async function ensureContentTables() {
    if (!ensureContentTablesPromise) {
        ensureContentTablesPromise = (async () => {
            await createAboutTables();
            await createHeroTable();
            await createSkillTable();
            await createProjectTable();
            await createContactTable();
        })().catch((error) => {
            ensureContentTablesPromise = null;
            throw error;
        });
    }

    await ensureContentTablesPromise;
}

export async function ensureAboutTables() {
    await ensureContentTables();
}

export async function ensureHeroTable() {
    await ensureContentTables();
}

export async function ensureSkillsTable() {
    await ensureContentTables();
}

export async function ensureProjectsTable() {
    await ensureContentTables();
}

export async function ensureContactTable() {
    await ensureContentTables();
}
