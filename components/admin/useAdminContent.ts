"use client";

import { useEffect, useState } from "react";
import {
    getAbout,
    getContact,
    getHero,
    getProjects,
    getSkills,
    saveAbout,
    saveContact,
    saveHero,
    saveProjects,
    saveSkills,
} from "@/lib/admin/api";
import { buildAdminContent } from "@/lib/admin/mappers";
import { emptyContent, type AdminContent, type Notice } from "@/lib/admin/types";

export function useAdminContent() {
    const [content, setContent] = useState<AdminContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [notice, setNotice] = useState<Notice | null>(null);

    useEffect(() => {
        async function loadInitialData() {
            try {
                const [hero, about, skills, projects, contact] = await Promise.all([
                    getHero(),
                    getAbout(),
                    getSkills(),
                    getProjects(),
                    getContact(),
                ]);

                setContent(buildAdminContent({ hero, about, skills, projects, contact }));
            } catch (error) {
                console.error(error);
                setContent(emptyContent);
            } finally {
                setLoading(false);
            }
        }

        void loadInitialData();
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

            const [hero, about, skills, projects, contact] = await Promise.all([
                saveHero(content.hero),
                saveAbout(content.about),
                saveSkills(content.skills),
                saveProjects(content.projects),
                saveContact(content.contact),
            ]);

            setContent(
                buildAdminContent({
                    hero,
                    about,
                    skills,
                    projects,
                    contact,
                    publishState: "published",
                })
            );

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

    return {
        content,
        loading,
        saving,
        notice,
        notify,
        patch,
        publishAll,
    };
}
