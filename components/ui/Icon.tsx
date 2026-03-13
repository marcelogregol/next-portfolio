"use client";

export default function Icon({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-stroke flex h-11 w-11 items-center justify-center rounded-xl border bg-white/5">
            {children}
        </div>
    );
}
