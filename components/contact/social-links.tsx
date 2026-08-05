import * as React from "react";
import { Link2 } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-3 text-left font-mono">
      <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest leading-none select-none">
        SOCIAL DIRECTORIES
      </span>
      <div className="flex flex-col gap-2 bg-neutral-900/60 p-3 rounded border border-border/10 text-xs">
        {contactConfig.socials.map((social) => (
          <a 
            key={social.id} 
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-2 gap-2 leading-relaxed hover:text-primary transition-colors"
          >
            <span className="font-bold text-neutral-400">{social.label}:</span>
            <span className="text-primary font-semibold flex items-center gap-1">
              <span>{social.value}</span>
              <Link2 className="size-3 shrink-0" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
