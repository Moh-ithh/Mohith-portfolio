import * as React from "react";
import { GlassCard, Divider } from "@/components/ui";
import { Domain } from "@/types/domain";
import { DomainHeader } from "./domain-header";
import { DomainTechnologies } from "./domain-technologies";
import { DomainTools } from "./domain-tools";
import { DomainMethodology } from "./domain-methodology";
import { DomainProjects } from "./domain-projects";
import { DomainMetrics } from "./domain-metrics";
import { DomainActions } from "./domain-actions";

interface DomainCardProps {
  domain: Domain;
}

export function DomainCard({ domain }: DomainCardProps) {
  return (
    <GlassCard 
      variant="default" 
      padding="lg" 
      className="flex flex-col gap-6 bg-card/15 border-border/20 backdrop-blur-md hover:border-primary/30 transition-all duration-300 group"
    >
      {/* 1. Header */}
      <DomainHeader 
        title={domain.title} 
        subtitle={domain.subtitle} 
        description={domain.description} 
      />

      <Divider className="my-0 opacity-40" />

      {/* 2. Core Specialties */}
      <DomainTechnologies technologies={domain.technologies} />

      {/* 3. Toolstack */}
      <DomainTools tools={domain.tools} />

      {/* 4. Methodology */}
      <DomainMethodology methodology={domain.methodology} />

      {/* 5. Related Projects */}
      <DomainProjects projects={domain.relatedProjects} />

      <Divider className="my-0 opacity-40 mt-auto" />

      {/* 6. Metrics */}
      <DomainMetrics metrics={domain.metrics} />

      {/* 7. Action Button */}
      <DomainActions />

    </GlassCard>
  );
}
