import { IconType } from "react-icons";
import {
    FaCode,
    FaDatabase,
    FaFigma,
    FaGear,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaNodeJs,
    FaReact,
    FaServer,
} from "react-icons/fa6";
import {
    SiCss,
    SiDocker,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

export type SkillIconKey =
    | "react"
    | "nextjs"
    | "nodejs"
    | "typescript"
    | "javascript"
    | "tailwind"
    | "prisma"
    | "mysql"
    | "postgresql"
    | "mongodb"
    | "database"
    | "git"
    | "github"
    | "html5"
    | "css3"
    | "figma"
    | "express"
    | "docker"
    | "vercel"
    | "server"
    | "code"
    | "gear";

type SkillIconDefinition = {
    label: string;
    component: IconType;
    className: string;
    keywords: string[];
};

const SKILL_ICON_MAP: Record<SkillIconKey, SkillIconDefinition> = {
    react: {
        label: "React",
        component: FaReact,
        className: "text-white/80",
        keywords: ["react", "frontend", "ui", "jsx"],
    },
    nextjs: {
        label: "Next.js",
        component: SiNextdotjs,
        className: "text-white",
        keywords: ["next", "nextjs", "ssr", "frontend"],
    },
    nodejs: {
        label: "Node.js",
        component: FaNodeJs,
        className: "text-yellow-500",
        keywords: ["node", "nodejs", "backend", "api"],
    },
    typescript: {
        label: "TypeScript",
        component: SiTypescript,
        className: "text-[#3178C6]",
        keywords: ["typescript", "ts", "type"],
    },
    javascript: {
        label: "JavaScript",
        component: SiJavascript,
        className: "text-yellow-400",
        keywords: ["javascript", "js", "frontend", "backend"],
    },
    tailwind: {
        label: "Tailwind CSS",
        component: SiTailwindcss,
        className: "text-cyan-400",
        keywords: ["tailwind", "css", "style", "design"],
    },
    prisma: {
        label: "Prisma",
        component: SiPrisma,
        className: "text-white",
        keywords: ["prisma", "orm", "database"],
    },
    mysql: {
        label: "MySQL",
        component: SiMysql,
        className: "text-sky-400",
        keywords: ["mysql", "sql", "database", "db"],
    },
    postgresql: {
        label: "PostgreSQL",
        component: SiPostgresql,
        className: "text-sky-500",
        keywords: ["postgres", "postgresql", "sql", "database", "db"],
    },
    mongodb: {
        label: "MongoDB",
        component: SiMongodb,
        className: "text-emerald-500",
        keywords: ["mongodb", "mongo", "nosql", "database"],
    },
    database: {
        label: "Banco de Dados",
        component: FaDatabase,
        className: "text-[#3178C6]",
        keywords: ["database", "banco", "sql", "nosql", "db"],
    },
    git: {
        label: "Git",
        component: FaGitAlt,
        className: "text-[#F24D2C]",
        keywords: ["git", "versionamento", "repo"],
    },
    github: {
        label: "GitHub",
        component: FaGithub,
        className: "text-white",
        keywords: ["github", "repo", "versionamento"],
    },
    html5: {
        label: "HTML5",
        component: FaHtml5,
        className: "text-orange-500",
        keywords: ["html", "html5", "markup", "frontend"],
    },
    css3: {
        label: "CSS3",
        component: SiCss,
        className: "text-sky-500",
        keywords: ["css", "css3", "style", "frontend"],
    },
    figma: {
        label: "Figma",
        component: FaFigma,
        className: "text-pink-400",
        keywords: ["figma", "design", "ui", "ux"],
    },
    express: {
        label: "Express",
        component: SiExpress,
        className: "text-white",
        keywords: ["express", "backend", "api", "node"],
    },
    docker: {
        label: "Docker",
        component: SiDocker,
        className: "text-sky-400",
        keywords: ["docker", "container", "containers", "devops", "infra"],
    },
    vercel: {
        label: "Vercel",
        component: SiVercel,
        className: "text-white",
        keywords: ["vercel", "deploy", "hosting"],
    },
    server: {
        label: "Server",
        component: FaServer,
        className: "text-indigo-400",
        keywords: ["server", "backend", "api", "infra"],
    },
    code: {
        label: "Codigo",
        component: FaCode,
        className: "text-indigo-400",
        keywords: ["code", "codigo", "dev", "programacao"],
    },
    gear: {
        label: "Generico",
        component: FaGear,
        className: "text-[#3178C6]",
        keywords: ["generico", "geral", "tool", "config"],
    },
};

export const SKILL_ICON_OPTIONS = (Object.entries(SKILL_ICON_MAP) as [SkillIconKey, SkillIconDefinition][]).map(
    ([value, definition]) => ({
        value,
        label: definition.label,
        keywords: definition.keywords,
    })
);

export function normalizeSkillIconKey(iconKey?: string | null): SkillIconKey {
    if (!iconKey) {
        return "gear";
    }

    return iconKey in SKILL_ICON_MAP ? (iconKey as SkillIconKey) : "gear";
}

export function getSkillIconLabel(iconKey?: string | null) {
    return SKILL_ICON_MAP[normalizeSkillIconKey(iconKey)].label;
}

export function filterSkillIconOptions(search: string) {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
        return SKILL_ICON_OPTIONS;
    }

    return SKILL_ICON_OPTIONS.filter((option) => {
        const haystack = [option.value, option.label, ...option.keywords].join(" ").toLowerCase();
        return haystack.includes(normalizedSearch);
    });
}

export function renderSkillIcon(iconKey?: string | null) {
    const definition = SKILL_ICON_MAP[normalizeSkillIconKey(iconKey)];
    const Component = definition.component;

    return <Component className={`text-4xl ${definition.className}`} />;
}
