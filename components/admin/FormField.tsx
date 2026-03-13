import { ReactNode } from "react";

export function FormField({
    label,
    children,
    hint,
}: {
    label: string;
    children: ReactNode;
    hint?: string;
}) {
    return (
        <label className="block">
            <div className="mb-1 text-sm font-medium">{label}</div>
            {children}
            {hint ? <div className="mt-1 text-xs text-slate-500">{hint}</div> : null}
        </label>
    );
}