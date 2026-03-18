"use client";

import Link from "next/link";
import { useState } from "react";

type ProjectCardData = {
    title: string;
    shortDesc: string;
    tags: string[];
    imageUrl: string;
    demoUrl?: string;
    codeUrl?: string;
};

export default function ProjectCard({ p }: { p: ProjectCardData }) {
    const [imageSrc, setImageSrc] = useState(p.imageUrl || "/images/demo.jpg");

    return (
        <div className="glass glass-hover overflow-hidden rounded-2xl">
            <div className="border-stroke relative aspect-[16/9] border-b">
                <img
                    src={imageSrc}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={() => {
                        if (imageSrc !== "/images/demo.jpg") {
                            setImageSrc("/images/demo.jpg");
                        }
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-slate-950/10 to-transparent" />
            </div>
            <div className="p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-sub mt-2 leading-relaxed">{p.shortDesc}</p>

                {p.tags.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                            <span key={tag} className="badge">
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : null}

                <div className="mt-5 flex gap-3">
                    {p.demoUrl ? (
                        <Link className="btn-ghost" href={p.demoUrl}>
                            Live Demo
                        </Link>
                    ) : null}
                    {p.codeUrl ? (
                        <Link className="btn-ghost" href={p.codeUrl}>
                            Source Code
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
