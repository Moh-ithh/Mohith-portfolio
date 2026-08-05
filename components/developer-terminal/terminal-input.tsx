import * as React from "react";
import { CornerDownLeft } from "lucide-react";

interface TerminalInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
}

export function TerminalInput({ value, onChange, onSubmit }: TerminalInputProps) {
  return (
    <div className="flex gap-2 items-center bg-neutral-950/60 border border-border/20 rounded p-2 relative font-mono text-xs">
      <span className="text-neutral-500 font-bold select-none">guest@mohith-portfolio:~#</span>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onSubmit();
          }
        }}
        placeholder="Enter command (e.g. help, projects, case-studies, whoami)..."
        className="flex-1 bg-transparent text-foreground placeholder-neutral-500 focus-visible:outline-none py-0.5"
        aria-label="Terminal input line"
      />
      <div className="absolute right-3 flex items-center gap-1 text-[8px] text-neutral-500 font-mono pointer-events-none hidden sm:flex select-none">
        <span>Enter</span>
        <CornerDownLeft className="size-2.5" />
      </div>
    </div>
  );
}
