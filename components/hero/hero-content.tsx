import * as React from "react";
import { Typography } from "@/components/ui";
import { HeroBadges } from "./hero-badges";
import { HeroActions } from "./hero-actions";
import { HeroStats } from "./hero-stats";
import { heroConfig } from "@/config/hero";

export function HeroContent() {
  return (
    <div className="flex flex-col gap-8 max-w-xl">
      <HeroBadges />
      
      <div className="flex flex-col gap-4">
        <Typography 
          variant="h1" 
          className="text-foreground tracking-tight leading-[1.08] font-black text-4xl sm:text-5xl lg:text-6xl"
        >
          {heroConfig.headline[0]}
          <span className="block text-muted-foreground mt-1">
            {heroConfig.headline[1]}
          </span>
          <span className="block mt-1">
            {heroConfig.headline[2]}
          </span>
        </Typography>
        
        <Typography 
          variant="lead" 
          className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg mt-1"
        >
          {heroConfig.description}
        </Typography>
      </div>

      <HeroActions />
      <HeroStats />
    </div>
  );
}
