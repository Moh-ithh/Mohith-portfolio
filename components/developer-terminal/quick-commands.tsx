import * as React from "react";
import { Badge } from "@/components/ui";

interface QuickCommandsProps {
  onSelectCommand: (cmd: string) => void;
}

export function QuickCommands({ onSelectCommand }: QuickCommandsProps) {
  const shortcuts = ["help", "whoami", "projects", "case-studies", "skills", "contact"];

  return (
    <div className="flex flex-col gap-2 text-left select-none font-mono">
      <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest leading-none">QUICK COMMAND SHORTCUTS</span>
      <div className="flex flex-wrap gap-2">
        {shortcuts.map((cmd) => (
          <button 
            key={cmd} 
            className="focus-visible:outline-none"
            onClick={() => onSelectCommand(cmd)}
          >
            <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-wider py-1 px-3.5 border-border/80 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
              {cmd}
            </Badge>
          </button>
        ))}
      </div>
    </div>
  );
}
