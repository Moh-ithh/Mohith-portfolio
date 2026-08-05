import * as React from "react";
import { Section, Container, Typography } from "@/components/ui";
import { ContactLayout } from "./contact-layout";

export function Contact() {
  return (
    <Section id="contact" spacing="standard" className="bg-background relative overflow-hidden border-t border-border/20">
      {/* Background Radial Glow */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container variant="wide" className="flex flex-col gap-10 sm:gap-12 relative z-10">
        
        {/* Headers */}
        <div className="flex flex-col gap-3 max-w-2xl text-left">
          <Typography 
            variant="h2" 
            className="text-foreground tracking-tight font-black text-3xl sm:text-4xl"
          >
            Start Work
          </Typography>
          <Typography 
            variant="body" 
            className="text-muted-foreground text-sm sm:text-base leading-relaxed"
          >
            Submit a task brief or technical interview schedule to start collaboration.
          </Typography>
        </div>

        {/* Contact Layout */}
        <ContactLayout />

      </Container>
    </Section>
  );
}
