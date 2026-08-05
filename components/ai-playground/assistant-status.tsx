import * as React from "react";
import { Badge } from "@/components/ui";

export function AssistantStatus() {
  const sources = ["Hero", "Featured Work", "Engineering Domains", "Case Studies"];

  return (
    <div className="flex flex-col gap-3 p-3 bg-elevated/10 rounded-lg border border-border/20 select-none text-left">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">RAG KNOWLEDGE STATUS</span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-[9px] uppercase font-mono text-success font-bold">Ready</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[7px] font-mono text-neutral-500 uppercase tracking-wider leading-none">INDEXED DOCUMENTS SOURCE DATA</span>
        <div className="flex flex-wrap gap-1.5">
          {sources.map((src) => (
            <Badge key={src} variant="outline" className="text-[8px] font-mono border-border/40 text-muted-foreground bg-background/40 py-0.5 px-2">
              {src}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
