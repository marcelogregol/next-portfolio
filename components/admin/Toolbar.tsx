"use client";

export function Toolbar({
    onPublish,
    saving,
}: {
    onPublish: () => void;
    saving: boolean;
}) {
    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        window.location.href = "/login";
    }

    return (
        <div className="flex items-center gap-2">
            <button
                className="admin-ghost-btn rounded-md px-3 py-2 text-sm lg:py-[0.45rem] lg:text-xs 2xl:text-sm"
                onClick={handleLogout}
            >
                Sign out
            </button>
            <button
                className="admin-primary-btn rounded-md px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-60 lg:py-[0.45rem] lg:text-xs 2xl:text-sm"
                onClick={onPublish}
                disabled={saving}
            >
                {saving ? "Publishing..." : "Publish"}
            </button>
        </div>
    );
}
