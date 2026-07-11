import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/portfolio/TopNav";
import { MonogramBanner } from "@/components/portfolio/MonogramBanner";
import { ProfileHeader } from "@/components/portfolio/ProfileHeader";
import { InfoGrid } from "@/components/portfolio/InfoGrid";
import { SocialCards } from "@/components/portfolio/SocialCards";
import { Section, SectionDivider } from "@/components/portfolio/Section";
import { StackGrid } from "@/components/portfolio/StackGrid";
import { ContribGraph } from "@/components/portfolio/ContribGraph";
import { ProjectsList } from "@/components/portfolio/ProjectsList";
import { ExperienceList } from "@/components/portfolio/ExperienceList";
import { Contact } from "@/components/portfolio/ContactBlock";
import { portfolio as p } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav monogram={p.monogram} />
      <main className="mx-auto max-w-3xl border-x border-border">
        <MonogramBanner monogram={p.monogram} />
        <div className="py-6">
          <ProfileHeader name={p.name} role={p.role} />
        </div>
        <SectionDivider />
        <div className="py-6">
          <InfoGrid
            tagline={p.tagline}
            location={p.location}
            email={p.email}
            phone={p.phone}
            pronoun={p.pronoun}
          />
        </div>
        <SectionDivider />
        <div className="py-6">
          <SocialCards github={p.github} linkedin={p.linkedin} name={p.name} />
        </div>
        <SectionDivider />
        <Section title="About">
          <ul className="space-y-2 text-sm text-foreground/80">
            {p.about.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Section>
        <SectionDivider />
        <Section title="Stack">
          <StackGrid items={p.stack} />
        </Section>
        <SectionDivider />
        <Section title="GitHub Contributions">
          <ContribGraph username={p.github.user} />
        </Section>
        <SectionDivider />
        <Section title="Projects">
          <ProjectsList projects={p.projects} />
        </Section>
        <SectionDivider />
        <Section title="Experience">
          <ExperienceList items={p.experience} />
        </Section>
        <SectionDivider />
        <Section title="Contact">
          <Contact email={p.email} phone={p.phone} />
        </Section>
        <footer className="border-t border-border px-6 py-6 font-mono text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} {p.name}
        </footer>
      </main>
    </div>
  );
}
