import { PrismaClient } from "../generated/prisma";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function getDatabaseUrl() {
    return process.env.DATABASE_URL ?? "mysql://root:@localhost:3306/portifolio";
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        datasourceUrl: getDatabaseUrl(),
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
