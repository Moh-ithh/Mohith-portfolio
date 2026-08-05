import * as React from "react";
import { CaseStudyCard } from "./case-study-card";
import { caseStudiesConfig } from "@/config/case-studies";

export function CaseStudyGrid() {
  const sortedStudies = [...caseStudiesConfig]
    .filter((study) => study.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="grid grid-cols-1 gap-10 lg:gap-12">
      {sortedStudies.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  );
}
