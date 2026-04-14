import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fas7ny - Travel Planning Backend",
    role: "Back-End .NET Developer",
    description:
      "Full-featured backend system built from scratch using Clean Architecture. Features booking workflows (Create, Confirm, Cancel), Hangfire background jobs, AI-powered travel package generation with Gemini, JWT authentication, and production-ready scalable design.",
    tech: [
      "ASP.NET Core (.NET 9)",
      "EF Core",
      "MSSQL",
      "Hangfire",
      "JWT",
      "Clean Architecture",
      "AI (Gemini)",
      "Serilog",
    ],
    github: "https://github.com/Fas7ny/Fas7nyProject",
  },
  {
    title: "Vion – Real-Time Chat Platform",
    type: "Personal Project | 2025",
    role: "Full-Stack Developer",
    description:
      "Developed a full-stack real-time chat platform using ASP.NET Core (.NET 10) and React. Implemented SignalR WebSocket communication with JWT-secured connections, room lifecycle management (Create, Join, Leave, Destroy), real-time synchronization, typing indicators, online user tracking, and concurrent message broadcasting. Persisted data using PostgreSQL (Neon Cloud) and deployed backend to Fly.io and frontend to Vercel.",
    tech: [
      "ASP.NET Core (.NET 10)",
      "SignalR",
      "React",
      "PostgreSQL",
      "JWT",
      "Fly.io",
      "Vercel",
    ],
    github: "https://github.com/YousefWalid13/Real-Time-Chat-App",
    live: "https://real-time-chat-app-sigma-ten.vercel.app/",
  },
  {
    title: "ShoppingCart MVC Project",
    role: "Back-End Developer",
    description:
      "Complete e-commerce workflow from browse to cart to checkout to payment. Integrated PayPal and Paymob payment gateways with shopping cart logic supporting multiple concurrent users. Built with Repository and Unit of Work patterns.",
    tech: ["ASP.NET Core MVC", "EF Core", "SQL Server", "PayPal", "Paymob"],
    github: "https://github.com/YousefWalid13/ShoppingCart",
  },
  {
    title: "Library Management API",
    role: "Back-End Developer",
    description:
      "Clean architecture API using Generic Repository and Unit of Work patterns. Features core modules for Books, Authors, Categories, Purchases, and Borrowing with JWT-based authentication, role-based authorization, pagination, sorting, filtering, and CI/CD with GitHub Actions.",
    tech: [
      "ASP.NET Core Web API",
      "EF Core",
      "SQL Server",
      "Identity",
      "JWT",
      "C#",
    ],
    github:
      "https://github.com/YousefWalid13/LibraryMangementApiForPruchesAndBorrowing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-lg p-4 transition-all duration-300 hover:bg-secondary/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:p-6"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-medium leading-snug text-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-primary -translate-y-0.5 translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-0.5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {project.role}
              </p>
              <p className="text-sm leading-relaxed">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
