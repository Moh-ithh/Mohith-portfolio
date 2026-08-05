import * as React from "react";
import { Badge } from "@/components/ui";

export function AvailabilityBadge() {
  return (
    <Badge variant="success" className="gap-1.5 py-1 px-3 select-none">
      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
      Available for Work
    </Badge>
  );
}
