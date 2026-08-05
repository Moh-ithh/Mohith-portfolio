import * as React from "react";
import { Link2, ChevronRight } from "lucide-react";
import { Typography, Badge, Divider } from "@/components/ui";
import { AssistantMessage } from "@/types/assistant";

interface MessageProps {
  message: AssistantMessage;
  onSelectPrompt: (prompt: string) => void;
}

export function Message({ message, onSelectPrompt }: MessageProps) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end w-full">
        <div className="p-3 bg-primary text-primary-foreground rounded-lg max-w-[80%] text-xs font-semibold select-none text-left">
          {message.content}
        </div>
      </div>
    );
  }

  const res = message.responseObj;

  return (
    <div className="flex justify-start w-full">
      <div className="flex flex-col gap-4 p-4 bg-card/20 border border-border/25 backdrop-blur-md rounded-lg max-w-[90%] text-left select-none">
        
        {/* Title & Summary */}
        {res ? (
          <>
            <div className="flex flex-col gap-1">
              <Typography variant="caption" className="font-extrabold text-foreground text-sm">
                {res.title}
              </Typography>
              <Typography variant="body" className="text-muted-foreground text-xs leading-relaxed mt-0.5 font-medium">
                {res.summary}
              </Typography>
            </div>

            <Divider className="my-0 opacity-20" />

            {/* Detailed Explanation */}
            <Typography variant="body" className="text-neutral-300 text-[11px] sm:text-xs leading-relaxed">
              {res.explanation}
            </Typography>

            {/* Related Projects */}
            {res.relatedProjects.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <span className="text-[7px] font-bold text-muted-foreground uppercase tracking-widest leading-none">DEMONSTRATED IN</span>
                <div className="flex flex-col gap-1">
                  {res.relatedProjects.map((proj) => (
                    <div key={proj} className="flex gap-2 items-center text-[10px] text-foreground font-semibold">
                      <Link2 className="size-3 text-primary shrink-0" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1">
              {res.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-[9px] font-mono border-border/60 text-muted-foreground bg-elevated/10">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Follow Ups */}
            {res.suggestedFollowUps.length > 0 && (
              <div className="flex flex-col gap-2 pt-2 border-t border-border/20">
                <span className="text-[7px] font-bold text-muted-foreground uppercase tracking-widest leading-none">FOLLOW-UP MODULES</span>
                <div className="flex flex-col gap-1.5">
                  {res.suggestedFollowUps.map((follow) => (
                    <button 
                      key={follow} 
                      className="flex gap-2 items-center text-[10px] text-primary font-bold hover:underline cursor-pointer text-left w-full focus-visible:outline-none"
                      onClick={() => onSelectPrompt(follow)}
                    >
                      <ChevronRight className="size-3 text-primary shrink-0" />
                      <span>{follow}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <Typography variant="body" className="text-muted-foreground text-xs leading-relaxed">
            {message.content}
          </Typography>
        )}
      </div>
    </div>
  );
}
