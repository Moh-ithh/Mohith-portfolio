import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui";
import { contactConfig } from "@/config/contact";

export function AvailabilityCard() {
  const { status, types } = contactConfig.availability;

  return (
    <GlassCard 
      variant="default" 
      padding="md" 
      className="flex flex-col gap-4 bg-card/10 border-border/25 backdrop-blur-xs select-none text-left"
    >
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest leading-none">
          AVAILABILITY STATUS
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          <span className="text-[9px] uppercase font-mono text-success font-bold">{status}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <span className="text-[7px] font-mono text-neutral-500 uppercase tracking-wider leading-none">
          CURRENTLY OPEN TO
        </span>
        <ul className="flex flex-col gap-2.5">
          {types.map((type) => (
            <li key={type} className="flex gap-2 items-center text-xs text-muted-foreground leading-none">
              <CheckCircle2 className="size-3.5 text-success shrink-0" />
              <span>{type}</span>
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}
