import * as React from "react";
import { GlassCard } from "@/components/ui";
import { CaseStudy } from "@/types/case-study";
import { CaseStudyHeader } from "./case-study-header";
import { CaseStudyOverview } from "./case-study-overview";
import { CaseStudyProblem } from "./case-study-problem";
import { CaseStudyArchitecture } from "./case-study-architecture";
import { CaseStudyDecisions } from "./case-study-decisions";
import { CaseStudyChallenges } from "./case-study-challenges";
import { CaseStudyResults } from "./case-study-results";
import { CaseStudyTechnologies } from "./case-study-technologies";
import { CaseStudyActions } from "./case-study-actions";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <GlassCard 
      variant="default" 
      padding="lg" 
      className="flex flex-col gap-6 bg-card/15 border-border/20 backdrop-blur-md hover:border-primary/30 transition-all duration-300 group"
    >
      {/* 1. Header */}
      <CaseStudyHeader 
        title={study.title} 
        subtitle={study.subtitle} 
        role={study.role} 
        timeline={study.timeline} 
        repository={study.repository} 
        liveDemo={study.liveDemo} 
      />

      {/* 2. Overview */}
      <CaseStudyOverview overview={study.overview} />

      {/* 3. Problem & Objectives */}
      <CaseStudyProblem problem={study.problem} objectives={study.objectives} />

      {/* 4. Architecture & Implementation */}
      <CaseStudyArchitecture architecture={study.architecture} implementation={study.implementation} />

      {/* 5. Decisions */}
      <CaseStudyDecisions decisions={study.engineeringDecisions} />

      {/* 6. Challenges */}
      <CaseStudyChallenges challenges={study.challenges} />

      {/* 7. Results & Lessons Learned */}
      <CaseStudyResults results={study.results} lessons={study.lessonsLearned} />

      {/* 8. Integrated Tech Badges */}
      <CaseStudyTechnologies technologies={study.technologies} />

      {/* 9. Action Trigger CTA */}
      <CaseStudyActions />

    </GlassCard>
  );
}
