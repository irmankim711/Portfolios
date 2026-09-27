"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";

export default function SocialConnectSection() {
  const [copied, setCopied] = useState(false);
  const email = "irmanhakimn@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      name: "GitHub",
      handle: "irmankim711",
      note: "repositories & open-source code",
      href: "https://github.com/irmankim711",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      handle: "in/irmankim",
      note: "professional background & network",
      href: "https://linkedin.com/in/irmankim",
      icon: LinkedinIcon,
    },
    {
      name: "X (Twitter)",
      handle: "@Irmankims",
      note: "engineering thoughts & daily builds",
      href: "https://x.com/Irmankims",
      icon: XIcon,
    },
  ];

  return (
    <section id="contact" className="py-12 border-t border-[#1a1d24]">
      <h2 className="text-lg font-medium text-white tracking-tight mb-2">Connect</h2>
      <p className="text-xs text-slate-400 mb-6 leading-relaxed">
        Feel free to reach out for project collaborations, technical inquiries, or engineering opportunities.
      </p>

      {/* Social Links List (No cards, pure clean editorial rows) */}
      <div className="space-y-3.5 mb-8">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <div
              key={channel.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-200 font-medium">{channel.name}</span>
                <span className="text-slate-500 font-mono">({channel.handle})</span>
                <span className="hidden sm:inline text-slate-600">·</span>
                <span className="hidden sm:inline text-slate-400">{channel.note}</span>
              </div>

              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 sm:mt-0 flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              >
                <span>open link</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Direct Email Line with inline copy */}
      <div className="pt-4 border-t border-[#1a1d24] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Direct Email:</span>
          <a
            href={`mailto:${email}`}
            className="text-slate-200 font-mono hover:text-white underline underline-offset-4 decoration-slate-700"
          >
            {email}
          </a>
        </div>

        <button
          onClick={copyEmail}
          type="button"
          className="self-start sm:self-auto flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161820] hover:bg-[#1e222c] border border-[#222731] text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied to clipboard</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy address</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
