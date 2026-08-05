import * as React from "react";
import { Badge } from "@/components/ui";

interface CaseStudyTechnologiesProps {
  technologies: string[];
}

export function CaseStudyTechnologies({ technologies }: CaseStudyTechnologiesProps) {
  return (
    <div className="flex flex-col gap-2 pt-4 border-t border-border/20">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">INTEGRATED TECHNOLOGIES</span>
      <div className="flex flex-wrap gap-1.5 select-none">
        {technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[9px] font-mono border-border/60 text-muted-foreground bg-elevated/20 py-0.5 px-2">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
