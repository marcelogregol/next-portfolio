import ProjectCard from "@/components/ui/ProjectCard";
import type { ProjectContent } from "@/lib/projects";

type RelatedProjectsSectionProps = {
    projects: ProjectContent[];
};

export function RelatedProjectsSection({
    projects,
}: RelatedProjectsSectionProps) {
    if (projects.length === 0) {
        return null;
    }

    return (
        <div className="mt-8 md:mt-10">
            <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/45">More projects</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id ?? `${project.title}-${project.order}`}
                        p={project}
                        compact
                    />
                ))}
            </div>
        </div>
    );
}
