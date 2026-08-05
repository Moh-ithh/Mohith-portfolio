import * as React from "react";
import { Mail, Link2, Code, FileText } from "lucide-react";
import { GlassCard, Typography } from "@/components/ui";
import { ContactMethod } from "@/types/contact";

interface ContactCardProps {
  method: ContactMethod;
}

export function ContactCard({ method }: ContactCardProps) {
  const getIcon = () => {
    switch (method.icon) {
      case "email":
        return <Mail className="size-5 text-primary" />;
      case "linkedin":
        return <Link2 className="size-5 text-primary" />;
      case "github":
        return <Code className="size-5 text-primary" />;
      case "resume":
        return <FileText className="size-5 text-primary" />;
    }
  };

  return (
    <a 
      href={method.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full focus-visible:outline-none"
    >
      <GlassCard 
        variant="interactive" 
        padding="sm" 
        className="flex items-center gap-4 py-3 px-4 bg-card/10 border-border/25 backdrop-blur-xs select-none hover:border-primary/45 cursor-pointer text-left w-full h-full"
      >
        <div className="h-10 w-10 rounded border border-border/30 bg-elevated/10 flex items-center justify-center shrink-0">
          {getIcon()}
        </div>
        <div className="flex flex-col gap-0.5 truncate">
          <span className="text-[7px] font-mono text-neutral-500 uppercase tracking-widest leading-none">
            {method.label}
          </span>
          <Typography variant="caption" className="font-extrabold text-foreground truncate mt-1 leading-tight text-xs sm:text-sm">
            {method.value}
          </Typography>
        </div>
      </GlassCard>
    </a>
  );
}
