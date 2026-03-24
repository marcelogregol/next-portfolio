"use client";

import { ReactNode, createContext, useContext } from "react";
import { NoticeBanner } from "./NoticeBanner";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { useAdminContent } from "./useAdminContent";
import type { AdminContent, Notice } from "@/lib/admin/types";

type Ctx = {
    content: AdminContent;
    patch: (fn: (c: AdminContent) => AdminContent) => void;
    saving: boolean;
    notify: (notice: Notice) => void;
};

const ContentContext = createContext<Ctx | null>(null);

export function AdminShell({ children }: { children: ReactNode }) {
    const { content, loading, saving, notice, notify, patch, publishAll } = useAdminContent();

    if (loading || !content) return null;

    return (
        <ContentContext.Provider value={{ content, patch, saving, notify }}>
            <div className="admin-shell min-h-screen text-slate-100">
                <div className="flex">
                    <Sidebar />
                    <div className="min-w-0 flex-1">
                        <Topbar onPublish={publishAll} saving={saving} />
                        <main className="mx-auto max-w-[72rem] px-4 py-6 lg:py-4 2xl:py-6">
                            <NoticeBanner notice={notice} />
                            {children}
                        </main>
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
