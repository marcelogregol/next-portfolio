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
                className="admin-toolbar-btn rounded-md border px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                onClick={handleLogout}
            >
                Sign out
            </button>
            <button
                className="admin-toolbar-btn rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-black"
                onClick={onPublish}
            >
                Publish
            </button>
        </div>
    );
}
