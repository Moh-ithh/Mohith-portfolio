import * as React from "react";
import { PromptCard } from "./prompt-card";
import { assistantConfig } from "@/config/assistant";

interface PromptGridProps {
  onSelectPrompt: (prompt: string) => void;
}

export function PromptGrid({ onSelectPrompt }: PromptGridProps) {
  return (
    <div className="flex flex-col gap-2.5 text-left select-none">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">SUGGESTED ENGINEERING PROMPTS</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {assistantConfig.suggestions.map((suggestion) => (
          <PromptCard 
            key={suggestion.id} 
            suggestion={suggestion} 
            onClick={onSelectPrompt} 
          />
        ))}
      </div>
    </div>
  );
}
