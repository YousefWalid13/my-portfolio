type Tech = { name: string; slug: string; url: string };

export function StackGrid({ items }: { items: readonly Tech[] }) {
  return (
    <ul className="grid grid-cols-6 gap-3 sm:grid-cols-8">
      {items.map((t) => (
        <li key={t.name}>
          <a
            href={t.url}
            target="_blank"
            rel="noreferrer"
            title={t.name}
            className="flex aspect-square items-center justify-center rounded-md border border-border bg-card p-2 transition-colors hover:bg-accent"
          >
            <img
              src={`https://cdn.simpleicons.org/${t.slug}`}
              alt={t.name}
              loading="lazy"
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}