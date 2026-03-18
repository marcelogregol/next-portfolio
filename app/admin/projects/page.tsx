"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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
        <div className="space-y-6">
            <div className="flex items-end justify-between gap-4">
                <SectionHeader title="Projects" description="Create, edit and publish the projects shown on the portfolio." />
                <button
                    className="h-10 rounded-md bg-slate-900 px-3 text-sm text-white"
                    onClick={openNew}
                >
                    + New project
                </button>
            </div>

            <div className="overflow-hidden rounded-lg border bg-white">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left">
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
                            <tr key={project.id} className="border-t">
                                <td className="p-3">
                                    <div className="font-medium">{project.title}</div>
                                    <div className="text-xs text-slate-500">{project.shortDesc}</div>
                                </td>
                                <td className="p-3 text-xs text-slate-500">{project.imageUrl}</td>
                                <td className="p-3">{String(project.order).padStart(2, "0")}</td>
                                <td className="p-3">
                                    <Toggle checked={project.featured} onChange={(value) => void toggleFeatured(project.id, value)} />
                                </td>
                                <td className="p-3">
                                    <Toggle checked={project.enabled} onChange={(value) => void toggleEnabled(project.id, value)} />
                                </td>
                                <td className="p-3 text-right">
                                    <div className="inline-flex gap-2">
                                        <button className="rounded-md border px-2 py-1" onClick={() => openEdit(project)}>
                                            Edit
                                        </button>
                                        <button
                                            className="rounded-md border px-2 py-1 text-red-600"
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
                                <td className="p-4 text-slate-500" colSpan={6}>
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
                    <div className="grid gap-3">
                        <FormField label="Title">
                            <input
                                className="w-full rounded-md border px-3 py-2"
                                value={editing.title}
                                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                            />
                        </FormField>

                        <FormField label="Short description (card)">
                            <input
                                className="w-full rounded-md border px-3 py-2"
                                value={editing.shortDesc}
                                onChange={(e) => setEditing({ ...editing, shortDesc: e.target.value })}
                            />
                        </FormField>

                        <FormField label="Long description">
                            <textarea
                                className="h-32 w-full rounded-md border px-3 py-2"
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

                        <FormField
                            label="Project image"
                            hint="Upload an image or keep a manual path if you prefer."
                        >
                            <div className="grid gap-3">
                                <div className="flex flex-col gap-3 rounded-lg border border-slate-200 p-3 md:flex-row md:items-center">
                                    <div className="relative h-28 w-full overflow-hidden rounded-md bg-slate-100 md:w-44">
                                        <Image
                                            src={editing.imageUrl || "/images/demo.jpg"}
                                            alt={editing.title || "Project preview"}
                                            fill
                                            className="object-cover"
                                            sizes="176px"
                                            unoptimized
                                        />
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <input
                                            type="file"
                                            accept="image/png,image/jpeg,image/webp,image/gif"
                                            className="block w-full text-sm"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];

                                                if (file) {
                                                    void uploadProjectImage(file);
                                                    e.currentTarget.value = "";
                                                }
                                            }}
                                            disabled={uploadingImage}
                                        />

                                        <input
                                            className="w-full rounded-md border px-3 py-2"
                                            value={editing.imageUrl}
                                            onChange={(e) => setEditing({ ...editing, imageUrl: e.target.value })}
                                            placeholder="/uploads/projects/example.png"
                                        />

                                        <div className="text-xs text-slate-500">
                                            {uploadingImage
                                                ? "Uploading image..."
                                                : "Recommended: upload the file and let the admin fill the path automatically."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FormField>

                        <div className="grid gap-3 md:grid-cols-2">
                            <FormField label="Demo URL">
                                <input
                                    className="w-full rounded-md border px-3 py-2"
                                    value={editing.demoUrl}
                                    onChange={(e) => setEditing({ ...editing, demoUrl: e.target.value })}
                                />
                            </FormField>

                            <FormField label="Source code URL">
                                <input
                                    className="w-full rounded-md border px-3 py-2"
                                    value={editing.codeUrl}
                                    onChange={(e) => setEditing({ ...editing, codeUrl: e.target.value })}
                                />
                            </FormField>
                        </div>

                        <div className="grid gap-3 md:grid-cols-3">
                            <FormField label="Order">
                                <input
                                    type="number"
                                    min={1}
                                    className="w-full rounded-md border px-3 py-2"
                                    value={editing.order}
                                    onChange={(e) => setEditing({ ...editing, order: Number(e.target.value) })}
                                />
                            </FormField>

                            <div className="grid gap-1">
                                <div className="text-sm font-medium">Featured</div>
                                <Toggle
                                    checked={editing.featured}
                                    onChange={(value) => setEditing({ ...editing, featured: value })}
                                    label={editing.featured ? "Yes" : "No"}
                                />
                            </div>

                            <div className="grid gap-1">
                                <div className="text-sm font-medium">Active</div>
                                <Toggle
                                    checked={editing.enabled}
                                    onChange={(value) => setEditing({ ...editing, enabled: value })}
                                    label={editing.enabled ? "Yes" : "No"}
                                />
                            </div>
                        </div>

                        <div className="mt-2 flex justify-end gap-2">
                            <button
                                className="rounded-md border px-3 py-2 text-sm"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
                                onClick={() => void saveProject()}
                                disabled={persisting}
                            >
                                {persisting ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </div>
                ) : null}
            </Modal>
        </div>
    );
}
