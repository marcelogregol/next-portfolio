"use client";

export default function SectionTitle({
    title,
    subtitle,
    id,
}: {
    title: string;
    subtitle?: string;
    id: string;
}) {
    return (
        <div id={id} className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
            {subtitle ? <p className="text-sub mt-3 max-w-3xl">{subtitle}</p> : null}
        </div>
    );
}
