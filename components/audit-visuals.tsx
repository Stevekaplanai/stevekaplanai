// Pure CSS/SVG audit visualizations — no external libraries

// --- 1. STACK ARCHITECTURE DIAGRAM ---
// Shows tool connections with broken links highlighted

const tools = [
  { id: "meta", label: "Meta Ads", x: 0, y: 0, color: "electric" },
  { id: "google", label: "Google Ads", x: 0, y: 1, color: "electric" },
  { id: "hubspot", label: "HubSpot", x: 1, y: 0.5, color: "emerald" },
  { id: "cpq", label: "Salesforce CPQ", x: 2, y: 0, color: "amber" },
  { id: "mixpanel", label: "Mixpanel", x: 2, y: 1, color: "coral" },
  { id: "mailchimp", label: "Mailchimp", x: 1, y: 1.5, color: "amber" },
  { id: "sheets", label: "Google Sheets", x: 2, y: 1.8, color: "coral" },
];

const connections = [
  { from: "meta", to: "hubspot", status: "broken", label: "CSV export" },
  { from: "google", to: "hubspot", status: "ok", label: "Native" },
  { from: "hubspot", to: "cpq", status: "broken", label: "Manual sync" },
  { from: "mixpanel", to: "hubspot", status: "none", label: "No connection" },
  { from: "mailchimp", to: "hubspot", status: "broken", label: "Zapier (breaks)" },
  { from: "hubspot", to: "sheets", status: "broken", label: "Manual pulls" },
];

