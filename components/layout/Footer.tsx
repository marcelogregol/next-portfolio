import { getContactContent } from "@/lib/contact";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function getWhatsappHref(value: string) {
    const digits = value.replace(/\D/g, "");
    return digits ? `https://wa.me/${digits}` : "#contact";
}

export default async function Footer() {
    const contact = await getContactContent();

    return (
        <footer id="contact" className="section-shell section-frame section-surface-footer relative overflow-hidden py-6">
            <div className="section-backdrop section-backdrop-footer" />
            <div className="container-base relative z-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <div>
                    <p className="text-sub">&copy; {new Date().getFullYear()} Marcelo Rizzatti Gregol</p>
                    <p className="text-sub mt-2 text-sm">{contact.email}</p>
                </div>

                <div className="flex items-center justify-center gap-3 sm:justify-end">
                    <a className="text-2xl transition hover:text-white/80" href={contact.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a className="px-2.5 text-2xl transition hover:text-white/80" href={contact.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a className="text-2xl transition hover:text-white/80" href={getWhatsappHref(contact.whatsapp)} target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
            <div className="section-glow"></div>
        </footer>
    );
}
