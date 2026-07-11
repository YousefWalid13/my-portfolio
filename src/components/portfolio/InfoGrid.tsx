import { Code2, MapPin, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Row({ Icon, children }: { Icon: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <span className="font-mono text-sm text-foreground">{children}</span>
    </div>
  );
}

export function InfoGrid({
  tagline,
  location,
  email,
  phone,
  pronoun,
}: {
  tagline: string;
  location: string;
  email: string;
  phone: string;
  pronoun: string;
}) {
  return (
    <div className="grid gap-4 px-6 sm:grid-cols-2 sm:px-8">
      <Row Icon={Code2}>{tagline}</Row>
      <Row Icon={Phone}>
        <a href={`tel:${phone}`} className="hover:text-foreground">
          {phone}
        </a>
      </Row>
      <Row Icon={MapPin}>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
        >
          {location}
        </a>
      </Row>
      <Row Icon={Mail}>
        <a href={`mailto:${email}`} className="hover:text-foreground">
          {email}
        </a>
      </Row>
    </div>
  );
}
