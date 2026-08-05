import * as React from "react";
import { CheckCircle2 } from "lucide-react";

interface DomainMethodologyProps {
  methodology: string[];
}

export function DomainMethodology({ methodology }: DomainMethodologyProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">ENGINEERING METHODOLOGY</span>
      <ul className="flex flex-col gap-2 select-none">
        {methodology.map((item) => (
          <li key={item} className="flex gap-2 items-start text-xs text-muted-foreground leading-relaxed">
            <CheckCircle2 className="size-3.5 text-success shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
