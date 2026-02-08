const experiences = [
  {
    period: "August 2025",
    title: "CIB Training (Commercial International Bank)",
    duration: "120 hours",
    description:
      "Enhanced business understanding and communication skills through real-world financial case studies. Improved soft skills, teamwork, and problem-solving while learning to analyze projects from both business and technical perspectives.",
    tags: ["Business Analysis", "Communication", "Teamwork", "Problem Solving"],
  },
  {
    period: "July - August 2025",
    title: "Front-End Angular Training (ITI)",
    duration: "120 hours",
    description:
      "Completed Advanced Angular training covering component-based design, routing, form validation, and API integration. Developed responsive, maintainable user interfaces following modern UI/UX practices.",
    tags: ["Angular", "TypeScript", "UI/UX", "API Integration"],
  },
  {
    period: "January 2025",
    title: "Back-End .NET Development (ITI)",
    duration: "60 hours",
    description:
      "Focused on Advanced C#, ASP.NET Core MVC. Built real-world back-end applications emphasizing clean architecture and dependency injection.",
    tags: ["C#", "ASP.NET Core", "MVC", "Clean Architecture"],
  },
  {
    period: "2024",
    title: "Cybersecurity Training (Cisco DEPI)",
    duration: "159 hours",
    description:
      "Completed three semesters covering CCNA fundamentals and Cyber Ops. Gained hands-on experience in threat analysis, network security, and incident response through simulated network environments.",
    tags: ["CCNA", "Network Security", "Threat Analysis", "Incident Response"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-heading">
          Experience
          <span className="mt-2 block h-[1px] w-16 bg-primary/40" />
        </h2>
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="group relative rounded-lg p-4 transition-all duration-300 hover:bg-secondary/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="flex shrink-0 flex-col sm:w-32">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {exp.period}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {exp.duration}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-medium leading-snug text-heading group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm leading-relaxed">{exp.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
