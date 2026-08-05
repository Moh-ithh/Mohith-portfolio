export interface CaseStudyDecision {
  decision: string;
  rationale: string;
}

export interface CaseStudyChallenge {
  challenge: string;
  solution: string;
}

export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  objectives: string[];
  architecture: string;
  engineeringDecisions: CaseStudyDecision[];
  implementation: string;
  challenges: CaseStudyChallenge[];
  results: CaseStudyResult[];
  lessonsLearned: string[];
  technologies: string[];
  timeline: string;
  role: string;
  repository?: string;
  liveDemo?: string;
  featured: boolean;
  order: number;
}
