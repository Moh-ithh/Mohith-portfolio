import * as React from "react";
import { Link2, Code } from "lucide-react";
import { Typography, Badge, Button } from "@/components/ui";

interface CaseStudyHeaderProps {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  repository?: string;
  liveDemo?: string;
}

export function CaseStudyHeader({
  title,
  subtitle,
  role,
  timeline,
  repository,
  liveDemo
}: CaseStudyHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <Typography variant="h3" className="font-extrabold text-foreground tracking-tight text-2xl sm:text-3xl leading-none">
            {title}
          </Typography>
          <Typography variant="body" className="text-muted-foreground text-sm font-medium">
            {subtitle}
          </Typography>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 select-none">
          {repository && (
            <Button variant="outline" className="gap-2 text-xs py-1.5 h-8 font-semibold hover:bg-elevated px-3">
              <Code className="size-3.5" />
              <span>Repository</span>
            </Button>
          )}
          {liveDemo && (
            <Button variant="outline" className="gap-2 text-xs py-1.5 h-8 font-semibold hover:bg-elevated px-3">
              <Link2 className="size-3.5" />
              <span>Demo</span>
            </Button>
          )}
        </div>
      </div>

      {/* Role & Timeline badges */}
      <div className="flex flex-wrap gap-2 items-center select-none text-[10px] uppercase font-mono tracking-wider">
        <Badge variant="outline" className="border-border/60 text-foreground bg-elevated/10">
          Role: {role}
        </Badge>
        <Badge variant="outline" className="border-border/60 text-muted-foreground bg-elevated/10">
          Timeline: {timeline}
        </Badge>
      </div>
    </div>
  );
}
