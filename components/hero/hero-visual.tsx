import { Shield, Cpu, Layers, Activity, Terminal, CheckCircle2 } from "lucide-react";
import { GlassCard, Typography, Badge, Divider } from "@/components/ui";

export function HeroVisual() {
  return (
    <div className="w-full aspect-[4/3] max-w-[620px] mx-auto flex items-center justify-center relative select-none overflow-visible">
      
      {/* Layer 1: Background & Layer 3: Engineering Grid */}
      <div 
        className="absolute inset-0 rounded-2xl border border-border/20 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Layer 2: Ambient Radial Lighting */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/10%,transparent_70%)] blur-[40px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 left-1/4 w-56 h-56 bg-primary/8 rounded-full blur-[80px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Layer 4: Subtle Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 md:opacity-75" aria-hidden="true">
        <div className="absolute rounded-full border border-border/20 w-[300px] h-[300px] [transform:rotateX(65deg)_rotateY(0deg)_rotateZ(0deg)]" />
        <div className="absolute rounded-full border border-border/15 w-[440px] h-[440px] [transform:rotateX(65deg)_rotateY(0deg)_rotateZ(0deg)]" />
        <div className="absolute rounded-full border border-border/10 w-[560px] h-[560px] [transform:rotateX(65deg)_rotateY(0deg)_rotateZ(0deg)]" />
      </div>

      {/* Layer 5: Premium Glass Platform Base */}
      <div 
        className="absolute bottom-[8%] w-[380px] h-[24px] bg-elevated/30 border border-border/30 rounded-full shadow-2xl backdrop-blur-xs pointer-events-none flex items-center justify-center" 
        aria-hidden="true"
      >
        <div className="w-[360px] h-[12px] bg-background/25 rounded-full border border-border/15" />
      </div>

      {/* Layer 6: Engineering Workstation (Laptop Chassis & Interface) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[340px] sm:max-w-[400px]">
        
        {/* Screen Chassis (Premium Bezel & Thin Border) */}
        <div className="w-[290px] sm:w-[340px] aspect-[16/10] bg-neutral-900 border-[6px] border-neutral-950 dark:border-neutral-800 rounded-t-2xl shadow-2xl relative overflow-hidden flex flex-col p-1.5 sm:p-2 bg-gradient-to-b from-neutral-800 to-neutral-950">
          
          {/* Screen Content: Mobile Security Testing Platform UI */}
          <div className="flex-1 flex flex-col rounded-lg bg-neutral-950 border border-neutral-800 overflow-hidden font-sans">
            
            {/* Platform Topbar Navigation */}
            <div className="h-7 bg-neutral-900 border-b border-neutral-800/80 flex items-center justify-between px-2 text-[9px] text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Terminal className="size-3 text-primary" />
                <span className="font-mono text-neutral-300 font-bold uppercase tracking-wider">mobsf-analyzer://v1.1</span>
              </div>
              <div className="flex items-center gap-1.5 bg-success/10 px-1.5 py-0.5 rounded border border-success/30">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-[8px] uppercase tracking-wider text-success font-black">Secure</span>
              </div>
            </div>

            {/* Analysis Grid Dashboard */}
            <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
              
              {/* APK upload information bar */}
              <div className="bg-neutral-900/60 rounded p-1.5 border border-neutral-800/80 flex justify-between items-center">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[7px] uppercase tracking-widest text-neutral-500 font-medium leading-none">TARGET BUILD</span>
                  <span className="text-[9px] font-bold text-neutral-200 font-mono truncate max-w-[140px]">android-prod-v2.apk</span>
                </div>
                <span className="text-[8px] font-mono text-neutral-500">42.8 MB</span>
              </div>

              {/* Core static & dynamic analysis modules status */}
              <div className="grid grid-cols-2 gap-1.5">
                
                {/* Static Analysis Module */}
                <div className="bg-neutral-900/40 rounded p-1.5 border border-neutral-800/60 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] uppercase tracking-widest text-neutral-400 font-bold">Static Analysis</span>
                    <CheckCircle2 className="size-2.5 text-success" />
                  </div>
                  <div className="flex flex-col gap-0.5 text-[8px] font-mono text-neutral-500 leading-tight">
                    <div>Manifest: verified</div>
                    <div>Permissions: OK</div>
                    <div>API keys: parsed</div>
                  </div>
                </div>

                {/* Dynamic Tracing Module */}
                <div className="bg-neutral-900/40 rounded p-1.5 border border-neutral-800/60 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] uppercase tracking-widest text-neutral-400 font-bold">Dynamic (Frida)</span>
                    <Activity className="size-2.5 text-primary" />
                  </div>
                  <div className="flex flex-col gap-0.5 text-[8px] font-mono text-neutral-500 leading-tight">
                    <div>PID: 14201</div>
                    <div>Hooks: active</div>
                    <div>SSL pinning: bypassed</div>
                  </div>
                </div>
              </div>

              {/* Threat Score & Risk level indicator */}
              <div className="bg-neutral-900/80 rounded p-1.5 border border-neutral-800 flex items-center justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[7px] uppercase tracking-widest text-neutral-500 font-bold">MALWARE DETECTED</span>
                  <span className="text-[10px] font-black text-success uppercase tracking-wider font-mono">Threat index: SAFE</span>
                </div>
                <Badge variant="success" className="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5">
                  0/100 RISK
                </Badge>
              </div>

              {/* Real-time scanner timeline console logs */}
              <div className="flex-1 bg-neutral-950 rounded p-1.5 border border-neutral-800/85 font-mono text-[7px] leading-relaxed text-neutral-400 overflow-hidden flex flex-col gap-0.5">
                <div className="text-primary truncate">$ scan_host_vulnerabilities --target android</div>
                <div className="truncate text-success">[OK] Verified class files decryption</div>
                <div className="truncate">[OK] No dynamic runtime anomalies found</div>
                <div className="truncate text-neutral-500">[IDLE] Tracing system outputs...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Laptop Aluminium Hinge */}
        <div className="w-[84px] sm:w-[110px] h-[5px] bg-neutral-800 border-x border-neutral-700 rounded-b-xs" aria-hidden="true" />

        {/* Laptop lower chassis base */}
        <div className="w-[320px] sm:w-[370px] h-[9px] bg-neutral-700 border-t border-b border-neutral-500 rounded-b-2xl shadow-xl flex justify-center pt-0.5 relative z-10 bg-gradient-to-b from-neutral-600 to-neutral-800" aria-hidden="true">
          <div className="w-[60px] sm:w-[70px] h-[4px] bg-neutral-900 rounded-b-sm border-x border-b border-neutral-600" />
        </div>
      </div>

      {/* Layer 7: Floating GlassCards (Miniature Domain Previews) */}
      
      {/* Card 1: Cybersecurity - Top Left */}
      <div className="absolute top-[8%] left-[2%] sm:left-[5%] z-20">
        <GlassCard variant="interactive" padding="sm" className="w-[140px] sm:w-[160px] bg-card/20 backdrop-blur-md border-success/30 flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-border/20 pb-1.5">
            <span className="text-[9px] font-black uppercase tracking-widest text-success font-mono">Cybersec</span>
            <Shield className="size-3.5 text-success" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="caption" className="font-bold text-[11px] sm:text-xs text-foreground tracking-wide leading-none">
              Penetration Testing
            </Typography>
            <div className="flex flex-col gap-0.5 text-[8px] font-mono text-muted-foreground mt-0.5">
              <div className="flex justify-between"><span className="text-neutral-500">Frida:</span> <span className="text-success font-semibold">Active</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">MobSF:</span> <span className="text-neutral-300">0 Alerts</span></div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Card 2: AI Systems - Top Right */}
      <div className="absolute top-[12%] right-[2%] sm:right-[5%] z-20">
        <GlassCard variant="interactive" padding="sm" className="w-[140px] sm:w-[160px] bg-card/20 backdrop-blur-md border-primary/30 flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-border/20 pb-1.5">
            <span className="text-[9px] font-black uppercase tracking-widest text-primary font-mono">Intelligence</span>
            <Cpu className="size-3.5 text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="caption" className="font-bold text-[11px] sm:text-xs text-foreground tracking-wide leading-none">
              CareerPilot AI
            </Typography>
            <div className="flex flex-col gap-0.5 text-[8px] font-mono text-muted-foreground mt-0.5">
              <div className="flex justify-between"><span className="text-neutral-500">Model:</span> <span className="text-neutral-300 font-semibold">Gemini 1.5</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">Agents:</span> <span className="text-success font-semibold">Online</span></div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Card 3: Full Stack - Bottom Left */}
      <div className="absolute bottom-[10%] left-[2%] sm:left-[8%] z-20">
        <GlassCard variant="interactive" padding="sm" className="w-[140px] sm:w-[160px] bg-card/20 backdrop-blur-md border-border/30 flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-border/20 pb-1.5">
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Arch</span>
            <Layers className="size-3.5 text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="caption" className="font-bold text-[11px] sm:text-xs text-foreground tracking-wide leading-none">
              Next.js Architecture
            </Typography>
            <div className="flex flex-col gap-0.5 text-[8px] font-mono text-muted-foreground mt-0.5">
              <div className="flex justify-between"><span className="text-neutral-500">Latency:</span> <span className="text-success font-semibold">24ms</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">DB:</span> <span className="text-neutral-300 font-semibold">Connected</span></div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Card 4: Projects - Center Top */}
      <div className="absolute top-[-7%] left-[34%] z-20">
        <GlassCard variant="interactive" padding="sm" className="flex items-center gap-3 py-2 px-4 bg-card/20 backdrop-blur-md border-border/30">
          <div className="flex flex-col gap-0.5">
            <span className="text-[7px] font-black uppercase tracking-widest text-muted-foreground leading-none">TOTAL BUILDS</span>
            <span className="text-sm font-black text-foreground font-mono leading-none">12+ active</span>
          </div>
          <Divider orientation="vertical" className="h-6 mx-0 bg-border/20" />
          <span className="text-[9px] font-bold text-muted-foreground whitespace-nowrap">Case Studies</span>
        </GlassCard>
      </div>

      {/* Card 5: Performance - Bottom Right */}
      <div className="absolute bottom-[14%] right-[2%] sm:right-[8%] z-20">
        <GlassCard variant="interactive" padding="sm" className="w-[140px] sm:w-[160px] bg-card/20 backdrop-blur-md border-warning/30 flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-border/20 pb-1.5">
            <span className="text-[9px] font-black uppercase tracking-widest text-warning font-mono">Optimization</span>
            <Activity className="size-3.5 text-warning" />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="caption" className="font-bold text-[11px] sm:text-xs text-foreground tracking-wide leading-none">
              SEO & Speed
            </Typography>
            <div className="flex flex-col gap-0.5 text-[8px] font-mono text-muted-foreground mt-0.5">
              <div className="flex justify-between"><span className="text-neutral-500">Lighthouse:</span> <span className="text-success font-semibold">99/100</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">A11y:</span> <span className="text-success font-semibold">Passed</span></div>
            </div>
          </div>
        </GlassCard>
      </div>

    </div>
  );
}
