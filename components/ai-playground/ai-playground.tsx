import * as React from "react";
import { Section, Container, Typography } from "@/components/ui";
import { AssistantLayout } from "./assistant-layout";

export function AIPlayground() {
  return (
    <Section id="ai" spacing="standard" className="bg-background relative overflow-hidden border-t border-border/20">
      {/* Background Radial Glow */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container variant="wide" className="flex flex-col gap-10 sm:gap-12 relative z-10">
        
        {/* Headers */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <Typography 
            variant="h2" 
            className="text-foreground tracking-tight font-black text-3xl sm:text-4xl"
          >
            AI Playground
          </Typography>
          <Typography 
            variant="body" 
            className="text-muted-foreground text-sm sm:text-base leading-relaxed"
          >
            Explore my engineering expertise, project architectures, and methodologies through a guided portfolio RAG model simulation console.
          </Typography>
        </div>

        {/* Assistant Layout */}
        <AssistantLayout />

      </Container>
    </Section>
  );
}
