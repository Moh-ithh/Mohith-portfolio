import * as React from "react";
import { Link2 } from "lucide-react";
import { RelatedProject } from "@/types/domain";

interface DomainProjectsProps {
  projects: RelatedProject[];
}

export function DomainProjects({ projects }: DomainProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">DEMONSTRATED IN</span>
      <div className="flex flex-col gap-2">
        {projects.map((proj) => (
          <div key={proj.title} className="flex gap-2 items-center text-xs text-foreground font-semibold">
            <Link2 className="size-3.5 text-primary shrink-0" />
            <span>{proj.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
