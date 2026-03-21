export function SectionHeader({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-6 lg:mb-4 2xl:mb-6">
            <h1 className="text-2xl font-semibold text-white lg:text-xl lg:leading-6 2xl:text-2xl">
                {title}
            </h1>
            {description ? (
                <p className="admin-muted mt-1 text-sm lg:text-xs lg:leading-[1.1rem] 2xl:text-sm">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
