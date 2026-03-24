import { PrismaClient } from "../generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { getDatabaseUrl } from "./database-url";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function createPrismaClient() {
    return new PrismaClient({
        adapter: new PrismaMariaDb(getDatabaseUrl(), {
            onConnectionError(error) {
                console.error("Prisma MariaDB connection error:", error);
            },
        }),
    });
}

export function getPrismaClient() {
    if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = createPrismaClient();
    }

    return globalForPrisma.prisma;
}

export const prisma = new Proxy({} as PrismaClient, {
    get(_target, prop) {
        const client = getPrismaClient() as unknown as Record<PropertyKey, unknown>;
        const value = client[prop];

        return typeof value === "function" ? value.bind(client) : value;
    },
}) as PrismaClient;
