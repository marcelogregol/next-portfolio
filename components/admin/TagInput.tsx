"use client";

import { useState } from "react";

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
        <div className="rounded-md border p-2">
            <div className="flex flex-wrap gap-2">
                {value.map((t) => (
                    <button
                        type="button"
                        key={t}
                        className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700"
                        onClick={() => onChange(value.filter((x) => x !== t))}
                        title="Remove"
                    >
                        {t} ?
                    </button>
                ))}
            </div>

            <div className="mt-2 flex gap-2">
                <input
                    className="w-full rounded-md border px-3 py-2 text-sm"
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
                <button
                    type="button"
                    className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white"
                    onClick={add}
                >
                    Add
                </button>
            </div>
        </div>
    );
}
