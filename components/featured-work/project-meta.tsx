import * as React from "react";
import { Typography } from "@/components/ui";

interface ProjectMetaProps {
  role: string;
  timeline: string;
}

export function ProjectMeta({ role, timeline }: ProjectMetaProps) {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/20 text-xs select-none">
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none">ROLE</span>
        <Typography variant="caption" className="font-semibold text-foreground truncate mt-0.5 leading-none">
          {role}
        </Typography>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none">TIMELINE</span>
        <Typography variant="caption" className="font-semibold text-foreground truncate mt-0.5 leading-none">
          {timeline}
        </Typography>
      </div>
    </div>
  );
}
