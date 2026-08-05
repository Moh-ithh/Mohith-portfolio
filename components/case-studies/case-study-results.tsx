import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { GlassCard, Typography } from "@/components/ui";
import { CaseStudyResult } from "@/types/case-study";

interface CaseStudyResultsProps {
  results: CaseStudyResult[];
  lessons: string[];
}

export function CaseStudyResults({ results, lessons }: CaseStudyResultsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-border/20">
      {/* Left - Metrics */}
      <div className="flex flex-col gap-3">
        <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">MEASURABLE RESULTS</span>
        <div className="grid grid-cols-2 gap-3.5">
          {results.map((res) => (
            <GlassCard 
              key={res.label} 
              variant="interactive" 
              padding="sm" 
              className="flex flex-col gap-1 py-3 px-4 bg-card/10 border-border/25 backdrop-blur-xs select-none hover:border-success/45"
            >
              <Typography variant="h3" as="span" className="font-extrabold text-success tracking-tight text-base sm:text-lg leading-none">
                {res.metric}
              </Typography>
              <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mt-1.5 leading-none">
                {res.label}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Right - Lessons Learned */}
      <div className="flex flex-col gap-3 text-left">
        <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">LESSONS LEARNED</span>
        <ul className="flex flex-col gap-2 select-none">
          {lessons.map((lesson) => (
            <li key={lesson} className="flex gap-2 items-start text-xs text-muted-foreground leading-relaxed">
              <CheckCircle2 className="size-3.5 text-success shrink-0 mt-0.5" />
              <span>{lesson}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
