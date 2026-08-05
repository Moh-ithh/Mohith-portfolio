import * as React from "react";
import { Badge } from "@/components/ui";

interface DomainTechnologiesProps {
  technologies: string[];
}

export function DomainTechnologies({ technologies }: DomainTechnologiesProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">CORE SPECIALTIES</span>
      <div className="flex flex-wrap gap-1.5 select-none">
        {technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[9px] font-semibold border-border/60 text-foreground py-0.5 px-2 bg-elevated/10">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
