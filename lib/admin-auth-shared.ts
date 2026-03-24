export const ADMIN_SESSION_COOKIE = "mrg_admin_session";

export function getAdminPassword() {
    return process.env.ADMIN_PASSWORD || "admin123";
}

export function getSessionSalt() {
    return process.env.ADMIN_SESSION_SALT || "mrg-admin-session";
}

export function isValidAdminPassword(password: string) {
    return password.trim() === getAdminPassword().trim();
}

export function getAdminSessionToken() {
    return Buffer.from(`${getAdminPassword()}:${getSessionSalt()}`).toString("base64url");
}

export function getAdminSessionCookieConfig() {
    return {
        name: ADMIN_SESSION_COOKIE,
        value: getAdminSessionToken(),
        httpOnly: true,
        sameSite: "lax" as const,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 12,
    };
}
