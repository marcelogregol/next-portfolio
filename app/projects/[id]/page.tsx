import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";
import { ProjectRichText } from "@/components/ui/ProjectRichText";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowUturnLeft, HiOutlinePlay } from "react-icons/hi2";

const contactHref = "https://www.linkedin.com/in/marcelogregol/";

export const dynamic = "force-dynamic";

type ProjectDetailsPageProps = {
    params: Promise<{ id: string }>;
};

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
    const { id } = await params;
    const projectId = Number(id);

    if (!Number.isInteger(projectId)) {
        notFound();
    }

    const project = await getProjectById(projectId);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#050816]">
            <header className="nav-shell sticky top-0 z-50 bg-slate-950/78 px-6 backdrop-blur-xl md:px-10">
                <div className="container-base flex min-h-16 flex-wrap items-center justify-between gap-4 py-3">
                    <Link href="/" className="flex items-center" aria-label="Back to home">
                        <Image
                            src="/images/MRG.png"
                            alt="MRG logo"
                            width={100}
                            height={30}
                            priority
                            unoptimized
                            className="h-auto w-[77px] object-contain sm:w-[86px] md:w-[93px]"
                        />
                    </Link>

                    <div className="flex flex-wrap items-center gap-3">
                        <a href={contactHref} target="_blank" rel="noreferrer" className="btn-ghost">
                            Get in touch
                        </a>
                        <Link href="/#projects" className="btn-ghost">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            <section className="section-shell section-divider section-surface-projects relative overflow-hidden">
                <div className="section-backdrop section-backdrop-projects" />
                <div className="container-base relative z-10 py-12 md:py-16">
                    <div className="glass rounded-[2rem] p-6 md:p-8">
                        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_320px] md:gap-8">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">Project details</p>
                                    <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{project.title}</h1>
                                    <p className="max-w-3xl text-lg text-white/75">{project.shortDesc}</p>
                                </div>

                                {project.tags.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="badge">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}

                                {project.longDesc ? (
                                    <ProjectRichText
                                        value={project.longDesc}
                                        className="max-w-4xl space-y-4 text-sub"
                                    />
                                ) : (
                                    <p className="max-w-4xl text-sub leading-8">
                                        More details about this project will be available soon.
                                    </p>
                                )}
                            </div>

                            <aside className="space-y-5">
                                <div className="overflow-hidden rounded-3xl border border-white/8 bg-slate-950/45">
                                    <div className="relative aspect-[4/3]">
                                        <img
                                            src={project.imageUrl || "/images/demo.jpg"}
                                            alt={project.title}
                                            className="h-full w-full object-cover"
                                            loading="eager"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
                                    </div>
                                </div>

                                <div className="glass h-fit rounded-3xl border border-white/8 p-6">
                                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">Quick access</p>
                                    <div className="mt-5 flex flex-col gap-3">
                                        {project.demoUrl ? (
                                            <a className="btn-ghost justify-center gap-2" href={project.demoUrl} target="_blank" rel="noreferrer">
                                                <HiOutlinePlay className="h-4 w-4" />
                                                <span>Demo</span>
                                            </a>
                                        ) : null}
                                        {project.codeLinks.map((link) => (
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
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="section-glow" />
            </section>
        </main>
    );
}
