import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export function DomainActions() {
  return (
    <div className="mt-2 w-full select-none">
      <Button variant="outline" className="w-full gap-2 text-xs py-2 h-9 font-semibold justify-center hover:bg-elevated transition-colors duration-300">
        <span>Explore Methodology</span>
        <ArrowRight className="size-3.5" />
      </Button>
    </div>
  );
}
