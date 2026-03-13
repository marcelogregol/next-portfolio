"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    { href: "/admin/hero", label: "Hero" },
    { href: "/admin/about", label: "About" },
    { href: "/admin/skills", label: "Skills" },
    { href: "/admin/projects", label: "Projects" },
    { href: "/admin/contact", label: "Contact" },
];

export function Sidebar() {
    const path = usePathname();

    return (
        <aside className="sticky top-0 h-screen w-56 border-r bg-white">
            <div className="px-4 py-4">
                <div className="text-lg font-semibold">MRG Admin</div>
                <div className="text-xs text-slate-500">Quick editing</div>
            </div>

            <nav className="px-2">
                {items.map((it) => {
                    const active = path?.startsWith(it.href);
                    return (
                        <Link
                            key={it.href}
                            href={it.href}
                            className={[
                                "mb-1 block rounded-md px-3 py-2 text-sm",
                                active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100",
                            ].join(" ")}
                        >
                            {it.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
