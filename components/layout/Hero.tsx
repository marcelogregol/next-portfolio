import { getHeroContent } from "@/lib/hero";
import Image from "next/image";

function isExternalHref(href?: string) {
    return /^https?:\/\//i.test(href ?? "");
}

function normalizeProjectHref(href?: string) {
    if (href === "#projetos") return "#projects";
    return href || "#projects";
}

function normalizeContactHref(href?: string) {
    return href === "#contato" ? "#contact" : href || "#contact";
}

export default async function Hero() {
    const hero = await getHeroContent();
    const projectHref = normalizeProjectHref(hero.cta1Href);
    const contactHref = normalizeContactHref(hero.cta2Href);
    const projectExternal = isExternalHref(projectHref);
    const contactExternal = isExternalHref(contactHref);

    return (
        <section className="section-shell section-divider section-surface-hero relative overflow-hidden pt-8 md:pt-12">
            <div className="section-backdrop section-backdrop-hero" />
            <div className="container-base relative z-10 flex flex-col-reverse items-center gap-10 md:flex-row md:gap-8">
                <div className="w-full text-center md:w-1/2 md:text-left">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted sm:text-base">
                        {hero.greeting}
                    </p>
                    <h1 className="mt-3 text-balance text-[2rem] font-extrabold tracking-tight sm:text-5xl md:max-w-xl md:text-6xl">
                        {hero.title}
                    </h1>
                    <p className="text-sub mt-3 max-w-2xl text-[0.96rem] leading-6 sm:text-lg md:max-w-xl md:leading-8">
                        {hero.subtitle}
                    </p>

                    <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap md:mt-7">
                        <a
                            className="btn-ghost min-h-12 w-full sm:w-auto"
                            href={projectHref}
                            target={projectExternal ? "_blank" : undefined}
                            rel={projectExternal ? "noreferrer" : undefined}
                        >
                            {hero.cta1Text || "View Projects"}
                        </a>
                        <a
                            className="btn-ghost min-h-12 w-full sm:w-auto"
                            href={contactHref}
                            target={contactExternal ? "_blank" : undefined}
                            rel={contactExternal ? "noreferrer" : undefined}
                        >
                            {hero.cta2Text || "Get in Touch"}
                        </a>
                    </div>
                </div>
                <div className="hidden w-full md:block md:w-1/2">
                    <Image
                        src="/images/hero.png"
                        alt="Binary technology background"
                        width={400}
                        height={400}
                        priority
                        unoptimized
                        className="mx-auto h-auto w-full max-w-[260px] rounded-[1.5rem] object-cover sm:max-w-[380px] md:max-w-none"
                    />
                </div>
            </div>
        </section>
    );
}
