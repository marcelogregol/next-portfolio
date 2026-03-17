"use client";

import { ReactNode, useEffect, useState, createContext, useContext } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import type { SkillIconKey } from "@/lib/skill-icons";

type HeroContent = {
    id?: string;
    greeting: string;
    title: string;
    subtitle: string;
    cta1Text: string;
    cta1Href: string;
    cta2Text: string;
    cta2Href: string;
};

type AboutContent = {
    id?: string;
    title: string;
    text: string;
};

type SkillContent = {
    id?: number | null;
    name: string;
    description: string;
    category: "Front-end" | "Back-end" | "Database" | "Outros";
    level: "Iniciante" | "Intermediario" | "Avancado" | "";
    iconKey: SkillIconKey;
    enabled: boolean;
    order: number;
};

type ProjectContent = {
    id?: number | null;
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: string[];
    imageUrl: string;
    demoUrl: string;
    codeUrl: string;
    featured: boolean;
    enabled: boolean;
    order: number;
};

type ContactContent = {
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

type AdminContent = {
    publishState: "draft" | "published";
    hero: HeroContent;
    about: AboutContent;
    skills: SkillContent[];
    projects: ProjectContent[];
    contact: ContactContent;
};

type Notice = {
    type: "success" | "error";
    text: string;
};

type Ctx = {
    content: AdminContent;
    patch: (fn: (c: AdminContent) => AdminContent) => void;
    saving: boolean;
    notify: (notice: Notice) => void;
};

const ContentContext = createContext<Ctx | null>(null);

const emptyContent: AdminContent = {
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

export function AdminShell({ children }: { children: ReactNode }) {
    const [content, setContent] = useState<AdminContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [notice, setNotice] = useState<Notice | null>(null);

    useEffect(() => {
        async function loadInitialData() {
            try {
                const [heroRes, aboutRes, skillsRes, projectsRes, contactRes] = await Promise.all([
                    fetch("/api/hero"),
                    fetch("/api/about"),
                    fetch("/api/skills"),
                    fetch("/api/projects"),
                    fetch("/api/contact"),
                ]);

                const hero = heroRes.ok ? await heroRes.json() : null;
                const about = aboutRes.ok ? await aboutRes.json() : null;
                const skills = skillsRes.ok ? await skillsRes.json() : [];
                const projects = projectsRes.ok ? await projectsRes.json() : [];
                const contact = contactRes.ok ? await contactRes.json() : null;

                setContent({
                    publishState: "draft",
                    hero: {
                        id: hero?.id ?? undefined,
                        greeting: hero?.greeting ?? "",
                        title: hero?.title ?? "",
                        subtitle: hero?.subtitle ?? "",
                        cta1Text: hero?.cta1Text ?? "",
                        cta1Href: hero?.cta1Href ?? "",
                        cta2Text: hero?.cta2Text ?? "",
                        cta2Href: hero?.cta2Href ?? "",
                    },
                    about: {
                        id: about?.id ?? undefined,
                        title: about?.title ?? "",
                        text: about?.text ?? "",
                    },
                    skills: Array.isArray(skills)
                        ? skills.map((skill, index) => ({
                            id: typeof skill?.id === "number" ? skill.id : undefined,
                            name: skill?.name ?? "",
                            description: skill?.description ?? "",
                            category: skill?.category ?? "Outros",
                            level: skill?.level ?? "",
                            iconKey: skill?.iconKey ?? "gear",
                            enabled: Boolean(skill?.enabled),
                            order: Number(skill?.order ?? index + 1),
                        }))
                        : [],
                    projects: Array.isArray(projects)
                        ? projects.map((project, index) => ({
                            id: typeof project?.id === "number" ? project.id : undefined,
                            title: project?.title ?? "",
                            shortDesc: project?.shortDesc ?? "",
                            longDesc: project?.longDesc ?? "",
                            tags: Array.isArray(project?.tags) ? project.tags : [],
                            imageUrl: project?.imageUrl ?? "/images/demo.jpg",
                            demoUrl: project?.demoUrl ?? "",
                            codeUrl: project?.codeUrl ?? "",
                            featured: Boolean(project?.featured),
                            enabled: Boolean(project?.enabled),
                            order: Number(project?.order ?? index + 1),
                        }))
                        : [],
                    contact: {
                        id: typeof contact?.id === "number" ? contact.id : undefined,
                        email: contact?.email ?? "",
                        whatsapp: contact?.whatsapp ?? "",
                        linkedin: contact?.linkedin ?? "",
                        github: contact?.github ?? "",
                        ctaTitle: contact?.ctaTitle ?? "",
                        ctaSubtitle: contact?.ctaSubtitle ?? "",
                        ctaButtonText: contact?.ctaButtonText ?? "",
                        ctaButtonHref: contact?.ctaButtonHref ?? "",
                    },
                });
            } catch (error) {
                console.error(error);
                setContent(emptyContent);
            } finally {
                setLoading(false);
            }
        }

        loadInitialData();
    }, []);

    useEffect(() => {
        if (!notice) return;

        const timeoutId = window.setTimeout(() => {
            setNotice(null);
        }, 2800);

        return () => window.clearTimeout(timeoutId);
    }, [notice]);

    function notify(nextNotice: Notice) {
        setNotice(nextNotice);
    }

    function patch(fn: (c: AdminContent) => AdminContent) {
        setContent((prev) => {
            if (!prev) return prev;
            return fn(prev);
        });
    }

    async function publishAll() {
        if (!content) return;

        try {
            setSaving(true);

            const requestConfigs = [
                {
                    key: "hero",
                    run: () => fetch("/api/hero", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(content.hero),
                    }),
                },
                {
                    key: "about",
                    run: () => fetch("/api/about", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(content.about),
                    }),
                },
                {
                    key: "skills",
                    run: () => fetch("/api/skills", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(content.skills),
                    }),
                },
                {
                    key: "projects",
                    run: () => fetch("/api/projects", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(content.projects),
                    }),
                },
                {
                    key: "contact",
                    run: () => fetch("/api/contact", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(content.contact),
                    }),
                },
            ] as const;

            const responses: Response[] = [];

            for (const request of requestConfigs) {
                const response = await request.run();

                if (!response.ok) {
                    let message = `Failed to publish ${request.key}.`;

                    try {
                        const data = await response.json();
                        if (typeof data?.error === "string" && data.error.trim()) {
                            message = `${request.key}: ${data.error}`;
                        }
                    } catch {
                        // Ignore JSON parsing issues and keep the fallback message.
                    }

                    throw new Error(message);
                }

                responses.push(response);
            }

            const [heroRes, aboutRes, skillsRes, projectsRes, contactRes] = responses;

            const updatedHero = await heroRes.json();
            const updatedAbout = await aboutRes.json();
            const updatedSkills = await skillsRes.json();
            const updatedProjects = await projectsRes.json();
            const updatedContact = await contactRes.json();

            setContent({
                publishState: "published",
                hero: {
                    id: updatedHero?.id ?? undefined,
                    greeting: updatedHero?.greeting ?? "",
                    title: updatedHero?.title ?? "",
                    subtitle: updatedHero?.subtitle ?? "",
                    cta1Text: updatedHero?.cta1Text ?? "",
                    cta1Href: updatedHero?.cta1Href ?? "",
                    cta2Text: updatedHero?.cta2Text ?? "",
                    cta2Href: updatedHero?.cta2Href ?? "",
                },
                about: {
                    id: updatedAbout?.id ?? undefined,
                    title: updatedAbout?.title ?? "",
                    text: updatedAbout?.text ?? "",
                },
                skills: Array.isArray(updatedSkills)
                    ? updatedSkills.map((skill, index) => ({
                        id: typeof skill?.id === "number" ? skill.id : undefined,
                        name: skill?.name ?? "",
                        description: skill?.description ?? "",
                        category: skill?.category ?? "Outros",
                        level: skill?.level ?? "",
                        iconKey: skill?.iconKey ?? "gear",
                        enabled: Boolean(skill?.enabled),
                        order: Number(skill?.order ?? index + 1),
                    }))
                    : [],
                projects: Array.isArray(updatedProjects)
                    ? updatedProjects.map((project, index) => ({
                        id: typeof project?.id === "number" ? project.id : undefined,
                        title: project?.title ?? "",
                        shortDesc: project?.shortDesc ?? "",
                        longDesc: project?.longDesc ?? "",
                        tags: Array.isArray(project?.tags) ? project.tags : [],
                        imageUrl: project?.imageUrl ?? "/images/demo.jpg",
                        demoUrl: project?.demoUrl ?? "",
                        codeUrl: project?.codeUrl ?? "",
                        featured: Boolean(project?.featured),
                        enabled: Boolean(project?.enabled),
                        order: Number(project?.order ?? index + 1),
                    }))
                    : [],
                contact: {
                    id: typeof updatedContact?.id === "number" ? updatedContact.id : undefined,
                    email: updatedContact?.email ?? "",
                    whatsapp: updatedContact?.whatsapp ?? "",
                    linkedin: updatedContact?.linkedin ?? "",
                    github: updatedContact?.github ?? "",
                    ctaTitle: updatedContact?.ctaTitle ?? "",
                    ctaSubtitle: updatedContact?.ctaSubtitle ?? "",
                    ctaButtonText: updatedContact?.ctaButtonText ?? "",
                    ctaButtonHref: updatedContact?.ctaButtonHref ?? "",
                },
            });

            notify({ type: "success", text: "Content published successfully." });
        } catch (error) {
            console.error(error);
            notify({
                type: "error",
                text: error instanceof Error ? error.message : "Unable to publish right now.",
            });
        } finally {
            setSaving(false);
        }
    }

    if (loading || !content) return null;

    return (
        <ContentContext.Provider value={{ content, patch, saving, notify }}>
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <div className="flex">
                    <Sidebar />
                    <div className="flex-1">
                        <Topbar onPublish={publishAll} />
                        <main className="mx-auto max-w-5xl px-4 py-6">
                            {notice ? (
                                <p
                                    className={`mb-4 rounded-md border px-3 py-2 text-sm ${notice.type === "success"
                                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                        : "border-red-200 bg-red-50 text-red-700"
                                        }`}
                                >
                                    {notice.text}
                                </p>
                            ) : null}
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </ContentContext.Provider>
    );
}

export function useContent() {
    const ctx = useContext(ContentContext);
    if (!ctx) throw new Error("useContent must be used inside AdminShell");
    return ctx;
}
