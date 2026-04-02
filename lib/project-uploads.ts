import path from "node:path";

function normalizeUploadsDir(value: string) {
    const trimmed = value.trim();
    return trimmed ? path.resolve(trimmed) : path.join(process.cwd(), "public", "uploads", "projects");
}

export function getProjectUploadsDir() {
    return normalizeUploadsDir(process.env.PROJECT_UPLOADS_DIR || "");
}

export function getProjectUploadPath(fileName: string) {
    return path.join(getProjectUploadsDir(), fileName);
}

export function getProjectUploadsFallbackImagePath() {
    return path.join(process.cwd(), "public", "images", "demo.jpg");
}
