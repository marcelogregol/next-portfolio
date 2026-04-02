import { hasAdminSession } from "@/lib/admin-auth";
import { getProjectUploadsDir } from "@/lib/project-uploads";
import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const allowedTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "image/jpg",
    "image/x-png",
]);

const allowedExtensions = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".jfif",
]);

function sanitizeFileName(value: string) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9.-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

function isAllowedImage(file: File) {
    const extension = path.extname(file.name || "").toLowerCase();
    return allowedTypes.has(file.type) || allowedExtensions.has(extension);
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

        if (!isAllowedImage(file)) {
            return NextResponse.json(
                { error: "Formato invalido. Use JPG, JPEG, PNG, WEBP, GIF ou JFIF." },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uploadsDir = getProjectUploadsDir();
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
