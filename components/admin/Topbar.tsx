"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import { Toolbar } from "./Toolbar";

export function Topbar({
    onPublish,
    saving,
}: {
    onPublish: () => void;
    saving: boolean;
}) {
    return (
        <header className="admin-topbar sticky top-0 z-10">
            <div className="mx-auto flex max-w-[72rem] items-center justify-between px-4 py-3 lg:px-3.5 lg:py-2.5 2xl:px-4 2xl:py-3">
                <div className="flex items-center gap-3">
                    <a
                        className="admin-topbar-link group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 lg:py-[0.45rem] lg:text-xs 2xl:text-sm"
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.85)]" />
                        <span>View site</span>
                        <span className="admin-icon-chip inline-flex items-center justify-center rounded-full p-1 text-white/80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                            <HiArrowUpRight className="h-4 w-4" />
                        </span>
                    </a>
                </div>

                <Toolbar onPublish={onPublish} saving={saving} />
            </div>
        </header>
    );
}
