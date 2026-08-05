"use client";

import * as React from "react";
import { Message } from "./message";
import { TypingIndicator } from "./typing-indicator";
import { AssistantMessage } from "@/types/assistant";

interface ConversationProps {
  messages: AssistantMessage[];
  isPending: boolean;
  onSelectPrompt: (prompt: string) => void;
}

export function Conversation({ messages, isPending, onSelectPrompt }: ConversationProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isPending]);

  return (
    <div 
      ref={containerRef}
      className="flex-1 min-h-[320px] max-h-[480px] overflow-y-auto p-4 flex flex-col gap-4 border border-border/20 rounded-lg bg-neutral-950/40 scroll-smooth"
    >
      {messages.map((message) => (
        <Message 
          key={message.id} 
          message={message} 
          onSelectPrompt={onSelectPrompt} 
        />
      ))}
      
      {isPending && <TypingIndicator />}
    </div>
  );
}
