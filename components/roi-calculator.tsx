"use client";

import { useState, useEffect } from "react";

// --- TYPES ---
interface CompanyInfo {
  revenue: string;
  employees: string;
  industry: string;
}

interface MarketingAnswers {
  monthlyAdSpend: string;
  currentRoas: string;
  attributionGaps: boolean;
  manualReporting: boolean;
  reportingHours: string;
  multiplePlatforms: boolean;
}

interface SalesAnswers {
  monthlyDemos: string;
  showRate: string;
  leadResponseTime: string;
  closeRate: string;
  avgDealSize: string;
  manualCrmEntry: boolean;
}

interface OpsAnswers {
  manualWorkflows: string;
  hoursWastedWeekly: string;
  toolCount: string;
  manualHandoffs: boolean;
  noUnifiedDashboard: boolean;
  dataInSpreadsheets: boolean;
}

interface ContactInfo {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
}

interface Results {
  revenueRecovered: number;
  costsSaved: number;
  hoursSaved: number;
  totalAnnualROI: number;
  auditMultiple: number;
  breakdown: { label: string; value: number; type: "revenue" | "cost" | "time" }[];
}

// --- ROI CALCULATION ENGINE ---
function calculateROI(
  company: CompanyInfo,
  marketing: MarketingAnswers,
  sales: SalesAnswers,
  ops: OpsAnswers
): Results {
  const breakdown: Results["breakdown"] = [];

  // Revenue multiplier based on company size
  const revMultiplier = company.revenue === "under-10m" ? 0.6 : company.revenue === "10m-25m" ? 0.8 : company.revenue === "25m-50m" ? 1.0 : company.revenue === "50m-100m" ? 1.3 : 1.5;

  // --- MARKETING ROI ---
  const adSpend = parseFloat(marketing.monthlyAdSpend) || 0;

  // Attribution gap recovery: 40% of unattributed spend becomes visible pipeline
  // At 3:1 pipeline-to-spend ratio, 40% recovery = significant pipeline
  if (marketing.attributionGaps && adSpend > 0) {
    const invisibleSpend = adSpend * 0.4;
    const recoveredPipeline = invisibleSpend * 3.0 * 12;
    breakdown.push({ label: "Pipeline recovered from attribution fixes", value: Math.round(recoveredPipeline), type: "revenue" });
  }

  // ROAS improvement: typical 25% CPA reduction = more conversions at same spend
  const currentRoas = parseFloat(marketing.currentRoas) || 0;
  if (adSpend > 0 && currentRoas > 0) {
    const currentAnnualRevenue = adSpend * currentRoas * 12;
    const improvedRevenue = adSpend * (currentRoas * 1.25) * 12;
    const roasUplift = improvedRevenue - currentAnnualRevenue;
    breakdown.push({ label: "Revenue uplift from 25% CPA reduction", value: Math.round(roasUplift), type: "revenue" });
  }

  // Manual reporting elimination
  if (marketing.manualReporting) {
    const hours = parseFloat(marketing.reportingHours) || 4;
    const monthlyCost = hours * 4 * 75; // 4 weeks, $75/hr loaded cost
    breakdown.push({ label: "Manual reporting hours eliminated", value: Math.round(monthlyCost * 12), type: "cost" });
  }

  // Multi-platform consolidation savings
  if (marketing.multiplePlatforms && adSpend > 50000) {
    breakdown.push({ label: "Cross-platform optimization savings (5% of spend)", value: Math.round(adSpend * 0.05 * 12), type: "cost" });
  }

  // --- SALES ROI ---
  const monthlyDemos = parseFloat(sales.monthlyDemos) || 0;
  const showRate = parseFloat(sales.showRate) || 0;
  const closeRate = parseFloat(sales.closeRate) || 0;
  const avgDeal = parseFloat(sales.avgDealSize) || 0;

  // Show rate improvement: +20 points is typical with automated reminders
  if (monthlyDemos > 0 && showRate > 0 && showRate < 80) {
    const currentShows = monthlyDemos * (showRate / 100);
    const improvedShows = monthlyDemos * (Math.min(showRate + 20, 85) / 100);
    const additionalDeals = (improvedShows - currentShows) * (closeRate / 100);
    const annualRevenue = additionalDeals * avgDeal * 12;
    breakdown.push({ label: "Revenue from improved demo show rate (+20pts)", value: Math.round(annualRevenue), type: "revenue" });
  }

  // Lead response time: sub-5-min response = 21x more likely to qualify (InsideSales data)
  const responseTime = sales.leadResponseTime;
  if (responseTime === "1-4hrs" || responseTime === "4hrs+") {
    const monthlyLeads = monthlyDemos * 2.5; // rough: 2.5 leads per demo booked
    const additionalQualified = monthlyLeads * 0.08; // 8% more qualify with fast response
    const annualRevenue = additionalQualified * (closeRate / 100) * avgDeal * 12;
    breakdown.push({ label: "Revenue from automated lead response (under 5 min)", value: Math.round(annualRevenue), type: "revenue" });
  }

  // Manual CRM entry
  if (sales.manualCrmEntry) {
    const repHours = 5 * 52; // 5 hrs/week, 52 weeks
    breakdown.push({ label: "Sales rep time recovered from CRM automation", value: Math.round(repHours * 65), type: "cost" });
  }

  // --- OPS ROI ---
  const hoursWasted = parseFloat(ops.hoursWastedWeekly) || 0;
  if (hoursWasted > 0) {
    const annualCost = hoursWasted * 52 * 75; // $75/hr loaded
    const recoverable = annualCost * 0.7; // 70% automatable
    breakdown.push({ label: "Manual workflow hours automated (70% of waste)", value: Math.round(recoverable), type: "cost" });
  }

  if (ops.manualHandoffs) {
    const errorCost = 2500 * 12 * revMultiplier; // $2,500/month in rework/errors
    breakdown.push({ label: "Error and rework reduction from automated handoffs", value: Math.round(errorCost), type: "cost" });
  }

  if (ops.noUnifiedDashboard) {
    breakdown.push({ label: "Decision speed improvement from real-time dashboards", value: Math.round(15000 * revMultiplier), type: "cost" });
  }

  // Calculate totals
  const revenueRecovered = breakdown.filter(b => b.type === "revenue").reduce((s, b) => s + b.value, 0);
  const costsSaved = breakdown.filter(b => b.type === "cost").reduce((s, b) => s + b.value, 0);
  const totalAnnualROI = revenueRecovered + costsSaved;
  const hoursSaved = Math.round(hoursWasted * 0.7 * 52 + (marketing.manualReporting ? (parseFloat(marketing.reportingHours) || 4) * 4 * 12 : 0) + (sales.manualCrmEntry ? 260 : 0));

  return {
    revenueRecovered,
    costsSaved,
    hoursSaved,
    totalAnnualROI,
    auditMultiple: totalAnnualROI > 0 ? Math.round(totalAnnualROI / 3500) : 0,
    breakdown: breakdown.sort((a, b) => b.value - a.value),
  };
}

