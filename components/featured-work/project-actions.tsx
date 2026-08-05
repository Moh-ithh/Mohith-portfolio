import { ArrowRight, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui";
import { Project } from "@/types/project";

interface ProjectActionsProps {
  project: Project;
}

export function ProjectActions({ project }: ProjectActionsProps) {
  return (
    <div className="flex flex-wrap gap-3 items-center mt-2 w-full">
      {project.caseStudyUrl && (
        <Button variant="primary" className="flex-1 gap-2 text-xs py-2 h-9 font-semibold justify-center">
          <span>Case Study</span>
          <ArrowRight className="size-3.5" />
        </Button>
      )}
      
      {project.githubUrl && (
        <Button variant="outline" className="gap-2 text-xs py-2 h-9 font-semibold justify-center px-3.5 hover:bg-elevated">
          <Code className="size-3.5" />
          <span className="hidden sm:inline">Code</span>
        </Button>
      )}

      {project.liveUrl && (
        <Button variant="outline" className="gap-2 text-xs py-2 h-9 font-semibold justify-center px-3.5 hover:bg-elevated">
          <ExternalLink className="size-3.5" />
          <span className="hidden sm:inline">Demo</span>
        </Button>
      )}
    </div>
  );
}
