import { getAdminSessionCookieConfig, isValidAdminPassword } from "@/lib/admin-auth-shared";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const password = typeof body.password === "string" ? body.password : "";
        const host = req.nextUrl.hostname;

        if (!isValidAdminPassword(password, host)) {
            return NextResponse.json(
                { error: "Senha invalida" },
                { status: 401 }
            );
        }

        const response = NextResponse.json({ ok: true });
        response.cookies.set(getAdminSessionCookieConfig(host));
        return response;
    } catch (error) {
        console.error("POST /api/admin/login error:", error);

        return NextResponse.json(
            { error: "Erro ao fazer login" },
            { status: 500 }
        );
    }
}
