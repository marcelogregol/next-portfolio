import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, getAdminSessionToken, resolveRequestHost } from "@/lib/admin-auth-shared";

export function middleware(req: NextRequest) {
    if (!req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.next();
    }

    const resolvedHost = resolveRequestHost(
        req.headers.get("x-forwarded-host"),
        req.headers.get("host") || req.nextUrl.hostname
    );
    const session = req.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    if (session === getAdminSessionToken(resolvedHost)) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ["/admin/:path*"],
};
