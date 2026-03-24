"use client";
import { useMemo, useRef, useState } from "react";
import { AdminPageSection } from "@/components/admin/AdminPageSection";
import { ProjectsModal, type ProjectForm } from "@/components/admin/ProjectsModal";
import { Toggle } from "@/components/admin/Toggle";
import { useContent } from "@/components/admin/AdminShell";
import { saveProjects, uploadProjectImage as uploadProjectImageRequest } from "@/lib/admin/api";
import { mapProjectsResponse } from "@/lib/admin/mappers";

export default function ProjectsPage() {
    const { content, patch, notify } = useContent();
    const projects = useMemo(
        () => [...content.projects].sort((a, b) => a.order - b.order),
        [content.projects]
    );

    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<ProjectForm | null>(null);
    const [persisting, setPersisting] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const imageInputRef = useRef<HTMLInputElement | null>(null);

    function openNew() {
        setEditing({
            id: -Date.now(),
            title: "",
            shortDesc: "",
            longDesc: "",
            tags: [],
            imageUrl: "/images/demo.jpg",
            demoUrl: "",
            codeUrl: "",
            featured: false,
            enabled: true,
            order: projects.length + 1,
        });
        setOpen(true);
    }

    function openEdit(project: ProjectForm) {
        setEditing({ ...project });
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
        setEditing(null);
        setUploadingImage(false);
    }

    async function uploadProjectImage(file: File) {
        try {
            setUploadingImage(true);

            const data = await uploadProjectImageRequest(file);

            if (typeof data?.url !== "string") {
                throw new Error(
                    typeof data?.error === "string"
                        ? data.error
                        : "Unable to upload image."
                );
            }

            setEditing((current) =>
                current ? { ...current, imageUrl: data.url } : current
            );

            notify({ type: "success", text: "Image uploaded successfully." });
        } catch (error) {
            console.error(error);
            notify({ type: "error", text: "Unable to upload image." });
        } finally {
            setUploadingImage(false);
        }
    }

    async function persistProjects(nextProjects: ProjectForm[]) {
        try {
            setPersisting(true);

            const savedProjects = await saveProjects(nextProjects);

            patch((current) => ({
                ...current,
                projects: mapProjectsResponse(savedProjects),
            }));

            return true;
        } catch (error) {
            console.error(error);
            notify({ type: "error", text: "Unable to save projects." });
            return false;
        } finally {
            setPersisting(false);
        }
    }

    async function saveProject() {
        if (!editing) return;

        const nextProject = {
            ...editing,
            title: editing.title.trim(),
            shortDesc: editing.shortDesc.trim(),
            longDesc: editing.longDesc.trim(),
            imageUrl: editing.imageUrl.trim() || "/images/demo.jpg",
            demoUrl: editing.demoUrl.trim(),
            codeUrl: editing.codeUrl.trim(),
            order: editing.order > 0 ? editing.order : projects.length + 1,
        };

        const exists = projects.some((project) => project.id === editing.id);
        const nextProjects = exists
            ? projects.map((project) => (project.id === editing.id ? nextProject : project))
            : [...projects, nextProject];

        const saved = await persistProjects(nextProjects);

        if (saved) {
            notify({ type: "success", text: "Project saved successfully." });
            closeModal();
        }
    }

    async function removeProject(id: number | null | undefined) {
        const nextProjects = projects.filter((project) => project.id !== id);
        const saved = await persistProjects(nextProjects);

        if (saved) {
            notify({ type: "success", text: "Project removed successfully." });
        }
    }

    async function toggleEnabled(id: number | null | undefined, enabled: boolean) {
        const nextProjects = projects.map((project) =>
            project.id === id ? { ...project, enabled } : project
        );

        const saved = await persistProjects(nextProjects);

        if (saved) {
            notify({ type: "success", text: "Project status updated." });
        }
    }

    async function toggleFeatured(id: number | null | undefined, featured: boolean) {
        const nextProjects = projects.map((project) =>
            project.id === id ? { ...project, featured } : project
        );

        const saved = await persistProjects(nextProjects);

        if (saved) {
            notify({ type: "success", text: "Project highlight updated." });
        }
    }

    return (
        <AdminPageSection
            title="Projects"
            description="Create, edit and publish the projects shown on the portfolio."
            actions={
                <button
                    className="admin-primary-btn h-10 rounded-md px-3 text-sm lg:self-start"
                    onClick={openNew}
                >
                    + New project
                </button>
            }
            spacingClassName="space-y-5"
        >

            <div className="admin-table-shell admin-border overflow-x-auto rounded-lg border">
                <table className="min-w-[760px] w-full text-sm">
                    <thead className="admin-table-head text-left">
                        <tr>
                            <th className="p-3">Title</th>
                            <th className="p-3">Image</th>
                            <th className="p-3">Order</th>
                            <th className="p-3">Featured</th>
                            <th className="p-3">Active</th>
                            <th className="p-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className="admin-row-divider">
                                <td className="p-3">
                                    <div className="admin-strong font-medium">{project.title}</div>
                                    <div className="admin-muted text-xs">{project.shortDesc}</div>
                                </td>
                                <td className="admin-muted p-3 text-xs">{project.imageUrl}</td>
                                <td className="p-3">{String(project.order).padStart(2, "0")}</td>
                                <td className="p-3">
                                    <Toggle checked={project.featured} onChange={(value) => void toggleFeatured(project.id, value)} />
                                </td>
                                <td className="p-3">
                                    <Toggle checked={project.enabled} onChange={(value) => void toggleEnabled(project.id, value)} />
                                </td>
                                <td className="p-3 text-right">
                                    <div className="inline-flex gap-2">
                                        <button className="admin-ghost-btn rounded-md px-2 py-1" onClick={() => openEdit(project)}>
                                            Edit
                                        </button>
                                        <button
                                            className="admin-ghost-btn rounded-md px-2 py-1 text-red-300"
                                            onClick={() => void removeProject(project.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {projects.length === 0 ? (
                            <tr>
                                <td className="admin-muted p-4" colSpan={6}>
                                    No projects added yet.
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>

            <ProjectsModal
                open={open}
                editing={editing}
                persisting={persisting}
                uploadingImage={uploadingImage}
                imageInputRef={imageInputRef}
                onClose={closeModal}
                onSave={saveProject}
                onChange={setEditing}
                onUploadImage={uploadProjectImage}
            />
        </AdminPageSection>
    );
}
