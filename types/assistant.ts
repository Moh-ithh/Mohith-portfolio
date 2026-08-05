export interface PromptSuggestion {
  id: string;
  prompt: string;
  category: string;
}

export interface AssistantResponse {
  title: string;
  summary: string;
  explanation: string;
  relatedProjects: string[];
  technologies: string[];
  suggestedFollowUps: string[];
}

export interface AssistantMessage {
  id: string;
  role: "user" | "assistant";
  content?: string;
  responseObj?: AssistantResponse;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  messages: AssistantMessage[];
}

export interface AssistantConfig {
  welcomeMessage: string;
  suggestions: PromptSuggestion[];
  responses: Record<string, AssistantResponse>;
}
