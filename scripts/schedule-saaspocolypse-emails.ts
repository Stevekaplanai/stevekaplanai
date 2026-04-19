/**
 * SAASpocolypse 2026 — Complete Email Series
 *
 * 30 emails total:
 *   - 6 pre-event (Jun 12 → Jul 3)
 *   - 20 daily build emails (Jul 3 → Jul 24)
 *   - 4 post-event (Jul 25, Jul 28, Aug 4, Aug 11)
 *
 * Usage: source .env.local && npx tsx scripts/schedule-saaspocolypse-emails.ts
 */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_SAASPOCOLYPSE_AUDIENCE_ID!;
const FROM = "Steve Kaplan <steve@stevekaplan.ai>";

interface EmailDraft {
  name: string;
  subject: string;
  scheduledAt: string;
  html: string;
}

// ───────────────────────────────────────────
// SHARED STYLES
// ───────────────────────────────────────────

const wrapper = (body: string) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
  ${body}
  <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">&mdash; Steve<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
</div>`;

const h1 = (text: string) =>
  `<h1 style="font-size: 26px; font-weight: 800; margin-bottom: 20px; color: #000;">${text}</h1>`;

const p = (text: string) =>
  `<p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">${text}</p>`;

const cta = (label: string, href: string, color = "#000") =>
  `<a href="${href}" style="display: inline-block; background: ${color}; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 700; font-size: 14px; margin-top: 8px;">${label}</a>`;

const box = (content: string, borderColor = "#000") =>
  `<div style="background: #f7f7f5; border-left: 4px solid ${borderColor}; padding: 20px; margin-bottom: 20px;">${content}</div>`;

