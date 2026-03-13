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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
                <div className="flex items-center justify-between border-b px-4 py-3">
                    <div className="text-sm font-semibold">{title}</div>
                    <button className="rounded-md border px-2 py-1 text-sm" onClick={onClose}>
                        Fechar
                    </button>
                </div>
                <div className="px-4 py-4">{children}</div>
            </div>
        </div>
    );
}
