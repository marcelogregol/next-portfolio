import type { SkillIconKey } from "@/lib/skill-icons";
import type { ProjectCodeLink } from "@/lib/project-code-links";

export type HeroContent = {
    id?: string;
    greeting: string;
    title: string;
    subtitle: string;
    cta1Text: string;
    cta1Href: string;
    cta2Text: string;
    cta2Href: string;
};

export type AboutContent = {
    id?: string;
    title: string;
    text: string;
};

export type SkillContent = {
    id?: number | null;
    name: string;
    description: string;
    category: "Front-end" | "Back-end" | "Database" | "Outros";
    level: "Iniciante" | "Intermediario" | "Avancado" | "";
    iconKey: SkillIconKey;
    enabled: boolean;
    order: number;
};

export type ProjectContent = {
    id?: number | null;
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: string[];
    imageUrl: string;
    demoUrl: string;
    codeLinks: ProjectCodeLink[];
    featured: boolean;
    enabled: boolean;
    order: number;
};

export type ContactContent = {
    id?: number | null;
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButtonText: string;
    ctaButtonHref: string;
};

export type AdminContent = {
    publishState: "draft" | "published";
    hero: HeroContent;
    about: AboutContent;
    skills: SkillContent[];
    projects: ProjectContent[];
    contact: ContactContent;
};

export type Notice = {
    type: "success" | "error";
    text: string;
};

export const emptyContent: AdminContent = {
    publishState: "draft",
    hero: {
        id: undefined,
        greeting: "",
        title: "",
        subtitle: "",
        cta1Text: "",
        cta1Href: "",
        cta2Text: "",
        cta2Href: "",
    },
    about: {
        id: undefined,
        title: "",
        text: "",
    },
    skills: [],
    projects: [],
    contact: {
        id: undefined,
        email: "",
        whatsapp: "",
        linkedin: "",
        github: "",
        ctaTitle: "",
        ctaSubtitle: "",
        ctaButtonText: "",
        ctaButtonHref: "",
    },
};
