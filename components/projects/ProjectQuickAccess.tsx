import Link from "next/link";
import type { ProjectCodeLink } from "@/lib/project-code-links";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowUturnLeft, HiOutlinePlay } from "react-icons/hi2";

type ProjectQuickAccessProps = {
    demoUrl: string;
    codeLinks: ProjectCodeLink[];
};

export function ProjectQuickAccess({
    demoUrl,
    codeLinks,
}: ProjectQuickAccessProps) {
    return (
        <div className="glass h-fit rounded-3xl border border-white/8 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">Quick access</p>
            <div className="mt-5 flex flex-col gap-3">
                {demoUrl ? (
                    <a className="btn-ghost justify-center gap-2" href={demoUrl} target="_blank" rel="noreferrer">
                        <HiOutlinePlay className="h-4 w-4" />
                        <span>Demo</span>
                    </a>
                ) : null}
                {codeLinks.map((link) => (
                    <a
                        key={`${link.label}-${link.url}`}
                        className="btn-ghost justify-center gap-2"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub className="h-4 w-4" />
                        <span>{link.label}</span>
                    </a>
                ))}
                <Link className="btn-ghost justify-center gap-2" href="/#projects">
                    <HiOutlineArrowUturnLeft className="h-4 w-4" />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
}
