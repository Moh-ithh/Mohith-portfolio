import * as React from "react";
import { GlassCard, Typography } from "@/components/ui";
import { heroConfig } from "@/config/hero";

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 pt-10 border-t border-border/20">
      {heroConfig.stats.map((stat) => (
        <GlassCard 
          key={stat.label} 
          variant="interactive" 
          padding="sm" 
          className="flex flex-col gap-1.5 select-none border-border/25 bg-card/15 backdrop-blur-md py-3.5 px-4 justify-center hover:border-primary/45"
        >
          <Typography 
            variant="h3" 
            as="span" 
            className="font-black text-foreground tracking-tight text-xl sm:text-2xl"
          >
            {stat.value}
          </Typography>
          <Typography 
            variant="caption" 
            as="span" 
            className="text-muted-foreground text-[8px] sm:text-[9px] font-bold uppercase tracking-widest leading-none mt-0.5"
          >
            {stat.label}
          </Typography>
        </GlassCard>
      ))}
    </div>
  );
}
