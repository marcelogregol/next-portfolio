"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const nextPath = searchParams.get("next") || "/admin/hero";

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showDemoPasswordHint, setShowDemoPasswordHint] = useState(false);

    useEffect(() => {
        setShowDemoPasswordHint(window.location.hostname === "demo.mgregol.tech");
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) {
                setError("Invalid password.");
                return;
            }

            router.push(nextPath);
            router.refresh();
        } catch (error) {
            console.error(error);
            setError("Unable to sign in right now.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#050816] px-6 py-10 text-white">
            <div className="mx-auto flex min-h-[80vh] max-w-md items-center">
                <div className="glass w-full rounded-3xl p-8">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">Dashboard</p>
                    <h1 className="mt-3 text-3xl font-extrabold tracking-tight">Restricted access</h1>
                    <p className="mt-3 text-sm text-white/70">
                        Enter your password to manage portfolio content.
                    </p>
                    {showDemoPasswordHint ? (
                        <p className="mt-2 text-sm text-white/80">
                            Password for testing: <strong>admin123</strong>
                        </p>
                    ) : null}

                    <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                        <label className="grid gap-2">
                            <span className="text-sm font-medium text-white/80">Password</span>
                            <input
                                type="password"
                                className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 outline-none transition focus:border-blue-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </label>

                        {error ? (
                            <p className="rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                                {error}
                            </p>
                        ) : null}

                        <button
                            type="submit"
                            className="btn-ghost mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign in to dashboard"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
