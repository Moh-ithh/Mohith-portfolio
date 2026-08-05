import * as React from "react";
import { Link2 } from "lucide-react";
import { Typography, Badge, Divider } from "@/components/ui";
import { TerminalOutput as OutputType } from "@/types/terminal";

interface TerminalOutputProps {
  output: OutputType;
  onSelectCommand: (cmd: string) => void;
}

export function TerminalOutput({ output, onSelectCommand }: TerminalOutputProps) {
  return (
    <div className="flex flex-col gap-4 text-left select-none font-mono">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <span className="text-[7px] text-primary uppercase tracking-widest font-bold">
          COMMAND RESPONSE // {output.title.toUpperCase()}
        </span>
        <Typography variant="body" className="text-neutral-300 text-xs leading-relaxed mt-1 font-semibold">
          {output.description}
        </Typography>
      </div>

      <Divider className="my-0 opacity-20" />

      {/* Structured Content Table */}
      {output.structuredContent.length > 0 && (
        <div className="flex flex-col gap-2 bg-neutral-900/60 p-3 rounded border border-border/10 text-xs">
          {output.structuredContent.map((item) => (
            <div key={item.key} className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 leading-relaxed">
              <span className="text-primary font-bold">{item.key}:</span>
              <span className="text-neutral-400 sm:col-span-2">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Related Projects */}
      {output.relatedProjects.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <span className="text-[7px] font-bold text-neutral-500 uppercase tracking-widest leading-none">
            RELATED PROJECTS
          </span>
          <div className="flex flex-col gap-1">
            {output.relatedProjects.map((proj) => (
              <div key={proj} className="flex gap-2 items-center text-[10px] text-foreground font-semibold">
                <Link2 className="size-3 text-primary shrink-0" />
                <span>{proj}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggested Followups commands */}
      {output.suggestedCommands.length > 0 && (
        <div className="flex flex-col gap-2 pt-2 border-t border-border/20">
          <span className="text-[7px] font-bold text-neutral-500 uppercase tracking-widest leading-none">
            SUGGESTED COMMAND SHORTCUTS
          </span>
          <div className="flex flex-wrap gap-2">
            {output.suggestedCommands.map((cmd) => (
              <button 
                key={cmd} 
                className="focus-visible:outline-none"
                onClick={() => onSelectCommand(cmd)}
              >
                <Badge variant="outline" className="text-[9px] font-mono border-border/60 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary/40 py-0.5 px-2 cursor-pointer transition-all duration-300">
                  {cmd}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
