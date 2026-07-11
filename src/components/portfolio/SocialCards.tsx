import { ArrowUpRight, Github, Linkedin } from "lucide-react";

function Card({
  href,
  Icon,
  label,
  handle,
}: {
  href: string;
  Icon: typeof Github;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-accent"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-background">
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1">
        <div className="font-mono text-sm font-semibold text-foreground">{label}</div>
        <div className="font-mono text-xs text-muted-foreground">{handle}</div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function SocialCards({
  github,
  linkedin,
  name,
}: {
  github: { user: string; url: string };
  linkedin: { user: string; url: string };
  name: string;
}) {
  return (
    <div className="grid gap-3 px-6 sm:grid-cols-2 sm:px-8">
      <Card href={github.url} Icon={Github} label="GitHub" handle={name} />
      <Card href={linkedin.url} Icon={Linkedin} label="LinkedIn" handle={name} />
    </div>
  );
}