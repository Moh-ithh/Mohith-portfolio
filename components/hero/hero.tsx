import * as React from "react";
import { Section, Container } from "@/components/ui";
import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <Section spacing="standard" className="flex items-center min-h-[calc(100vh-4rem)] relative overflow-hidden bg-background">
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="order-1">
            <HeroContent />
          </div>

          {/* Right - Visual Mockup */}
          <div className="order-2 lg:order-2 w-full flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
}
