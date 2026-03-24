"use client";

import { useMemo, useState } from "react";
import { AdminPageSection } from "@/components/admin/AdminPageSection";
import { SkillsModal, type SkillForm } from "@/components/admin/SkillsModal";
import { Toggle } from "@/components/admin/Toggle";
import { useContent } from "@/components/admin/AdminShell";
import { saveSkills } from "@/lib/admin/api";
import { mapSkillsResponse } from "@/lib/admin/mappers";
import { renderSkillIcon, type SkillIconKey } from "@/lib/skill-icons";

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

            const savedSkills = await saveSkills(payload);

            patch((current) => ({
                ...current,
                skills: mapSkillsResponse(savedSkills),
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
        <AdminPageSection
            title="Skills"
            description="Create, edit and publish the skills displayed on the front end."
            actions={
                <button
                    className="admin-primary-btn h-10 rounded-md px-3 text-sm lg:self-start"
                    onClick={openNew}
                >
                    + New skill
                </button>
            }
        >

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
                                    <div className="admin-primary-btn inline-flex rounded-xl border px-3 py-3">
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

            <SkillsModal
                open={open}
                editing={editing}
                iconSearch={iconSearch}
                persisting={persisting}
                onClose={closeModal}
                onSave={saveSkill}
                onChange={setEditing}
                onIconSearchChange={setIconSearch}
            />
        </AdminPageSection>
    );
}
