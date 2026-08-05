import * as React from "react";
import { ProjectCard } from "./project-card";
import { projectsConfig } from "@/config/projects";

export function ProjectGrid() {
  const featuredProjects = [...projectsConfig]
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
