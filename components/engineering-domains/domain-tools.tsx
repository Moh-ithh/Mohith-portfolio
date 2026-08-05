import * as React from "react";
import { Badge } from "@/components/ui";

interface DomainToolsProps {
  tools: string[];
}

export function DomainTools({ tools }: DomainToolsProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">PRIMARY TOOLSTACK</span>
      <div className="flex flex-wrap gap-1.5 select-none">
        {tools.map((tool) => (
          <Badge key={tool} variant="outline" className="text-[9px] font-mono border-primary/20 text-primary bg-primary/5 py-0.5 px-2">
            {tool}
          </Badge>
        ))}
      </div>
    </div>
  );
}
