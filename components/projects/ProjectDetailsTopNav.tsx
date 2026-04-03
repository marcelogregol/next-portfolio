import Image from "next/image";
import Link from "next/link";

const contactHref = "https://www.linkedin.com/in/marcelogregol/";

export function ProjectDetailsTopNav() {
    return (
        <header className="nav-shell sticky top-0 z-50 bg-slate-950/78 px-6 backdrop-blur-xl md:px-10">
            <div className="container-base flex min-h-16 flex-wrap items-center justify-between gap-4 py-3">
                <Link href="/" className="flex items-center" aria-label="Back to home">
                    <Image
                        src="/images/MRG.png"
                        alt="MRG logo"
                        width={100}
                        height={30}
                        priority
                        unoptimized
                        className="h-auto w-[77px] object-contain sm:w-[86px] md:w-[93px]"
                    />
                </Link>

                <div className="flex flex-wrap items-center gap-3">
                    <a href={contactHref} target="_blank" rel="noreferrer" className="btn-ghost">
                        Get in touch
                    </a>
                    <Link href="/#projects" className="btn-ghost">
                        Back to Home
                    </Link>
                </div>
            </div>
        </header>
    );
}
