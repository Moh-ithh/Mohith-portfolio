import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Typography } from "@/components/ui";

export function FormStatus() {
  return (
    <div className="flex flex-col gap-3 p-4 bg-success/5 border border-success/20 rounded-lg text-left select-none">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="size-4.5 text-success shrink-0" />
        <span className="text-[9px] font-mono font-bold text-success uppercase tracking-widest">
          TRANSMISSION SECURED
        </span>
      </div>
      <Typography variant="body" className="text-muted-foreground text-xs leading-relaxed mt-1">
        Your query message has been logged inside our local database buffers. I will respond to your security channels as soon as possible.
      </Typography>
    </div>
  );
}
