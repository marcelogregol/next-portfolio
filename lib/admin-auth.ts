import { cookies, headers } from "next/headers";
import {
    ADMIN_SESSION_COOKIE,
    getAdminSessionCookieConfig,
    getAdminSessionToken,
    getAdminPassword,
    getSessionSalt,
    isValidAdminPassword,
    resolveRequestHost,
} from "@/lib/admin-auth-shared";

export {
    ADMIN_SESSION_COOKIE,
    getAdminSessionCookieConfig,
    getAdminSessionToken,
    getAdminPassword,
    getSessionSalt,
    isValidAdminPassword,
};

export async function hasAdminSession() {
    const cookieStore = await cookies();
    const headerStore = await headers();
    const host = resolveRequestHost(
        headerStore.get("x-forwarded-host"),
        headerStore.get("host")
    );
    return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === getAdminSessionToken(host);
}
