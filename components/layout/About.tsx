import { getAbout } from "@/lib/about";
import SectionTitle from "../ui/SectionTitle";
import { ProjectRichText } from "../ui/ProjectRichText";

export default async function About() {
    const about = await getAbout();

    return (
        <section className="section-shell section-surface-about relative overflow-hidden">
            <div className="section-backdrop section-backdrop-about" />
            <div className="container-base relative z-10">
                <SectionTitle
                    id="about"
                    title={about.title}
                    subtitle={
                        about.text ? (
                            <ProjectRichText
                                value={about.text}
                                className="mt-3 max-w-3xl space-y-4 text-sub"
                            />
                        ) : undefined
                    }
                />

                {about.highlights.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {about.highlights.map((item) => (
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
