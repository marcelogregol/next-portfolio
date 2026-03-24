"use client";

import { FormField } from "@/components/admin/FormField";
import type { ContactContent } from "@/lib/admin/types";

type ContactCtaCardProps = {
    contact: ContactContent;
    onChange: (nextContact: ContactContent) => void;
};

export function ContactCtaCard({ contact, onChange }: ContactCtaCardProps) {
    return (
        <div className="admin-subpanel admin-panel-frame grid gap-3 rounded-md p-3">
            <div className="text-sm font-semibold text-white lg:text-xs 2xl:text-sm">Final CTA</div>
            <FormField label="Title">
                <input
                    className="admin-input"
                    value={contact.ctaTitle}
                    onChange={(e) => onChange({ ...contact, ctaTitle: e.target.value })}
                />
            </FormField>

            <FormField label="Subtitle">
                <input
                    className="admin-input"
                    value={contact.ctaSubtitle}
                    onChange={(e) => onChange({ ...contact, ctaSubtitle: e.target.value })}
                />
            </FormField>

            <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Button text">
                    <input
                        className="admin-input"
                        value={contact.ctaButtonText}
                        onChange={(e) => onChange({ ...contact, ctaButtonText: e.target.value })}
                    />
                </FormField>

                <FormField label="Button link (href)">
                    <input
                        className="admin-input"
                        value={contact.ctaButtonHref}
                        onChange={(e) => onChange({ ...contact, ctaButtonHref: e.target.value })}
                    />
                </FormField>
            </div>
        </div>
    );
}
