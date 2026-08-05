import * as React from "react";
import { ChevronRight } from "lucide-react";
import { GlassCard, Typography } from "@/components/ui";
import { PromptSuggestion } from "@/types/assistant";

interface PromptCardProps {
  suggestion: PromptSuggestion;
  onClick: (prompt: string) => void;
}

export function PromptCard({ suggestion, onClick }: PromptCardProps) {
  return (
    <GlassCard 
      variant="interactive" 
      padding="sm" 
      className="flex items-center justify-between py-2 px-3 bg-card/5 border-border/20 backdrop-blur-xs select-none hover:border-primary/45 cursor-pointer text-left h-full"
      onClick={() => onClick(suggestion.prompt)}
    >
      <div className="flex flex-col gap-0.5 max-w-[90%]">
        <span className="text-[7px] font-mono text-primary uppercase tracking-wider leading-none">
          {suggestion.category}
        </span>
        <Typography variant="caption" className="font-bold text-foreground truncate mt-0.5 leading-tight">
          {suggestion.prompt}
        </Typography>
      </div>
      <ChevronRight className="size-3.5 text-neutral-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
    </GlassCard>
  );
}
