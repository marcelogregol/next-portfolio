import SectionTitle from "../ui/SectionTitle";
import { getEnabledSkills } from "@/lib/skills";
import { renderSkillIcon } from "@/lib/skill-icons";

function getLevelLabel(level: string) {
    if (level === "Iniciante") return "Beginner";
    if (level === "Intermediario") return "Intermediate";
    if (level === "Avancado") return "Advanced";
    return level;
}

export default async function Skills() {
    const skills = await getEnabledSkills();

    return (
        <section className="section-shell section-divider section-surface-skills relative overflow-hidden">
            <div className="section-backdrop section-backdrop-skills" />
            <div className="container-base relative z-10">
                <SectionTitle id="skills" title="Core Skills" />
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <article key={skill.id ?? `${skill.name}-${skill.order}`} className="glass glass-hover rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                {renderSkillIcon(skill.iconKey)}
                                <div>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-lg font-bold">{skill.name}</h3>
                                        {skill.level ? <span className="badge">{getLevelLabel(skill.level)}</span> : null}
                                    </div>
                                    <p className="text-sub mt-1 leading-relaxed">{skill.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <div className="section-glow" />
        </section>
    );
}
