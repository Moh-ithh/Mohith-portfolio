export interface DomainMetric {
  value: string;
  label: string;
}

export interface RelatedProject {
  title: string;
  slug?: string;
}

export interface Domain {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  tools: string[];
  methodology: string[];
  relatedProjects: RelatedProject[];
  metrics: DomainMetric[];
  featured: boolean;
  order: number;
}
