"use client";

import { SectionHeader } from "@/components/admin/SectionHeader";
import { FormField } from "@/components/admin/FormField";
import { useContent } from "@/components/admin/AdminShell";

export default function AboutPage() {
    const { content, patch } = useContent();
    const about = content.about;

    return (
        <div className="admin-page space-y-6">
            <SectionHeader title="About" description="Update your About section text and highlights." />

            <div className="admin-panel admin-border grid gap-4 rounded-lg border p-4">
                <FormField label="Title">
                    <input
                        className="admin-input"
                        value={about.title ?? ""}
                        onChange={(e) =>
                            patch((c) => ({ ...c, about: { ...c.about, title: e.target.value } }))
                        }
                    />
                </FormField>

                <FormField label="Text">
                    <textarea
                        className="admin-input admin-textarea-lg h-40"
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
