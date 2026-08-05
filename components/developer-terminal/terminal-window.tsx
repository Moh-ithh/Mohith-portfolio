import * as React from "react";
import { CommandHistory } from "./command-history";
import { TerminalInput } from "./terminal-input";
import { CommandHistory as HistoryType } from "@/types/terminal";

interface TerminalWindowProps {
  history: HistoryType[];
  inputValue: string;
  onInputChange: (val: string) => void;
  onSubmit: () => void;
  onSelectCommand: (cmd: string) => void;
}

export function TerminalWindow({
  history,
  inputValue,
  onInputChange,
  onSubmit,
  onSelectCommand
}: TerminalWindowProps) {
  const windowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (windowRef.current) {
      windowRef.current.scrollTop = windowRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div 
      ref={windowRef}
      className="flex-1 min-h-[350px] max-h-[500px] overflow-y-auto p-4 flex flex-col gap-6 border border-border/20 rounded-lg bg-neutral-950/50 scroll-smooth"
    >
      {/* Welcome banner */}
      <div className="text-left font-mono text-xs text-neutral-400 whitespace-pre-line leading-relaxed">
        {history.length === 0 ? "Mohith Portfolio CLI v1.1.0\nType 'help' to review available terminal instructions." : ""}
      </div>

      {/* Commands logs list */}
      <CommandHistory history={history} onSelectCommand={onSelectCommand} />

      {/* Terminal Input prompt */}
      <TerminalInput 
        value={inputValue} 
        onChange={onInputChange} 
        onSubmit={onSubmit} 
      />
    </div>
  );
}
