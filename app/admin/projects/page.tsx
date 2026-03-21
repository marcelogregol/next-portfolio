"use client";
import { useMemo, useRef, useState } from "react";
import { SectionHeader } from "@/components/admin/SectionHeader";
import { FormField } from "@/components/admin/FormField";
import { Toggle } from "@/components/admin/Toggle";
import { Modal } from "@/components/admin/Modal";
import { TagInput } from "@/components/admin/TagInput";
import { useContent } from "@/components/admin/AdminShell";

type ProjectForm = {
    id?: number | null;
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: string[];
    imageUrl: string;
    demoUrl: string;
    codeUrl: string;
    featured: boolean;
    enabled: boolean;
    order: number;
};

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

            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("/api/projects/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json().catch(() => null);

            if (!response.ok || typeof data?.url !== "string") {
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

            const response = await fetch("/api/projects", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nextProjects),
            });

            if (!response.ok) {
                throw new Error("Failed to save projects");
            }

            const savedProjects = await response.json();

            patch((current) => ({
                ...current,
                projects: Array.isArray(savedProjects)
                    ? savedProjects.map((project, index) => ({
                        id: typeof project?.id === "number" ? project.id : undefined,
                        title: project?.title ?? "",
                        shortDesc: project?.shortDesc ?? "",
                        longDesc: project?.longDesc ?? "",
                        tags: Array.isArray(project?.tags) ? project.tags : [],
                        imageUrl: project?.imageUrl ?? "/images/demo.jpg",
                        demoUrl: project?.demoUrl ?? "",
                        codeUrl: project?.codeUrl ?? "",
                        featured: Boolean(project?.featured),
                        enabled: Boolean(project?.enabled),
                        order: Number(project?.order ?? index + 1),
                    }))
                    : current.projects,
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
        <div className="space-y-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeader title="Projects" description="Create, edit and publish the projects shown on the portfolio." />
                <button
                    className="admin-primary-btn h-10 rounded-md px-3 text-sm lg:self-start"
                    onClick={openNew}
                >
                    + New project
                </button>
            </div>

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

            <Modal
                title={editing?.title ? `Edit: ${editing.title}` : "New project"}
                open={open}
                onClose={closeModal}
            >
                {editing ? (
                    <div className="admin-compact-modal grid gap-4 pb-1 lg:gap-3">
                        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-3">
                            <div className="grid min-w-0 gap-4 lg:gap-3">
                                <FormField label="Title">
                                    <input
                                        className="admin-input"
                                        value={editing.title}
                                        onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                                    />
                                </FormField>

                                <FormField label="Short description (card)">
                                    <input
                                        className="admin-input"
                                        value={editing.shortDesc}
                                        onChange={(e) => setEditing({ ...editing, shortDesc: e.target.value })}
                                    />
                                </FormField>

                                <FormField label="Long description">
                                    <textarea
                                        className="admin-input h-28 lg:h-[5.5rem] 2xl:h-28"
                                        value={editing.longDesc}
                                        onChange={(e) => setEditing({ ...editing, longDesc: e.target.value })}
                                    />
                                </FormField>

                                <FormField label="Tags (stack)">
                                    <TagInput
                                        value={editing.tags}
                                        onChange={(tags) => setEditing({ ...editing, tags })}
                                        placeholder="Example: React"
                                    />
                                </FormField>
                            </div>

                            <FormField
                                label="Project image"
                            >
                                <div className="grid gap-3 lg:gap-2.5">
                                    <div className="admin-subpanel admin-border grid min-w-0 gap-3 rounded-lg border p-0 lg:gap-2.5">
                                        <button
                                            type="button"
                                            className="group relative block w-full overflow-hidden rounded-lg bg-slate-100 text-left"
                                            onClick={() => imageInputRef.current?.click()}
                                            disabled={uploadingImage}
                                        >
                                            <img
                                                src={editing.imageUrl || "/images/demo.jpg"}
                                                alt={editing.title || "Project preview"}
                                                className="h-40 w-full object-cover lg:h-[6.25rem] 2xl:h-40"
                                                loading="lazy"
                                                onError={(e) => {
                                                    if (e.currentTarget.src.endsWith("/images/demo.jpg")) {
                                                        return;
                                                    }

                                                    e.currentTarget.src = "/images/demo.jpg";
                                                }}
                                            />
                                            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-3 py-3 text-xs font-medium text-white lg:py-2 lg:text-[11px] 2xl:py-3 2xl:text-xs">
                                                {uploadingImage ? "Uploading image..." : "Click to upload image"}
                                            </span>
                                        </button>

                                        <input
                                            ref={imageInputRef}
                                            type="file"
                                            accept="image/png,image/jpeg,image/webp,image/gif"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];

                                                if (file) {
                                                    void uploadProjectImage(file);
                                                    e.currentTarget.value = "";
                                                }
                                            }}
                                            disabled={uploadingImage}
                                        />
                                    </div>

                                    <FormField label="Demo URL">
                                        <input
                                            className="admin-input"
                                            value={editing.demoUrl}
                                            onChange={(e) => setEditing({ ...editing, demoUrl: e.target.value })}
                                        />
                                    </FormField>

                                    <FormField label="Source code URL">
                                        <input
                                            className="admin-input"
                                            value={editing.codeUrl}
                                            onChange={(e) => setEditing({ ...editing, codeUrl: e.target.value })}
                                        />
                                    </FormField>
                                </div>
                            </FormField>
                        </div>

                        <div className="admin-modal-footer flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between lg:gap-2.5">
                            <div className="grid gap-3 sm:grid-cols-[110px_auto_auto] sm:items-end">
                                <FormField label="Order">
                                    <input
                                        type="number"
                                        min={1}
                                        className="admin-input"
                                        value={editing.order}
                                        onChange={(e) => setEditing({ ...editing, order: Number(e.target.value) })}
                                    />
                                </FormField>

                                <div className="grid gap-1">
                                    <div className="admin-strong text-sm font-medium lg:text-xs 2xl:text-sm">Featured</div>
                                    <Toggle
                                        checked={editing.featured}
                                        onChange={(value) => setEditing({ ...editing, featured: value })}
                                        label={editing.featured ? "Yes" : "No"}
                                    />
                                </div>

                                <div className="grid gap-1">
                                    <div className="admin-strong text-sm font-medium lg:text-xs 2xl:text-sm">Active</div>
                                    <Toggle
                                        checked={editing.enabled}
                                        onChange={(value) => setEditing({ ...editing, enabled: value })}
                                        label={editing.enabled ? "Yes" : "No"}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                    className="admin-ghost-btn rounded-md px-3 py-2 text-sm lg:px-[0.7rem] lg:py-[0.45rem] lg:text-xs 2xl:px-3 2xl:py-2 2xl:text-sm"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="admin-primary-btn rounded-md px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-60 lg:px-[0.7rem] lg:py-[0.45rem] lg:text-xs 2xl:px-3 2xl:py-2 2xl:text-sm"
                                    onClick={() => void saveProject()}
                                    disabled={persisting}
                                >
                                    {persisting ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </Modal>
        </div>
    );
}
