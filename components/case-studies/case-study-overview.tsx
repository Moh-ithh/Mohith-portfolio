import * as React from "react";
import { Typography } from "@/components/ui";

interface CaseStudyOverviewProps {
  overview: string;
}

export function CaseStudyOverview({ overview }: CaseStudyOverviewProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">OVERVIEW</span>
      <Typography variant="body" className="text-muted-foreground text-sm leading-relaxed">
        {overview}
      </Typography>
    </div>
  );
}
