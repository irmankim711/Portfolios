"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1a1d24] py-10 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-slate-400 font-medium">Irman Hakim Bin Nazri</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/irmankim711"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/irman-hakim-nazri-a48b62284/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://x.com/Irmankims"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
            title="X (Twitter)"
          >
            <XIcon className="w-3 h-3" />
          </a>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors ml-1"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
