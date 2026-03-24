"use client";

import { FormField } from "@/components/admin/FormField";

type HeroCtaCardProps = {
    title: string;
    text: string;
    href: string;
    onTextChange: (value: string) => void;
    onHrefChange: (value: string) => void;
};

export function HeroCtaCard({
    title,
    text,
    href,
    onTextChange,
    onHrefChange,
}: HeroCtaCardProps) {
    return (
        <div className="admin-subpanel admin-panel-frame grid gap-3 rounded-md p-3">
            <div className="text-sm font-semibold text-white lg:text-xs 2xl:text-sm">{title}</div>
            <FormField label="Text">
                <input
                    className="admin-input"
                    value={text}
                    onChange={(e) => onTextChange(e.target.value)}
                />
            </FormField>
            <FormField label="Link (href)">
                <input
                    className="admin-input"
                    value={href}
                    onChange={(e) => onHrefChange(e.target.value)}
                />
            </FormField>
        </div>
    );
}
