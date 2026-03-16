import { PrismaClient } from "../generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function getDatabaseUrl() {
    return process.env.DATABASE_URL ?? "mysql://root:@localhost:3306/portifolio";
}

function createAdapter() {
    try {
        const connection = new URL(getDatabaseUrl());

        return new PrismaMariaDb({
            host: connection.hostname,
            port: Number(connection.port || "3306"),
            user: decodeURIComponent(connection.username),
            password: decodeURIComponent(connection.password),
            database: connection.pathname.replace(/^\//, ""),
        });
    } catch (error) {
        console.error("Invalid DATABASE_URL. Falling back to local default.", error);

        return new PrismaMariaDb({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "",
            database: "portifolio",
        });
    }
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter: createAdapter(),
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