export function StackDiagram() {
  return (
    <div className="bg-midnight border border-border rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Current Data Flow</p>
        <div className="flex items-center gap-4 ml-auto text-xs">
          <span className="flex items-center gap-1.5"><span className="w-6 h-0.5 bg-emerald inline-block" /> Connected</span>
          <span className="flex items-center gap-1.5"><span className="w-6 h-0.5 bg-coral inline-block opacity-60" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 3px, rgb(15 23 42) 3px, rgb(15 23 42) 6px)" }} /> Broken</span>
          <span className="flex items-center gap-1.5"><span className="w-6 h-0.5 border-t border-dashed border-muted-foreground/30 inline-block" /> Missing</span>
        </div>
      </div>

      {/* Diagram as positioned boxes */}
      <div className="relative" style={{ height: 320 }}>
        {/* Connection lines via SVG */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {/* Meta -> HubSpot (broken) */}
          <line x1="16%" y1="15%" x2="45%" y2="38%" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
          <text x="28%" y="22%" fill="#ef4444" fontSize="9" opacity="0.7">CSV export</text>

          {/* Google -> HubSpot (ok) */}
          <line x1="16%" y1="55%" x2="45%" y2="42%" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
          <text x="26%" y="53%" fill="#10b981" fontSize="9" opacity="0.7">Native</text>

          {/* HubSpot -> CPQ (broken) */}
          <line x1="62%" y1="32%" x2="82%" y2="15%" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
          <text x="68%" y="20%" fill="#ef4444" fontSize="9" opacity="0.7">Manual sync</text>

          {/* Mixpanel -> HubSpot (none) */}
          <line x1="82%" y1="55%" x2="62%" y2="42%" stroke="#64748b" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
          <text x="68%" y="54%" fill="#64748b" fontSize="9" opacity="0.5">No connection</text>

          {/* Mailchimp -> HubSpot (broken) */}
          <line x1="45%" y1="78%" x2="50%" y2="50%" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
          <text x="38%" y="68%" fill="#ef4444" fontSize="9" opacity="0.7">Zapier</text>

          {/* HubSpot -> Sheets (broken) */}
          <line x1="58%" y1="48%" x2="82%" y2="82%" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
          <text x="68%" y="72%" fill="#ef4444" fontSize="9" opacity="0.7">Manual pulls</text>
        </svg>

        {/* Tool nodes */}
        <div className="absolute left-[2%] top-[5%] w-[22%]">
          <div className="bg-electric/10 border border-electric/30 rounded-lg px-3 py-2.5 text-center">
            <p className="text-xs font-mono font-bold text-electric">Meta Ads</p>
            <p className="text-[9px] text-muted-foreground mt-0.5">$185K/mo</p>
          </div>
        </div>

        <div className="absolute left-[2%] top-[45%] w-[22%]">
          <div className="bg-electric/10 border border-electric/30 rounded-lg px-3 py-2.5 text-center">
            <p className="text-xs font-mono font-bold text-electric">Google Ads</p>
            <p className="text-[9px] text-muted-foreground mt-0.5">$80K/mo</p>
          </div>
        </div>

        <div className="absolute left-[38%] top-[28%] w-[24%]" style={{ zIndex: 1 }}>
          <div className="bg-emerald/10 border-2 border-emerald/40 rounded-lg px-3 py-3 text-center shadow-lg shadow-emerald/5">
            <p className="text-sm font-mono font-bold text-emerald">HubSpot</p>
            <p className="text-[9px] text-muted-foreground mt-0.5">CRM (hub)</p>
          </div>
        </div>

        <div className="absolute left-[74%] top-[5%] w-[24%]">
          <div className="bg-amber/10 border border-amber/30 rounded-lg px-3 py-2.5 text-center">
            <p className="text-xs font-mono font-bold text-amber">Salesforce CPQ</p>
            <p className="text-[9px] text-muted-foreground mt-0.5">Quoting</p>
          </div>
        </div>

        <div className="absolute left-[74%] top-[45%] w-[24%]">
          <div className="bg-coral/10 border border-coral/30 rounded-lg px-3 py-2.5 text-center">
            <p className="text-xs font-mono font-bold text-coral">Mixpanel</p>
            <p className="text-[9px] text-coral/60 mt-0.5">Disconnected</p>
          </div>
        </div>

        <div className="absolute left-[28%] top-[70%] w-[22%]">
          <div className="bg-amber/10 border border-amber/30 rounded-lg px-3 py-2.5 text-center">
            <p className="text-xs font-mono font-bold text-amber">Mailchimp</p>
            <p className="text-[9px] text-muted-foreground mt-0.5">Email</p>
          </div>
        </div>

        <div className="absolute left-[74%] top-[75%] w-[24%]">
          <div className="bg-coral/10 border border-coral/30 rounded-lg px-3 py-2.5 text-center">
            <p className="text-xs font-mono font-bold text-coral">Google Sheets</p>
            <p className="text-[9px] text-coral/60 mt-0.5">4 hrs/week</p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-xs text-coral">4 of 6 connections are broken or manual. Data moves by CSV, copy-paste, and Zapier workarounds.</p>
      </div>
    </div>
  );
}


// --- 2. METRIC COMPARISON BARS ---
// Horizontal bars showing current vs benchmark

const metricBars = [
  { label: "CAC", current: 2847, benchmark: 1800, unit: "$", bad: true },
  { label: "Show Rate", current: 45, benchmark: 65, unit: "%", bad: true },
  { label: "Attribution", current: 60, benchmark: 95, unit: "%", bad: true },
  { label: "Lead Response", current: 204, benchmark: 5, unit: "min", bad: true, invertScale: true },
  { label: "Close Rate", current: 8.2, benchmark: 12, unit: "%", bad: true },
];

