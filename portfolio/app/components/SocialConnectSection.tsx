"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
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
      note: "Open-source code, personal repositories, and development history.",
      href: "https://github.com/irmankim711",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      handle: "in/irmankim",
      note: "Career background, professional experience, and recommendations.",
      href: "https://linkedin.com/in/irmankim",
      icon: LinkedinIcon,
    },
    {
      name: "X (Twitter)",
      handle: "@Irmankims",
      note: "Technical discussions, software engineering logs, and daily builds.",
      href: "https://x.com/Irmankims",
      icon: XIcon,
    },
  ];

  return (
    <section id="contact" className="py-16 border-t border-[#1a1d24]">
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-white tracking-tight">Connect</h2>
        <p className="text-xs text-slate-400 mt-1">
          Open to senior engineering roles, technical advisory, and select contracts.
        </p>
      </div>

      {/* Social Channels 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#101217] border border-[#1b1f28] hover:border-[#2d3340] transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#181a22] border border-[#232733] flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {channel.handle}
                  </span>
                </div>

                <h3 className="text-sm font-medium text-slate-100 group-hover:text-white transition-colors">
                  {channel.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {channel.note}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1a1c24] flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                <span>Visit profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>

      {/* Direct Email Action Line */}
      <div className="p-6 rounded-xl bg-[#101217] border border-[#1b1f28] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-[#181a22] border border-[#232733] flex items-center justify-center text-slate-300 shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-100">Direct Inquiries</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">{email}</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={`mailto:${email}`}
            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-200 text-slate-900 text-xs font-medium transition-colors"
          >
            Send Email
          </a>
          <button
            onClick={copyEmail}
            type="button"
            className="px-3.5 py-2 rounded-lg bg-[#181a22] hover:bg-[#20232e] border border-[#232733] text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-slate-200" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
