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

            <div className="grid gap-4 rounded-lg border p-4">
                <FormField label="Greeting">
                    <input
                        className="w-full rounded-md border px-3 py-2"
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
                        className="w-full rounded-md border px-3 py-2"
                        value={hero.title}
                        onChange={(e) =>
                            patch((prev) => ({
                                ...prev,
                                hero: { ...prev.hero, title: e.target.value },
                            }))
                        }
                    />
                </FormField>

                <FormField label="Subtitle / short description">
                    <textarea
                        className="h-28 w-full rounded-md border px-3 py-2"
                        value={hero.subtitle}
                        onChange={(e) =>
                            patch((prev) => ({
                                ...prev,
                                hero: { ...prev.hero, subtitle: e.target.value },
                            }))
                        }
                    />
                </FormField>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-3 rounded-md border p-3">
                        <div className="text-sm font-semibold">CTA 1</div>
                        <FormField label="Text">
                            <input
                                className="w-full rounded-md border px-3 py-2"
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
                                className="w-full rounded-md border px-3 py-2"
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

                    <div className="grid gap-3 rounded-md border p-3">
                        <div className="text-sm font-semibold">CTA 2</div>
                        <FormField label="Text">
                            <input
                                className="w-full rounded-md border px-3 py-2"
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
                                className="w-full rounded-md border px-3 py-2"
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
