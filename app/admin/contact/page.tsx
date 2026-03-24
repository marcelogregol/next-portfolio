"use client";

import { AdminPageSection } from "@/components/admin/AdminPageSection";
import { ContactCtaCard } from "@/components/admin/ContactCtaCard";
import { FormField } from "@/components/admin/FormField";
import { useContent } from "@/components/admin/AdminShell";
import { saveContact as saveContactRequest } from "@/lib/admin/api";
import { mapContactResponse } from "@/lib/admin/mappers";
import { useState } from "react";

export default function ContactPage() {
    const { content, patch, notify } = useContent();
    const contact = content.contact;
    const [saving, setSaving] = useState(false);

    async function saveContact() {
        try {
            setSaving(true);

            const savedContact = await saveContactRequest(contact);

            patch((current) => ({
                ...current,
                contact: mapContactResponse(savedContact),
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
        <AdminPageSection
            title="Contact"
            description="Manage links, contact channels and the final CTA."
        >
            <div className="admin-panel admin-border grid gap-4 rounded-lg border p-4 lg:gap-3 lg:p-3 2xl:gap-4 2xl:p-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <FormField label="Email">
                        <input
                            className="admin-input"
                            value={contact.email}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, email: e.target.value } }))
                            }
                        />
                    </FormField>

                    <FormField label="WhatsApp">
                        <input
                            className="admin-input"
                            value={contact.whatsapp}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, whatsapp: e.target.value } }))
                            }
                        />
                    </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <FormField label="LinkedIn">
                        <input
                            className="admin-input"
                            value={contact.linkedin}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, linkedin: e.target.value } }))
                            }
                        />
                    </FormField>

                    <FormField label="GitHub">
                        <input
                            className="admin-input"
                            value={contact.github}
                            onChange={(e) =>
                                patch((c) => ({ ...c, contact: { ...c.contact, github: e.target.value } }))
                            }
                        />
                    </FormField>
                </div>

                <ContactCtaCard
                    contact={contact}
                    onChange={(nextContact) =>
                        patch((c) => ({ ...c, contact: nextContact }))
                    }
                />

                <div className="flex justify-end">
                    <button
                        className="admin-primary-btn rounded-md px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-60 lg:px-[0.7rem] lg:py-[0.45rem] lg:text-xs 2xl:px-4 2xl:py-2 2xl:text-sm"
                        onClick={() => void saveContact()}
                        disabled={saving}
                    >
                        {saving ? "Saving..." : "Save contact"}
                    </button>
                </div>
            </div>
        </AdminPageSection>
    );
}
