"use client";

import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0b0c0e]/95 backdrop-blur-md border-b border-[#1a1d24] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[700px] mx-auto px-5 sm:px-6 flex items-center justify-between">
        {/* Name / Mark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-medium text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors">
            Irman Hakim
          </span>
          <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
            / dev
          </span>
        </a>

        {/* Minimal Navigation & Direct Links */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#stack" className="hover:text-white transition-colors">
            Stack
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>

          <div className="w-[1px] h-3 bg-[#222731]" />

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/irmankim711"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub (@irmankim711)"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://linkedin.com/in/irmankim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://x.com/Irmankims"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="X (Twitter)"
              aria-label="X"
            >
              <XIcon className="w-3 h-3" />
            </a>

            <a
              href="mailto:irmanhakimn@gmail.com"
              className="hover:text-white transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
