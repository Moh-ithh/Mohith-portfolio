import * as React from "react";
import { TerminalOutput } from "./terminal-output";
import { CommandHistory as HistoryType } from "@/types/terminal";

interface CommandHistoryProps {
  history: HistoryType[];
  onSelectCommand: (cmd: string) => void;
}

export function CommandHistory({ history, onSelectCommand }: CommandHistoryProps) {
  return (
    <div className="flex flex-col gap-6 text-left select-none font-mono">
      {history.map((item) => (
        <div key={item.id} className="flex flex-col gap-3">
          
          {/* Prompt prefix */}
          <div className="flex gap-2 items-center text-xs">
            <span className="text-neutral-500 font-bold">guest@mohith-portfolio:~#</span>
            <span className="text-foreground font-semibold">{item.command}</span>
          </div>

          {/* Response output */}
          <div className="pl-4 border-l border-border/20">
            {item.error ? (
              <span className="text-warning text-xs font-semibold">
                shell: command not found: &apos;{item.command}&apos;. Type &apos;help&apos; to view the list of supported instructions.
              </span>
            ) : item.output ? (
              <TerminalOutput 
                output={item.output} 
                onSelectCommand={onSelectCommand} 
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
