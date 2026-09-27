import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  year: string;
  summary: string;
  details: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Interactive 3D Spatial Geometry Canvas",
      year: "2025",
      summary: "GPU-accelerated WebGL viewport for inspecting parametric 3D models and geometry meshes.",
      details: "Built with Three.js and custom shader buffers, handling real-time lighting passes, orbit physics, and zero garbage-collection stutter.",
      stack: ["TypeScript", "Three.js", "React", "Next.js"],
      githubUrl: "https://github.com/irmankim711",
      liveUrl: "https://github.com/irmankim711",
    },
    {
      title: "Async Task & Event Streaming Pipeline",
      year: "2024",
      summary: "Lightweight background worker pool for distributed jobs, queue scheduling, and retry management.",
      details: "Engineered around Redis pub/sub and in-memory ring buffers to guarantee deterministic latency under burst traffic.",
      stack: ["Node.js", "TypeScript", "Redis", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/irmankim711",
    },
    {
      title: "Zero-Overhead Edge API Reverse Proxy",
      year: "2024",
      summary: "Fast request router and JWT authentication guard deployed across containerized clusters.",
      details: "Features sliding-window rate limiting, cryptographic token validation, and structured request tracing.",
      stack: ["Go / Node.js", "PostgreSQL", "Docker", "REST"],
      githubUrl: "https://github.com/irmankim711",
    },
    {
      title: "Minimalist Developer Notes & Code Snippets",
      year: "2023",
      summary: "Local-first markdown editor with syntax tree parsing, offline sync, and fast keyboard navigation.",
      details: "Client-side indexedDB caching paired with optimistic updates for instant typing responsiveness.",
      stack: ["React", "TypeScript", "Tailwind CSS", "IndexedDB"],
      githubUrl: "https://github.com/irmankim711",
      liveUrl: "https://github.com/irmankim711",
    },
  ];

  return (
    <section id="projects" className="py-12 border-t border-[#1a1d24]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-lg font-medium text-white tracking-tight">Selected Work</h2>
        <a
          href="https://github.com/irmankim711"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>all repositories</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Editorial Project List (No boxy cards) */}
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
              <div className="flex items-baseline gap-2.5">
                <h3 className="text-sm font-medium text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-500">{project.year}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                  title="Source code on GitHub"
                >
                  <GithubIcon className="w-3 h-3" />
                  <span>source</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-white transition-colors"
                    title="Live preview"
                  >
                    <span>preview</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.summary}
            </p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              {project.details}
            </p>

            <div className="mt-2.5 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
              {project.stack.map((item, idx) => (
                <span key={item}>
                  {item}
                  {idx < project.stack.length - 1 && <span className="ml-2 text-slate-700">·</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
