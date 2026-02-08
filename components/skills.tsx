const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "SQL", "JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    title: "Backend",
    skills: [
      "ASP.NET Core Web API",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "ADO.NET",
      "LINQ",
      "RESTful APIs",
      "JWT Auth",
      "Identity",
      "SignalR",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "MongoDB", "PostgreSQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git / GitHub", "Docker", "CI/CD (GitHub Actions)", "Jira"],
  },
  {
    title: "Concepts",
    skills: [
      "OOP",
      "SOLID Principles",
      "Design Patterns",
      "Clean Architecture",
      "Data Structures & Algorithms",
      "Unit Testing",
      "Integration Testing",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-heading">
          Skills
          <span className="mt-2 block h-[1px] w-16 bg-primary/40" />
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-xs font-medium text-heading transition-colors hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
