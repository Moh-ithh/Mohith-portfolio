import * as React from "react";
import { Server, Settings } from "lucide-react";
import { Typography } from "@/components/ui";

interface CaseStudyArchitectureProps {
  architecture: string;
  implementation: string;
}

export function CaseStudyArchitecture({ architecture, implementation }: CaseStudyArchitectureProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-border/20">
      {/* Left - Architecture */}
      <div className="flex flex-col gap-2.5 text-left">
        <div className="flex items-center gap-2">
          <Server className="size-4 text-primary shrink-0" />
          <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">SYSTEM ARCHITECTURE</span>
        </div>
        <Typography variant="body" className="text-muted-foreground text-sm leading-relaxed">
          {architecture}
        </Typography>
      </div>

      {/* Right - Implementation */}
      <div className="flex flex-col gap-2.5 text-left">
        <div className="flex items-center gap-2">
          <Settings className="size-4 text-neutral-400 shrink-0" />
          <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">IMPLEMENTATION MODEL</span>
        </div>
        <Typography variant="body" className="text-muted-foreground text-sm leading-relaxed">
          {implementation}
        </Typography>
      </div>
    </div>
  );
}
