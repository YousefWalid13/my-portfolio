import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Navigation from "./navigation";

export default function Hero() {
  return (
    <header className="flex flex-col gap-6">
      {/* Name */}
      <h3 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
        <a href="/" className="group relative inline-block">
          Yousef Walid Omar
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-heading transition-all duration-300 group-hover:w-full" />
        </a>
      </h3>

      {/* Title */}
      <h2 className="text-lg font-medium tracking-tight text-muted-foreground sm:text-xl">
        Full Stack Developer
        <span className="text-heading"> (.NET & React)</span>
      </h2>

      {/* Short bio */}
      <p className="max-w-sm leading-relaxed text-muted-foreground">
        I build modern, scalable web applications with
        <span className="text-heading"> clean architecture</span> and
        <span className="text-heading"> efficient code</span>.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="
    rounded-md bg-heading px-4 py-2 text-sm font-medium text-background
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10
    active:translate-y-0
  "
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="
    rounded-md bg-heading px-4 py-2 text-sm font-medium text-background
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10
    active:translate-y-0
  "
        >
          Contact Me
        </a>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Social links */}
      <div className="mt-6 flex items-center gap-6" aria-label="Social links">
        {[
          {
            href: "https://github.com/YousefWalid13",
            label: "GitHub",
            icon: Github,
          },
          {
            href: "https://linkedin.com/in/yousef-walid-0b92b62a6",
            label: "LinkedIn",
            icon: Linkedin,
          },
          {
            href: "mailto:yousefwalid950@gmail.com",
            label: "Email",
            icon: Mail,
          },
          {
            href: "tel:+201006208930",
            label: "Phone",
            icon: Phone,
          },
        ].map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative text-muted-foreground transition-colors hover:text-heading"
          >
            <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        ))}
      </div>
    </header>
  );
}
