export type ProjectCodeLink = {
    label: string;
    url: string;
};

export function parseProjectCodeLinks(value: string | null | undefined): ProjectCodeLink[] {
    if (!value) return [];

    try {
        const parsed = JSON.parse(value);

        if (Array.isArray(parsed)) {
            return parsed
                .map((item) => {
                    const entry = item as Partial<ProjectCodeLink> | null | undefined;

                    return {
                        label: typeof entry?.label === "string" ? entry.label.trim() : "",
                        url: typeof entry?.url === "string" ? entry.url.trim() : "",
                    };
                })
                .filter((item) => item.label && item.url);
        }
    } catch {
        return value.trim() ? [{ label: "Code", url: value.trim() }] : [];
    }

    return value.trim() ? [{ label: "Code", url: value.trim() }] : [];
}

export function serializeProjectCodeLinks(codeLinks: ProjectCodeLink[]) {
    const normalized = codeLinks
        .map((link) => ({
            label: link.label.trim(),
            url: link.url.trim(),
        }))
        .filter((link) => link.label && link.url);

    return normalized.length > 0 ? JSON.stringify(normalized) : null;
}
