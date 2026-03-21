"use client";

export function Toolbar({
    onPublish,
}: {
    onPublish: () => void;
}) {
    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        window.location.href = "/login";
    }

    return (
        <div className="flex items-center gap-2">
            <button
                className="admin-toolbar-btn admin-ghost-btn rounded-md px-3 py-2 text-sm text-slate-100"
                onClick={handleLogout}
            >
                Sign out
            </button>
            <button
                className="admin-toolbar-btn admin-toolbar-btn-primary admin-primary-btn rounded-md px-3 py-2 text-sm text-white"
                onClick={onPublish}
            >
                Publish
            </button>
        </div>
    );
}
