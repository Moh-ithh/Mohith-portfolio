import * as React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui";
import { heroConfig } from "@/config/hero";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4 items-center mt-8">
      <Button 
        variant="primary" 
        className="gap-2.5 px-6 py-3 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 font-semibold"
      >
        <span>{heroConfig.actions.primary}</span>
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
      <Button 
        variant="outline" 
        className="gap-2.5 px-6 py-3 hover:-translate-y-0.5 hover:bg-elevated transition-all duration-300 font-semibold"
      >
        <Mail className="size-4" />
        <span>{heroConfig.actions.secondary}</span>
      </Button>
    </div>
  );
}
