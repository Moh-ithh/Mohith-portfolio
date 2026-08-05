import * as React from "react";
import { Typography } from "@/components/ui";

interface DomainHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export function DomainHeader({ title, subtitle, description }: DomainHeaderProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <Typography variant="h3" className="font-extrabold text-foreground tracking-tight text-xl sm:text-2xl leading-none">
        {title}
      </Typography>
      <Typography variant="caption" className="text-primary font-mono text-[10px] uppercase tracking-wider leading-none">
        {subtitle}
      </Typography>
      <Typography variant="body" className="text-muted-foreground text-sm leading-relaxed mt-1">
        {description}
      </Typography>
    </div>
  );
}
