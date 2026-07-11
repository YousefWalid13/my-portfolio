import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function TopNav({ monogram }: { monogram: string }) {
  const { theme, mounted, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <span className="font-mono text-sm font-semibold tracking-widest text-foreground">
          {monogram}
        </span>
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={toggle}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {mounted && theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}