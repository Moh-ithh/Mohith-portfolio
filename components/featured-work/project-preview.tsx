import * as React from "react";
import { Terminal, Cpu, Layers, Activity, CheckCircle2, ChevronRight } from "lucide-react";

interface ProjectPreviewProps {
  slug: string;
}

export function ProjectPreview({ slug }: ProjectPreviewProps) {
  const renderPreview = () => {
    switch (slug) {
      case "mobile-security-platform":
        return (
          <div className="flex-1 flex flex-col rounded-lg bg-neutral-950 border border-neutral-800/80 overflow-hidden font-sans text-left">
            {/* Top Bar */}
            <div className="h-6 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-2 text-[9px] text-neutral-400">
              <div className="flex items-center gap-1.5 font-mono">
                <Terminal className="size-3 text-success" />
                <span>mobsf-analyzer v1.1</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                <span className="text-[7px] uppercase font-bold text-success">Verified</span>
              </div>
            </div>
            {/* Body */}
            <div className="flex-1 p-3 flex flex-col gap-2 font-mono text-[8px] sm:text-[9px] text-neutral-400 leading-tight">
              <div className="flex justify-between items-center text-success border-b border-neutral-900 pb-1">
                <span>$ run_security_audit --apk</span>
                <span className="text-neutral-500">100% OK</span>
              </div>
              <div className="flex flex-col gap-1 text-[8px]">
                <div className="flex items-center gap-1 text-success">
                  <CheckCircle2 className="size-2.5" />
                  <span>[PASS] Frida Hook: PID 2841 Injected</span>
                </div>
                <div className="flex items-center gap-1 text-success">
                  <CheckCircle2 className="size-2.5" />
                  <span>[PASS] SSL Pinning: Disabled</span>
                </div>
                <div className="flex items-center gap-1 text-neutral-500">
                  <ChevronRight className="size-2.5" />
                  <span>[INFO] Analyzed 247 dynamic APIs</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "careerpilot-ai-agents":
        return (
          <div className="flex-1 flex flex-col rounded-lg bg-neutral-950 border border-neutral-800/80 overflow-hidden font-sans text-left">
            {/* Top Bar */}
            <div className="h-6 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-2 text-[9px] text-neutral-400">
              <div className="flex items-center gap-1.5 font-mono">
                <Cpu className="size-3 text-primary" />
                <span>multi-agent-orchestrator://gemini</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[7px] uppercase font-bold text-primary">Orchestrating</span>
              </div>
            </div>
            {/* AI Agent Node Graph Visual */}
            <div className="flex-1 p-3 flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_center,var(--primary)/8%,transparent_60%)] bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px]">
              <div className="flex items-center gap-2 relative z-10">
                {/* Node 1 */}
                <div className="flex flex-col items-center p-1 bg-neutral-900/90 border border-neutral-800 rounded">
                  <span className="text-[7px] text-neutral-500 font-bold uppercase tracking-widest leading-none">AGENT 1</span>
                  <span className="text-[8px] font-bold text-neutral-300 mt-1 font-mono">ProfileEmbed</span>
                </div>
                {/* Vector Flow */}
                <div className="w-6 h-[1px] border-t border-dashed border-primary/50 relative" />
                {/* Node 2 */}
                <div className="flex flex-col items-center p-1 bg-primary/10 border border-primary/40 rounded">
                  <span className="text-[7px] text-primary font-bold uppercase tracking-widest leading-none">GEMINI LLM</span>
                  <span className="text-[8px] font-bold text-foreground mt-1 font-mono">PathOptimizer</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "enterprise-dashboard-platform":
      default:
        return (
          <div className="flex-1 flex flex-col rounded-lg bg-neutral-950 border border-neutral-800/80 overflow-hidden font-sans text-left">
            {/* Top Bar */}
            <div className="h-6 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-2 text-[9px] text-neutral-400">
              <div className="flex items-center gap-1.5 font-mono">
                <Layers className="size-3 text-warning" />
                <span>enterprise-console://telemetry</span>
              </div>
              <div className="flex items-center gap-1">
                <Activity className="size-2.5 text-warning animate-pulse" />
              </div>
            </div>
            {/* Database Stats UI */}
            <div className="flex-1 p-3 flex flex-col gap-2 font-mono">
              <div className="grid grid-cols-2 gap-1.5 text-[8px] text-neutral-500 leading-none">
                <div className="bg-neutral-900/60 rounded p-1 border border-neutral-800/50 flex flex-col gap-0.5">
                  <span>DB LATENCY</span>
                  <span className="text-neutral-200 font-bold">24 ms</span>
                </div>
                <div className="bg-neutral-900/60 rounded p-1 border border-neutral-800/50 flex flex-col gap-0.5">
                  <span>SSL STATUS</span>
                  <span className="text-success font-bold">ACTIVE</span>
                </div>
              </div>
              {/* Telemetry rows */}
              <div className="flex-1 bg-neutral-900/30 rounded border border-border/10 p-1 flex flex-col gap-1 text-[7px] text-neutral-400 overflow-hidden">
                <div className="flex justify-between border-b border-neutral-800 pb-0.5">
                  <span>GET /api/v1/telemetry</span>
                  <span className="text-success font-bold">200 OK</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-0.5">
                  <span>POST /api/v1/migrations</span>
                  <span className="text-success font-bold">200 OK</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full aspect-[16/10] bg-neutral-900 rounded-xl p-1.5 sm:p-2 border border-border/20 shadow-inner flex flex-col relative select-none">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-xl" aria-hidden="true" />
      {renderPreview()}
    </div>
  );
}
