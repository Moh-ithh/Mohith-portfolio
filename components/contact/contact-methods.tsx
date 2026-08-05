import * as React from "react";
import { ContactCard } from "./contact-card";
import { contactConfig } from "@/config/contact";

export function ContactMethods() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest leading-none select-none text-left">
        DIRECT CONTACT CHANNELS
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {contactConfig.methods.map((method) => (
          <ContactCard key={method.id} method={method} />
        ))}
      </div>
    </div>
  );
}
