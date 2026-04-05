"use client";

import { RichTextField } from "@/components/admin/RichTextField";

type ProjectLongDescriptionFieldProps = {
    value: string;
    onChange: (nextValue: string) => void;
};

export function ProjectLongDescriptionField({
    value,
    onChange,
}: ProjectLongDescriptionFieldProps) {
    return <RichTextField label="Long description" value={value} onChange={onChange} />;
}
