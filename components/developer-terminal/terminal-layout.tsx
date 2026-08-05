"use client";

import * as React from "react";
import { GlassCard } from "@/components/ui";
import { TerminalHeader } from "./terminal-header";
import { TerminalStatus } from "./terminal-status";
import { TerminalWindow } from "./terminal-window";
import { QuickCommands } from "./quick-commands";
import { TerminalFooter } from "./terminal-footer";
import { CommandHistory } from "@/types/terminal";
import { terminalConfig } from "@/config/terminal";

export function TerminalLayout() {
  const [history, setHistory] = React.useState<CommandHistory[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleExecute = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const cmdName = trimmed.toLowerCase();

    // Check special command clear
    if (cmdName === "clear") {
      setHistory([]);
      setInputValue("");
      return;
    }

    const matchedCommand = terminalConfig.commands[cmdName];
    const newHistoryItem: CommandHistory = {
      id: `cmd-${Date.now()}`,
      command: trimmed,
      timestamp: new Date()
    };

    if (matchedCommand) {
      newHistoryItem.output = matchedCommand.output;
    } else {
      newHistoryItem.error = true;
    }

    setHistory((prev) => [...prev, newHistoryItem]);
    setInputValue("");
  };

  return (
    <GlassCard 
      variant="default" 
      padding="lg" 
      className="flex flex-col gap-6 bg-card/15 border-border/20 backdrop-blur-md w-full max-w-4xl mx-auto shadow-2xl"
    >
      {/* Header */}
      <TerminalHeader />

      {/* Uptime and Shell Metrics Status */}
      <TerminalStatus />

      {/* Terminal scroll display content */}
      <TerminalWindow 
        history={history}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSubmit={() => handleExecute(inputValue)}
        onSelectCommand={handleExecute}
      />

      {/* Shortcuts options */}
      <QuickCommands onSelectCommand={handleExecute} />

      {/* Footer port tags */}
      <TerminalFooter />

    </GlassCard>
  );
}
