import * as React from "react";
import { Badge } from "@/components/ui";

interface QuickActionsProps {
  onSelectAction: (category: string) => void;
}

export function QuickActions({ onSelectAction }: QuickActionsProps) {
  const categories = ["Cybersecurity", "AI Systems", "Full Stack", "Architecture", "Research"];

  return (
    <div className="flex flex-col gap-2 text-left select-none">
      <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">QUICK DOMAIN FILTERS</span>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className="focus-visible:outline-none"
            onClick={() => onSelectAction(cat)}
          >
            <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-wider py-1 px-3.5 border-border/80 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
              {cat}
            </Badge>
          </button>
        ))}
      </div>
    </div>
  );
}
