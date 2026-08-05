import * as React from "react";
import { ContactHeader } from "./contact-header";
import { ContactMethods } from "./contact-methods";
import { AvailabilityCard } from "./availability-card";
import { SocialLinks } from "./social-links";
import { ContactForm } from "./contact-form";
import { ContactFooter } from "./contact-footer";
import { contactConfig } from "@/config/contact";

export function ContactLayout() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
      {/* Top Header */}
      <ContactHeader welcome={contactConfig.welcomeMessage} />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <ContactMethods />
          <AvailabilityCard />
          <SocialLinks />
        </div>

        {/* Right Column */}
        <div className="h-full">
          <ContactForm />
        </div>

      </div>

      {/* Secure footer keys */}
      <ContactFooter />
    </div>
  );
}
