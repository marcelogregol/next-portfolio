"use client";

import { DEFAULT_CONTENT, PortfolioContent } from "./types";

const KEY = "mrg_portfolio_content_v1";

export function loadContent(): PortfolioContent {
    if (typeof window === "undefined") return DEFAULT_CONTENT;
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return DEFAULT_CONTENT;
        const parsed = JSON.parse(raw) as PortfolioContent;
        return { ...DEFAULT_CONTENT, ...parsed };
    } catch {
        return DEFAULT_CONTENT;
    }
}

export function saveContent(next: PortfolioContent) {
    if (typeof window === "undefined") return;
    localStorage.setItem(KEY, JSON.stringify({ ...next, updatedAt: new Date().toISOString() }));
}

export function exportJSON(): string {
    const data = loadContent();
    return JSON.stringify(data, null, 2);
}

export function importJSON(json: string): PortfolioContent {
    const parsed = JSON.parse(json) as PortfolioContent;
    const merged = { ...DEFAULT_CONTENT, ...parsed, updatedAt: new Date().toISOString() };
    saveContent(merged);
    return merged;
}

export function uid(prefix = "id") {
    return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}