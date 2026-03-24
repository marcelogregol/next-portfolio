import type {
    AboutContent,
    ContactContent,
    HeroContent,
    ProjectContent,
    SkillContent,
} from "./types";

async function parseResponse(response: Response) {
    const data = await response.json().catch(() => null);

    if (!response.ok) {
        const message =
            typeof data?.error === "string" && data.error.trim()
                ? data.error
                : `Request failed with status ${response.status}`;

        throw new Error(message);
    }

    return data;
}

async function requestJson(url: string, init?: RequestInit) {
    const response = await fetch(url, init);
    return parseResponse(response);
}

export async function getHero() {
    return requestJson("/api/hero");
}

export async function saveHero(payload: HeroContent) {
    return requestJson("/api/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
}

export async function getAbout() {
    return requestJson("/api/about");
}

export async function saveAbout(payload: AboutContent) {
    return requestJson("/api/about", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
}

export async function getSkills() {
    return requestJson("/api/skills");
}

export async function saveSkills(payload: SkillContent[]) {
    return requestJson("/api/skills", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
}

export async function getProjects() {
    return requestJson("/api/projects");
}

export async function saveProjects(payload: ProjectContent[]) {
    return requestJson("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
}

export async function uploadProjectImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/projects/upload", {
        method: "POST",
        body: formData,
    });

    return parseResponse(response);
}

export async function getContact() {
    return requestJson("/api/contact");
}

export async function saveContact(payload: ContactContent) {
    return requestJson("/api/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
}

export async function logoutAdmin() {
    await requestJson("/api/admin/logout", { method: "POST" });
}
