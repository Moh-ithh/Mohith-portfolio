import * as React from "react";
import { Terminal } from "lucide-react";

export function AssistantFooter() {
  return (
    <div className="flex items-center justify-between border-t border-border/20 pt-4 text-[9px] text-neutral-500 font-mono select-none">
      <div className="flex items-center gap-1.5">
        <Terminal className="size-3" />
        <span>RAG INDEX SIZE: 4.8MB</span>
      </div>
      <span>SECURITY HANDSHAKE VERIFIED</span>
    </div>
  );
}
