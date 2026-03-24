"use client";

import { ReactNode, useEffect, useState, createContext, useContext } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type AdminContent = {
    publishState: "draft" | "published";
    about: {
        id?: string;
        title: string;
        text: string;
    };
};

type Ctx = {
    content: AdminContent;
    patch: (fn: (c: AdminContent) => AdminContent) => void;
};

const ContentContext = createContext<Ctx | null>(null);

export function AdminShell({ children }: { children: ReactNode }) {
    const [content, setContent] = useState<AdminContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        async function loadInitialData() {
            try {
                const res = await fetch("/api/about");

                if (!res.ok) {
                    throw new Error("Erro ao buscar /api/about");
                }

                const about = await res.json();

                setContent({
                    publishState: "draft",
                    about: {
                        id: about?.id ?? undefined,
                        title: about?.title ?? "",
                        text: about?.text ?? "",
                    },
                });
            } catch (error) {
                console.error(error);

                setContent({
                    publishState: "draft",
                    about: {
                        id: undefined,
                        title: "",
                        text: "",
                    },
                });
            } finally {
                setLoading(false);
            }
        }

        loadInitialData();
    }, []);

    function patch(fn: (c: AdminContent) => AdminContent) {
        setContent((prev) => {
            if (!prev) return prev;
            return fn(prev);
        });
    }

    async function publish() {
        if (!content) {
            return;
        }

        try {
            setSaving(true);

            const res = await fetch("/api/about", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: content.about.title,
                    text: content.about.text,
                }),
            });

            if (!res.ok) {
                throw new Error("Erro ao publicar");
            }

            const updatedAbout = await res.json();

            setContent({
                publishState: "published",
                about: {
                    id: updatedAbout?.id ?? undefined,
                    title: updatedAbout?.title ?? "",
                    text: updatedAbout?.text ?? "",
                },
            });

            alert("Publicado com sucesso.");
        } catch (error) {
            console.error(error);
            alert("Erro ao publicar.");
        } finally {
            setSaving(false);
        }
    }

    if (loading || !content) return null;

    return (
        <ContentContext.Provider value={{ content, patch }}>
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <div className="flex">
                    <Sidebar />
                    <div className="flex-1">
                        <Topbar onPublish={publish} saving={saving} />
                        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
                    </div>
                </div>
            </div>
        </ContentContext.Provider>
    );
}

export function useContent() {
    const ctx = useContext(ContentContext);
    if (!ctx) throw new Error("useContent must be used inside AdminShell");
    return ctx;
}
