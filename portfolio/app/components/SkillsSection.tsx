export default function SkillsSection() {
  const groups = [
    {
      category: "Languages",
      skills: "Java, C, C++, TypeScript, JavaScript (ESNext), Python, SQL",
    },
    {
      category: "Backend & Systems",
      skills: "Java Frameworks (Spring Boot / Java EE), Apache Tomcat, Node.js, Express, RESTful APIs, Redis, PostgreSQL",
    },
    {
      category: "Frontend & WebGL",
      skills: "React 19, Next.js 16, Three.js, Tailwind CSS, Vite, State Machines",
    },
    {
      category: "Tooling & Infra",
      skills: "Docker, Git & GitHub, Linux environments, Maven/Gradle, Turbopack, CI/CD",
    },
  ];

  return (
    <section id="stack" className="py-12 border-t border-[#1a1d24]">
      <h2 className="text-lg font-medium text-white tracking-tight mb-6">Technical Stack</h2>

      <div className="space-y-4">
        {groups.map((group) => (
          <div
            key={group.category}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-xs"
          >
            <span className="w-32 shrink-0 font-mono text-slate-400">
              {group.category}
            </span>
            <span className="text-slate-300 leading-relaxed font-normal">
              {group.skills}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
