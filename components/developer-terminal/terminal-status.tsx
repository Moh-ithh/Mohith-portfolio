import * as React from "react";
import { terminalConfig } from "@/config/terminal";

export function TerminalStatus() {
  const { host, kernel, shell, uptime } = terminalConfig.systemInfo;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 p-3.5 bg-elevated/10 rounded-lg border border-border/20 select-none text-left font-mono text-[9px] text-neutral-400">
      <div className="flex flex-col gap-1">
        <span className="text-[7px] text-neutral-500 uppercase tracking-widest font-bold">HOST NAME</span>
        <span className="font-semibold text-foreground">{host}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[7px] text-neutral-500 uppercase tracking-widest font-bold">KERNEL SYSTEM</span>
        <span className="font-semibold text-foreground truncate">{kernel}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[7px] text-neutral-500 uppercase tracking-widest font-bold">SHELL LAYER</span>
        <span className="font-semibold text-foreground">{shell}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[7px] text-neutral-500 uppercase tracking-widest font-bold">UPTIME TOTAL</span>
        <span className="font-semibold text-foreground">{uptime}</span>
      </div>
    </div>
  );
}
