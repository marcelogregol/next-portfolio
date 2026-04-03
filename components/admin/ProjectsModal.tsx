"use client";

import { RefObject, useRef } from "react";
import { FormField } from "@/components/admin/FormField";
import { Modal } from "@/components/admin/Modal";
import { TagInput } from "@/components/admin/TagInput";
import { Toggle } from "@/components/admin/Toggle";
import type { ProjectCodeLink } from "@/lib/project-code-links";

export type ProjectForm = {
    id?: number | null;
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: string[];
    imageUrl: string;
    demoUrl: string;
    codeLinks: ProjectCodeLink[];
    featured: boolean;
    enabled: boolean;
    order: number;
};

type ProjectsModalProps = {
    open: boolean;
    editing: ProjectForm | null;
    persisting: boolean;
    uploadingImage: boolean;
    imageInputRef: RefObject<HTMLInputElement | null>;
    onClose: () => void;
    onSave: () => void | Promise<void>;
    onChange: (nextProject: ProjectForm) => void;
    onUploadImage: (file: File) => void | Promise<void>;
};

export function ProjectsModal({
    open,
    editing,
    persisting,
    uploadingImage,
    imageInputRef,
    onClose,
    onSave,
    onChange,
    onUploadImage,
}: ProjectsModalProps) {
    const longDescRef = useRef<HTMLTextAreaElement | null>(null);

    function updateLongDescription(nextValue: string, selectionStart?: number, selectionEnd?: number) {
        if (!editing) return;

        onChange({ ...editing, longDesc: nextValue });

        window.requestAnimationFrame(() => {
            if (!longDescRef.current) return;

            longDescRef.current.focus();

            if (typeof selectionStart === "number" && typeof selectionEnd === "number") {
                longDescRef.current.setSelectionRange(selectionStart, selectionEnd);
            }
        });
    }

    function wrapSelection(prefix: string, suffix = prefix, placeholder = "") {
        if (!editing || !longDescRef.current) return;

        const textarea = longDescRef.current;
        const { selectionStart, selectionEnd, value } = textarea;
        const selectedText = value.slice(selectionStart, selectionEnd);
        const insertedText = `${prefix}${selectedText || placeholder}${suffix}`;
        const nextValue = `${value.slice(0, selectionStart)}${insertedText}${value.slice(selectionEnd)}`;
        const cursorStart = selectionStart + prefix.length;
        const cursorEnd = cursorStart + (selectedText || placeholder).length;

        updateLongDescription(nextValue, cursorStart, cursorEnd);
    }

    function insertAtCursor(text: string) {
        if (!editing || !longDescRef.current) return;

        const textarea = longDescRef.current;
        const { selectionStart, selectionEnd, value } = textarea;
        const nextValue = `${value.slice(0, selectionStart)}${text}${value.slice(selectionEnd)}`;
        const nextCursor = selectionStart + text.length;

        updateLongDescription(nextValue, nextCursor, nextCursor);
    }

    return (
        <Modal
            title={editing?.title ? `Edit: ${editing.title}` : "New project"}
            open={open}
            onClose={onClose}
        >
            {editing ? (
                <div className="admin-compact-modal grid gap-4 pb-1 lg:gap-3">
                    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-3">
                        <div className="grid min-w-0 gap-4 lg:gap-3">
                            <FormField label="Title">
                                <input
                                    className="admin-input"
                                    value={editing.title}
                                    onChange={(e) => onChange({ ...editing, title: e.target.value })}
                                />
                            </FormField>

                            <FormField label="Short description (card)">
                                <input
                                    className="admin-input"
                                    value={editing.shortDesc}
                                    onChange={(e) => onChange({ ...editing, shortDesc: e.target.value })}
                                />
                            </FormField>

                            <FormField label="Long description">
                                <div className="grid gap-2">
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            type="button"
                                            className="admin-ghost-btn rounded-md px-3 py-1.5 text-xs"
                                            onClick={() => wrapSelection("**", "**", "bold text")}
                                        >
                                            Bold
                                        </button>
                                        <button
                                            type="button"
                                            className="admin-ghost-btn rounded-md px-3 py-1.5 text-xs"
                                            onClick={() => insertAtCursor("\n\n")}
                                        >
                                            Line break
                                        </button>
                                        <button
                                            type="button"
                                            className="admin-ghost-btn rounded-md px-3 py-1.5 text-xs"
                                            onClick={() => insertAtCursor("\n- ")}
                                        >
                                            Bullet
                                        </button>
                                    </div>

                                    <textarea
                                        ref={longDescRef}
                                        className="admin-input h-32 lg:h-32 2xl:h-32"
                                        value={editing.longDesc}
                                        onChange={(e) => onChange({ ...editing, longDesc: e.target.value })}
                                    />
                                    <p className="admin-muted text-xs">
                                        Supports basic formatting: bold, paragraph breaks and bullet lists.
                                    </p>
                                </div>
                            </FormField>

                            <FormField label="Tags (stack)">
                                <TagInput
                                    value={editing.tags}
                                    onChange={(tags) => onChange({ ...editing, tags })}
                                    placeholder="Example: React"
                                />
                            </FormField>
                        </div>

                        <FormField label="Project image">
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
                                                void onUploadImage(file);
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
                                        onChange={(e) => onChange({ ...editing, demoUrl: e.target.value })}
                                    />
                                </FormField>

                                <FormField label="Code buttons" hint="Add one or more custom code links for the project details page.">
                                    <div className="grid gap-3">
                                        {editing.codeLinks.map((link, index) => (
                                            <div key={`${index}-${link.label}-${link.url}`} className="admin-subpanel admin-panel-frame rounded-md p-3">
                                                <div className="grid gap-3">
                                                    <input
                                                        className="admin-input"
                                                        value={link.label}
                                                        placeholder="Button label"
                                                        onChange={(e) =>
                                                            onChange({
                                                                ...editing,
                                                                codeLinks: editing.codeLinks.map((item, itemIndex) =>
                                                                    itemIndex === index ? { ...item, label: e.target.value } : item
                                                                ),
                                                            })
                                                        }
                                                    />
                                                    <input
                                                        className="admin-input"
                                                        value={link.url}
                                                        placeholder="https://github.com/..."
                                                        onChange={(e) =>
                                                            onChange({
                                                                ...editing,
                                                                codeLinks: editing.codeLinks.map((item, itemIndex) =>
                                                                    itemIndex === index ? { ...item, url: e.target.value } : item
                                                                ),
                                                            })
                                                        }
                                                    />
                                                    <div className="flex justify-end">
                                                        <button
                                                            type="button"
                                                            className="admin-ghost-btn rounded-md px-3 py-2 text-xs text-red-300"
                                                            onClick={() =>
                                                                onChange({
                                                                    ...editing,
                                                                    codeLinks: editing.codeLinks.filter((_, itemIndex) => itemIndex !== index),
                                                                })
                                                            }
                                                        >
                                                            Remove code button
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <button
                                            type="button"
                                            className="admin-ghost-btn rounded-md px-3 py-2 text-sm"
                                            onClick={() =>
                                                onChange({
                                                    ...editing,
                                                    codeLinks: [...editing.codeLinks, { label: "Code", url: "" }],
                                                })
                                            }
                                        >
                                            + Add code button
                                        </button>
                                    </div>
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
                                    onChange={(e) => onChange({ ...editing, order: Number(e.target.value) })}
                                />
                            </FormField>

                            <div className="grid gap-1">
                                <div className="admin-strong text-sm font-medium lg:text-xs 2xl:text-sm">Featured</div>
                                <Toggle
                                    checked={editing.featured}
                                    onChange={(value) => onChange({ ...editing, featured: value })}
                                    label={editing.featured ? "Yes" : "No"}
                                />
                            </div>

                            <div className="grid gap-1">
                                <div className="admin-strong text-sm font-medium lg:text-xs 2xl:text-sm">Active</div>
                                <Toggle
                                    checked={editing.enabled}
                                    onChange={(value) => onChange({ ...editing, enabled: value })}
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
