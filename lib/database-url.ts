export class DatabaseConfigError extends Error {
    code = "DATABASE_URL_MISSING";

    constructor() {
        super(
            "Database URL is not configured. Set DATABASE_URL_LOCAL for local runs, DATABASE_URL_ONLINE for online runs, or DATABASE_URL as a fallback."
        );
        this.name = "DatabaseConfigError";
    }
}

function isOnlineEnvironment() {
    return process.env.NODE_ENV === "production";
}

export function getDatabaseUrl() {
    const databaseUrl = isOnlineEnvironment()
        ? process.env.DATABASE_URL_ONLINE?.trim() || process.env.DATABASE_URL?.trim()
        : process.env.DATABASE_URL_LOCAL?.trim() || process.env.DATABASE_URL?.trim();

    if (!databaseUrl) {
        throw new DatabaseConfigError();
    }

    return databaseUrl;
}
