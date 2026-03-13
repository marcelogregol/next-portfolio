import TopNav from "../components/layout/TopNav";
import Hero from "@/components/layout/Hero";
import About from "../components/layout/About";
import Skills from "../components/layout/Skills";
import Projects from "../components/layout/Projects";
import Footer from "../components/layout/Footer";
import CTA from "../components/layout/CTA";

export default function Page() {
  return (
    <main id="top" className="min-h-screen">
      <TopNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
