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
            <div className="admin-field-label mb-1 text-sm font-medium">{label}</div>
            {children}
            {hint ? <div className="admin-field-hint admin-muted mt-1 text-xs">{hint}</div> : null}
        </label>
    );
}
