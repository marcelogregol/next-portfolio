"use client";

import { useMemo } from "react";
import { FormField } from "@/components/admin/FormField";
import { Modal } from "@/components/admin/Modal";
import { Toggle } from "@/components/admin/Toggle";
import {
    filterSkillIconOptions,
    renderSkillIcon,
    type SkillIconKey,
} from "@/lib/skill-icons";

export type SkillForm = {
    id?: number;
    name: string;
    description: string;
    category: "Front-end" | "Back-end" | "Database" | "Outros";
    level: "Iniciante" | "Intermediario" | "Avancado" | "";
    iconKey: SkillIconKey;
    enabled: boolean;
    order: number;
};

type SkillsModalProps = {
    open: boolean;
    editing: SkillForm | null;
    iconSearch: string;
    persisting: boolean;
    onClose: () => void;
    onSave: () => void | Promise<void>;
    onChange: (nextSkill: SkillForm) => void;
    onIconSearchChange: (value: string) => void;
};

export function SkillsModal({
    open,
    editing,
    iconSearch,
    persisting,
    onClose,
    onSave,
    onChange,
    onIconSearchChange,
}: SkillsModalProps) {
    const filteredIcons = useMemo(
        () => filterSkillIconOptions(iconSearch),
        [iconSearch]
    );

    return (
        <Modal
            title={editing?.name ? `Edit: ${editing.name}` : "New skill"}
            open={open}
            onClose={onClose}
        >
            {editing ? (
                <div className="admin-compact-modal grid gap-3">
                    <div className="grid gap-3 lg:grid-cols-2 lg:items-stretch">
                        <div className="grid gap-3">
                            <FormField label="Name">
                                <input
                                    className="admin-input"
                                    value={editing.name}
                                    onChange={(e) => onChange({ ...editing, name: e.target.value })}
                                />
                            </FormField>

                            <FormField label="Level">
                                <select
                                    className="admin-input"
                                    value={editing.level}
                                    onChange={(e) =>
                                        onChange({
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
                                        onChange={(e) => onIconSearchChange(e.target.value)}
                                    />
                                </FormField>

                                <FormField label="Selected">
                                    <div className="admin-selected-field lg:min-h-[2.35rem]">
                                        {renderSkillIcon(editing.iconKey)}
                                    </div>
                                </FormField>
                            </div>
                        </div>

                        <FormField label="Description" className="flex h-full flex-col">
                            <textarea
                                className="admin-input h-full min-h-[9.75rem] flex-1 resize-none"
                                value={editing.description}
                                onChange={(e) =>
                                    onChange({
                                        ...editing,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </FormField>
                    </div>

                    <div className="admin-icon-grid grid max-h-64 grid-cols-2 gap-2 overflow-y-auto pr-3 sm:grid-cols-3 lg:max-h-44 lg:grid-cols-6 lg:gap-[0.45rem] 2xl:max-h-64">
                        {filteredIcons.map((option) => {
                            const selected = editing.iconKey === option.value;

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    className={`admin-icon-card admin-panel-frame flex min-h-[5.1rem] flex-col items-center justify-center rounded-lg p-2 text-center transition lg:p-[0.45rem] ${selected
                                        ? "admin-primary-btn"
                                        : "admin-subpanel admin-icon-hover"
                                        }`}
                                    onClick={() =>
                                        onChange({
                                            ...editing,
                                            iconKey: option.value,
                                        })
                                    }
                                >
                                    <div
                                        className={`mb-1 inline-flex rounded-lg px-1.5 py-1.5 ${selected
                                            ? "admin-icon-chip"
                                            : "admin-primary-btn"
                                            }`}
                                    >
                                        {renderSkillIcon(option.value)}
                                    </div>
                                    <div className="text-[11px] font-medium leading-tight text-slate-100">
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

                    <div className="admin-modal-footer flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div className="grid gap-3 sm:grid-cols-[110px_auto] sm:items-end">
                            <FormField label="Order">
                                <input
                                    type="number"
                                    min={1}
                                    className="admin-input"
                                    value={editing.order}
                                    onChange={(e) =>
                                        onChange({
                                            ...editing,
                                            order: Number(e.target.value),
                                        })
                                    }
                                />
                            </FormField>

                            <div className="grid gap-1">
                                <div className="text-sm font-medium text-white lg:text-xs 2xl:text-sm">Active</div>
                                <Toggle
                                    checked={editing.enabled}
                                    onChange={(value) =>
                                        onChange({ ...editing, enabled: value })
                                    }
                                    label={editing.enabled ? "Yes" : "No"}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                className="admin-ghost-btn rounded-md px-3 py-2 text-sm lg:px-[0.7rem] lg:py-[0.45rem] lg:text-xs 2xl:px-3 2xl:py-2 2xl:text-sm"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="admin-primary-btn rounded-md px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-60 lg:px-[0.7rem] lg:py-[0.45rem] lg:text-xs 2xl:px-3 2xl:py-2 2xl:text-sm"
                                onClick={() => void onSave()}
                                disabled={persisting}
                            >
                                {persisting ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </Modal>
    );
}
