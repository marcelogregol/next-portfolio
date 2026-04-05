"use client";

import { AdminPageSection } from "@/components/admin/AdminPageSection";
import { FormField } from "@/components/admin/FormField";
import { useContent } from "@/components/admin/AdminShell";
import { RichTextField } from "@/components/admin/RichTextField";

export default function AboutPage() {
    const { content, patch } = useContent();
    const about = content.about;

    return (
        <AdminPageSection
            title="About"
            description="Update your About section text and highlights."
        >
            <div className="admin-panel admin-border grid gap-4 rounded-lg border p-4 lg:gap-3 lg:p-3 2xl:gap-4 2xl:p-4">
                <FormField label="Title">
                    <input
                        className="admin-input"
                        value={about.title ?? ""}
                        onChange={(e) =>
                            patch((c) => ({ ...c, about: { ...c.about, title: e.target.value } }))
                        }
                    />
                </FormField>

                <RichTextField
                    label="Text"
                    value={about.text ?? ""}
                    textareaClassName="admin-input h-40 lg:h-28 2xl:h-40"
                    onChange={(text) => patch((c) => ({ ...c, about: { ...c.about, text } }))}
                />
            </div>
        </AdminPageSection>
    );
}
