import { getProjectUploadPath, getProjectUploadsFallbackImagePath } from "@/lib/project-uploads";
import { NextRequest, NextResponse } from "next/server";
import { access, readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const contentTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
};

function isSafeFileName(fileName: string) {
    return /^[a-zA-Z0-9._-]+$/.test(fileName);
}

function getContentType(fileName: string) {
    const extension = path.extname(fileName).toLowerCase();
    return contentTypes[extension] ?? "application/octet-stream";
}

export async function GET(
    _req: NextRequest,
    context: { params: Promise<{ filename: string }> }
) {
    try {
        const { filename } = await context.params;

        if (!filename || !isSafeFileName(filename)) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const filePath = getProjectUploadPath(filename);

        await access(filePath);

        const fileBuffer = await readFile(filePath);

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": getContentType(filename),
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch {
        try {
            const fallbackPath = getProjectUploadsFallbackImagePath();
            const fallbackBuffer = await readFile(fallbackPath);

            return new NextResponse(fallbackBuffer, {
                status: 200,
                headers: {
                    "Content-Type": "image/jpeg",
                    "Cache-Control": "no-store",
                },
            });
        } catch {
            return new NextResponse("Not Found", { status: 404 });
        }
    }
}
