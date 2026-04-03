import type {
    AboutContent,
    AdminContent,
    ContactContent,
    HeroContent,
    ProjectContent,
    SkillContent,
} from "./types";
import { parseProjectCodeLinks } from "@/lib/project-code-links";

export function mapHeroResponse(hero: unknown): HeroContent {
    const value = hero as Partial<HeroContent> | null | undefined;

    return {
        id: value?.id ?? undefined,
        greeting: value?.greeting ?? "",
        title: value?.title ?? "",
        subtitle: value?.subtitle ?? "",
        cta1Text: value?.cta1Text ?? "",
        cta1Href: value?.cta1Href ?? "",
        cta2Text: value?.cta2Text ?? "",
        cta2Href: value?.cta2Href ?? "",
    };
}

export function mapAboutResponse(about: unknown): AboutContent {
    const value = about as Partial<AboutContent> | null | undefined;

    return {
        id: value?.id ?? undefined,
        title: value?.title ?? "",
        text: value?.text ?? "",
    };
}

export function mapSkillsResponse(skills: unknown): SkillContent[] {
    if (!Array.isArray(skills)) {
        return [];
    }

    return skills.map((skill, index) => {
        const value = skill as Partial<SkillContent> | null | undefined;

        return {
            id: typeof value?.id === "number" ? value.id : undefined,
            name: value?.name ?? "",
            description: value?.description ?? "",
            category:
                value?.category === "Front-end" ||
                value?.category === "Back-end" ||
                value?.category === "Database" ||
                value?.category === "Outros"
                    ? value.category
                    : "Outros",
            level:
                value?.level === "Iniciante" ||
                value?.level === "Intermediario" ||
                value?.level === "Avancado" ||
                value?.level === ""
                    ? value.level
                    : "",
            iconKey: typeof value?.iconKey === "string" ? value.iconKey : "gear",
            enabled: Boolean(value?.enabled),
            order: Number(value?.order ?? index + 1),
        };
    });
}

export function mapProjectsResponse(projects: unknown): ProjectContent[] {
    if (!Array.isArray(projects)) {
        return [];
    }

    return projects.map((project, index) => {
        const value = project as Partial<ProjectContent> | null | undefined;

        return {
            id: typeof value?.id === "number" ? value.id : undefined,
            title: value?.title ?? "",
            shortDesc: value?.shortDesc ?? "",
            longDesc: value?.longDesc ?? "",
            tags: Array.isArray(value?.tags) ? value.tags : [],
            imageUrl: value?.imageUrl ?? "/images/demo.jpg",
            demoUrl: value?.demoUrl ?? "",
            codeLinks: Array.isArray(value?.codeLinks)
                ? value.codeLinks.filter(
                      (link): link is { label: string; url: string } =>
                          typeof link?.label === "string" && typeof link?.url === "string"
                  )
                : parseProjectCodeLinks((value as { codeUrl?: string } | null | undefined)?.codeUrl),
            featured: Boolean(value?.featured),
            enabled: Boolean(value?.enabled),
            order: Number(value?.order ?? index + 1),
        };
    });
}

export function mapContactResponse(contact: unknown): ContactContent {
    const value = contact as Partial<ContactContent> | null | undefined;

    return {
        id: typeof value?.id === "number" ? value.id : undefined,
        email: value?.email ?? "",
        whatsapp: value?.whatsapp ?? "",
        linkedin: value?.linkedin ?? "",
        github: value?.github ?? "",
        ctaTitle: value?.ctaTitle ?? "",
        ctaSubtitle: value?.ctaSubtitle ?? "",
        ctaButtonText: value?.ctaButtonText ?? "",
        ctaButtonHref: value?.ctaButtonHref ?? "",
    };
}

export function buildAdminContent(data: {
    hero: unknown;
    about: unknown;
    skills: unknown;
    projects: unknown;
    contact: unknown;
    publishState?: AdminContent["publishState"];
}): AdminContent {
    return {
        publishState: data.publishState ?? "draft",
        hero: mapHeroResponse(data.hero),
        about: mapAboutResponse(data.about),
        skills: mapSkillsResponse(data.skills),
        projects: mapProjectsResponse(data.projects),
        contact: mapContactResponse(data.contact),
    };
}
