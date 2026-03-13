"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import { Toolbar } from "./Toolbar";

export function Topbar({
    onPublish,
}: {
    onPublish: () => void;
}) {
    return (
        <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <a
                        className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:border-slate-700 hover:shadow-[0_14px_36px_rgba(15,23,42,0.24)]"
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.85)]" />
                        <span>View site</span>
                        <span className="inline-flex items-center justify-center rounded-full bg-white/10 p-1 text-white/80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white/15 group-hover:text-white">
                            <HiArrowUpRight className="h-4 w-4" />
                        </span>
                    </a>
                </div>

                <Toolbar onPublish={onPublish} />
            </div>
        </header>
    );
}
