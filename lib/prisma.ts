import { PrismaClient } from "../generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { getDatabaseUrl } from "./database-url";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

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
