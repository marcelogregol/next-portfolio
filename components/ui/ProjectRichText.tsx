"use client";

import { Fragment } from "react";

function renderInlineBold(text: string) {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
            return <strong key={index} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
        }

        return <Fragment key={index}>{part}</Fragment>;
    });
}

export function ProjectRichText({ value, className = "" }: { value: string; className?: string }) {
    const blocks = value
        .split(/\n{2,}/)
        .map((block) => block.trim())
        .filter(Boolean);

    if (blocks.length === 0) {
        return null;
    }

    return (
        <div className={className}>
            {blocks.map((block, index) => {
                const lines = block.split("\n").map((line) => line.trimEnd());
                const bulletLines = lines.filter((line) => line.trim().startsWith("- "));
                const isBulletList = bulletLines.length > 0 && bulletLines.length === lines.filter(Boolean).length;

                if (isBulletList) {
                    return (
                        <ul key={index} className="list-disc space-y-2 pl-5">
                            {lines.map((line, itemIndex) => (
                                <li key={itemIndex}>{renderInlineBold(line.replace(/^\s*-\s*/, ""))}</li>
                            ))}
                        </ul>
                    );
                }

                return (
                    <p key={index} className="leading-8">
                        {lines.map((line, lineIndex) => (
                            <Fragment key={lineIndex}>
                                {lineIndex > 0 ? <br /> : null}
                                {renderInlineBold(line)}
                            </Fragment>
                        ))}
                    </p>
                );
            })}
        </div>
    );
}
