import * as React from "react";
import { GlassCard, Typography } from "@/components/ui";
import { Project } from "@/types/project";
import { ProjectPreview } from "./project-preview";
import { ProjectStatus } from "./project-status";
import { ProjectTags } from "./project-tags";
import { ProjectMeta } from "./project-meta";
import { ProjectActions } from "./project-actions";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard 
      variant="default" 
      padding="lg" 
      className="flex flex-col gap-6 bg-card/15 border-border/20 backdrop-blur-md hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
    >
      {/* 1. Preview */}
      <ProjectPreview slug={project.slug} />

      {/* 2. Status & Category */}
      <ProjectStatus category={project.category} status={project.status} />

      {/* 3. Title & Subtitle */}
      <div className="flex flex-col gap-1.5">
        <Typography 
          variant="h2" 
          className="text-foreground tracking-tight text-xl sm:text-2xl font-extrabold group-hover:text-primary transition-colors duration-300"
        >
          {project.title}
        </Typography>
        <Typography 
          variant="caption" 
          className="text-muted-foreground text-xs leading-none"
        >
          {project.subtitle}
        </Typography>
      </div>

      {/* 4. Description */}
      <Typography 
        variant="body" 
        className="text-muted-foreground text-sm leading-relaxed flex-1"
      >
        {project.description}
      </Typography>

      {/* 5. Technologies */}
      <ProjectTags technologies={project.technologies} />

      {/* 6. Metadata (Role, Timeline) */}
      <ProjectMeta role={project.role} timeline={project.timeline} />

      {/* 7. Action Buttons */}
      <ProjectActions project={project} />
    </GlassCard>
  );
}
