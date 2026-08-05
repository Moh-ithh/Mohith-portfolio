import * as React from "react";
import { AlertCircle } from "lucide-react";
import { Typography } from "@/components/ui";
import { CaseStudyChallenge } from "@/types/case-study";

interface CaseStudyChallengesProps {
  challenges: CaseStudyChallenge[];
}

export function CaseStudyChallenges({ challenges }: CaseStudyChallengesProps) {
  return (
    <div className="flex flex-col gap-3 pt-4 border-t border-border/20">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">CHALLENGES & MITIGATIONS</span>
      <div className="flex flex-col gap-3.5">
        {challenges.map((chal) => (
          <div key={chal.challenge} className="flex gap-3 items-start bg-warning/5 p-3 rounded-lg border border-warning/20">
            <AlertCircle className="size-4 text-warning shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="caption" className="font-bold text-foreground leading-none">
                {chal.challenge}
              </Typography>
              <Typography variant="caption" className="text-muted-foreground text-xs leading-relaxed mt-0.5">
                {chal.solution}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
