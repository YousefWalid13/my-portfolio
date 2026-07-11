type Item = {
  company: string;
  title: string;
  period: string;
  hours: string;
  description: string;
  tags: readonly string[];
};

export function ExperienceList({ items }: { items: readonly Item[] }) {
  return (
    <div className="grid gap-4">
      {items.map((e) => (
        <div
          key={`${e.company}-${e.title}`}
          className="rounded-lg border border-border bg-card p-5"
        >
          <div className="mb-2 flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
            <span>{e.period}</span>
            <span>{e.hours}</span>
          </div>
          <h3 className="text-base font-semibold text-foreground">{e.title}</h3>
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">{e.company}</p>
          <p className="mt-3 text-sm text-foreground/80">{e.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {e.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}