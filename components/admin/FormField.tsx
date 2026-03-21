import { ReactNode } from "react";

export function FormField({
    label,
    children,
    hint,
    className,
    labelClassName,
    hintClassName,
}: {
    label: string;
    children: ReactNode;
    hint?: string;
    className?: string;
    labelClassName?: string;
    hintClassName?: string;
}) {
    return (
        <label className={["block", className].filter(Boolean).join(" ")}>
            <div
                className={[
                    "mb-1 text-sm font-medium text-slate-100 lg:text-[13px] lg:leading-5 2xl:text-sm",
                    labelClassName,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                {label}
            </div>
            {children}
            {hint ? (
                <div
                    className={[
                        "admin-muted mt-1 text-xs lg:text-[11px] lg:leading-4 2xl:text-xs",
                        hintClassName,
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    {hint}
                </div>
            ) : null}
        </label>
    );
}
