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
                    "admin-toggle-track relative h-6 w-11 overflow-hidden rounded-full border transition-colors",
                    checked ? "admin-toggle-track-on" : "admin-toggle-track-off",
                ].join(" ")}
            >
                <span
                    className={[
                        "admin-toggle-thumb absolute top-1/2 block -translate-y-1/2 rounded-full shadow transition-all",
                        checked ? "left-[1.45rem]" : "left-[0.18rem]",
                    ].join(" ")}
                />
            </span>
            {label ? (
                <span className="admin-muted text-sm lg:text-[13px] lg:leading-5 2xl:text-sm">
                    {label}
                </span>
            ) : null}
        </button>
    );
}
