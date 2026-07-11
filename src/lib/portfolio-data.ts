import vibeCover from "@/assets/vibe.png";
import fas7nyCover from "@/assets/fas7ny.png";
import vionCover from "@/assets/vion.png";
import vionVideo from "@/assets/vion_smol.mp4";
export const portfolio = {
  name: "Yousef Walid",
  monogram: "YW",
  role: "Software Engineer (.NET Backend)",
  tagline: ".NET Backend Developer",
  location: "Cairo, Egypt",
  phone: "+201006208930",
  email: "yousefwalid950@gmail.com",

  github: {
    user: "YousefWalid13",
    url: "https://github.com/YousefWalid13",
  },

  linkedin: {
    user: "Yousef Walid",
    url: "https://www.linkedin.com/in/yousefwalidsoftware",
  },

  about: [
    "Software Engineer specializing in ASP.NET Core and React, focused on building scalable backend systems, RESTful APIs, and modern web applications.",
    "Experienced in Clean Architecture, Entity Framework Core, JWT Authentication, SignalR, PostgreSQL, SQL Server, Docker, and cloud deployment.",
    "Graduated with a B.Sc. in Computer Science from Menoufia University (June 2026). Passionate about solving real-world problems and continuously learning modern software technologies.",
  ],

  stack: [
    { name: "C#", slug: "csharp", url: "https://learn.microsoft.com/dotnet/csharp/" },
    { name: ".NET", slug: "dotnet", url: "https://dotnet.microsoft.com/" },
    { name: "ASP.NET Core", slug: "dotnet", url: "https://dotnet.microsoft.com/apps/aspnet" },
    { name: "React", slug: "react", url: "https://react.dev/" },
    { name: "TanStack Start", slug: "react", url: "https://tanstack.com/start" },
    { name: "TypeScript", slug: "typescript", url: "https://www.typescriptlang.org/" },
    {
      name: "JavaScript",
      slug: "javascript",
      url: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    { name: "Tailwind CSS", slug: "tailwindcss", url: "https://tailwindcss.com/" },
    { name: "tRPC", slug: "trpc", url: "https://trpc.io/" },
    { name: "Prisma", slug: "prisma", url: "https://www.prisma.io/" },
    { name: "Entity Framework Core", slug: "nuget", url: "https://learn.microsoft.com/ef/" },
    { name: "SignalR", slug: "dotnet", url: "https://dotnet.microsoft.com/apps/aspnet/signalr" },
    { name: "PostgreSQL", slug: "postgresql", url: "https://www.postgresql.org/" },
    { name: "SQL Server", slug: "microsoftsqlserver", url: "https://www.microsoft.com/sql-server" },
    { name: "MongoDB", slug: "mongodb", url: "https://www.mongodb.com/" },
    { name: "Docker", slug: "docker", url: "https://www.docker.com/" },
    { name: "Git", slug: "git", url: "https://git-scm.com/" },
    { name: "GitHub", slug: "github", url: "https://github.com/" },
    { name: "JWT", slug: "jsonwebtokens", url: "https://jwt.io/" },
    { name: "Python", slug: "python", url: "https://www.python.org/" },
    { name: "Java", slug: "openjdk", url: "https://openjdk.org/" },
    { name: "Angular", slug: "angular", url: "https://angular.dev/" },
    { name: "Bootstrap", slug: "bootstrap", url: "https://getbootstrap.com/" },
    { name: "HTML5", slug: "html5", url: "https://developer.mozilla.org/docs/Web/HTML" },
    { name: "CSS3", slug: "css3", url: "https://developer.mozilla.org/docs/Web/CSS" },
  ],

  projects: [
    {
      title: "Vibe — AI Website Builder (Graduation Project)",
      role: "Full-Stack Developer",

      description:
        "AI-powered website builder that generates, edits, and deploys complete web applications from natural language prompts. Includes authentication, project management, AI code generation, and automated deployment workflows.",

      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "tRPC",
        "Prisma",
        "PostgreSQL",
        "Inngest",
        "AI",
        "Tailwind CSS",
      ],

      github: "https://github.com/mohammedattia11/vibe",
      live: "https://vibe-presentation-one.vercel.app/",
      cover: vibeCover,
    },

    {
      title: "Fas7ny — Travel Planning Backend",
      role: "Back-End .NET Developer",

      description:
        "Scalable travel booking backend built with Clean Architecture featuring JWT authentication, Hangfire background jobs, AI-powered trip generation using Gemini, and secure REST APIs.",

      tags: [
        "ASP.NET Core (.NET 9)",
        "EF Core",
        "SQL Server",
        "Hangfire",
        "JWT",
        "Clean Architecture",
        "Gemini AI",
        "Serilog",
      ],

      github: "https://github.com/Fas7ny/Fas7nyProject",
      cover: fas7nyCover,
    },

    {
      title: "Vion — Real-Time Chat Platform",
      role: "Full-Stack Developer",

      description:
        "Real-time chat application powered by SignalR WebSockets with authentication, room management, typing indicators, online presence, and PostgreSQL deployed on Neon with Fly.io and Vercel.",

      tags: ["ASP.NET Core (.NET 10)", "SignalR", "React", "PostgreSQL", "JWT", "Fly.io", "Vercel"],

      github: "https://github.com/YousefWalid13/Real-Time-Chat-App",
      live: "https://real-time-chat-app-sigma-ten.vercel.app/",
      cover: vionCover,
      video: vionVideo,
    },
  ],

  experience: [
    {
      company: "Commercial International Bank (CIB)",
      title: "CIB Training",
      period: "August 2025",
      hours: "120 hours",

      description:
        "Worked on real-world business analysis and financial case studies while improving communication, teamwork, and analytical problem-solving skills.",

      tags: ["Business Analysis", "Communication", "Teamwork", "Problem Solving"],
    },

    {
      company: "ITI",
      title: "Front-End Angular Training",
      period: "Jul — Aug 2025",
      hours: "120 hours",

      description:
        "Built responsive Angular applications using component-based architecture, routing, forms, validation, and REST API integration.",

      tags: ["Angular", "TypeScript", "UI/UX", "REST APIs"],
    },

    {
      company: "ITI",
      title: "Back-End .NET Development",
      period: "January 2025",
      hours: "60 hours",

      description:
        "Developed enterprise-level ASP.NET Core applications while applying Clean Architecture, Dependency Injection, and Entity Framework Core.",

      tags: ["ASP.NET Core", "C#", "Entity Framework", "Clean Architecture"],
    },

    {
      company: "Cisco DEPI",
      title: "Cybersecurity Training",
      period: "2024",
      hours: "159 hours",

      description:
        "Completed networking and cybersecurity training covering CCNA fundamentals, CyberOps, threat detection, and incident response.",

      tags: ["CCNA", "CyberOps", "Network Security", "Incident Response"],
    },
  ],
} as const;
