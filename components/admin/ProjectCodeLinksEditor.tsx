"use client";

import { FormField } from "@/components/admin/FormField";
import type { ProjectCodeLink } from "@/lib/project-code-links";

type ProjectCodeLinksEditorProps = {
    value: ProjectCodeLink[];
    onChange: (nextValue: ProjectCodeLink[]) => void;
};

export function ProjectCodeLinksEditor({
    value,
    onChange,
}: ProjectCodeLinksEditorProps) {
    function updateLink(index: number, patch: Partial<ProjectCodeLink>) {
        onChange(
            value.map((item, itemIndex) =>
                itemIndex === index ? { ...item, ...patch } : item
            )
        );
    }

    function removeLink(index: number) {
        onChange(value.filter((_, itemIndex) => itemIndex !== index));
    }

    function addLink() {
        onChange([...value, { label: "Code", url: "" }]);
    }

    return (
        <FormField
            label="Code buttons"
            hint="Add one or more custom code links for the project details page."
        >
            <div className="grid gap-3">
                {value.map((link, index) => (
                    <div key={index} className="admin-subpanel admin-panel-frame rounded-md p-3">
                        <div className="grid gap-3">
                            <input
                                className="admin-input"
                                value={link.label}
                                placeholder="Button label"
                                onChange={(e) => updateLink(index, { label: e.target.value })}
                            />
                            <input
                                className="admin-input"
                                value={link.url}
                                placeholder="https://github.com/..."
                                onChange={(e) => updateLink(index, { url: e.target.value })}
                            />
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="admin-ghost-btn rounded-md px-3 py-2 text-xs text-red-300"
                                    onClick={() => removeLink(index)}
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
                    onClick={addLink}
                >
                    + Add code button
                </button>
            </div>
        </FormField>
    );
}