export function MetricBars() {
  return (
    <div className="bg-midnight border border-border rounded-xl p-6 md:p-8">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Current vs Benchmark</p>
      <div className="space-y-5">
        {metricBars.map((m) => {
          const max = Math.max(m.current, m.benchmark) * 1.2;
          const currentPct = m.invertScale
            ? Math.min((m.current / max) * 100, 100)
            : Math.min((m.current / max) * 100, 100);
          const benchPct = m.invertScale
            ? Math.min((m.benchmark / max) * 100, 100)
            : Math.min((m.benchmark / max) * 100, 100);

          return (
            <div key={m.label}>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="text-sm text-foreground font-medium">{m.label}</span>
                <div className="flex gap-4 text-xs">
                  <span className="text-coral font-mono">
                    {m.unit === "$" ? `$${m.current.toLocaleString()}` : `${m.current}${m.unit}`}
                  </span>
                  <span className="text-emerald font-mono">
                    {m.unit === "$" ? `$${m.benchmark.toLocaleString()}` : `${m.benchmark}${m.unit}`}
                    <span className="text-muted-foreground/50 ml-1">target</span>
                  </span>
                </div>
              </div>
              <div className="relative h-3 bg-slate/50 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-coral/60 rounded-full transition-all"
                  style={{ width: `${currentPct}%` }}
                />
                <div
                  className="absolute top-0 h-full w-0.5 bg-emerald"
                  style={{ left: `${benchPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="w-3 h-2 bg-coral/60 rounded-sm inline-block" /> Current</span>
        <span className="flex items-center gap-1.5"><span className="w-0.5 h-3 bg-emerald inline-block" /> Benchmark</span>
      </div>
    </div>
  );
}


// --- 3. EFFORT VS LIFT QUADRANT ---
// SVG scatter plot with labeled dots

const quadrantWins = [
  { id: 1, label: "Attribution", lift: 10, effort: 4, color: "#3b82f6" },
  { id: 2, label: "Conv. Actions", lift: 8, effort: 2, color: "#10b981" },
  { id: 3, label: "Dashboard", lift: 7, effort: 3, color: "#3b82f6" },
  { id: 4, label: "Lead Scoring", lift: 8, effort: 6, color: "#f59e0b" },
  { id: 5, label: "Show Rate", lift: 7, effort: 2, color: "#10b981" },
];

export function QuadrantChart() {
  const w = 400;
  const h = 300;
  const pad = { top: 20, right: 30, bottom: 40, left: 50 };
  const plotW = w - pad.left - pad.right;
  const plotH = h - pad.top - pad.bottom;

  return (
    <div className="bg-midnight border border-border rounded-xl p-6 md:p-8">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Effort vs Lift Quadrant</p>
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md mx-auto" style={{ minWidth: 300 }}>
          {/* Grid */}
          <rect x={pad.left} y={pad.top} width={plotW} height={plotH} fill="none" stroke="#334155" strokeWidth="0.5" />

          {/* Quadrant lines */}
          <line x1={pad.left + plotW / 2} y1={pad.top} x2={pad.left + plotW / 2} y2={pad.top + plotH} stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1={pad.left} y1={pad.top + plotH / 2} x2={pad.left + plotW} y2={pad.top + plotH / 2} stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" />

          {/* Quadrant labels */}
          <text x={pad.left + plotW * 0.25} y={pad.top + plotH * 0.25} textAnchor="middle" fill="#10b981" fontSize="8" opacity="0.4">HIGH LIFT</text>
          <text x={pad.left + plotW * 0.25} y={pad.top + plotH * 0.25 + 10} textAnchor="middle" fill="#10b981" fontSize="8" opacity="0.4">LOW EFFORT</text>
          <text x={pad.left + plotW * 0.75} y={pad.top + plotH * 0.25} textAnchor="middle" fill="#f59e0b" fontSize="8" opacity="0.3">HIGH LIFT</text>
          <text x={pad.left + plotW * 0.75} y={pad.top + plotH * 0.25 + 10} textAnchor="middle" fill="#f59e0b" fontSize="8" opacity="0.3">HIGH EFFORT</text>

          {/* Axis labels */}
          <text x={pad.left + plotW / 2} y={h - 5} textAnchor="middle" fill="#94a3b8" fontSize="10">Effort →</text>
          <text x={12} y={pad.top + plotH / 2} textAnchor="middle" fill="#94a3b8" fontSize="10" transform={`rotate(-90, 12, ${pad.top + plotH / 2})`}>Lift →</text>

          {/* Grid ticks */}
          {[2, 4, 6, 8, 10].map(v => (
            <g key={`x-${v}`}>
              <line x1={pad.left + (v / 10) * plotW} y1={pad.top + plotH} x2={pad.left + (v / 10) * plotW} y2={pad.top + plotH + 4} stroke="#64748b" strokeWidth="0.5" />
              <text x={pad.left + (v / 10) * plotW} y={pad.top + plotH + 14} textAnchor="middle" fill="#64748b" fontSize="8">{v}</text>
            </g>
          ))}
          {[2, 4, 6, 8, 10].map(v => (
            <g key={`y-${v}`}>
              <line x1={pad.left - 4} y1={pad.top + plotH - (v / 10) * plotH} x2={pad.left} y2={pad.top + plotH - (v / 10) * plotH} stroke="#64748b" strokeWidth="0.5" />
              <text x={pad.left - 8} y={pad.top + plotH - (v / 10) * plotH + 3} textAnchor="end" fill="#64748b" fontSize="8">{v}</text>
            </g>
          ))}

          {/* Data points */}
          {quadrantWins.map(win => {
            const cx = pad.left + (win.effort / 10) * plotW;
            const cy = pad.top + plotH - (win.lift / 10) * plotH;
            return (
              <g key={win.id}>
                <circle cx={cx} cy={cy} r={16} fill={win.color} opacity="0.15" />
                <circle cx={cx} cy={cy} r={6} fill={win.color} opacity="0.8" />
                <text x={cx} y={cy - 12} textAnchor="middle" fill="#f8fafc" fontSize="9" fontWeight="600">
                  W{win.id}
                </text>
                <text x={cx} y={cy + 18} textAnchor="middle" fill="#94a3b8" fontSize="7">
                  {win.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">
        Top-left quadrant (high lift, low effort) ships first. W2 and W5 are quick wins. W4 is worth the effort but takes longer.
      </p>
    </div>
  );
}


// --- 4. 90-DAY GANTT TIMELINE ---
// Horizontal timeline showing when each win ships

const ganttItems = [
  { id: 1, label: "W2: Conv. Actions", start: 0, end: 1, color: "#10b981" },
  { id: 2, label: "W1: Attribution", start: 0, end: 2, color: "#3b82f6" },
  { id: 3, label: "W3: Dashboard", start: 2, end: 3, color: "#3b82f6" },
  { id: 4, label: "W5: Show Rate", start: 3, end: 4, color: "#10b981" },
  { id: 5, label: "W4: Lead Scoring", start: 5, end: 8, color: "#f59e0b" },
  { id: 6, label: "Audience Optimization", start: 7, end: 9, color: "#06b6d4" },
  { id: 7, label: "A/B Testing", start: 9, end: 11, color: "#06b6d4" },
  { id: 8, label: "Quarterly Review", start: 11, end: 12, color: "#f59e0b" },
];

const weekLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export function GanttTimeline() {
  const totalWeeks = 12;

  return (
    <div className="bg-midnight border border-border rounded-xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">90-Day Implementation Timeline</p>
        <div className="flex gap-3 text-[10px]">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-emerald inline-block" /> Quick win</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-electric inline-block" /> Core build</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-amber inline-block" /> Deep work</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-cyan inline-block" /> Optimize</span>
        </div>
      </div>

      {/* Week headers */}
      <div className="flex mb-1">
        <div className="w-36 flex-shrink-0" />
        <div className="flex-1 grid grid-cols-12">
          {weekLabels.map((w) => (
            <div key={w} className="text-center text-[9px] text-muted-foreground/60 font-mono">W{w}</div>
          ))}
        </div>
      </div>

      {/* Month dividers */}
      <div className="flex mb-1">
        <div className="w-36 flex-shrink-0" />
        <div className="flex-1 grid grid-cols-3">
          <div className="text-center text-[10px] text-emerald font-medium border-b border-emerald/20 pb-1">Month 1</div>
          <div className="text-center text-[10px] text-electric font-medium border-b border-electric/20 pb-1">Month 2</div>
          <div className="text-center text-[10px] text-amber font-medium border-b border-amber/20 pb-1">Month 3</div>
        </div>
      </div>

      {/* Gantt rows */}
      <div className="space-y-1.5 mt-3">
        {ganttItems.map((item) => (
          <div key={item.id} className="flex items-center">
            <div className="w-36 flex-shrink-0 text-xs text-muted-foreground pr-3 text-right truncate">
              {item.label}
            </div>
            <div className="flex-1 relative h-5">
              {/* Background grid */}
              <div className="absolute inset-0 grid grid-cols-12">
                {weekLabels.map((_, i) => (
                  <div key={i} className={`border-r border-border/20 ${i % 4 === 3 ? "border-r-border/40" : ""}`} />
                ))}
              </div>
              {/* Bar */}
              <div
                className="absolute top-0.5 h-4 rounded-sm"
                style={{
                  left: `${(item.start / totalWeeks) * 100}%`,
                  width: `${((item.end - item.start) / totalWeeks) * 100}%`,
                  backgroundColor: item.color,
                  opacity: 0.7,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// --- 5. FUNNEL IMPACT DIAGRAM ---
// Shows before/after funnel with specific numbers

export function FunnelImpact() {
  const stages = [
    { label: "Ad Spend", before: "$180K/mo", after: "$180K/mo", change: "Same spend", changeType: "neutral" as const },
    { label: "Attributed Leads", before: "60%", after: "95%", change: "+35pts", changeType: "up" as const },
    { label: "Demos Booked", before: "180/mo", after: "180/mo", change: "Same volume", changeType: "neutral" as const },
    { label: "Demo Show Rate", before: "45%", after: "65%", change: "+20pts", changeType: "up" as const },
    { label: "Live Demos", before: "81/mo", after: "117/mo", change: "+36/mo", changeType: "up" as const },
    { label: "Close Rate", before: "8.2%", after: "9.4%", change: "+1.2pts", changeType: "up" as const },
    { label: "New Customers", before: "6.6/mo", after: "11.0/mo", change: "+67%", changeType: "up" as const },
    { label: "CAC", before: "$2,847", after: "$2,100", change: "-26%", changeType: "up" as const },
  ];

  return (
    <div className="bg-midnight border border-border rounded-xl p-6 md:p-8">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Projected Funnel Impact (90 Days)</p>

      <div className="space-y-0">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-stretch">
            {/* Before */}
            <div className="flex-1 text-right pr-4 py-2.5 border-r border-border/30">
              <p className="text-sm font-mono text-muted-foreground">{s.before}</p>
            </div>

            {/* Center label */}
            <div className="w-36 flex-shrink-0 flex flex-col items-center justify-center relative">
              {i > 0 && <div className="absolute -top-1 w-px h-2 bg-border/30" />}
              <div className={`px-2 py-1 rounded text-[10px] font-medium ${i === stages.length - 1 ? "bg-emerald/10 text-emerald border border-emerald/20" : "bg-slate/50 text-muted-foreground"}`}>
                {s.label}
              </div>
              {i < stages.length - 1 && (
                <svg className="w-3 h-3 text-border/40 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
                </svg>
              )}
            </div>

            {/* After */}
            <div className="flex-1 pl-4 py-2.5 border-l border-border/30 flex items-center gap-2">
              <p className="text-sm font-mono text-foreground font-medium">{s.after}</p>
              {s.changeType === "up" && (
                <span className="text-[10px] text-emerald font-mono">{s.change}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
        <span>Before (current)</span>
        <span>After (projected, 90 days)</span>
      </div>
    </div>
  );
}
