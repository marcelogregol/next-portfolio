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
        <aside className="admin-sidebar sticky top-0 hidden h-screen w-52 shrink-0 xl:block">
            <header className="px-4 py-4">
                <div className="admin-brand text-base font-semibold">MRG Admin</div>
                <div className="text-xs text-slate-400">Quick editing</div>
            </header>

            <nav className="px-2">
                {items.map((it) => {
                    const active = path?.startsWith(it.href);
                    return (
                        <Link
                            key={it.href}
                            href={it.href}
                            className={[
                                "admin-nav-link mb-1 block rounded-md px-3 py-2 text-sm",
                                active ? "admin-nav-link-active text-white" : "text-slate-200",
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
