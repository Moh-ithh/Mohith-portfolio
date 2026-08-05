import * as React from "react";

export function TypingIndicator() {
  return (
    <div className="flex gap-2.5 items-center p-3 bg-elevated/5 border border-border/20 rounded-lg max-w-[200px] select-none text-left font-mono text-[9px] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      <span>QUERYING KNOWLEDGE BASE...</span>
    </div>
  );
}
