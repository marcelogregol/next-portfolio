export type PublishState = "draft" | "published";

export type Hero = {
    greeting: string;
    headline: string;
    subheadline: string;
    cta1Text: string;
    cta1Href: string;
    cta2Text: string;
    cta2Href: string;
};

export type About = {
    title: string;
    text: string;
    highlights: string[];
    location: string;
    availabilityRemote: boolean;
    availabilityOnsite: boolean;
};

export type Skill = {
    id: string;
    name: string;
    category: "Front-end" | "Back-end" | "Database" | "Outros";
    level?: "Iniciante" | "Intermediário" | "Avançado";
    enabled: boolean;
    order: number;
};

export type Project = {
    id: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    tags: string[];
    demoUrl: string;
    codeUrl: string;
    featured: boolean;
    enabled: boolean;
    order: number;
};

export type Contact = {
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButtonText: string;
    ctaButtonHref: string;
};

export type PortfolioContent = {
    publishState: PublishState;
    hero: Hero;
    about: About;
    skills: Skill[];
    projects: Project[];
    contact: Contact;
    updatedAt: string;
};

export const DEFAULT_CONTENT: PortfolioContent = {
    publishState: "draft",
    updatedAt: new Date().toISOString(),
    hero: {
        greeting: "Olá, eu sou Marcelo 👋",
        headline: "Desenvolvedor Full-Stack",
        subheadline:
            "Crio aplicações completas, modernas e focadas em performance, do front-end ao back-end.",
        cta1Text: "Ver Projetos",
        cta1Href: "#projetos",
        cta2Text: "Entrar em Contato",
        cta2Href: "#contato",
    },
    about: {
        title: "Sobre Mim",
        text:
            "Desenvolvedor experiente na criação de aplicações completas, modernas e escaláveis. Atualmente focado em aprimorar habilidades full-stack e melhores práticas de software.",
        highlights: ["+5 anos", "Foco em performance", "Clean architecture"],
        location: "Marília / SP",
        availabilityRemote: true,
        availabilityOnsite: false,
    },
    skills: [
        { id: "js", name: "JavaScript", category: "Front-end", level: "Avançado", enabled: true, order: 1 },
        { id: "ts", name: "TypeScript", category: "Front-end", level: "Avançado", enabled: true, order: 2 },
        { id: "react", name: "React", category: "Front-end", level: "Avançado", enabled: true, order: 3 },
        { id: "node", name: "Node.js", category: "Back-end", level: "Avançado", enabled: true, order: 4 },
        { id: "express", name: "express.js", category: "Back-end", level: "Avançado", enabled: true, order: 5 },
        { id: "mongo", name: "MongoDB", category: "Database", level: "Intermediário", enabled: true, order: 6 },
    ],
    projects: [
        {
            id: "p1",
            title: "Dashboard Financeiro",
            shortDesc: "Dashboard com indicadores e gráficos.",
            longDesc: "Projeto focado em visualização de dados e performance.",
            tags: ["React", "Tailwind", "API"],
            demoUrl: "",
            codeUrl: "",
            featured: true,
            enabled: true,
            order: 1,
        },
        {
            id: "p2",
            title: "E-Commerce Store",
            shortDesc: "Loja virtual com checkout.",
            longDesc: "Carrinho, autenticação e integração com serviços.",
            tags: ["React", "TypeScript", "Firebase"],
            demoUrl: "",
            codeUrl: "",
            featured: false,
            enabled: true,
            order: 2,
        },
    ],
    contact: {
        email: "marcelo.dev@email.com",
        whatsapp: "(14) 99999-9999",
        linkedin: "https://linkedin.com/in/seu-perfil",
        github: "https://github.com/seu-user",
        ctaTitle: "Vamos trabalhar juntos?",
        ctaSubtitle: "Estou disponível para oportunidades remotas ou presenciais.",
        ctaButtonText: "Entrar em Contato",
        ctaButtonHref: "#contato",
    },
};