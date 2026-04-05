"use client";

import { ReactNode } from "react";

export default function SectionTitle({
    title,
    subtitle,
    id,
}: {
    title: string;
    subtitle?: ReactNode;
    id: string;
}) {
    return (
        <>
            <h2 id={id} className="scroll-mt-32 text-3xl font-extrabold tracking-tight">{title}</h2>
            {subtitle ? <div>{subtitle}</div> : null}
        </>
    );
}
