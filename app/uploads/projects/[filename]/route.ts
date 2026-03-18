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

function getUploadPath(fileName: string) {
    return path.join(process.cwd(), "public", "uploads", "projects", fileName);
}

function isSafeFileName(fileName: string) {
    return /^[a-zA-Z0-9._-]+$/.test(fileName);
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

        const filePath = getUploadPath(filename);

        await access(filePath);

        const fileBuffer = await readFile(filePath);
        const extension = path.extname(filename).toLowerCase();

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": contentTypes[extension] ?? "application/octet-stream",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch {
        return new NextResponse("Not Found", { status: 404 });
    }
}
