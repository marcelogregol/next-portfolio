"use client";

import { SectionHeader } from "@/components/admin/SectionHeader";
import { FormField } from "@/components/admin/FormField";
import { useContent } from "@/components/admin/AdminShell";
import { useState } from "react";

export default function ContactPage() {
    const { content, patch, notify } = useContent();
    const contact = content.contact;
    const [saving, setSaving] = useState(false);

    async function saveContact() {
        try {
            setSaving(true);

            const response = await fetch("/api/contact", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact),
            });

            if (!response.ok) {
                throw new Error("Failed to save contact");
            }

            const savedContact = await response.json();

            patch((current) => ({
                ...current,
                contact: {
                    id: typeof savedContact?.id === "number" ? savedContact.id : undefined,
                    email: savedContact?.email ?? "",
                    whatsapp: savedContact?.whatsapp ?? "",
                    linkedin: savedContact?.linkedin ?? "",
                    github: savedContact?.github ?? "",
                    ctaTitle: savedContact?.ctaTitle ?? "",
                    ctaSubtitle: savedContact?.ctaSubtitle ?? "",
                    ctaButtonText: savedContact?.ctaButtonText ?? "",
                    ctaButtonHref: savedContact?.ctaButtonHref ?? "",
                },
            }));

            notify({ type: "success", text: "Contact details saved successfully." });
        } catch (error) {
            console.error(error);
            notify({ type: "error", text: "Unable to save contact details." });
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="admin-page space-y-6">
            <SectionHeader title="Contact" description="Manage links, contact channels and the final CTA." />

            <div className="admin-panel grid gap-4 rounded-lg border bg-white p-4">
                <div className="admin-subgrid grid gap-4 md:grid-cols-2">
                    <FormField label="Email">
                        <input
                            className="w-full rounded-md border px-3 py-2"
                            value={contact.email}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, email: e.target.value } }))
                            }
                        />
                    </FormField>

                    <FormField label="WhatsApp">
                        <input
                            className="w-full rounded-md border px-3 py-2"
                            value={contact.whatsapp}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, whatsapp: e.target.value } }))
                            }
                        />
                    </FormField>
                </div>

                <div className="admin-subgrid grid gap-4 md:grid-cols-2">
                    <FormField label="LinkedIn">
                        <input
                            className="w-full rounded-md border px-3 py-2"
                            value={contact.linkedin}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, linkedin: e.target.value } }))
                            }
                        />
                    </FormField>

                    <FormField label="GitHub">
                        <input
                            className="w-full rounded-md border px-3 py-2"
                            value={contact.github}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, github: e.target.value } }))
                            }
                        />
                    </FormField>
                </div>

                <div className="grid gap-3 rounded-md border p-3">
                    <div className="admin-subtitle text-sm font-semibold">Final CTA</div>
                    <FormField label="Title">
                        <input
                            className="w-full rounded-md border px-3 py-2"
                            value={contact.ctaTitle}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, ctaTitle: e.target.value } }))
                            }
                        />
                    </FormField>

                    <FormField label="Subtitle">
                        <input
                            className="w-full rounded-md border px-3 py-2"
                            value={contact.ctaSubtitle}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, ctaSubtitle: e.target.value } }))
                            }
                        />
                    </FormField>

                    <div className="admin-subgrid grid gap-4 md:grid-cols-2">
                        <FormField label="Button text">
                            <input
                                className="w-full rounded-md border px-3 py-2"
                                value={contact.ctaButtonText}
                                onChange={(e) =>
                                    patch((c) => ({
                                        ...c,
                                        contact: { ...c.contact, ctaButtonText: e.target.value },
                                    }))
                                }
                            />
                        </FormField>

                        <FormField label="Button link (href)">
                            <input
                                className="w-full rounded-md border px-3 py-2"
                                value={contact.ctaButtonHref}
                                onChange={(e) =>
                                    patch((c) => ({
                                        ...c,
                                        contact: { ...c.contact, ctaButtonHref: e.target.value },
                                    }))
                                }
                            />
                        </FormField>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        className="rounded-md bg-slate-900 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
                        onClick={() => void saveContact()}
                        disabled={saving}
                    >
                        {saving ? "Saving..." : "Save contact"}
                    </button>
                </div>
            </div>
        </div>
    );
}
