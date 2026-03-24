"use client";

import type { Notice } from "@/lib/admin/types";

export function NoticeBanner({ notice }: { notice: Notice | null }) {
    if (!notice) {
        return null;
    }

    return (
        <p
            className={`admin-notice mb-4 rounded-md border px-3 py-2 text-sm ${notice.type === "success"
                ? "admin-notice-success"
                : "admin-notice-error"
                }`}
        >
            {notice.text}
        </p>
    );
}
