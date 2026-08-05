import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

export function CaseStudyActions() {
  return (
    <div className="mt-2 w-full select-none">
      <Button variant="primary" className="w-full gap-2 text-xs py-2 h-9 font-semibold justify-center">
        <span>Read Full Architectural Log</span>
        <ArrowRight className="size-3.5" />
      </Button>
    </div>
  );
}
