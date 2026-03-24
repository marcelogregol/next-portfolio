"use client";

import { AdminPageSection } from "@/components/admin/AdminPageSection";
import { FormField } from "@/components/admin/FormField";
import { HeroCtaCard } from "@/components/admin/HeroCtaCard";
import { useContent } from "@/components/admin/AdminShell";

export default function HeroPage() {
    const { content, patch } = useContent();

    const hero = content.hero;
    return (
        <AdminPageSection
            title="Hero"
            description="Edit the opening section of your portfolio."
        >
            <div className="admin-panel admin-border grid gap-4 rounded-lg border p-4 lg:gap-3 lg:p-3 2xl:gap-4 2xl:p-4">
                <div className="grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
                    <div className="grid gap-4">
                        <FormField label="Greeting">
                            <input
                                className="admin-input"
                                value={hero.greeting}
                                onChange={(e) =>
                                    patch((prev) => ({
                                        ...prev,
                                        hero: { ...prev.hero, greeting: e.target.value },
                                    }))
                                }
                            />
                        </FormField>

                        <FormField label="Main title">
                            <input
                                className="admin-input"
                                value={hero.title}
                                onChange={(e) =>
                                    patch((prev) => ({
                                        ...prev,
                                        hero: { ...prev.hero, title: e.target.value },
                                    }))
                                }
                            />
                        </FormField>
                    </div>

                    <FormField label="Subtitle / short description">
                        <textarea
                            className="admin-input h-28 lg:h-full lg:min-h-[5.5rem] 2xl:min-h-[7rem]"
                            value={hero.subtitle}
                            onChange={(e) =>
                                patch((prev) => ({
                                    ...prev,
                                    hero: { ...prev.hero, subtitle: e.target.value },
                                }))
                            }
                        />
                    </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                    <HeroCtaCard
                        title="CTA 1"
                        text={hero.cta1Text}
                        href={hero.cta1Href}
                        onTextChange={(value) =>
                            patch((prev) => ({
                                ...prev,
                                hero: { ...prev.hero, cta1Text: value },
                            }))
                        }
                        onHrefChange={(value) =>
                            patch((prev) => ({
                                ...prev,
                                hero: { ...prev.hero, cta1Href: value },
                            }))
                        }
                    />

                    <HeroCtaCard
                        title="CTA 2"
                        text={hero.cta2Text}
                        href={hero.cta2Href}
                        onTextChange={(value) =>
                            patch((prev) => ({
                                ...prev,
                                hero: { ...prev.hero, cta2Text: value },
                            }))
                        }
                        onHrefChange={(value) =>
                            patch((prev) => ({
                                ...prev,
                                hero: { ...prev.hero, cta2Href: value },
                            }))
                        }
                    />
                </div>
            </div>
        </AdminPageSection>
    );
}
