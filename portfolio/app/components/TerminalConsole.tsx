"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft, Sparkles, Copy, Check } from "lucide-react";

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function TerminalConsole() {
  const [inputVal, setInputVal] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: "init",
      command: "neofetch",
      output: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
          <div className="text-cyan-400 space-y-0.5">
            <p className="font-bold text-cyan-300">irman@core-v2.5</p>
            <p className="text-slate-500">--------------------</p>
            <p><span className="text-indigo-400">OS:</span> Cloud Linux (x86_64)</p>
            <p><span className="text-indigo-400">Host:</span> Software Engineer Workstation</p>
            <p><span className="text-indigo-400">Uptime:</span> 99.98% High Availability</p>
            <p><span className="text-indigo-400">Shell:</span> zsh / next-turbopack</p>
            <p><span className="text-indigo-400">Core Stack:</span> TypeScript, Next.js, Node, Three.js</p>
          </div>
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">● System Ready & Responsive</p>
            <p>Welcome! Type <span className="text-cyan-300 bg-cyan-950/60 px-1 py-0.5 rounded">help</span> or click command badges below to interact.</p>
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("irmanhakimn@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">Available Commands:</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">whoami</span> About Irman Hakim Bin Nazri</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">skills</span> Technical skillset and toolchains</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">socials</span> Direct GitHub, LinkedIn & X links</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">projects</span> Featured system engineering work</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">contact</span> Email & connection channels</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">clear</span> Clear terminal output</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-xs space-y-1.5 text-slate-300 font-mono">
            <p className="text-cyan-300 font-semibold text-sm">Irman Hakim Bin Nazri</p>
            <p>Role: Software Engineer & Full-Stack Systems Builder</p>
            <p className="text-slate-400">
              Passionate about high-throughput backends, modern frontend architecture, and interactive 3D WebGL interfaces. Dedicated to clean code, modular microservices, and reliable cloud deployments.
            </p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="text-xs font-mono space-y-2">
            <div>
              <span className="text-cyan-400 font-semibold">Languages: </span>
              <span className="text-slate-300">TypeScript, JavaScript, Python, SQL, HTML5/CSS3</span>
            </div>
            <div>
              <span className="text-indigo-400 font-semibold">Frontend & 3D: </span>
              <span className="text-slate-300">React 19, Next.js 16, Three.js, Tailwind CSS, WebGL</span>
            </div>
            <div>
              <span className="text-purple-400 font-semibold">Backend & Cloud: </span>
              <span className="text-slate-300">Node.js, Express, REST APIs, PostgreSQL, Redis, Docker, Git</span>
            </div>
          </div>
        );
        break;

      case "socials":
        output = (
          <div className="text-xs font-mono space-y-1.5">
            <p className="text-slate-400">Direct Social Channels:</p>
            <p>
              <span className="text-cyan-400 font-semibold">GitHub: </span>
              <a href="https://github.com/irmankim711" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                https://github.com/irmankim711
              </a>
            </p>
            <p>
              <span className="text-indigo-400 font-semibold">LinkedIn: </span>
              <a href="https://linkedin.com/in/irmankim" target="_blank" rel="noreferrer" className="text-indigo-300 hover:underline">
                https://linkedin.com/in/irmankim
              </a>
            </p>
            <p>
              <span className="text-violet-400 font-semibold">X (Twitter): </span>
              <a href="https://x.com/Irmankims" target="_blank" rel="noreferrer" className="text-violet-300 hover:underline">
                https://x.com/Irmankims
              </a>
            </p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="text-xs font-mono space-y-2">
            <p className="text-cyan-300 font-semibold">Top Engineering Projects:</p>
            <div>
              <p className="text-emerald-400 font-medium">1. Real-time Telemetry & Microservices Engine</p>
              <p className="text-slate-400">High-throughput event streaming pipeline with Redis & WebSockets.</p>
            </div>
            <div>
              <p className="text-emerald-400 font-medium">2. Interactive 3D Spatial Canvas</p>
              <p className="text-slate-400">Three.js and WebGL powered visualization tool with real-time physics.</p>
            </div>
            <div>
              <p className="text-emerald-400 font-medium">3. Autonomous Agent Orchestrator</p>
              <p className="text-slate-400">Multi-agent developer assistant integration with vector memory.</p>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs font-mono space-y-1.5">
            <p className="text-slate-300">Let&apos;s build something impactful together:</p>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">Email:</span>
              <span className="text-slate-200">irmanhakimn@gmail.com</span>
              <button
                onClick={copyEmailToClipboard}
                className="text-[10px] flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-cyan-300 hover:bg-slate-700"
                type="button"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = (
          <p className="text-xs text-rose-400 font-mono">
            zsh: command not found: {rawCmd}. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => handleCommand("help")}>help</span> to view valid commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: rawCmd,
        output,
      },
    ]);
    setInputVal("");
  };

  const presetCommands = ["help", "whoami", "skills", "projects", "socials", "contact"];

  return (
    <div className="w-full rounded-2xl terminal-window overflow-hidden border border-slate-800/80 shadow-2xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1220] border-b border-slate-800/80 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>guest@irman-terminal:~ (interactive)</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/80">
          <Sparkles className="w-3 h-3" />
          <span>Interactive Shell</span>
        </div>
      </div>

      {/* Terminal Content / Screen */}
      <div
        className="p-5 font-mono text-sm space-y-4 max-h-[360px] overflow-y-auto bg-[#070a12]/95"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-cyan-400">irman@core:~$</span>
              <span className="text-slate-200 font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 border-l border-slate-800/80">{item.output}</div>
          </div>
        ))}

        {/* Current prompt input line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-2 text-xs pt-1"
        >
          <span className="text-cyan-400">irman@core:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (try 'skills' or 'socials')..."
            className="flex-1 bg-transparent text-slate-100 outline-none border-none placeholder:text-slate-600 font-mono text-xs"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="p-1 text-slate-500 hover:text-cyan-400 transition-colors"
            title="Execute command"
            aria-label="Submit command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
        <div ref={terminalEndRef} />
      </div>

      {/* Preset Command Shortcuts Pill Bar */}
      <div className="px-4 py-2.5 bg-[#090d18] border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
        <span className="text-slate-500 whitespace-nowrap">Quick run:</span>
        {presetCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            type="button"
            className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-cyan-950/80 text-slate-300 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-colors whitespace-nowrap"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
