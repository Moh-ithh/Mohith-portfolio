import * as React from "react";
import { Badge } from "@/components/ui";

interface ProjectStatusProps {
  category: string;
  status: string;
}

export function ProjectStatus({ category, status }: ProjectStatusProps) {
  const getStatusVariant = (stat: string) => {
    switch (stat.toLowerCase()) {
      case "completed":
        return "success";
      case "maintained":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <div className="flex items-center gap-2 select-none">
      <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider bg-elevated/40 border-border/80 text-foreground">
        {category}
      </Badge>
      <Badge variant={getStatusVariant(status)} className="text-[10px] font-black uppercase tracking-wider">
        {status}
      </Badge>
    </div>
  );
}
