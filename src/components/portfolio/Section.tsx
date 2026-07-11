import type { ReactNode } from "react";

export function SectionDivider() {
  return <div className="stripe-divider" aria-hidden="true" />;
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="px-6 py-8 sm:px-8">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-foreground">{title}</h2>
      {children}
    </section>
  );
}