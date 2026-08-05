import * as React from "react";
import { Section, Container, Typography } from "@/components/ui";
import { CaseStudyGrid } from "./case-study-grid";

export function CaseStudies() {
  return (
    <Section id="studies" spacing="standard" className="bg-background relative overflow-hidden border-t border-border/20">
      {/* Background Radial Glow */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container variant="wide" className="flex flex-col gap-10 sm:gap-12 relative z-10">
        
        {/* Headers */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <Typography 
            variant="h2" 
            className="text-foreground tracking-tight font-black text-3xl sm:text-4xl"
          >
            Engineering Case Studies
          </Typography>
          <Typography 
            variant="body" 
            className="text-muted-foreground text-sm sm:text-base leading-relaxed"
          >
            Deep-dives explaining technical choices, real-world architecture trade-offs, and outcomes from production software.
          </Typography>
        </div>

        {/* Grid Layout */}
        <CaseStudyGrid />

      </Container>
    </Section>
  );
}
