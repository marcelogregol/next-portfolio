"use client";

export function Toggle({
    checked,
    onChange,
    label,
}: {
    checked: boolean;
    onChange: (v: boolean) => void;
    label?: string;
}) {
    return (
        <button
            type="button"
            className="admin-toggle inline-flex items-center gap-2"
            onClick={() => onChange(!checked)}
        >
            <span
                className={[
                    "admin-toggle-track h-6 w-10 rounded-full border transition",
                    checked ? "admin-primary-btn" : "",
                ].join(" ")}
            >
                <span
                    className={[
                        "admin-toggle-thumb block h-5 w-5 translate-y-[1px] rounded-full shadow transition",
                        checked ? "translate-x-4" : "translate-x-1",
                    ].join(" ")}
                />
            </span>
            {label ? <span className="admin-toggle-label admin-muted text-sm">{label}</span> : null}
        </button>
    );
}
