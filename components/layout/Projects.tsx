import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { getEnabledProjects } from "@/lib/projects";

export default async function Projects() {
    const projects = await getEnabledProjects();

    return (
        <section className="section-shell section-divider section-surface-projects relative overflow-hidden">
            <div className="section-backdrop section-backdrop-projects"></div>
            <div className="container-base relative z-10">
                <SectionTitle id="projects" title="Featured Projects" />
                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id ?? `${project.title}-${project.order}`} p={project} />
                    ))}
                </div>
            </div>
            <div className="section-glow"></div>
        </section>
    );
}
