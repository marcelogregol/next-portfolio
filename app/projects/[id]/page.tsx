import { notFound } from "next/navigation";
import { getEnabledProjects, getProjectById } from "@/lib/projects";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import { ProjectDetailsTopNav } from "@/components/projects/ProjectDetailsTopNav";
import { ProjectQuickAccess } from "@/components/projects/ProjectQuickAccess";
import { RelatedProjectsSection } from "@/components/projects/RelatedProjectsSection";
import { ProjectRichText } from "@/components/ui/ProjectRichText";

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

    const otherProjects = (await getEnabledProjects()).filter((item) => item.id !== project.id);

    return (
        <main className="min-h-screen bg-[#050816]">
            <ProjectDetailsTopNav />

            <section className="section-shell section-divider section-surface-projects relative overflow-hidden">
                <div className="section-backdrop section-backdrop-projects" />
                <div className="container-base relative z-10 py-8 md:py-10">
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

                                <ProjectQuickAccess
                                    demoUrl={project.demoUrl}
                                    codeLinks={project.codeLinks}
                                />
                            </aside>
                        </div>
                    </div>

                    <RelatedProjectsSection projects={otherProjects} />
                </div>
                <div className="section-glow" />
            </section>
            <CTA />
            <Footer />
        </main>
    );
}
