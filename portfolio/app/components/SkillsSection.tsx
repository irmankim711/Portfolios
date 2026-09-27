export default function SkillsSection() {
  const pillars = [
    {
      title: "Enterprise & Java",
      description: "Scalable enterprise application servers and framework architectures.",
      skills: ["Java (SE / EE)", "Apache Tomcat", "Java Frameworks", "Spring Boot", "RESTful APIs", "Microservices"],
    },
    {
      title: "Systems & Low-Level",
      description: "Systems programming, concurrency, and deterministic execution.",
      skills: ["C & C++", "Memory Management", "Linux Systems", "Data Structures", "Socket Programming", "POSIX Standards"],
    },
    {
      title: "Full-Stack & 3D Web",
      description: "Modern web applications, interactive WebGL, and reactive interfaces.",
      skills: ["TypeScript", "React 19", "Next.js 16", "Three.js & WebGL", "Tailwind CSS", "State Machines"],
    },
    {
      title: "Data & Infrastructure",
      description: "Relational modeling, fast caching, containers, and deployment workflows.",
      skills: ["PostgreSQL & SQL", "Redis In-Memory", "Docker Containers", "Git & GitHub", "Maven / Gradle", "CI/CD Workflows"],
    },
  ];

  return (
    <section id="stack" className="py-16 border-t border-[#1a1d24]">
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-white tracking-tight">Technical Stack</h2>
        <p className="text-xs text-slate-400 mt-1">
          Core languages, frameworks, and engineering disciplines utilized across production systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="space-y-3">
            <h3 className="text-xs font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-[#1c1f27]">
              {pillar.title}
            </h3>
            <p className="text-[11px] text-slate-500 leading-normal">
              {pillar.description}
            </p>
            <ul className="space-y-1.5 pt-1">
              {pillar.skills.map((skill) => (
                <li key={skill} className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
