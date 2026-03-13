import { getAbout } from "@/lib/about";
import SectionTitle from "../ui/SectionTitle";

export default async function About() {
    const about = await getAbout();
    const highlights = about.highlights.length > 0 ? about.highlights : [];

    return (
        <section className="section-shell section-surface-about relative overflow-hidden">
            <div className="section-backdrop section-backdrop-about" />
            <div className="container-base relative z-10">
                <SectionTitle id="about" title={about.title} subtitle={about.text} />

                {highlights.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {highlights.map((item) => (
                            <span key={item.id} className="badge">
                                {item.title}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    );
}
