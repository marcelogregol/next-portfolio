"use client";

import Image from "next/image";
import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

const contactHref = "https://www.linkedin.com/in/marcelogregol/";

export default function TopNav() {
    const [open, setOpen] = useState(false);

    function handleNavigate() {
        setOpen(false);
    }

    return (
        <header className="nav-shell sticky top-0 z-50 bg-slate-950/78 px-6 backdrop-blur-xl md:px-10">
            <div className="container-base flex h-16 items-center justify-between">
                <a href="#top" className="flex items-center" aria-label="Back to top">
                    <Image
                        src="/images/mrg.png"
                        alt="MRG logo"
                        width={100}
                        height={30}
                        priority
                        className="h-auto w-[77px] object-contain sm:w-[86px] md:w-[93px]"
                    />
                </a>

                <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
                    {navItems.map((item) => (
                        <a key={item.href} className="transition hover:text-white" href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a href={contactHref} target="_blank" rel="noreferrer" className="btn-ghost">
                        Get in touch
                    </a>
                </div>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((current) => !current)}
                >
                    {open ? <HiOutlineXMark className="h-6 w-6" /> : <HiOutlineBars3 className="h-6 w-6" />}
                </button>
            </div>

            {open ? (
                <div className="container-base pb-4 md:hidden">
                    <div className="glass rounded-3xl px-4 py-4">
                        <nav className="flex flex-col gap-2 text-sm text-white">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    className="rounded-2xl px-4 py-3 transition hover:bg-white/8"
                                    href={item.href}
                                    onClick={handleNavigate}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <a
                            href={contactHref}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-ghost mt-4 flex w-full"
                            onClick={handleNavigate}
                        >
                            Get in touch
                        </a>
                    </div>
                </div>
            ) : null}
        </header>
    );
}

