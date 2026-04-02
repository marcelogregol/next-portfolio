export const ADMIN_SESSION_COOKIE = "mrg_admin_session";

function normalizeHost(host?: string | null) {
    return (host || "").toLowerCase().split(":")[0];
}

export function getAdminPassword(host?: string | null) {
    const normalizedHost = normalizeHost(host);

    if (normalizedHost === "demo.mgregol.tech") {
        return "admin123";
    }

    if (normalizedHost === "mgregol.tech" || normalizedHost === "www.mgregol.tech") {
        return "Portifolio123@";
    }

    return process.env.ADMIN_PASSWORD || "admin123";
}

export function getSessionSalt() {
    return process.env.ADMIN_SESSION_SALT || "mrg-admin-session";
}

export function isValidAdminPassword(password: string, host?: string | null) {
    return password.trim() === getAdminPassword(host).trim();
}

export function getAdminSessionToken(host?: string | null) {
    return Buffer.from(`${getAdminPassword(host)}:${getSessionSalt()}`).toString("base64url");
}

export function getAdminSessionCookieConfig(host?: string | null) {
    return {
        name: ADMIN_SESSION_COOKIE,
        value: getAdminSessionToken(host),
        httpOnly: true,
        sameSite: "lax" as const,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 12,
    };
}
