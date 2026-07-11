"use client";

import { useEffect, useState } from "react";
import { Github, Globe, Play, X, FolderGit2 } from "lucide-react";

type Project = {
  title: string;
  role: string;
  description: string;
  tags: readonly string[];

  /** رابط الـ GitHub */
  github?: string;
  /** رابط الـ Live Demo — لو مش موجود، الزر بيختفي أوتوماتيك */
  live?: string;
  /** رابط فيديو الـ Demo — لو موجود، بيتفتح جوه Popup */
  video?: string;
  /** صورة الـ Cover — لو مش موجودة، بيتعمل Cover بديل بتدرج لوني + أيقونة */
  cover?: string;
};

// تدرجات لونية بديلة تُستخدم لو المشروع معندوش Cover Image حقيقية
const FALLBACK_GRADIENTS = [
  "from-indigo-500/25 via-blue-500/10 to-transparent",
  "from-emerald-500/25 via-teal-500/10 to-transparent",
  "from-fuchsia-500/25 via-purple-500/10 to-transparent",
  "from-amber-500/25 via-orange-500/10 to-transparent",
];

export function ProjectsList({ projects }: { projects: readonly Project[] }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl"
          >
            {/* Cover */}
            <div
              className={`relative h-44 w-full overflow-hidden ${p.video ? "cursor-pointer" : ""}`}
              onClick={() => p.video && setActiveVideo(p.video)}
            >
              {p.cover ? (
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`flex h-full w-full items-center justify-center bg-gradient-to-br bg-background ${
                    FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length]
                  } transition-transform duration-500 group-hover:scale-105`}
                >
                  <FolderGit2 className="h-10 w-10 text-foreground/30" strokeWidth={1.5} />
                </div>
              )}

              {/* Overlay + Play button لو فيه فيديو */}
              {p.video && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                  <div className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Play className="ml-0.5 h-5 w-5 text-black" fill="black" />
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{p.role}</p>

              <p className="mt-3 flex-1 text-sm text-foreground/80">{p.description}</p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:bg-accent"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:bg-accent"
                  >
                    <Globe className="h-4 w-4" />
                    Live Demo
                  </a>
                )}

                {p.video && (
                  <button
                    type="button"
                    onClick={() => setActiveVideo(p.video!)}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition hover:bg-accent"
                  >
                    <Play className="h-4 w-4" />
                    Watch Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Popup Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <video src={activeVideo} controls autoPlay className="aspect-video w-full bg-black">
              Your browser does not support video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
