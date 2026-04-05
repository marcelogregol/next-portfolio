"use client";

import { useRef } from "react";
import { FormField } from "@/components/admin/FormField";

type RichTextFieldProps = {
    label: string;
    value: string;
    onChange: (nextValue: string) => void;
    helperText?: string;
    textareaClassName?: string;
};

export function RichTextField({
    label,
    value,
    onChange,
    helperText = "Supports basic formatting: bold, paragraph breaks and bullet lists.",
    textareaClassName = "admin-input h-32 lg:h-32 2xl:h-32",
}: RichTextFieldProps) {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    function updateValue(nextValue: string, selectionStart?: number, selectionEnd?: number) {
        onChange(nextValue);

        window.requestAnimationFrame(() => {
            if (!textareaRef.current) return;

            textareaRef.current.focus();

            if (typeof selectionStart === "number" && typeof selectionEnd === "number") {
                textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
            }
        });
    }

    function wrapSelection(prefix: string, suffix = prefix, placeholder = "") {
        if (!textareaRef.current) return;

        const textarea = textareaRef.current;
        const { selectionStart, selectionEnd } = textarea;
        const selectedText = value.slice(selectionStart, selectionEnd);
        const insertedText = `${prefix}${selectedText || placeholder}${suffix}`;
        const nextValue = `${value.slice(0, selectionStart)}${insertedText}${value.slice(selectionEnd)}`;
        const cursorStart = selectionStart + prefix.length;
        const cursorEnd = cursorStart + (selectedText || placeholder).length;

        updateValue(nextValue, cursorStart, cursorEnd);
    }

    function insertAtCursor(text: string) {
        if (!textareaRef.current) return;

        const textarea = textareaRef.current;
        const { selectionStart, selectionEnd } = textarea;
        const nextValue = `${value.slice(0, selectionStart)}${text}${value.slice(selectionEnd)}`;
        const nextCursor = selectionStart + text.length;

        updateValue(nextValue, nextCursor, nextCursor);
    }

    return (
        <FormField label={label}>
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
                    ref={textareaRef}
                    className={textareaClassName}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <p className="admin-muted text-xs">{helperText}</p>
            </div>
        </FormField>
    );
}
