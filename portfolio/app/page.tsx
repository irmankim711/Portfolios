import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import SocialConnectSection from "./components/SocialConnectSection";
import Footer from "./components/Footer";
import { GithubIcon, LinkedinIcon, XIcon } from "./components/Icons";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#ededed]">
      {/* Minimal Header */}
      <Navbar />

      {/* Single Unified Column Editorial Layout */}
      <main className="max-w-[700px] mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-20">
        {/* 1. SEAMLESS 3D RETRO WORKSTATION (Zero bounding box) */}
        <section className="w-full flex flex-col items-center justify-center pt-2 pb-6">
          <Hero3D />
        </section>

        {/* 2. EDITORIAL BIO & INTRO */}
        <section className="space-y-6 pt-2 pb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for engineering roles &amp; contract projects</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Irman Hakim Bin Nazri
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Software engineer based in Malaysia. Proficient in enterprise Java development (Apache Tomcat, Java frameworks), systems programming in C and C++, and modern full-stack web applications.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              My engineering philosophy revolves around simplicity first: avoiding premature abstractions, keeping code readable and maintainable, and delivering deterministic performance from low-level systems up to the browser.
            </p>
          </div>

          {/* Social Channels Row */}
          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-300 border-y border-[#1a1d24] py-3.5">
            <a
              href="https://github.com/irmankim711"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/irmankim711</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="https://linkedin.com/in/irmankim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>linkedin.com/in/irmankim</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="https://x.com/Irmankims"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <XIcon className="w-3 h-3" />
              <span>@Irmankims</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="mailto:irmanhakimn@gmail.com"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>irmanhakimn@gmail.com</span>
            </a>
          </div>
        </section>

        {/* 3. SELECTED PROJECTS (Editorial list, no chunky AI cards) */}
        <ProjectsSection />

        {/* 4. TECHNICAL STACK (Clean lists, no progress bars or boxed cards) */}
        <SkillsSection />

        {/* 5. CONNECT & CONTACT */}
        <SocialConnectSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
