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
  { day: "Step 1", title: "Connect", description: "Grant read-only access to your Google Ads. No call required." },
  { day: "Step 2", title: "Signal audit", description: "I read your Smart Bidding signal stack across 22 modules in 5 clusters." },
  { day: "Step 3", title: "Leak map", description: "Every leak found, with the dollar number attached." },
  { day: "Step 4", title: "Remediation plan", description: "The exact fixes, in the order to ship them." },
  { day: "Step 5", title: "Delivery", description: "Written Diagnostic in your inbox within 24 hours. 7-day money-back." },
];

export const deliverables: Deliverable[] = [
  { item: "Smart Bidding signal-stack audit, 22 modules across 5 clusters", format: "Operator-written" },
  { item: "Every leak found, with the dollar number attached", format: "Doc with specific numbers" },
  { item: "Written remediation plan, in the order to ship", format: "Actionable steps" },
  { item: "Free 14-checkpoint Smart Bidding Audit", format: "Instant PDF" },
  { item: "24-hour turnaround, no call", format: "Self-serve" },
  { item: "7-day money-back", format: "If it does not surface one move you would act on" },
];
