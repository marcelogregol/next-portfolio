import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, getAdminSessionToken } from "@/lib/admin-auth-shared";

export function middleware(req: NextRequest) {
    if (!req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.next();
    }

    const session = req.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    if (session === getAdminSessionToken()) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ["/admin/:path*"],
};
