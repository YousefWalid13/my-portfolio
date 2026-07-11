import { BadgeCheck } from "lucide-react";
import avatarUrl from "@/assets/avatar.jpg";

export function ProfileHeader({ name, role }: { name: string; role: string }) {
  return (
    <div className="relative -mt-14 flex items-end gap-5 px-6 sm:-mt-16 sm:px-8">
      <img
        src={avatarUrl}
        alt={`${name} avatar`}
        width={112}
        height={112}
        className="h-24 w-24 shrink-0 rounded-full border-4 border-background object-cover shadow-sm sm:h-28 sm:w-28"
      />
      <div className="pb-2">
        <h1 className="flex items-center gap-1.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {name}
          <BadgeCheck className="h-5 w-5 fill-sky-500 text-background" />
        </h1>
        <p className="mt-1 font-mono text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
