import * as React from "react";
import { Badge } from "@/components/ui";
import { heroConfig } from "@/config/hero";

export function HeroBadges() {
  return (
    <div className="flex flex-wrap gap-2.5 justify-start items-center">
      {heroConfig.badges.map((cap) => (
        <Badge 
          key={cap} 
          variant="outline" 
          className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest py-1 px-3.5 border-border/80 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-out cursor-default select-none"
        >
          {cap}
        </Badge>
      ))}
    </div>
  );
}
