import { hasAdminSession } from "@/lib/admin-auth";
import { getProjectsContent, saveProjects } from "@/lib/projects";
import { parseProjectCodeLinks } from "@/lib/project-code-links";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = await getProjectsContent();
        return NextResponse.json(projects);
    } catch (error) {
        console.error("GET /api/projects error:", error);

        return NextResponse.json(
            { error: "Erro ao buscar projetos" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    if (!(await hasAdminSession())) {
        return NextResponse.json(
            { error: "Nao autorizado" },
            { status: 401 }
        );
    }

    try {
        const body = await req.json();
        const projects = Array.isArray(body) ? body : body.projects;

        if (!Array.isArray(projects)) {
            return NextResponse.json(
                { error: "Formato invalido para projetos" },
                { status: 400 }
            );
        }

        const updatedProjects = await saveProjects(
            projects.map((project, index) => ({
                id: typeof project.id === "number" ? project.id : null,
                title: project.title ?? "",
                shortDesc: project.shortDesc ?? "",
                longDesc: project.longDesc ?? "",
                tags: Array.isArray(project.tags)
                    ? project.tags.filter((tag: unknown) => typeof tag === "string")
                    : [],
                imageUrl: project.imageUrl ?? "/images/demo.jpg",
                demoUrl: project.demoUrl ?? "",
                codeLinks: Array.isArray(project.codeLinks)
                    ? project.codeLinks
                          .filter(
                              (link: unknown): link is { label: string; url: string } =>
                                  typeof link === "object" &&
                                  link !== null &&
                                  typeof (link as { label?: unknown }).label === "string" &&
                                  typeof (link as { url?: unknown }).url === "string"
                          )
                          .map((link) => ({
                              label: link.label,
                              url: link.url,
                          }))
                    : parseProjectCodeLinks(typeof project.codeUrl === "string" ? project.codeUrl : ""),
                featured: Boolean(project.featured),
                enabled: Boolean(project.enabled),
                order: Number(project.order ?? index + 1),
            }))
        );

        return NextResponse.json(updatedProjects);
    } catch (error) {
        console.error("PUT /api/projects error:", error);

        return NextResponse.json(
            { error: "Erro ao salvar projetos" },
            { status: 500 }
        );
    }
}
