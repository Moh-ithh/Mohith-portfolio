import * as React from "react";
import { GlassCard, Typography } from "@/components/ui";
import { DomainMetric } from "@/types/domain";

interface DomainMetricsProps {
  metrics: DomainMetric[];
}

export function DomainMetrics({ metrics }: DomainMetricsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {metrics.map((metric) => (
        <GlassCard 
          key={metric.label} 
          variant="interactive" 
          padding="sm" 
          className="flex flex-col gap-1 py-2.5 px-3.5 bg-card/10 border-border/25 backdrop-blur-xs select-none"
        >
          <Typography variant="h3" as="span" className="font-extrabold text-foreground tracking-tight text-sm leading-none">
            {metric.value}
          </Typography>
          <span className="text-[7px] sm:text-[8px] font-bold text-muted-foreground uppercase tracking-widest mt-1 leading-none">
            {metric.label}
          </span>
        </GlassCard>
      ))}
    </div>
  );
}
