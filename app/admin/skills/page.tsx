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

    const skills = useMemo<SkillForm[]>(
        () =>
            [...content.skills]
                .map((skill, index) => ({
                    id: typeof skill?.id === "number" ? skill.id : undefined,
                    name: skill?.name ?? "",
                    description: skill?.description ?? "",
                    category:
                        skill?.category === "Front-end" ||
                            skill?.category === "Back-end" ||
                            skill?.category === "Database" ||
                            skill?.category === "Outros"
                            ? skill.category
                            : "Outros",
                    level:
                        skill?.level === "Iniciante" ||
                            skill?.level === "Intermediario" ||
                            skill?.level === "Avancado" ||
                            skill?.level === ""
                            ? skill.level
                            : "",
                    iconKey:
                        typeof skill?.iconKey === "string"
                            ? (skill.iconKey as SkillIconKey)
                            : "gear",
                    enabled: Boolean(skill?.enabled),
                    order: Number(skill?.order ?? index + 1),
                }))
                .sort((a, b) => a.order - b.order),
        [content.skills]
    );

    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<SkillForm | null>(null);
    const [iconSearch, setIconSearch] = useState("");
    const [persisting, setPersisting] = useState(false);

    const filteredIcons = useMemo(
        () => filterSkillIconOptions(iconSearch),
        [iconSearch]
    );

    function openNew() {
        setEditing({
            id: undefined,
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

            const payload = normalizeOrders(nextSkills).map((skill) => ({
                ...skill,
                id: typeof skill.id === "number" ? skill.id : undefined,
            }));

            const response = await fetch("/api/skills", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
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
                        category:
                            skill?.category === "Front-end" ||
                                skill?.category === "Back-end" ||
                                skill?.category === "Database" ||
                                skill?.category === "Outros"
                                ? skill.category
                                : "Outros",
                        level:
                            skill?.level === "Iniciante" ||
                                skill?.level === "Intermediario" ||
                                skill?.level === "Avancado" ||
                                skill?.level === ""
                                ? skill.level
                                : "",
                        iconKey:
                            typeof skill?.iconKey === "string"
                                ? (skill.iconKey as SkillIconKey)
                                : "gear",
                        enabled: Boolean(skill?.enabled),
                        order: Number(skill?.order ?? index + 1),
                    }))
                    : current.skills,
            }));

            return true;
        } catch (error) {
            console.error(error);
            notify({
                type: "error",
                text: "Unable to save skills to the database.",
            });
            return false;
        } finally {
            setPersisting(false);
        }
    }

    async function saveSkill() {
        if (!editing) return;

        const nextSkill: SkillForm = {
            ...editing,
            id: editing.id ?? undefined,
            name: editing.name.trim(),
            description: editing.description.trim(),
            order: editing.order > 0 ? editing.order : skills.length + 1,
        };

        const exists =
            editing.id !== undefined &&
            skills.some((skill) => skill.id === editing.id);

        const nextSkills: SkillForm[] = exists
            ? skills.map((skill) =>
                skill.id === editing.id ? nextSkill : skill
            )
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
        const nextSkills: SkillForm[] = skills.map((skill) =>
            skill.id === id ? { ...skill, enabled } : skill
        );

        await persistSkills(nextSkills);
    }

    return (
        <div className="admin-page space-y-6">
            <div className="admin-page-header flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeader
                    title="Skills"
                    description="Create, edit and publish the skills displayed on the front end."
                />
                <button
                    className="admin-create-button admin-primary-btn h-10 rounded-md px-3 text-sm text-white lg:self-start"
                    onClick={openNew}
                >
                    + New skill
                </button>
            </div>

            <div className="admin-table-shell admin-border overflow-x-auto rounded-lg border">
                <table className="min-w-[760px] w-full text-sm">
                    <thead className="admin-table-head text-left">
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
                            <tr
                                key={`${skill.id ?? "skill"}-${skill.order}-${index}`}
                                className="admin-row-divider"
                            >
                                <td className="p-3 align-top">
                                    <div className="admin-primary-btn inline-flex rounded-xl border px-3 py-3 text-white">
                                        {renderSkillIcon(skill.iconKey)}
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div className="admin-strong font-medium">{skill.name}</div>
                                    <div className="admin-muted mt-1 text-xs">
                                        {skill.description || "No description"}
                                    </div>
                                </td>
                                <td className="p-3">
                                    {skill.category === "Outros"
                                        ? "Other"
                                        : skill.category}
                                </td>
                                <td className="p-3">
                                    {skill.level === "Iniciante"
                                        ? "Beginner"
                                        : skill.level === "Intermediario"
                                            ? "Intermediate"
                                            : skill.level === "Avancado"
                                                ? "Advanced"
                                                : skill.level || "-"}
                                </td>
                                <td className="p-3">
                                    {String(skill.order).padStart(2, "0")}
                                </td>
                                <td className="p-3">
                                    <Toggle
                                        checked={skill.enabled}
                                        onChange={(value) =>
                                            void toggleEnabled(skill.id, value)
                                        }
                                    />
                                </td>
                                <td className="p-3 text-right">
                                    <div className="inline-flex gap-2">
                                        <button
                                            type="button"
                                            className="admin-ghost-btn rounded-md px-2 py-1"
                                            onClick={() => openEdit(skill)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="admin-ghost-btn rounded-md px-2 py-1 text-red-300 disabled:cursor-not-allowed disabled:opacity-60"
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
                                <td className="admin-muted p-4" colSpan={7}>
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
                    <div className="admin-skills-modal grid gap-3">
                        <div className="grid gap-3 lg:grid-cols-2 lg:items-stretch">
                            <div className="grid gap-3">
                                <FormField label="Name">
                                    <input
                                        className="admin-input"
                                        value={editing.name}
                                        onChange={(e) =>
                                            setEditing({ ...editing, name: e.target.value })
                                        }
                                    />
                                </FormField>

                                <FormField label="Level">
                                    <select
                                        className="admin-input"
                                        value={editing.level}
                                        onChange={(e) =>
                                            setEditing({
                                                ...editing,
                                                level: e.target.value as SkillForm["level"],
                                            })
                                        }
                                    >
                                        <option value="">No level</option>
                                        <option value="Iniciante">Beginner</option>
                                        <option value="Intermediario">Intermediate</option>
                                        <option value="Avancado">Advanced</option>
                                    </select>
                                </FormField>

                                <div className="grid gap-3 md:grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)] md:items-end">
                                    <FormField label="Search icon">
                                        <input
                                            className="admin-input"
                                            placeholder="Example: react, database, deploy, backend..."
                                            value={iconSearch}
                                            onChange={(e) => setIconSearch(e.target.value)}
                                        />
                                    </FormField>

                                    <FormField label="Selected">
                                        <div className="admin-selected-box admin-selected-field admin-panel-frame flex w-full items-center justify-center">
                                            {renderSkillIcon(editing.iconKey)}
                                        </div>
                                    </FormField>
                                </div>
                            </div>

                            <div className="flex h-full flex-col">
                                <div className="admin-field-label mb-1 text-sm font-medium">Description</div>
                                <textarea
                                    className="admin-input h-full min-h-[9.75rem] flex-1 resize-none"
                                    value={editing.description}
                                    onChange={(e) =>
                                        setEditing({
                                            ...editing,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <div className="admin-icon-grid pr-3 grid max-h-64 grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3 lg:grid-cols-6">
                                {filteredIcons.map((option) => {
                                    const selected = editing.iconKey === option.value;

                                    return (
                                        <button
                                            key={option.value}
                                            type="button"
                                            className={`admin-icon-card admin-panel-frame rounded-lg p-2 text-center transition ${selected
                                                ? "admin-primary-btn text-white"
                                                : "admin-subpanel admin-icon-hover"
                                                }`}
                                            onClick={() =>
                                                setEditing({
                                                    ...editing,
                                                    iconKey: option.value,
                                                })
                                            }
                                        >
                                            <div
                                                className={`mb-1 inline-flex rounded-lg px-1.5 py-1.5 ${selected
                                                    ? "admin-icon-chip"
                                                    : "admin-primary-btn text-white"
                                                    }`}
                                            >
                                                {renderSkillIcon(option.value)}
                                            </div>
                                            <div className="admin-subtitle text-[11px] font-medium leading-tight">
                                                {option.label}
                                            </div>
                                        </button>
                                    );
                                })}

                                {filteredIcons.length === 0 ? (
                                    <div className="admin-muted admin-subpanel admin-panel-frame col-span-full rounded-md border-dashed p-4 text-sm">
                                        No icons found for this search.
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className="admin-modal-footer flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div className="grid gap-3 sm:grid-cols-[110px_auto] sm:items-end">
                                <FormField label="Order">
                                    <input
                                        type="number"
                                        min={1}
                                        className="admin-input"
                                        value={editing.order}
                                        onChange={(e) =>
                                            setEditing({
                                                ...editing,
                                                order: Number(e.target.value),
                                            })
                                        }
                                    />
                                </FormField>

                                <div className="grid gap-1">
                                    <div className="admin-subtitle text-sm font-medium">Active</div>
                                    <Toggle
                                        checked={editing.enabled}
                                        onChange={(value) =>
                                            setEditing({ ...editing, enabled: value })
                                        }
                                        label={editing.enabled ? "Yes" : "No"}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-2">
                            <button
                                className="admin-ghost-btn rounded-md px-3 py-2 text-sm"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="admin-primary-btn rounded-md px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
                                onClick={() => void saveSkill()}
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
