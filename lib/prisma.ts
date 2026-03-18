import { PrismaClient } from "../generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function getDatabaseUrl() {
    return process.env.DATABASE_URL ?? "mysql://root:@localhost:3306/portifolio";
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter: new PrismaMariaDb(getDatabaseUrl(), {
            onConnectionError(error) {
                console.error("Prisma MariaDB connection error:", error);
            },
        }),
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
