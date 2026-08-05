import * as React from "react";
import { Badge } from "@/components/ui";

interface ProjectTagsProps {
  technologies: string[];
}

export function ProjectTags({ technologies }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-1.5 select-none">
      {technologies.map((tech) => (
        <Badge key={tech} variant="outline" className="text-[10px] font-mono border-border/60 text-muted-foreground bg-elevated/20 py-0.5 px-2">
          {tech}
        </Badge>
      ))}
    </div>
  );
}
