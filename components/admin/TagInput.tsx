"use client";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

export function TagInput({
    value,
    onChange,
    placeholder,
}: {
    value: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
}) {
    const [text, setText] = useState("");

    function add() {
        const t = text.trim();
        if (!t) return;
        if (value.includes(t)) return setText("");
        onChange([...value, t]);
        setText("");
    }

    return (
        <div className="admin-subpanel admin-panel-frame rounded-md p-2">
            <div className="flex flex-wrap gap-2">
                {value.map((t) => (
                    <button
                        type="button"
                        key={t}
                        className="admin-ghost-btn inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs"
                        onClick={() => onChange(value.filter((x) => x !== t))}
                        title="Remove"
                    >
                        <span>{t}</span>
                        <span className="inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-sky-200 text-slate-950">
                            <HiXMark className="h-2 w-2" />
                        </span>
                    </button>
                ))}
            </div>

            <div className="mt-2 flex gap-2">
                <input
                    className="admin-input text-sm"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={placeholder ?? "Type and press Add"}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            add();
                        }
                    }}
                />
                <button type="button" className="admin-primary-btn rounded-md px-3 py-2 text-sm" onClick={add}>
                    Add
                </button>
            </div>
        </div>
    );
}
