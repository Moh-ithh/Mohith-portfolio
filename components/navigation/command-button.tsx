import * as React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui";

export interface CommandButtonProps {
  onClick?: () => void;
}

export function CommandButton({ onClick }: CommandButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className="hidden md:inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-xs font-normal"
      aria-label="Open command palette"
    >
      <Search className="size-3.5" />
      <span>Search...</span>
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded border border-border bg-elevated px-1.5 font-mono text-[10px] font-medium opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
