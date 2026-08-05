import * as React from "react";
import { HelpCircle, ChevronRight } from "lucide-react";
import { Typography } from "@/components/ui";

interface CaseStudyProblemProps {
  problem: string;
  objectives: string[];
}

export function CaseStudyProblem({ problem, objectives }: CaseStudyProblemProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-border/20">
      {/* Left - Problem */}
      <div className="flex flex-col gap-2.5 text-left">
        <div className="flex items-center gap-2">
          <HelpCircle className="size-4 text-warning shrink-0" />
          <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">THE PROBLEM</span>
        </div>
        <Typography variant="body" className="text-muted-foreground text-sm leading-relaxed">
          {problem}
        </Typography>
      </div>

      {/* Right - Objectives */}
      <div className="flex flex-col gap-2.5 text-left">
        <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">ENGINEERING OBJECTIVES</span>
        <ul className="flex flex-col gap-2 select-none">
          {objectives.map((obj) => (
            <li key={obj} className="flex gap-2 items-start text-xs text-muted-foreground leading-relaxed">
              <ChevronRight className="size-3.5 text-primary shrink-0 mt-0.5" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
