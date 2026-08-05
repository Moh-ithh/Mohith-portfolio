import * as React from "react";
import { Terminal, Cpu } from "lucide-react";
import { Typography } from "@/components/ui";

export function AssistantHeader() {
  return (
    <div className="flex items-center justify-between border-b border-border/20 pb-4 select-none">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center">
          <Cpu className="size-5 text-primary" />
        </div>
        <div className="flex flex-col text-left">
          <Typography variant="caption" className="font-extrabold text-foreground tracking-tight text-sm leading-none">
            Engineering Intelligence Console
          </Typography>
          <Typography variant="caption" className="text-muted-foreground text-[10px] uppercase font-mono tracking-wider mt-1.5 leading-none">
            Automated Knowledge Base v1.1
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-1.5 bg-neutral-900 border border-border/20 rounded px-2.5 py-1 text-[9px] text-neutral-400 font-mono">
        <Terminal className="size-3 text-neutral-500" />
        <span>sec-terminal://active</span>
      </div>
    </div>
  );
}
