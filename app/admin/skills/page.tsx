"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/admin/SectionHeader";
import { FormField } from "@/components/admin/FormField";
import { Toggle } from "@/components/admin/Toggle";
import { Modal } from "@/components/admin/Modal";
import { useContent } from "@/components/admin/AdminShell";
import {
    filterSkillIconOptions,
    getSkillIconLabel,
    renderSkillIcon,
    type SkillIconKey,
} from "@/lib/skill-icons";

type SkillForm = {
    id?: number;
    name: string;
    description: string;
    category: "Front-end" | "Back-end" | "Database" | "Outros";
    level: "Iniciante" | "Intermediario" | "Avancado" | "";
    iconKey: SkillIconKey;
    enabled: boolean;
    order: number;
};

function normalizeOrders(skills: SkillForm[]) {
    return skills.map((skill, index) => ({
        ...skill,
        order: index + 1,
    }));
}

export default function SkillsPage() {
    const { content, patch, notify } = useContent();
    const skills = useMemo(
        () => [...content.skills].sort((a, b) => a.order - b.order),
        [content.skills]
    );

    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<SkillForm | null>(null);
    const [iconSearch, setIconSearch] = useState("");
    const [persisting, setPersisting] = useState(false);

    const filteredIcons = useMemo(() => filterSkillIconOptions(iconSearch), [iconSearch]);

    function openNew() {
        setEditing({
            id: -Date.now(),
            name: "",
            description: "",
            category: "Front-end",
            level: "Intermediario",
            iconKey: "gear",
            enabled: true,
            order: skills.length + 1,
        });
        setIconSearch("");
        setOpen(true);
    }

    function openEdit(skill: SkillForm) {
        setEditing({ ...skill });
        setIconSearch("");
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
        setEditing(null);
        setIconSearch("");
    }

    async function persistSkills(nextSkills: SkillForm[]) {
        try {
            setPersisting(true);

            const response = await fetch("/api/skills", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(normalizeOrders(nextSkills)),
            });

            if (!response.ok) {
                throw new Error("Failed to save skills");
            }

            const savedSkills = await response.json();

            patch((current) => ({
                ...current,
                skills: Array.isArray(savedSkills)
                    ? savedSkills.map((skill, index) => ({
                        id: typeof skill?.id === "number" ? skill.id : undefined,
                        name: skill?.name ?? "",
                        description: skill?.description ?? "",
                        category: skill?.category ?? "Outros",
                        level: skill?.level ?? "",
                        iconKey: skill?.iconKey ?? "gear",
                        enabled: Boolean(skill?.enabled),
                        order: Number(skill?.order ?? index + 1),
                    }))
                    : current.skills,
            }));

            return true;
        } catch (error) {
            console.error(error);
            notify({ type: "error", text: "Unable to save skills to the database." });
            return false;
        } finally {
            setPersisting(false);
        }
    }

    async function saveSkill() {
        if (!editing) return;

        const nextSkill = {
            ...editing,
            name: editing.name.trim(),
            description: editing.description.trim(),
            order: editing.order > 0 ? editing.order : skills.length + 1,
        };

        const exists = skills.some((skill) => skill.id === editing.id);
        const nextSkills = exists
            ? skills.map((skill) => (skill.id === editing.id ? nextSkill : skill))
            : [...skills, nextSkill];

        const saved = await persistSkills(nextSkills);

        if (saved) {
            closeModal();
        }
    }

    async function removeSkillAt(indexToRemove: number) {
        const nextSkills = normalizeOrders(
            skills.filter((_, index) => index !== indexToRemove)
        );

        const saved = await persistSkills(nextSkills);

        if (saved) {
            notify({ type: "success", text: "Skill removed successfully." });
        }
    }

    async function toggleEnabled(id: number | undefined, enabled: boolean) {
        const nextSkills = skills.map((skill) =>
            skill.id === id ? { ...skill, enabled } : skill
        );

        await persistSkills(nextSkills);
    }

    return (
        <div className="space-y-6">
            <div className="flex items-end justify-between gap-4">
                <SectionHeader
                    title="Skills"
                    description="Create, edit and publish the skills displayed on the front end."
                />
                <button
                    className="h-10 rounded-md bg-slate-900 px-3 text-sm text-white"
                    onClick={openNew}
                >
                    + New skill
                </button>
            </div>

            <div className="overflow-hidden rounded-lg border bg-white">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-left">
                        <tr>
                            <th className="p-3">Icon</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Level</th>
                            <th className="p-3">Order</th>
                            <th className="p-3">Active</th>
                            <th className="p-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map((skill, index) => (
                            <tr key={`${skill.id ?? "skill"}-${skill.order}-${index}`} className="border-t">
                                <td className="p-3 align-top">
                                    <div className="inline-flex rounded-xl border bg-slate-950 px-3 py-3 text-white">
                                        {renderSkillIcon(skill.iconKey)}
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div className="font-medium">{skill.name}</div>
                                    <div className="mt-1 text-xs text-slate-500">{skill.description || "No description"}</div>
                                </td>
                                <td className="p-3">{skill.category === "Outros" ? "Other" : skill.category}</td>
                                <td className="p-3">{skill.level === "Iniciante" ? "Beginner" : skill.level === "Intermediario" ? "Intermediate" : skill.level === "Avancado" ? "Advanced" : skill.level || "-"}</td>
                                <td className="p-3">{String(skill.order).padStart(2, "0")}</td>
                                <td className="p-3">
                                    <Toggle
                                        checked={skill.enabled}
                                        onChange={(value) => void toggleEnabled(skill.id, value)}
                                    />
                                </td>
                                <td className="p-3 text-right">
                                    <div className="inline-flex gap-2">
                                        <button
                                            type="button"
                                            className="rounded-md border px-2 py-1"
                                            onClick={() => openEdit(skill)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md border px-2 py-1 text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                                            onClick={() => void removeSkillAt(index)}
                                            disabled={persisting}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {skills.length === 0 ? (
                            <tr>
                                <td className="p-4 text-slate-500" colSpan={7}>
                                    No skills added yet.
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>

            <Modal
                title={editing?.name ? `Edit: ${editing.name}` : "New skill"}
                open={open}
                onClose={closeModal}
            >
                {editing ? (
                    <div className="grid gap-3">
                        <FormField label="Name">
                            <input
                                className="w-full rounded-md border px-3 py-2"
                                value={editing.name}
                                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                            />
                        </FormField>

                        <FormField label="Description">
                            <textarea
                                className="h-28 w-full rounded-md border px-3 py-2"
                                value={editing.description}
                                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                            />
                        </FormField>

                        <div className="grid gap-3 md:grid-cols-2">
                            <FormField label="Category">
                                <select
                                    className="w-full rounded-md border px-3 py-2"
                                    value={editing.category}
                                    onChange={(e) =>
                                        setEditing({ ...editing, category: e.target.value as SkillForm["category"] })
                                    }
                                >
                                    <option>Front-end</option>
                                    <option>Back-end</option>
                                    <option>Database</option>
                                    <option value="Outros">Other</option>
                                </select>
                            </FormField>

                            <FormField label="Level">
                                <select
                                    className="w-full rounded-md border px-3 py-2"
                                    value={editing.level}
                                    onChange={(e) =>
                                        setEditing({ ...editing, level: e.target.value as SkillForm["level"] })
                                    }
                                >
                                    <option value="">No level</option>
                                    <option value="Iniciante">Beginner</option>
                                    <option value="Intermediario">Intermediate</option>
                                    <option value="Avancado">Advanced</option>
                                </select>
                            </FormField>
                        </div>

                        <div className="grid gap-3 rounded-lg border p-4">
                            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_140px]">
                                <FormField label="Search icon">
                                    <input
                                        className="w-full rounded-md border px-3 py-2"
                                        placeholder="Example: react, database, deploy, backend..."
                                        value={iconSearch}
                                        onChange={(e) => setIconSearch(e.target.value)}
                                    />
                                </FormField>

                                <div className="grid gap-1">
                                    <div className="text-sm font-medium">Selected</div>
                                    <div className="flex min-h-11 items-center justify-center rounded-md border bg-slate-950 text-white">
                                        {renderSkillIcon(editing.iconKey)}
                                    </div>
                                    <div className="text-xs text-slate-500">{getSkillIconLabel(editing.iconKey)}</div>
                                </div>
                            </div>

                            <div className="grid max-h-64 grid-cols-2 gap-2 overflow-y-auto rounded-md border bg-slate-50 p-2 md:grid-cols-4">
                                {filteredIcons.map((option) => {
                                    const selected = editing.iconKey === option.value;

                                    return (
                                        <button
                                            key={option.value}
                                            type="button"
                                            className={`rounded-lg border p-3 text-left transition ${selected
                                                ? "border-slate-900 bg-slate-900 text-white"
                                                : "bg-white hover:border-slate-400 hover:bg-slate-100"
                                                }`}
                                            onClick={() => setEditing({ ...editing, iconKey: option.value })}
                                        >
                                            <div className={`mb-2 inline-flex rounded-lg px-2 py-2 ${selected ? "bg-white/10" : "bg-slate-950 text-white"}`}>
                                                {renderSkillIcon(option.value)}
                                            </div>
                                            <div className="text-sm font-medium">{option.label}</div>
                                        </button>
                                    );
                                })}
                                {filteredIcons.length === 0 ? (
                                    <div className="col-span-full rounded-md border border-dashed bg-white p-4 text-sm text-slate-500">
                                        No icons found for this search.
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className="grid gap-3 md:grid-cols-2">
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
                                onClick={() => void saveSkill()}
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

