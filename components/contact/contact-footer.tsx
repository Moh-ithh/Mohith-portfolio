import * as React from "react";
import { Terminal } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function ContactFooter() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-border/20 pt-4 text-[9px] text-neutral-500 font-mono select-none gap-2 text-left">
      <div className="flex items-center gap-1.5">
        <Terminal className="size-3" />
        <span>GPG FINGERPRINT: {contactConfig.gpgKeyFingerprint}</span>
      </div>
      <span>SECURE GATEWAY ENCRYPTED</span>
    </div>
  );
}
