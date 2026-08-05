"use client";

import * as React from "react";
import { GlassCard, Button } from "@/components/ui";
import { Send, CornerDownLeft } from "lucide-react";
import { AssistantHeader } from "./assistant-header";
import { AssistantStatus } from "./assistant-status";
import { PromptGrid } from "./prompt-grid";
import { Conversation } from "./conversation";
import { QuickActions } from "./quick-actions";
import { AssistantFooter } from "./assistant-footer";
import { AssistantMessage } from "@/types/assistant";
import { assistantConfig } from "@/config/assistant";

export function AssistantLayout() {
  const [messages, setMessages] = React.useState<AssistantMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: assistantConfig.welcomeMessage,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);

  const handleQuery = (promptText: string) => {
    if (!promptText.trim()) return;

    // Add user message
    const userMsg: AssistantMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: promptText,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsPending(true);

    // Simulate RAG index lookup delay
    setTimeout(() => {
      const normalizedPrompt = promptText.toLowerCase().trim();
      const resolvedResponse = assistantConfig.responses[normalizedPrompt];

      const assistantMsg: AssistantMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        timestamp: new Date()
      };

      if (resolvedResponse) {
        assistantMsg.responseObj = resolvedResponse;
      } else {
        // Fallback default message
        assistantMsg.content = `QueryResult: No index match found for "${promptText}". Try selecting one of the suggested engineering prompts above or matching category domain filters below.`;
      }

      setMessages((prev) => [...prev, assistantMsg]);
      setIsPending(false);
    }, 600);
  };

  const handleQuickAction = (category: string) => {
    // Fill first suggestion in that category
    const matchedSuggestion = assistantConfig.suggestions.find(
      (s) => s.category.toLowerCase() === category.toLowerCase()
    );
    if (matchedSuggestion) {
      handleQuery(matchedSuggestion.prompt);
    }
  };

  return (
    <GlassCard 
      variant="default" 
      padding="lg" 
      className="flex flex-col gap-6 bg-card/15 border-border/20 backdrop-blur-md w-full max-w-4xl mx-auto shadow-2xl"
    >
      {/* Header */}
      <AssistantHeader />

      {/* RAG Status */}
      <AssistantStatus />

      {/* Suggested prompts grid */}
      <PromptGrid onSelectPrompt={handleQuery} />

      {/* Messages console area */}
      <Conversation 
        messages={messages} 
        isPending={isPending} 
        onSelectPrompt={handleQuery} 
      />

      {/* Quick domain filters */}
      <QuickActions onSelectAction={handleQuickAction} />

      {/* Input controls form */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleQuery(inputValue);
        }}
        className="flex gap-2 items-center bg-neutral-950/60 border border-border/20 rounded-lg p-2 relative"
      >
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask about cybersecurity, AI agent workflow nodes, Next.js architecture layouts..."
          className="flex-1 bg-transparent text-foreground text-xs placeholder-neutral-500 py-1.5 pl-2 pr-10 focus-visible:outline-none"
        />
        <div className="absolute right-3 flex items-center gap-1.5 select-none text-[8px] text-neutral-500 font-mono pointer-events-none hidden sm:flex">
          <span>Enter</span>
          <CornerDownLeft className="size-2.5" />
        </div>
        <Button 
          type="submit" 
          variant="primary" 
          className="h-8 w-8 rounded p-0 flex items-center justify-center shrink-0"
          aria-label="Send query"
        >
          <Send className="size-3.5" />
        </Button>
      </form>

      {/* Footer console tags */}
      <AssistantFooter />

    </GlassCard>
  );
}
