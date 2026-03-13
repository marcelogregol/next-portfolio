"use client";

import { SectionHeader } from "@/components/admin/SectionHeader";
import { FormField } from "@/components/admin/FormField";
import { useContent } from "@/components/admin/AdminShell";

export default function AboutPage() {
    const { content, patch } = useContent();
    const about = content.about;

    return (
        <div className="space-y-6">
            <SectionHeader title="About" description="Update your About section text and highlights." />

            <div className="grid gap-4 rounded-lg border bg-white p-4">
                <FormField label="Title">
                    <input
                        className="w-full rounded-md border px-3 py-2"
                        value={about.title ?? ""}
                        onChange={(e) =>
                            patch((c) => ({ ...c, about: { ...c.about, title: e.target.value } }))
                        }
                    />
                </FormField>

                <FormField label="Text">
                    <textarea
                        className="h-40 w-full rounded-md border px-3 py-2"
                        value={about.text ?? ""}
                        onChange={(e) =>
                            patch((c) => ({ ...c, about: { ...c.about, text: e.target.value } }))
                        }
                    />
                </FormField>
            </div>
        </div>
    );
}
