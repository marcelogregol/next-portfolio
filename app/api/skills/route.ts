import { hasAdminSession } from "@/lib/admin-auth";
import { normalizeSkillIconKey } from "@/lib/skill-icons";
import { getSkillsContent, saveSkills } from "@/lib/skills";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const skills = await getSkillsContent({ includeFallback: false });
        return NextResponse.json(skills);
    } catch (error) {
        console.error("GET /api/skills error:", error);

        return NextResponse.json(
            { error: "Erro ao buscar skills" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    if (!(await hasAdminSession())) {
        return NextResponse.json(
            { error: "Nao autorizado" },
            { status: 401 }
        );
    }

    try {
        const body = await req.json();
        const skills = Array.isArray(body) ? body : body.skills;

        if (!Array.isArray(skills)) {
            return NextResponse.json(
                { error: "Formato invalido para skills" },
                { status: 400 }
            );
        }

        const updatedSkills = await saveSkills(
            skills.map((skill, index) => ({
                id: typeof skill.id === "number" ? skill.id : null,
                name: skill.name ?? "",
                description: skill.description ?? "",
                category: skill.category ?? "Outros",
                level: skill.level ?? "",
                iconKey: normalizeSkillIconKey(skill.iconKey),
                enabled: Boolean(skill.enabled),
                order: Number(skill.order ?? index + 1),
            }))
        );

        return NextResponse.json(updatedSkills);
    } catch (error) {
        console.error("PUT /api/skills error:", error);

        return NextResponse.json(
            { error: "Erro ao salvar skills" },
            { status: 500 }
        );
    }
}
