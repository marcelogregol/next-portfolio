"use client";

import type { ReactNode } from "react";
import { SectionHeader } from "@/components/admin/SectionHeader";

type AdminPageSectionProps = {
    title: string;
    description: string;
    actions?: ReactNode;
    children: ReactNode;
    spacingClassName?: string;
};

export function AdminPageSection({
    title,
    description,
    actions,
    children,
    spacingClassName = "space-y-6",
}: AdminPageSectionProps) {
    return (
        <div className={spacingClassName}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeader title={title} description={description} />
                {actions}
            </div>
            {children}
        </div>
    );
}