// --- STEP COMPONENTS ---
const steps = ["Company", "Marketing", "Sales", "Ops", "Your Info"];

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-1 mb-8">
      {steps.map((step, i) => (
        <div key={step} className="flex-1 flex flex-col items-center gap-1.5">
          <div className={`h-1.5 w-full rounded-full transition-colors duration-300 ${i <= current ? "bg-electric" : "bg-border"}`} />
          <span className={`text-[10px] uppercase tracking-wider transition-colors ${i <= current ? "text-electric" : "text-muted-foreground/50"}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}

function StepCompany({ data, onChange, onNext }: { data: CompanyInfo; onChange: (d: CompanyInfo) => void; onNext: () => void }) {
  const valid = data.revenue && data.employees && data.industry;
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground mb-1">About your company</h3>
      <p className="text-sm text-muted-foreground mb-6">This helps us scale the ROI to your size.</p>
      <div className="space-y-4">
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5">Annual revenue *</label>
          <select value={data.revenue} onChange={e => onChange({ ...data, revenue: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric text-sm">
            <option value="" className="bg-midnight">Select range</option>
            <option value="under-10m" className="bg-midnight">Under $10M</option>
            <option value="10m-25m" className="bg-midnight">$10M - $25M</option>
            <option value="25m-50m" className="bg-midnight">$25M - $50M</option>
            <option value="50m-100m" className="bg-midnight">$50M - $100M</option>
            <option value="100m+" className="bg-midnight">$100M+</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5">Employees *</label>
          <select value={data.employees} onChange={e => onChange({ ...data, employees: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric text-sm">
            <option value="" className="bg-midnight">Select range</option>
            <option value="10-30" className="bg-midnight">10 - 30</option>
            <option value="30-50" className="bg-midnight">30 - 50</option>
            <option value="50-80" className="bg-midnight">50 - 80</option>
            <option value="80-150" className="bg-midnight">80 - 150</option>
            <option value="150+" className="bg-midnight">150+</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5">Industry *</label>
          <select value={data.industry} onChange={e => onChange({ ...data, industry: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric text-sm">
            <option value="" className="bg-midnight">Select industry</option>
            <option value="b2b-saas" className="bg-midnight">B2B SaaS</option>
            <option value="b2c-saas" className="bg-midnight">B2C SaaS</option>
            <option value="b2b-services" className="bg-midnight">B2B Services</option>
            <option value="e-commerce" className="bg-midnight">E-commerce / D2C</option>
            <option value="fintech" className="bg-midnight">Fintech</option>
            <option value="healthcare" className="bg-midnight">Healthcare</option>
            <option value="other" className="bg-midnight">Other</option>
          </select>
        </div>
      </div>
      <button onClick={onNext} disabled={!valid} className="w-full mt-6 bg-electric hover:bg-electric/90 disabled:bg-electric/30 text-white font-semibold px-6 py-3.5 rounded-lg transition-all disabled:cursor-not-allowed cursor-pointer">
        Next: Marketing
      </button>
    </div>
  );
}

function StepMarketing({ data, onChange, onNext, onBack }: { data: MarketingAnswers; onChange: (d: MarketingAnswers) => void; onNext: () => void; onBack: () => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground mb-1">Marketing</h3>
      <p className="text-sm text-muted-foreground mb-6">Where is money leaking in your marketing ops?</p>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Monthly ad spend</label>
            <select value={data.monthlyAdSpend} onChange={e => onChange({ ...data, monthlyAdSpend: e.target.value })} className="w-full px-3 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="0" className="bg-midnight">None</option>
              <option value="10000" className="bg-midnight">$10K - $25K</option>
              <option value="50000" className="bg-midnight">$25K - $75K</option>
              <option value="100000" className="bg-midnight">$75K - $150K</option>
              <option value="200000" className="bg-midnight">$150K - $300K</option>
              <option value="400000" className="bg-midnight">$300K+</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Current ROAS</label>
            <select value={data.currentRoas} onChange={e => onChange({ ...data, currentRoas: e.target.value })} className="w-full px-3 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="0" className="bg-midnight">Not sure</option>
              <option value="1.5" className="bg-midnight">Under 2x</option>
              <option value="2.5" className="bg-midnight">2x - 3x</option>
              <option value="3.5" className="bg-midnight">3x - 4x</option>
              <option value="5" className="bg-midnight">4x+</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5">Hours/week spent on manual reporting</label>
          <select value={data.reportingHours} onChange={e => onChange({ ...data, reportingHours: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
            <option value="0" className="bg-midnight">None</option>
            <option value="2" className="bg-midnight">1 - 3 hours</option>
            <option value="5" className="bg-midnight">3 - 7 hours</option>
            <option value="10" className="bg-midnight">7 - 15 hours</option>
            <option value="20" className="bg-midnight">15+ hours</option>
          </select>
        </div>
        <div className="space-y-3 pt-2">
          {([
            ["attributionGaps", "We have gaps in attribution (leads we cannot trace to a source)"],
            ["manualReporting", "Our exec reports are built manually (spreadsheets, copy-paste)"],
            ["multiplePlatforms", "We run ads on 2+ platforms (Meta, Google, TikTok, LinkedIn)"],
          ] as const).map(([key, label]) => (
            <label key={key} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${data[key] ? "bg-electric border-electric" : "border-border group-hover:border-electric/50"}`}>
                {data[key] && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
              </div>
              <input type="checkbox" checked={data[key]} onChange={e => onChange({ ...data, [key]: e.target.checked })} className="sr-only" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={onBack} className="px-6 py-3.5 border border-border text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer">Back</button>
        <button onClick={onNext} className="flex-1 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all cursor-pointer">Next: Sales</button>
      </div>
    </div>
  );
}

function StepSales({ data, onChange, onNext, onBack }: { data: SalesAnswers; onChange: (d: SalesAnswers) => void; onNext: () => void; onBack: () => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground mb-1">Sales</h3>
      <p className="text-sm text-muted-foreground mb-6">Where are deals dying in your pipeline?</p>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Demos or calls / month</label>
            <select value={data.monthlyDemos} onChange={e => onChange({ ...data, monthlyDemos: e.target.value })} className="w-full px-3 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="0" className="bg-midnight">N/A</option>
              <option value="20" className="bg-midnight">10 - 30</option>
              <option value="50" className="bg-midnight">30 - 75</option>
              <option value="100" className="bg-midnight">75 - 150</option>
              <option value="200" className="bg-midnight">150 - 300</option>
              <option value="500" className="bg-midnight">300+</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Demo show rate</label>
            <select value={data.showRate} onChange={e => onChange({ ...data, showRate: e.target.value })} className="w-full px-3 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="0" className="bg-midnight">Not sure</option>
              <option value="35" className="bg-midnight">Under 40%</option>
              <option value="50" className="bg-midnight">40% - 60%</option>
              <option value="65" className="bg-midnight">60% - 70%</option>
              <option value="75" className="bg-midnight">70% - 80%</option>
              <option value="85" className="bg-midnight">80%+</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Avg deal size (annual)</label>
            <select value={data.avgDealSize} onChange={e => onChange({ ...data, avgDealSize: e.target.value })} className="w-full px-3 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="0" className="bg-midnight">Select</option>
              <option value="5000" className="bg-midnight">Under $10K</option>
              <option value="15000" className="bg-midnight">$10K - $25K</option>
              <option value="40000" className="bg-midnight">$25K - $50K</option>
              <option value="75000" className="bg-midnight">$50K - $100K</option>
              <option value="150000" className="bg-midnight">$100K+</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Close rate</label>
            <select value={data.closeRate} onChange={e => onChange({ ...data, closeRate: e.target.value })} className="w-full px-3 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="0" className="bg-midnight">Not sure</option>
              <option value="10" className="bg-midnight">Under 15%</option>
              <option value="20" className="bg-midnight">15% - 25%</option>
              <option value="30" className="bg-midnight">25% - 35%</option>
              <option value="40" className="bg-midnight">35%+</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5">Lead response time</label>
          <select value={data.leadResponseTime} onChange={e => onChange({ ...data, leadResponseTime: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
            <option value="" className="bg-midnight">Select</option>
            <option value="under5min" className="bg-midnight">Under 5 minutes</option>
            <option value="5-30min" className="bg-midnight">5 - 30 minutes</option>
            <option value="30min-1hr" className="bg-midnight">30 min - 1 hour</option>
            <option value="1-4hrs" className="bg-midnight">1 - 4 hours</option>
            <option value="4hrs+" className="bg-midnight">4+ hours</option>
          </select>
        </div>
        <label className="flex items-center gap-3 cursor-pointer group pt-2">
          <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${data.manualCrmEntry ? "bg-electric border-electric" : "border-border group-hover:border-electric/50"}`}>
            {data.manualCrmEntry && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
          </div>
          <input type="checkbox" checked={data.manualCrmEntry} onChange={e => onChange({ ...data, manualCrmEntry: e.target.checked })} className="sr-only" />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Reps manually log activities in the CRM</span>
        </label>
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={onBack} className="px-6 py-3.5 border border-border text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer">Back</button>
        <button onClick={onNext} className="flex-1 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all cursor-pointer">Next: Ops</button>
      </div>
    </div>
  );
}

function StepOps({ data, onChange, onNext, onBack }: { data: OpsAnswers; onChange: (d: OpsAnswers) => void; onNext: () => void; onBack: () => void }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground mb-1">Operations</h3>
      <p className="text-sm text-muted-foreground mb-6">Where is your team burning time on repetitive work?</p>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Manual workflows in GTM</label>
            <select value={data.manualWorkflows} onChange={e => onChange({ ...data, manualWorkflows: e.target.value })} className="w-full px-3 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="0" className="bg-midnight">None / few</option>
              <option value="3" className="bg-midnight">2 - 4</option>
              <option value="6" className="bg-midnight">5 - 8</option>
              <option value="10" className="bg-midnight">8+</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Hours wasted / week (team total)</label>
            <select value={data.hoursWastedWeekly} onChange={e => onChange({ ...data, hoursWastedWeekly: e.target.value })} className="w-full px-3 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="0" className="bg-midnight">Under 5</option>
              <option value="10" className="bg-midnight">5 - 15</option>
              <option value="20" className="bg-midnight">15 - 25</option>
              <option value="30" className="bg-midnight">25 - 40</option>
              <option value="50" className="bg-midnight">40+</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5">Tools in your GTM stack</label>
          <select value={data.toolCount} onChange={e => onChange({ ...data, toolCount: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
            <option value="3" className="bg-midnight">1 - 3</option>
            <option value="5" className="bg-midnight">4 - 6</option>
            <option value="8" className="bg-midnight">7 - 10</option>
            <option value="12" className="bg-midnight">10+</option>
          </select>
        </div>
        <div className="space-y-3 pt-2">
          {([
            ["manualHandoffs", "Data is manually moved between tools (CSV exports, copy-paste)"],
            ["noUnifiedDashboard", "No single dashboard shows the metrics that matter"],
            ["dataInSpreadsheets", "Critical business data lives in spreadsheets"],
          ] as const).map(([key, label]) => (
            <label key={key} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${data[key] ? "bg-electric border-electric" : "border-border group-hover:border-electric/50"}`}>
                {data[key] && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
              </div>
              <input type="checkbox" checked={data[key]} onChange={e => onChange({ ...data, [key]: e.target.checked })} className="sr-only" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={onBack} className="px-6 py-3.5 border border-border text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer">Back</button>
        <button onClick={onNext} className="flex-1 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all cursor-pointer">Next: See My Results</button>
      </div>
    </div>
  );
}

function StepContact({ data, onChange, onSubmit, onBack, isSending }: { data: ContactInfo; onChange: (d: ContactInfo) => void; onSubmit: () => void; onBack: () => void; isSending: boolean }) {
  const valid = data.name && data.email && data.company && data.role;
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground mb-1">Almost there.</h3>
      <p className="text-sm text-muted-foreground mb-6">Enter your details to see your personalized ROI estimate.</p>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Name *</label>
            <input type="text" value={data.name} onChange={e => onChange({ ...data, name: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric text-sm" placeholder="Jane Smith" />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Email *</label>
            <input type="email" value={data.email} onChange={e => onChange({ ...data, email: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric text-sm" placeholder="jane@company.com" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Company *</label>
            <input type="text" value={data.company} onChange={e => onChange({ ...data, company: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric text-sm" placeholder="Acme Inc" />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5">Role *</label>
            <select value={data.role} onChange={e => onChange({ ...data, role: e.target.value })} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-electric text-sm">
              <option value="" className="bg-midnight">Select</option>
              <option value="CEO" className="bg-midnight">CEO</option>
              <option value="COO" className="bg-midnight">COO</option>
              <option value="CRO" className="bg-midnight">CRO</option>
              <option value="CMO" className="bg-midnight">CMO</option>
              <option value="VP" className="bg-midnight">VP</option>
              <option value="Director" className="bg-midnight">Director</option>
              <option value="Other" className="bg-midnight">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-1.5">Anything else? (optional)</label>
          <textarea value={data.message} onChange={e => onChange({ ...data, message: e.target.value })} rows={2} className="w-full px-4 py-3 bg-slate/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-electric text-sm resize-none" placeholder="Our biggest pain is..." />
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button onClick={onBack} className="px-6 py-3.5 border border-border text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer">Back</button>
        <button onClick={onSubmit} disabled={!valid || isSending} className="flex-1 bg-emerald hover:bg-emerald/90 disabled:bg-emerald/30 text-white font-semibold px-6 py-3.5 rounded-lg transition-all disabled:cursor-not-allowed cursor-pointer">
          {isSending ? "Calculating..." : "See My Results"}
        </button>
      </div>
      <p className="text-xs text-center text-muted-foreground mt-4">No spam. Steve replies within 24 hours.</p>
    </div>
  );
}

function AnimatedNumber({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (target === 0) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.round(increment * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{prefix}{current.toLocaleString()}{suffix}</span>;
}

function ResultsView({ results, onReset }: { results: Results; onReset: () => void }) {
  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/20 text-emerald text-sm font-medium px-4 py-2 rounded-full mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Your Profit Loop estimate is ready
        </div>
        <div className="text-4xl md:text-5xl font-extrabold font-mono text-foreground mb-2">
          <AnimatedNumber target={results.totalAnnualROI} prefix="$" suffix="/yr" />
        </div>
        <p className="text-muted-foreground">Estimated annual impact from AI and automation</p>
      </div>

      {/* Three buckets */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-emerald/5 border border-emerald/20 rounded-xl p-4 text-center">
          <p className="text-lg md:text-xl font-bold font-mono text-emerald"><AnimatedNumber target={results.revenueRecovered} prefix="$" /></p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide mt-1">Revenue Recovered</p>
        </div>
        <div className="bg-electric/5 border border-electric/20 rounded-xl p-4 text-center">
          <p className="text-lg md:text-xl font-bold font-mono text-electric"><AnimatedNumber target={results.costsSaved} prefix="$" /></p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide mt-1">Costs Saved</p>
        </div>
        <div className="bg-amber/5 border border-amber/20 rounded-xl p-4 text-center">
          <p className="text-lg md:text-xl font-bold font-mono text-amber"><AnimatedNumber target={results.hoursSaved} suffix=" hrs" /></p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide mt-1">Hours Saved / Year</p>
        </div>
      </div>

      {/* Audit ROI ratio */}
      <div className="bg-slate/30 border border-border rounded-xl p-4 text-center mb-6">
        <p className="text-sm text-muted-foreground">Return on a $3,500 Profit Loop Audit</p>
        <p className="text-3xl font-extrabold font-mono text-emerald"><AnimatedNumber target={results.auditMultiple} suffix="x" /></p>
      </div>

      {/* Breakdown */}
      <div className="space-y-2 mb-6">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Breakdown</p>
        {results.breakdown.map((item) => (
          <div key={item.label} className="flex justify-between items-center text-sm py-2 border-b border-border/50 last:border-0">
            <span className="text-muted-foreground pr-4">{item.label}</span>
            <span className={`font-mono font-medium flex-shrink-0 ${item.type === "revenue" ? "text-emerald" : item.type === "cost" ? "text-electric" : "text-amber"}`}>
              ${item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mb-6">
        Estimates based on industry benchmarks and typical GTMVP client outcomes. Your audit will use your actual data.
      </p>

      <button onClick={onReset} className="w-full border border-border text-muted-foreground hover:text-foreground py-3 rounded-lg transition-colors text-sm cursor-pointer">
        Recalculate
      </button>
    </div>
  );
}

// --- MAIN CALCULATOR COMPONENT ---
export function ROICalculator() {
  const [step, setStep] = useState(0);
  const [company, setCompany] = useState<CompanyInfo>({ revenue: "", employees: "", industry: "" });
  const [marketing, setMarketing] = useState<MarketingAnswers>({ monthlyAdSpend: "0", currentRoas: "0", attributionGaps: false, manualReporting: false, reportingHours: "0", multiplePlatforms: false });
  const [sales, setSales] = useState<SalesAnswers>({ monthlyDemos: "0", showRate: "0", leadResponseTime: "", closeRate: "0", avgDealSize: "0", manualCrmEntry: false });
  const [ops, setOps] = useState<OpsAnswers>({ manualWorkflows: "0", hoursWastedWeekly: "0", toolCount: "3", manualHandoffs: false, noUnifiedDashboard: false, dataInSpreadsheets: false });
  const [contact, setContact] = useState<ContactInfo>({ name: "", email: "", company: "", role: "", message: "" });
  const [results, setResults] = useState<Results | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async () => {
    setIsSending(true);
    const calculated = calculateROI(company, marketing, sales, ops);

    // Send lead to Steve
    try {
      await fetch("https://formsubmit.co/ajax/steve@stevekaplan.ai", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Profit Loop Calculator: ${contact.company} (${contact.role})`,
          name: contact.name,
          email: contact.email,
          company: contact.company,
          role: contact.role,
          message: contact.message || "N/A",
          revenue_range: company.revenue,
          employees: company.employees,
          industry: company.industry,
          monthly_ad_spend: marketing.monthlyAdSpend,
          current_roas: marketing.currentRoas,
          attribution_gaps: marketing.attributionGaps ? "Yes" : "No",
          manual_reporting: marketing.manualReporting ? "Yes" : "No",
          monthly_demos: sales.monthlyDemos,
          show_rate: sales.showRate + "%",
          lead_response: sales.leadResponseTime,
          close_rate: sales.closeRate + "%",
          avg_deal: "$" + sales.avgDealSize,
          hours_wasted_weekly: ops.hoursWastedWeekly,
          tool_count: ops.toolCount,
          estimated_annual_roi: "$" + calculated.totalAnnualROI.toLocaleString(),
          audit_multiple: calculated.auditMultiple + "x",
        }),
      });
    } catch {
      // Silent fail on email, still show results
    }

    await new Promise(r => setTimeout(r, 1200)); // Brief pause for animation feel
    setResults(calculated);
    setIsSending(false);
  };

  const reset = () => {
    setStep(0);
    setResults(null);
    setCompany({ revenue: "", employees: "", industry: "" });
    setMarketing({ monthlyAdSpend: "0", currentRoas: "0", attributionGaps: false, manualReporting: false, reportingHours: "0", multiplePlatforms: false });
    setSales({ monthlyDemos: "0", showRate: "0", leadResponseTime: "", closeRate: "0", avgDealSize: "0", manualCrmEntry: false });
    setOps({ manualWorkflows: "0", hoursWastedWeekly: "0", toolCount: "3", manualHandoffs: false, noUnifiedDashboard: false, dataInSpreadsheets: false });
    setContact({ name: "", email: "", company: "", role: "", message: "" });
  };

  return (
    <div className="bg-slate/30 border border-border rounded-2xl p-6 md:p-8">
      {results ? (
        <ResultsView results={results} onReset={reset} />
      ) : (
        <>
          <ProgressBar current={step} />
          {step === 0 && <StepCompany data={company} onChange={setCompany} onNext={() => setStep(1)} />}
          {step === 1 && <StepMarketing data={marketing} onChange={setMarketing} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
          {step === 2 && <StepSales data={sales} onChange={setSales} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
          {step === 3 && <StepOps data={ops} onChange={setOps} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
          {step === 4 && <StepContact data={contact} onChange={setContact} onSubmit={handleSubmit} onBack={() => setStep(3)} isSending={isSending} />}
        </>
      )}
    </div>
  );
}
