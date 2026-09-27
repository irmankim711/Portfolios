import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  year: string;
  category: string;
  summary: string;
  details: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Lembaga Arkitek Malaysia (LAM) Portal",
      year: "2024",
      category: "Enterprise / Government",
      summary: "Official regulatory portal and architect registration infrastructure for the Board of Architects Malaysia.",
      details: "Engineered secure backend workflows, architect registry validation, and administrative services running on enterprise server infrastructure.",
      stack: ["Java", "Apache Tomcat", "Java Frameworks", "SQL", "Enterprise Architecture"],
      liveUrl: "https://lam.gov.my/",
    },
    {
      title: "Nucleus Energy Tech Platform",
      year: "2024",
      category: "Corporate Web Platform",
      summary: "Modern web architecture and corporate engineering presence for an innovative energy tech consultancy.",
      details: "Engineered responsive full-stack architecture, asset performance optimization, and secure hosting.",
      stack: ["Full-Stack", "Web Architecture", "UI/UX Engineering", "Cloud Hosting"],
      liveUrl: "https://nucluesenergytech.com/",
    },
    {
      title: "Interactive 3D Spatial Geometry Canvas",
      year: "2025",
      category: "Graphics & WebGL",
      summary: "GPU-accelerated WebGL viewport for inspecting parametric 3D models and computational geometry meshes.",
      details: "Built with Three.js and custom shader buffers, handling real-time lighting passes, orbit physics, and zero garbage-collection stutter.",
      stack: ["TypeScript", "Three.js", "React", "Next.js"],
      githubUrl: "https://github.com/irmankim711",
      liveUrl: "https://github.com/irmankim711",
    },
    {
      title: "Low-Latency Systems Event Worker",
      year: "2024",
      category: "Systems & Concurrency",
      summary: "Lightweight background worker pool for distributed jobs, queue scheduling, and retry management.",
      details: "Engineered with C / C++ and Redis pub/sub to guarantee deterministic latency under burst traffic.",
      stack: ["C / C++", "Node.js", "Redis", "Docker", "Linux"],
      githubUrl: "https://github.com/irmankim711",
    },
  ];

  return (
    <section id="projects" className="py-16 border-t border-[#1a1d24]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-10">
        <div>
          <h2 className="text-xl font-semibold text-white tracking-tight">Selected Projects</h2>
          <p className="text-xs text-slate-400 mt-1">
            Production systems, government infrastructure, and engineering tools.
          </p>
        </div>
        <a
          href="https://github.com/irmankim711"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>All repositories</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Structured Project List */}
      <div className="divide-y divide-[#181a22]">
        {projects.map((project) => (
          <div
            key={project.title}
            className="py-7 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
          >
            {/* Left Column: Metadata */}
            <div className="md:col-span-3 space-y-1">
              <span className="text-xs font-mono text-slate-500 block">{project.year}</span>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                {project.category}
              </span>
            </div>

            {/* Middle Column: Title, Description, Stack */}
            <div className="md:col-span-7 space-y-2">
              <h3 className="text-base font-medium text-slate-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.summary}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {project.details}
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-[#13151b] border border-[#1e222a] text-[11px] font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Direct Links */}
            <div className="md:col-span-2 flex md:justify-end items-center gap-3 text-xs pt-1 md:pt-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  title="Source code on GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                  title="Visit website"
                >
                  <span>Visit</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
