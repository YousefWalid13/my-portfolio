"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "@/hooks/use-theme";

export function ContribGraph({ username }: { username: string }) {
  const { theme, mounted } = useTheme();

  const isDark = mounted ? theme === "dark" : true;

  return (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl"
    >
      <GitHubCalendar
        username={username}
        colorScheme={isDark ? "dark" : "light"}
        blockSize={14}
        blockMargin={4}
        fontSize={14}
        theme={{
          dark: ["#1a1a1a", "#0f3d4d", "#06b6d4", "#22d3ee", "#67e8f9"],
          light: ["#ebedf0", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9"],
        }}
      />
    </a>
  );
}
