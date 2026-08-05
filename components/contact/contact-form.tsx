"use client";

import * as React from "react";
import { Send, Settings } from "lucide-react";
import { GlassCard, Button } from "@/components/ui";
import { FormField } from "./form-field";
import { FormStatus } from "./form-status";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsPending(true);

    // Simulate server ingestion delay
    setTimeout(() => {
      setIsPending(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    }, 800);
  };

  return (
    <GlassCard 
      variant="default" 
      padding="lg" 
      className="flex flex-col gap-6 bg-card/15 border-border/20 backdrop-blur-md text-left w-full h-full"
    >
      <div className="flex items-center justify-between border-b border-border/20 pb-4 select-none">
        <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest leading-none">
          SECURE COMMUNICATIONS GATEWAY
        </span>
        <div className="flex items-center gap-1.5 bg-neutral-900 border border-border/20 rounded px-2.5 py-1 text-[8px] text-neutral-400 font-mono">
          <Settings className="size-3 text-neutral-500" />
          <span>sec-gateway://direct</span>
        </div>
      </div>

      {isSuccess ? (
        <FormStatus />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField 
              id="name" 
              label="YOUR NAME" 
              value={formData.name}
              onChange={(val) => setFormData((prev) => ({ ...prev, name: val }))}
              required
              placeholder="e.g. Mohith"
              error={errors.name}
            />
            <FormField 
              id="email" 
              label="EMAIL ADDRESS" 
              type="email"
              value={formData.email}
              onChange={(val) => setFormData((prev) => ({ ...prev, email: val }))}
              required
              placeholder="e.g. candidate@hiring.com"
              error={errors.email}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField 
              id="company" 
              label="COMPANY / ORGANIZATION" 
              value={formData.company}
              onChange={(val) => setFormData((prev) => ({ ...prev, company: val }))}
              placeholder="e.g. Acme Corp"
            />
            <FormField 
              id="subject" 
              label="SUBJECT MATTER" 
              value={formData.subject}
              onChange={(val) => setFormData((prev) => ({ ...prev, subject: val }))}
              required
              placeholder="e.g. Technical Interview Schedule"
              error={errors.subject}
            />
          </div>

          <FormField 
            id="message" 
            label="DETAILED WORK BRIEF" 
            type="textarea"
            value={formData.message}
            onChange={(val) => setFormData((prev) => ({ ...prev, message: val }))}
            required
            placeholder="Outline your engineering problems or interview schedule requirements here..."
            error={errors.message}
          />

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full gap-2 text-xs py-2 h-10 font-bold justify-center mt-2 cursor-pointer select-none"
            disabled={isPending}
          >
            <span>{isPending ? "INGESTING SYSTEM QUEUE..." : "TRANSMIT TASK BRIEF"}</span>
            <Send className="size-3.5" />
          </Button>
        </form>
      )}
    </GlassCard>
  );
}
