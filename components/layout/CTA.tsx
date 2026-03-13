import { getContactContent } from "@/lib/contact";

const fallbackLinkedin = "https://www.linkedin.com/in/marcelogregol/";

export default async function CTA() {
    const contact = await getContactContent();
    const href = contact.linkedin || fallbackLinkedin;

    return (
        <section className="section-shell section-surface-cta relative overflow-hidden">
            <div className="section-backdrop section-backdrop-cta" />
            <div className="container-base relative z-10 flex flex-col items-center justify-center gap-6 text-center">
                <h3 className="text-3xl font-extrabold tracking-tight">{contact.ctaTitle}</h3>
                <p className="text-sub mt-3">{contact.ctaSubtitle}</p>
                <a className="btn-ghost" href={href} target="_blank" rel="noreferrer">
                    {contact.ctaButtonText || "Get in touch"}
                </a>
            </div>
        </section>
    );
}
