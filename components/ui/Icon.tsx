"use client";

export default function Icon({ children }: { children: React.ReactNode }) {
    return (
        <div className="surface-icon-btn flex h-11 w-11 items-center justify-center rounded-xl">
            {children}
        </div>
    );
}
