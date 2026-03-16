import { PrismaClient } from "../generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const databaseUrl =
    process.env.DATABASE_URL ?? "mysql://root:@localhost:3306/portifolio";
const connection = new URL(databaseUrl);

const adapter = new PrismaMariaDb({
    host: connection.hostname,
    port: Number(connection.port || "3306"),
    user: decodeURIComponent(connection.username),
    password: decodeURIComponent(connection.password),
    database: connection.pathname.replace(/^\//, ""),
});

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
