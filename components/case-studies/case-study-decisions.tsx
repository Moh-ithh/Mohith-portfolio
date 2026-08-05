import * as React from "react";
import { GitCommit } from "lucide-react";
import { Typography } from "@/components/ui";
import { CaseStudyDecision } from "@/types/case-study";

interface CaseStudyDecisionsProps {
  decisions: CaseStudyDecision[];
}

export function CaseStudyDecisions({ decisions }: CaseStudyDecisionsProps) {
  return (
    <div className="flex flex-col gap-3 pt-4 border-t border-border/20">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">KEY ENGINEERING DECISIONS</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {decisions.map((dec) => (
          <div key={dec.decision} className="flex gap-2.5 items-start bg-elevated/10 p-3 rounded-lg border border-border/30">
            <GitCommit className="size-4 text-primary shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="caption" className="font-bold text-foreground leading-none">
                {dec.decision}
              </Typography>
              <Typography variant="caption" className="text-muted-foreground text-xs leading-relaxed mt-0.5">
                {dec.rationale}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
