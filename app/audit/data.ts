export interface ProofStat {
  value: string;
  label: string;
}

export interface TimelineStep {
  day: string;
  title: string;
  description: string;
}

export interface Deliverable {
  item: string;
  format: string;
}

export const proofStats: ProofStat[] = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "3.2x", label: "Avg ROAS" },
  { value: "100+", label: "Clients Served" },
  { value: "40%", label: "Avg CPA Reduction" },
];

export const timeline: TimelineStep[] = [
  { day: "Day 0", title: "Kickoff", description: "60-minute call. Lock scope, get access, confirm targets." },
  { day: "Day 1", title: "Stack Inventory", description: "Map every tool, integration, and manual handoff." },
  { day: "Day 2", title: "Data Review", description: "Pull pipeline, spend, conversions, and attribution gaps." },
  { day: "Day 3", title: "Opportunity Mapping", description: "Rank top 5 wins by effort vs lift with specific numbers." },
  { day: "Day 4", title: "Roadmap", description: "Build a phased 30/60/90 day plan." },
  { day: "Day 5", title: "Delivery", description: "Live call. Recorded walkthrough. Written audit document." },
];

export const deliverables: Deliverable[] = [
  { item: "Stack inventory (every tool, integration, manual step)", format: "Table + diagram" },
  { item: "Data baseline (spend, conversions, attribution)", format: "Dashboard snapshot" },
  { item: "Top 5 wins, ranked by effort vs lift", format: "Doc with specific numbers" },
  { item: "30/60/90 day phased roadmap", format: "Actionable plan" },
  { item: "Live delivery call + recorded walkthrough", format: "60 minutes" },
  { item: "Written audit document", format: "PDF you can share" },
];
