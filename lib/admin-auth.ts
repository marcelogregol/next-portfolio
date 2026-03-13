import { cookies } from "next/headers";
import {
    ADMIN_SESSION_COOKIE,
    getAdminSessionCookieConfig,
    getAdminSessionToken,
    getAdminPassword,
    getSessionSalt,
    isValidAdminPassword,
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
    return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === getAdminSessionToken();
}
