import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import SocialConnectSection from "./components/SocialConnectSection";
import Footer from "./components/Footer";
import { GithubIcon, LinkedinIcon, XIcon } from "./components/Icons";
import { Mail, ArrowUpRight, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0d] text-[#ededed]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 pt-24 sm:pt-32">
        {/* HERO SECTION: Balanced 2-Column Responsive Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 lg:pb-24">
          {/* Left Column: Identity, Bio & Direct Channels */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
              Software Engineer · Malaysia (UTC+8)
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Irman Hakim Bin Nazri
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Proficient in enterprise Java architectures (Apache Tomcat, Java frameworks), low-level systems programming in C and C++, and modern full-stack web applications.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Architect of mission-critical platforms including the official Lembaga Arkitek Malaysia (LAM) portal and clean-tech platforms. Committed to simplicity first, maintainable software design, and deterministic runtime performance.
              </p>
            </div>

            {/* Direct Social Channels */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
              <a
                href="https://github.com/irmankim711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12141a] hover:bg-[#1a1d25] border border-[#1e222a] text-slate-200 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/irmankim711</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href="https://linkedin.com/in/irmankim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12141a] hover:bg-[#1a1d25] border border-[#1e222a] text-slate-200 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/irmankim</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href="https://x.com/Irmankims"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12141a] hover:bg-[#1a1d25] border border-[#1e222a] text-slate-200 hover:text-white transition-colors"
              >
                <XIcon className="w-3 h-3" />
                <span>@Irmankims</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            {/* Quick Action Navigation */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-200 text-slate-900 text-xs font-medium transition-colors"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:irmanhakimn@gmail.com"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#12141a] hover:bg-[#1a1d25] border border-[#1e222a] text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>irmanhakimn@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Retro Workstation */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Hero3D />
          </div>
        </section>

        {/* SELECTED WORK */}
        <ProjectsSection />

        {/* TECHNICAL STACK */}
        <SkillsSection />

        {/* CONNECT & CONTACT */}
        <SocialConnectSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
