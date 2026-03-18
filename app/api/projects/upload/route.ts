import { hasAdminSession } from "@/lib/admin-auth";
import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const allowedTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
]);

function sanitizeFileName(value: string) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9.-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

export async function POST(req: NextRequest) {
    if (!(await hasAdminSession())) {
        return NextResponse.json({ error: "Nao autorizado" }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const file = formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                { error: "Nenhum arquivo enviado" },
                { status: 400 }
            );
        }

        if (!allowedTypes.has(file.type)) {
            return NextResponse.json(
                { error: "Formato invalido. Use JPG, PNG, WEBP ou GIF." },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uploadsDir = path.join(process.cwd(), "public", "uploads", "projects");
        const originalName = sanitizeFileName(file.name || "project-image");
        const extension = path.extname(originalName) || ".png";
        const baseName = path.basename(originalName, extension) || "project-image";
        const fileName = `${Date.now()}-${baseName}${extension}`;
        const filePath = path.join(uploadsDir, fileName);

        await mkdir(uploadsDir, { recursive: true });
        await writeFile(filePath, buffer);

        return NextResponse.json({
            url: `/uploads/projects/${fileName}`,
            fileName,
        });
    } catch (error) {
        console.error("POST /api/projects/upload error:", error);

        return NextResponse.json(
            { error: "Erro ao enviar imagem do projeto" },
            { status: 500 }
        );
    }
}
