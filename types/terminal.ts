export interface TerminalOutputContent {
  key: string;
  value: string;
}

export interface TerminalOutput {
  title: string;
  description: string;
  structuredContent: TerminalOutputContent[];
  relatedProjects: string[];
  suggestedCommands: string[];
}

export interface TerminalCommand {
  name: string;
  description: string;
  category: string;
  output: TerminalOutput;
}

export interface TerminalConfig {
  welcomeMessage: string;
  systemInfo: {
    host: string;
    kernel: string;
    shell: string;
    uptime: string;
  };
  commands: Record<string, TerminalCommand>;
}

export interface CommandHistory {
  id: string;
  command: string;
  output?: TerminalOutput;
  timestamp: Date;
  error?: boolean;
}
