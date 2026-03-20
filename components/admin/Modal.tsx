"use client";

import { ReactNode } from "react";

export function Modal({
    title,
    open,
    onClose,
    children,
}: {
    title: string;
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
            <div className="admin-modal-panel flex max-h-[calc(100vh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white shadow-xl sm:max-h-[calc(100vh-2rem)]">
                <div className="admin-modal-header flex items-center justify-between gap-3 border-b px-4 py-3">
                    <div className="min-w-0 text-sm font-semibold">{title}</div>
                    <button className="rounded-md border px-2 py-1 text-sm" onClick={onClose}>
                        Fechar
                    </button>
                </div>
                <div className="admin-modal-body min-h-0 overflow-y-auto overflow-x-hidden px-4 py-4">{children}</div>
            </div>
        </div>
    );
}
