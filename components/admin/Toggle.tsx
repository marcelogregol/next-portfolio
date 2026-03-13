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
            className="inline-flex items-center gap-2"
            onClick={() => onChange(!checked)}
        >
            <span
                className={[
                    "h-6 w-10 rounded-full border transition",
                    checked ? "bg-slate-900" : "bg-slate-200",
                ].join(" ")}
            >
                <span
                    className={[
                        "block h-5 w-5 translate-y-[1px] rounded-full bg-white shadow transition",
                        checked ? "translate-x-4" : "translate-x-1",
                    ].join(" ")}
                />
            </span>
            {label ? <span className="text-sm text-slate-700">{label}</span> : null}
        </button>
    );
}