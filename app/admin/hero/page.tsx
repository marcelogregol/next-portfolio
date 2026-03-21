"use client";

import { SectionHeader } from "@/components/admin/SectionHeader";
import { FormField } from "@/components/admin/FormField";
import { useContent } from "@/components/admin/AdminShell";

export default function HeroPage() {
    const { content, patch } = useContent();

    const hero = content.hero;
    return (
        <div className="space-y-6">
            <SectionHeader
                title="Hero"
                description="Edit the opening section of your portfolio."
            />

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
                    <div className="admin-subpanel admin-panel-frame grid gap-3 rounded-md p-3">
                        <div className="text-sm font-semibold text-white lg:text-xs 2xl:text-sm">CTA 1</div>
                        <FormField label="Text">
                            <input
                                className="admin-input"
                                value={hero.cta1Text}
                                onChange={(e) =>
                                    patch((prev) => ({
                                        ...prev,
                                        hero: { ...prev.hero, cta1Text: e.target.value },
                                    }))
                                }
                            />
                        </FormField>
                        <FormField label="Link (href)">
                            <input
                                className="admin-input"
                                value={hero.cta1Href}
                                onChange={(e) =>
                                    patch((prev) => ({
                                        ...prev,
                                        hero: { ...prev.hero, cta1Href: e.target.value },
                                    }))
                                }
                            />
                        </FormField>
                    </div>

                    <div className="admin-subpanel admin-panel-frame grid gap-3 rounded-md p-3">
                        <div className="text-sm font-semibold text-white lg:text-xs 2xl:text-sm">CTA 2</div>
                        <FormField label="Text">
                            <input
                                className="admin-input"
                                value={hero.cta2Text}
                                onChange={(e) =>
                                    patch((prev) => ({
                                        ...prev,
                                        hero: { ...prev.hero, cta2Text: e.target.value },
                                    }))
                                }
                            />
                        </FormField>
                        <FormField label="Link (href)">
                            <input
                                className="admin-input"
                                value={hero.cta2Href}
                                onChange={(e) =>
                                    patch((prev) => ({
                                        ...prev,
                                        hero: { ...prev.hero, cta2Href: e.target.value },
                                    }))
                                }
                            />
                        </FormField>
                    </div>
                </div>
            </div>
        </div>
    );
}