const dailyBuildEmail = (opts: {
  day: string;
  date: string;
  project: string;
  replaces: string;
  savings: string;
  desc: string;
  prevProject?: string;
  prevDay?: string;
}) => wrapper(`
  ${h1(`Day ${opts.day}: ${opts.project}`)}
  ${opts.prevProject ? p(`Yesterday's build &mdash; <strong>${opts.prevProject}</strong> &mdash; is done. Repo goes public after the event. ${opts.prevDay ? `(Day ${opts.prevDay})` : ""}`) : ""}
  ${p(`Today I'm building <strong>${opts.project}</strong> &mdash; ${opts.desc}`)}
  ${box(`
    <p style="margin: 0 0 6px; font-size: 15px;"><strong>Replaces:</strong> ${opts.replaces}</p>
    <p style="margin: 0; font-size: 15px;"><strong>Enterprise cost:</strong> <span style="color: #e53e3e; font-weight: 700;">${opts.savings}/yr</span></p>
  `)}
  ${p("Going live across all platforms now. Pick yours and join:")}
  ${cta("Watch Live", "https://stevekaplan.ai/saaspocolypse", "#e53e3e")}
`);

// ───────────────────────────────────────────
// BUILD SCHEDULE DATA
// ───────────────────────────────────────────

const builds = [
  { day: "1", date: "Jul 3", project: "StatusBrew", replaces: "Atlassian Statuspage", savings: "$16K", desc: "modern status pages and incident management with AI-generated postmortems." },
  { day: "2", date: "Jul 4", project: "ProposalForge", replaces: "PandaDoc, Proposify", savings: "$20K", desc: "AI proposal generator. Brief in, professional proposal out, e-signature included." },
  { day: "3", date: "Jul 5", project: "ExpenseZero", replaces: "SAP Concur, Expensify", savings: "$110K", desc: "AI expense management. Snap a receipt, AI extracts everything, approval workflows handle the rest." },
  { day: "4", date: "Jul 6", project: "InsightPulse", replaces: "Qualtrics, SurveyMonkey Enterprise", savings: "$323K", desc: "AI survey and NPS platform. Drag-and-drop builder, AI-generated insight reports from open-ended responses." },
  { day: "5", date: "Jul 7", project: "ContentMultiplier", replaces: "Repurpose.io, content agencies", savings: "$120K", desc: "one piece of content in, 10+ platform-specific formats out. Blog to Twitter thread to LinkedIn article to TikTok script." },
  { day: "6", date: "Jul 8", project: "ContractPilot", replaces: "Ironclad, DocuSign CLM", savings: "$150K", desc: "AI contract lifecycle management. Upload a PDF, AI extracts every clause, date, and obligation." },
  { day: "7", date: "Jul 9", project: "ComplianceForge", replaces: "Vanta, Drata, SAP GRC", savings: "$100K", desc: "AI compliance automation. SOC 2, ISO 27001, HIPAA frameworks with auto-mapped controls and evidence collection." },
  { day: "8", date: "Jul 10", project: "InvoiceAgent", replaces: "Coupa, SAP Ariba", savings: "$200K", desc: "AI accounts payable. Invoice ingestion, 3-way matching, approval routing, GL coding suggestions." },
  { day: "9", date: "Jul 11", project: "DataTalk", replaces: "Tableau, Looker", savings: "$200K", desc: "talk-to-your-data BI. Connect a database, ask questions in English, get charts and dashboards." },
  { day: "10", date: "Jul 12", project: "GongSlayer", replaces: "Gong, Chorus.ai", savings: "$100K", desc: "AI sales conversation intelligence. Record calls, AI generates summaries, deal risk scores, and coaching insights." },
  { day: "11-12", date: "Jul 13-14", project: "ServiceForge", replaces: "ServiceNow", savings: "$1M+", desc: "AI IT service management. Ticket auto-categorization, AI auto-resolves L1 tickets, knowledge base, SLA tracking. Two-day build." },
  { day: "13", date: "Jul 15", project: "SupportGenius", replaces: "Zendesk, Intercom", savings: "$180K", desc: "AI-first customer support. AI agent auto-resolves 60-80% of tickets, smart escalation for the rest." },
  { day: "14", date: "Jul 16", project: "RecruiterAI", replaces: "Greenhouse, Lever", savings: "$50K", desc: "AI recruiting and ATS. AI resume screening, candidate scoring, interview scorecards, careers page builder." },
  { day: "15", date: "Jul 17", project: "PeopleOS", replaces: "BambooHR, Rippling", savings: "$100K", desc: "AI HR platform. Employee directory, PTO management, onboarding checklists, AI-generated review templates." },
  { day: "16", date: "Jul 18", project: "MarketFlow", replaces: "Marketo, Pardot", savings: "$180K", desc: "AI marketing automation. Visual journey builder, AI-generated email campaigns, lead scoring, drip sequences." },
  { day: "17", date: "Jul 19", project: "CompeteWatcher", replaces: "Crayon, Klue", savings: "$60K", desc: "AI competitive intelligence. Track competitor websites, job postings, and news. AI generates battlecards for your sales team." },
  { day: "18", date: "Jul 20", project: "VendorShield", replaces: "OneTrust Vendorpedia", savings: "$100K", desc: "AI vendor risk management. Security questionnaire auto-completion, SOC 2 report parsing, continuous monitoring." },
  { day: "19", date: "Jul 21", project: "BoardReady", replaces: "Diligent Boards", savings: "$100K", desc: "AI board meeting platform. Board book assembly, AI-generated meeting minutes, resolution tracking, e-signatures." },
  { day: "20", date: "Jul 22", project: "DocuVault", replaces: "M-Files, SharePoint Premium", savings: "$80K", desc: "AI document intelligence. Upload anything, AI classifies and extracts metadata, semantic search across your entire library." },
  { day: "21-22", date: "Jul 23-24", project: "FinOpsLite", replaces: "CloudHealth, Spot.io", savings: "$100K", desc: "AI cloud cost optimizer. Connect AWS/GCP/Azure, get anomaly detection, rightsizing recommendations, and FinOps reports. Two-day build." },
];

// ───────────────────────────────────────────
// EMAIL DEFINITIONS
// ───────────────────────────────────────────

const emails: EmailDraft[] = [

  // ═══════════════════════════════════════
  // PRE-EVENT (6 emails)
  // ═══════════════════════════════════════

  {
    name: "SAASpocolypse [Pre-1] The 20 Projects Revealed",
    subject: "Here are the 20 enterprise tools I'm replacing",
    scheduledAt: "2026-06-12T14:00:00Z",
    html: wrapper(`
      ${h1("The 20 projects are locked.")}
      ${p("I've spent weeks researching which enterprise tools are most overpriced, most bloated, and most replaceable with AI. The final list is set.")}
      ${p("Here's what I'm building &mdash; and what each one replaces:")}
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
        <tr style="border-bottom: 2px solid #000;">
          <th style="text-align: left; padding: 8px 0; font-weight: 800;">Build</th>
          <th style="text-align: left; padding: 8px 0; font-weight: 800;">Replaces</th>
          <th style="text-align: right; padding: 8px 0; font-weight: 800;">They Charge</th>
        </tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">StatusBrew</td><td>Statuspage</td><td style="text-align: right; color: #e53e3e;">$16K/yr</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ProposalForge</td><td>PandaDoc</td><td style="text-align: right; color: #e53e3e;">$20K/yr</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ExpenseZero</td><td>SAP Concur</td><td style="text-align: right; color: #e53e3e;">$110K/yr</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ContractPilot</td><td>Ironclad</td><td style="text-align: right; color: #e53e3e;">$150K/yr</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ComplianceForge</td><td>Vanta</td><td style="text-align: right; color: #e53e3e;">$100K/yr</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ServiceForge</td><td>ServiceNow</td><td style="text-align: right; color: #e53e3e;">$1M+/yr</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">DataTalk</td><td>Tableau</td><td style="text-align: right; color: #e53e3e;">$200K/yr</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">GongSlayer</td><td>Gong</td><td style="text-align: right; color: #e53e3e;">$100K/yr</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">SupportGenius</td><td>Zendesk</td><td style="text-align: right; color: #e53e3e;">$180K/yr</td></tr>
        <tr><td style="padding: 6px 0;" colspan="3"><em>+ 11 more builds targeting $2.4M+ in enterprise software</em></td></tr>
      </table>
      ${p("Every single one will be built live on camera, start to finish, and published as an MIT-licensed open-source repo.")}
      ${cta("See the Full Lineup", "https://stevekaplan.ai/saaspocolypse")}
    `),
  },

  {
    name: "SAASpocolypse [Pre-2] How I'm Preparing",
    subject: "204 database tables. 20 PRDs. 0 lines of code.",
    scheduledAt: "2026-06-19T14:00:00Z",
    html: wrapper(`
      ${h1("I'm not winging this.")}
      ${p("Some people might think building 20 software projects in 26 days sounds reckless. It would be &mdash; if I hadn't spent weeks architecting everything before writing a single line of code.")}
      ${p("Here's what's already done before Day 1:")}
      ${box(`
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>20 Product Requirements Documents</strong> &mdash; features, user flows, success metrics</p>
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>20 Architecture Documents</strong> &mdash; data models, API routes, AI integration points</p>
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>20 SQL Migrations</strong> &mdash; 204 database tables, ready to deploy to Supabase</p>
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>Shared Boilerplate</strong> &mdash; auth, dashboard, AI wrapper, UI components all built</p>
        <p style="margin: 0; font-size: 15px;"><strong>Build Sequence for Each Project</strong> &mdash; what to code first for maximum impact</p>
      `)}
      ${p("The live streams are the <em>execution</em>, not the thinking. When I go live, I already know every table, every route, and every AI prompt. The stream is about showing you how fast one developer with Claude Code can turn a plan into working software.")}
      ${p("Two weeks to go.")}
      ${cta("View the Full Plan", "https://stevekaplan.ai/saaspocolypse")}
    `),
  },

  {
    name: "SAASpocolypse [Pre-3] The Schedule",
    subject: "26-day build schedule is live. Here's when to tune in.",
    scheduledAt: "2026-06-26T14:00:00Z",
    html: wrapper(`
      ${h1("One week out. Here's the schedule.")}
      ${p("Starting July 3rd, I'm building one project per day. Here's the first two weeks:")}
      <div style="font-family: 'Courier New', monospace; font-size: 14px; background: #000; color: #fff; padding: 24px; margin-bottom: 20px; line-height: 1.8;">
        <div style="color: #C3F73A; margin-bottom: 8px; font-weight: 700;">WEEK 1 &mdash; QUICK WINS</div>
        <div>Day 1 &nbsp;Jul 3 &nbsp; StatusBrew (Statuspage)</div>
        <div>Day 2 &nbsp;Jul 4 &nbsp; ProposalForge (PandaDoc)</div>
        <div>Day 3 &nbsp;Jul 5 &nbsp; ExpenseZero (SAP Concur)</div>
        <div>Day 4 &nbsp;Jul 6 &nbsp; InsightPulse (Qualtrics)</div>
        <div>Day 5 &nbsp;Jul 7 &nbsp; ContentMultiplier (Repurpose.io)</div>
        <div style="color: #C3F73A; margin: 12px 0 8px; font-weight: 700;">WEEK 2 &mdash; HIGH IMPACT</div>
        <div>Day 6 &nbsp;Jul 8 &nbsp; ContractPilot (Ironclad)</div>
        <div>Day 7 &nbsp;Jul 9 &nbsp; ComplianceForge (Vanta)</div>
        <div>Day 8 &nbsp;Jul 10&nbsp; InvoiceAgent (Coupa)</div>
        <div>Day 9 &nbsp;Jul 11&nbsp; DataTalk (Tableau)</div>
        <div>Day 10 Jul 12&nbsp; GongSlayer (Gong)</div>
      </div>
      ${p("Every stream goes live simultaneously on YouTube, LinkedIn, X, Facebook, and Instagram.")}
      ${cta("Add to Calendar", "https://luma.com/event/evt-xtCTLY71gnGQkvp")}
    `),
  },

  {
    name: "SAASpocolypse [Pre-4] 3 Days Out",
    subject: "Thursday we start breaking things",
    scheduledAt: "2026-06-30T14:00:00Z",
    html: wrapper(`
      ${h1("3 days.")}
      ${p("On Thursday I open my terminal, start the stream, and begin building StatusBrew &mdash; an open-source alternative to Atlassian Statuspage.")}
      ${p("Quick recap of what you're getting:")}
      <ul style="font-size: 16px; line-height: 2; margin-bottom: 20px; padding-left: 20px;">
        <li>20 functional software projects, built live</li>
        <li>Every repo published as MIT open source on GitHub</li>
        <li>Full over-the-shoulder view of AI-assisted development</li>
        <li>Real architecture decisions, real debugging, real shipping</li>
        <li>Each project comes with database schemas, API docs, and deployment instructions</li>
      </ul>
      ${p("This isn't a tutorial. It's a live build. Things will break. That's the point &mdash; you'll see exactly how a developer works through real problems in real time.")}
      ${p("See you Thursday.")}
      ${cta("Make Sure You're Registered", "https://luma.com/event/evt-xtCTLY71gnGQkvp")}
    `),
  },

  {
    name: "SAASpocolypse [Pre-5] Tomorrow",
    subject: "Tomorrow morning. Be there.",
    scheduledAt: "2026-07-02T18:00:00Z",
    html: wrapper(`
      ${h1("It starts tomorrow.")}
      ${p("Everything is ready. 20 PRDs written. 204 database tables designed. 20 architecture docs complete. Boilerplate deployed. OBS configured. Coffee stocked.")}
      ${p("Tomorrow morning I'm going live to build <strong>StatusBrew</strong> &mdash; a modern open-source status page and incident management tool. It replaces Atlassian Statuspage (which charges up to $16K/year) and Cachet (which was abandoned).")}
      ${p("Where to watch:")}
      ${box(`
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>YouTube</strong> &mdash; best for full screen coding view</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>LinkedIn</strong> &mdash; if you want to comment professionally</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>X (Twitter)</strong> &mdash; for the live commentary thread</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>Facebook</strong> &mdash; if that's your platform</p>
        <p style="margin: 0; font-size: 15px;"><strong>Instagram</strong> &mdash; for the vertical view</p>
      `)}
      ${p("I'll send one more email tomorrow when the stream goes live with direct links. See you there.")}
    `),
  },

  {
    name: "SAASpocolypse [Pre-6] We're Live",
    subject: "We're live. Day 1: StatusBrew.",
    scheduledAt: "2026-07-03T13:30:00Z",
    html: wrapper(`
      ${h1("The SAASpocolypse starts now.")}
      ${p("Going live in 30 minutes. Day 1: <strong>StatusBrew</strong> &mdash; open-source status pages and incident management.")}
      ${p("Pick your platform and join:")}
      ${cta("Watch Live Now", "https://stevekaplan.ai/saaspocolypse", "#e53e3e")}
      <br><br>
      ${p("When the build is done, the GitHub repo goes public. MIT license. Yours to fork.")}
      ${p("Let's go.")}
    `),
  },

  // ═══════════════════════════════════════
  // DAILY BUILD EMAILS (Days 2-22)
  // Day 1 is covered by Pre-6 above
  // ═══════════════════════════════════════

  // Day 2
  {
    name: "SAASpocolypse [Day 2] ProposalForge",
    subject: "Day 2: Building ProposalForge (kills PandaDoc)",
    scheduledAt: "2026-07-04T13:30:00Z",
    html: dailyBuildEmail({ ...builds[1], prevProject: "StatusBrew", prevDay: "1" }),
  },

  // Day 3
  {
    name: "SAASpocolypse [Day 3] ExpenseZero",
    subject: "Day 3: Building ExpenseZero (kills SAP Concur)",
    scheduledAt: "2026-07-05T13:30:00Z",
    html: dailyBuildEmail({ ...builds[2], prevProject: "ProposalForge", prevDay: "2" }),
  },

  // Day 4
  {
    name: "SAASpocolypse [Day 4] InsightPulse",
    subject: "Day 4: Building InsightPulse (kills Qualtrics)",
    scheduledAt: "2026-07-06T13:30:00Z",
    html: dailyBuildEmail({ ...builds[3], prevProject: "ExpenseZero", prevDay: "3" }),
  },

  // Day 5
  {
    name: "SAASpocolypse [Day 5] ContentMultiplier",
    subject: "Day 5: Building ContentMultiplier (kills content agencies)",
    scheduledAt: "2026-07-07T13:30:00Z",
    html: dailyBuildEmail({ ...builds[4], prevProject: "InsightPulse", prevDay: "4" }),
  },

  // Week 1 Recap (evening of Day 5)
  {
    name: "SAASpocolypse [Week 1 Recap]",
    subject: "Week 1 done. 5 builds shipped. Here's what happened.",
    scheduledAt: "2026-07-07T22:00:00Z",
    html: wrapper(`
      ${h1("Week 1: 5 builds shipped.")}
      ${p("Five days. Five enterprise SaaS alternatives. All built live on camera. Here's the scoreboard:")}
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
        <tr style="border-bottom: 2px solid #000;">
          <th style="text-align: left; padding: 8px 0; font-weight: 800;">Day</th>
          <th style="text-align: left; padding: 8px 0; font-weight: 800;">Project</th>
          <th style="text-align: right; padding: 8px 0; font-weight: 800;">Replaces</th>
        </tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">1</td><td>StatusBrew</td><td style="text-align: right;">Statuspage ($16K/yr)</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">2</td><td>ProposalForge</td><td style="text-align: right;">PandaDoc ($20K/yr)</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">3</td><td>ExpenseZero</td><td style="text-align: right;">SAP Concur ($110K/yr)</td></tr>
        <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">4</td><td>InsightPulse</td><td style="text-align: right;">Qualtrics ($323K/yr)</td></tr>
        <tr><td style="padding: 6px 0;">5</td><td>ContentMultiplier</td><td style="text-align: right;">Agencies ($120K/yr)</td></tr>
      </table>
      ${p("That's $589K in enterprise software replaced in the first week. 15 more builds to go.")}
      ${p("Week 2 starts tomorrow with the heavy hitters: ContractPilot (Ironclad), ComplianceForge (Vanta), InvoiceAgent (Coupa), DataTalk (Tableau), and GongSlayer (Gong).")}
      ${cta("Catch Up on Recordings", "https://stevekaplan.ai/saaspocolypse")}
    `),
  },

  // Day 6
  {
    name: "SAASpocolypse [Day 6] ContractPilot",
    subject: "Day 6: Building ContractPilot (kills Ironclad)",
    scheduledAt: "2026-07-08T13:30:00Z",
    html: dailyBuildEmail({ ...builds[5], prevProject: "ContentMultiplier", prevDay: "5" }),
  },

  // Day 7
  {
    name: "SAASpocolypse [Day 7] ComplianceForge",
    subject: "Day 7: Building ComplianceForge (kills Vanta)",
    scheduledAt: "2026-07-09T13:30:00Z",
    html: dailyBuildEmail({ ...builds[6], prevProject: "ContractPilot", prevDay: "6" }),
  },

  // Day 8
  {
    name: "SAASpocolypse [Day 8] InvoiceAgent",
    subject: "Day 8: Building InvoiceAgent (kills Coupa)",
    scheduledAt: "2026-07-10T13:30:00Z",
    html: dailyBuildEmail({ ...builds[7], prevProject: "ComplianceForge", prevDay: "7" }),
  },

  // Day 9
  {
    name: "SAASpocolypse [Day 9] DataTalk",
    subject: "Day 9: Building DataTalk (kills Tableau)",
    scheduledAt: "2026-07-11T13:30:00Z",
    html: dailyBuildEmail({ ...builds[8], prevProject: "InvoiceAgent", prevDay: "8" }),
  },

  // Day 10
  {
    name: "SAASpocolypse [Day 10] GongSlayer",
    subject: "Day 10: Building GongSlayer (kills Gong)",
    scheduledAt: "2026-07-12T13:30:00Z",
    html: dailyBuildEmail({ ...builds[9], prevProject: "DataTalk", prevDay: "9" }),
  },

  // Week 2 Recap
  {
    name: "SAASpocolypse [Week 2 Recap]",
    subject: "Week 2 done. 10 builds shipped. Halfway there.",
    scheduledAt: "2026-07-12T22:00:00Z",
    html: wrapper(`
      ${h1("Halfway. 10 builds shipped.")}
      ${p("Two weeks in. Ten enterprise tools replaced. Here's what Week 2 delivered:")}
      ${box(`
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>ContractPilot</strong> &mdash; Ironclad killer ($150K/yr)</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>ComplianceForge</strong> &mdash; Vanta killer ($100K/yr)</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>InvoiceAgent</strong> &mdash; Coupa killer ($200K/yr)</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>DataTalk</strong> &mdash; Tableau killer ($200K/yr)</p>
        <p style="margin: 0; font-size: 15px;"><strong>GongSlayer</strong> &mdash; Gong killer ($100K/yr)</p>
      `)}
      ${p("Running total: <strong>$1.34M</strong> in enterprise software replaced with open source. And we're only halfway.")}
      ${p("Week 3 is the enterprise core: ServiceForge (ServiceNow &mdash; $1M+/yr), SupportGenius (Zendesk), RecruiterAI, PeopleOS, and MarketFlow. The big ones.")}
      ${cta("Watch the Recordings", "https://stevekaplan.ai/saaspocolypse")}
    `),
  },

  // Day 11-12 (ServiceForge, 2-day build)
  {
    name: "SAASpocolypse [Day 11] ServiceForge (2-day build)",
    subject: "Days 11-12: Building ServiceForge (kills ServiceNow)",
    scheduledAt: "2026-07-13T13:30:00Z",
    html: dailyBuildEmail({ ...builds[10], prevProject: "GongSlayer", prevDay: "10" }),
  },

  // Day 13
  {
    name: "SAASpocolypse [Day 13] SupportGenius",
    subject: "Day 13: Building SupportGenius (kills Zendesk)",
    scheduledAt: "2026-07-15T13:30:00Z",
    html: dailyBuildEmail({ ...builds[11], prevProject: "ServiceForge", prevDay: "11-12" }),
  },

  // Day 14
  {
    name: "SAASpocolypse [Day 14] RecruiterAI",
    subject: "Day 14: Building RecruiterAI (kills Greenhouse)",
    scheduledAt: "2026-07-16T13:30:00Z",
    html: dailyBuildEmail({ ...builds[12], prevProject: "SupportGenius", prevDay: "13" }),
  },

  // Day 15
  {
    name: "SAASpocolypse [Day 15] PeopleOS",
    subject: "Day 15: Building PeopleOS (kills BambooHR)",
    scheduledAt: "2026-07-17T13:30:00Z",
    html: dailyBuildEmail({ ...builds[13], prevProject: "RecruiterAI", prevDay: "14" }),
  },

  // Day 16
  {
    name: "SAASpocolypse [Day 16] MarketFlow",
    subject: "Day 16: Building MarketFlow (kills Marketo)",
    scheduledAt: "2026-07-18T13:30:00Z",
    html: dailyBuildEmail({ ...builds[14], prevProject: "PeopleOS", prevDay: "15" }),
  },

  // Week 3 Recap
  {
    name: "SAASpocolypse [Week 3 Recap]",
    subject: "Week 3 done. 16 builds shipped. The ServiceNow killer is real.",
    scheduledAt: "2026-07-18T22:00:00Z",
    html: wrapper(`
      ${h1("16 down. 4 to go.")}
      ${p("This was the hardest week. ServiceForge alone took two full days &mdash; replacing ServiceNow is no joke. But it's done.")}
      ${p("Week 3 delivered:")}
      ${box(`
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>ServiceForge</strong> &mdash; ServiceNow killer ($1M+/yr) &mdash; 2-day build</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>SupportGenius</strong> &mdash; Zendesk killer ($180K/yr)</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>RecruiterAI</strong> &mdash; Greenhouse killer ($50K/yr)</p>
        <p style="margin: 0 0 6px; font-size: 15px;"><strong>PeopleOS</strong> &mdash; BambooHR killer ($100K/yr)</p>
        <p style="margin: 0; font-size: 15px;"><strong>MarketFlow</strong> &mdash; Marketo killer ($180K/yr)</p>
      `)}
      ${p("Running total: <strong>$2.85M</strong> in enterprise software replaced. Four builds left in Week 4, then all 20 repos go public.")}
      ${cta("See All Builds", "https://stevekaplan.ai/saaspocolypse")}
    `),
  },

  // Day 17
  {
    name: "SAASpocolypse [Day 17] CompeteWatcher",
    subject: "Day 17: Building CompeteWatcher (kills Crayon)",
    scheduledAt: "2026-07-19T13:30:00Z",
    html: dailyBuildEmail({ ...builds[15], prevProject: "MarketFlow", prevDay: "16" }),
  },

  // Day 18
  {
    name: "SAASpocolypse [Day 18] VendorShield",
    subject: "Day 18: Building VendorShield (kills OneTrust)",
    scheduledAt: "2026-07-20T13:30:00Z",
    html: dailyBuildEmail({ ...builds[16], prevProject: "CompeteWatcher", prevDay: "17" }),
  },

  // Day 19
  {
    name: "SAASpocolypse [Day 19] BoardReady",
    subject: "Day 19: Building BoardReady (kills Diligent)",
    scheduledAt: "2026-07-21T13:30:00Z",
    html: dailyBuildEmail({ ...builds[17], prevProject: "VendorShield", prevDay: "18" }),
  },

  // Day 20
  {
    name: "SAASpocolypse [Day 20] DocuVault",
    subject: "Day 20: Building DocuVault (kills SharePoint)",
    scheduledAt: "2026-07-22T13:30:00Z",
    html: dailyBuildEmail({ ...builds[18], prevProject: "BoardReady", prevDay: "19" }),
  },

  // Day 21-22 (FinOpsLite, 2-day build)
  {
    name: "SAASpocolypse [Day 21] FinOpsLite (2-day build)",
    subject: "Days 21-22: Building FinOpsLite (kills CloudHealth) -- THE FINAL BUILD",
    scheduledAt: "2026-07-23T13:30:00Z",
    html: dailyBuildEmail({ ...builds[19], prevProject: "DocuVault", prevDay: "20" }),
  },

  // ═══════════════════════════════════════
  // POST-EVENT (4 emails)
  // ═══════════════════════════════════════

  {
    name: "SAASpocolypse [Post-1] All 20 Builds Complete",
    subject: "20 builds. Done. Here's the final scoreboard.",
    scheduledAt: "2026-07-25T14:00:00Z",
    html: wrapper(`
      ${h1("20 builds. All done.")}
      ${p("26 days ago I opened my terminal and started streaming. Today, 20 functional open-source enterprise software alternatives exist that didn't before.")}
      ${p("The final scoreboard:")}
      <div style="font-family: 'Courier New', monospace; font-size: 14px; background: #000; color: #fff; padding: 24px; margin-bottom: 20px; line-height: 1.6;">
        <div>Projects completed: <span style="color: #C3F73A;">20</span></div>
        <div>Total enterprise cost replaced: <span style="color: #C3F73A;">$4.7M+/yr</span></div>
        <div>Hours streamed: <span style="color: #C3F73A;">200+</span></div>
        <div>Lines of code: <span style="color: #C3F73A;">TBD</span></div>
        <div>License: <span style="color: #C3F73A;">MIT (free forever)</span></div>
      </div>
      ${p("Over the next few days I'm polishing documentation, recording demo videos, and preparing all 20 repos for public release.")}
      ${p("If you watched even one session &mdash; thank you. This wouldn't have been the same without the live audience asking questions, catching bugs, and keeping me honest.")}
      ${cta("See All 20 Projects", "https://stevekaplan.ai/saaspocolypse")}
    `),
  },

  {
    name: "SAASpocolypse [Post-2] All Repos Are Public",
    subject: "All 20 repos are now public. Fork anything.",
    scheduledAt: "2026-07-28T14:00:00Z",
    html: wrapper(`
      ${h1("All 20 repos are live.")}
      ${p("Every repo is now public on GitHub. MIT license. No restrictions. Fork them, deploy them, build on them, sell services on top of them &mdash; whatever you want.")}
      ${p("Quick links to every project:")}
      ${box(`
        <p style="margin: 0 0 4px; font-size: 14px;"><strong>Week 1:</strong> StatusBrew, ProposalForge, ExpenseZero, InsightPulse, ContentMultiplier</p>
        <p style="margin: 0 0 4px; font-size: 14px;"><strong>Week 2:</strong> ContractPilot, ComplianceForge, InvoiceAgent, DataTalk, GongSlayer</p>
        <p style="margin: 0 0 4px; font-size: 14px;"><strong>Week 3:</strong> ServiceForge, SupportGenius, RecruiterAI, PeopleOS, MarketFlow</p>
        <p style="margin: 0; font-size: 14px;"><strong>Week 4:</strong> CompeteWatcher, VendorShield, BoardReady, DocuVault, FinOpsLite</p>
      `)}
      ${p("All repos follow the same pattern: Next.js 15 + Supabase + Claude API + Tailwind + shadcn/ui. If you can run one, you can run all twenty.")}
      ${cta("Browse All Repos on GitHub", "https://github.com/Stevekaplanai")}
    `),
  },

  {
    name: "SAASpocolypse [Post-3] What I Learned",
    subject: "What I learned building 20 SaaS tools in 26 days",
    scheduledAt: "2026-08-04T14:00:00Z",
    html: wrapper(`
      ${h1("What I actually learned.")}
      ${p("A week of distance gives perspective. Here's what 26 days of live building taught me:")}
      ${box(`
        <p style="margin: 0 0 10px; font-size: 15px;"><strong>1. AI doesn't replace thinking.</strong> Claude Code is incredible at execution, but the architecture decisions, the product taste, the knowing-what-to-cut &mdash; that's still human work. The prep mattered more than the tools.</p>
        <p style="margin: 0 0 10px; font-size: 15px;"><strong>2. 80% of enterprise software is CRUD + permissions + workflows.</strong> Once you have auth, a database, and an AI wrapper, you're 60% done on any enterprise tool.</p>
        <p style="margin: 0 0 10px; font-size: 15px;"><strong>3. The market is ready.</strong> The messages I got from CTOs and engineering leaders during the streams told me everything. People are done paying $200K/year for what should cost $200/month.</p>
        <p style="margin: 0; font-size: 15px;"><strong>4. Open source wins.</strong> The repos with the most stars aren't the fanciest. They're the ones that solve a painful problem simply.</p>
      `)}
      ${p("If this resonated with you &mdash; if you're thinking about building instead of buying &mdash; I'd love to hear what you're working on. Reply to this email.")}
      ${cta("Star Your Favorites on GitHub", "https://github.com/Stevekaplanai")}
    `),
  },

  {
    name: "SAASpocolypse [Post-4] What's Next",
    subject: "What's next after SAASpocolypse",
    scheduledAt: "2026-08-11T14:00:00Z",
    html: wrapper(`
      ${h1("So... what now?")}
      ${p("The SAASpocolypse proved a thesis: one developer with AI can build functional alternatives to enterprise software that costs $20K-$1M/year.")}
      ${p("But building an MVP in a day and building a production-ready tool are different things. Here's what's happening next:")}
      ${box(`
        <p style="margin: 0 0 10px; font-size: 15px;"><strong>Community contributions.</strong> Several repos already have PRs from the community. The best part of open source is that the project doesn't stop when I stop streaming.</p>
        <p style="margin: 0 0 10px; font-size: 15px;"><strong>Cloud-hosted versions.</strong> For teams that want managed hosting, I'm exploring cloud-hosted versions of the most popular projects. Self-hosted stays free forever.</p>
        <p style="margin: 0; font-size: 15px;"><strong>More builds.</strong> The SAASpocolypse was 20 projects. The enterprise SaaS market has hundreds. I'm not done.</p>
      `)}
      ${p("If your company is evaluating any of these tools &mdash; or if you want help deploying one &mdash; reply to this email. I'm doing a limited number of deployment consults.")}
      ${p("Thanks for being part of this. It was the most fun I've had building software in 20 years.")}
      ${cta("Visit stevekaplan.ai", "https://stevekaplan.ai")}
    `),
  },
];

// ───────────────────────────────────────────
// RUNNER
// ───────────────────────────────────────────

async function main() {
  console.log(`Creating ${emails.length} SAASpocolypse email broadcasts...\n`);

  let scheduled = 0;
  let failed = 0;

  for (const email of emails) {
    try {
      const broadcast = await resend.broadcasts.create({
        audienceId: AUDIENCE_ID,
        from: FROM,
        subject: email.subject,
        html: email.html,
        name: email.name,
      });

      const id = broadcast.data?.id;
      console.log(`Created: "${email.name}"`);
      console.log(`  ID: ${id}`);
      console.log(`  Send at: ${email.scheduledAt}`);

      if (id) {
        await resend.broadcasts.send(id, {
          scheduledAt: email.scheduledAt,
        });
        console.log(`  -> Scheduled!\n`);
        scheduled++;
      } else {
        console.log(`  !! No ID returned — schedule manually in Resend dashboard\n`);
        failed++;
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`FAILED: "${email.name}" — ${msg}\n`);
      failed++;
    }
  }

  console.log("─".repeat(50));
  console.log(`Done. ${scheduled} scheduled, ${failed} need manual attention.`);
  console.log("Review all at: https://resend.com/broadcasts");
}

main();
