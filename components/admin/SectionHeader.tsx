export function SectionHeader({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="admin-section-header mb-6">
            <h1 className="admin-section-title text-2xl font-semibold">{title}</h1>
            {description ? (
                <p className="admin-section-description admin-muted mt-1 text-sm">{description}</p>
            ) : null}
        </div>
    );
}
