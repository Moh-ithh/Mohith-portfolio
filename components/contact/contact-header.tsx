import * as React from "react";
import { Typography } from "@/components/ui";

interface ContactHeaderProps {
  welcome: string;
}

export function ContactHeader({ welcome }: ContactHeaderProps) {
  return (
    <div className="flex flex-col gap-2 text-left select-none">
      <span className="text-[8px] font-bold text-primary uppercase tracking-widest leading-none">COMMUNICATION BRIDGE</span>
      <Typography variant="body" className="text-muted-foreground text-sm leading-relaxed mt-1.5">
        {welcome}
      </Typography>
    </div>
  );
}
