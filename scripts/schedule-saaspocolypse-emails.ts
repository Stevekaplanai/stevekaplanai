/**
 * SAASpocolypse 2026 — Email Series
 *
 * Run once to create all broadcast drafts in Resend.
 * Then review and schedule them in the Resend dashboard,
 * or uncomment the scheduledAt fields to auto-schedule.
 *
 * Usage: npx tsx scripts/schedule-saaspocolypse-emails.ts
 */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_SAASPOCOLYPSE_AUDIENCE_ID!;
const FROM = "Steve Kaplan <steve@stevekaplan.ai>";

interface EmailDraft {
  name: string;
  subject: string;
  scheduledAt: string; // ISO 8601
  html: string;
}

const emails: EmailDraft[] = [
  // ─── EMAIL 1: 3 weeks before (June 12) ───
  {
    name: "SAASpocolypse — The 20 Projects Revealed",
    subject: "Here are the 20 enterprise tools I'm replacing",
    scheduledAt: "2026-06-12T14:00:00Z",
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
  <h1 style="font-size: 26px; font-weight: 800; margin-bottom: 20px; color: #000;">The 20 projects are locked.</h1>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">I've spent weeks researching which enterprise tools are most overpriced, most bloated, and most replaceable with AI. The final list is set.</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">Here's what I'm building — and what each one replaces:</p>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
    <tr style="border-bottom: 2px solid #000;">
      <th style="text-align: left; padding: 8px 0; font-weight: 800;">Build</th>
      <th style="text-align: left; padding: 8px 0; font-weight: 800;">Replaces</th>
      <th style="text-align: right; padding: 8px 0; font-weight: 800;">They Charge</th>
    </tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">StatusBrew</td><td>Statuspage</td><td style="text-align: right; color: #e53e3e;">$16K/yr</td></tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ProposalForge</td><td>PandaDoc</td><td style="text-align: right; color: #e53e3e;">$20K/yr</td></tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">InsightPulse</td><td>Qualtrics</td><td style="text-align: right; color: #e53e3e;">$323K/yr</td></tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">BoardReady</td><td>Diligent</td><td style="text-align: right; color: #e53e3e;">$100K/yr</td></tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">RecruiterAI</td><td>Greenhouse</td><td style="text-align: right; color: #e53e3e;">$25K/yr</td></tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ExpenseZero</td><td>SAP Concur</td><td style="text-align: right; color: #e53e3e;">$110K/yr</td></tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ContractPilot</td><td>Ironclad</td><td style="text-align: right; color: #e53e3e;">$150K/yr</td></tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ComplianceForge</td><td>Vanta</td><td style="text-align: right; color: #e53e3e;">$100K/yr</td></tr>
    <tr style="border-bottom: 1px solid #eee;"><td style="padding: 6px 0;">ServiceForge</td><td>ServiceNow</td><td style="text-align: right; color: #e53e3e;">$1M+/yr</td></tr>
    <tr><td style="padding: 6px 0;" colspan="3"><em>+ 11 more builds</em></td></tr>
  </table>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 24px;">Every single one of these will be built live on camera, start to finish, and published as an MIT-licensed open-source repo.</p>

  <a href="https://stevekaplan.ai/saaspocolypse" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 700; font-size: 14px;">See the Full Lineup</a>

  <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">— Steve<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
</div>`,
  },

  // ─── EMAIL 2: 2 weeks before (June 19) ───
  {
    name: "SAASpocolypse — How I'm Preparing",
    subject: "204 database tables. 20 PRDs. 0 lines of code.",
    scheduledAt: "2026-06-19T14:00:00Z",
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
  <h1 style="font-size: 26px; font-weight: 800; margin-bottom: 20px; color: #000;">I'm not winging this.</h1>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">Some people might think building 20 software projects in 26 days sounds reckless. It would be — if I hadn't spent weeks architecting everything before writing a single line of code.</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">Here's what's already done before Day 1:</p>

  <div style="background: #f7f7f5; border-left: 4px solid #000; padding: 20px; margin-bottom: 20px;">
    <p style="margin: 0 0 8px; font-size: 15px;"><strong>20 Product Requirements Documents</strong> — features, user flows, success metrics</p>
    <p style="margin: 0 0 8px; font-size: 15px;"><strong>20 Architecture Decision Documents</strong> — data models, API routes, AI integration points</p>
    <p style="margin: 0 0 8px; font-size: 15px;"><strong>20 SQL Migrations</strong> — 204 database tables, ready to paste into Supabase</p>
    <p style="margin: 0 0 8px; font-size: 15px;"><strong>Shared Boilerplate</strong> — auth, dashboard, AI wrapper, components all built</p>
    <p style="margin: 0; font-size: 15px;"><strong>Build Sequence for Each Project</strong> — what to code first for maximum impact</p>
  </div>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">The live streams are the <em>execution</em>, not the thinking. When I go live, I already know every table, every route, and every AI prompt. The stream is about showing you how fast one developer with Claude Code can turn a plan into working software.</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 24px;">Two weeks to go.</p>

  <a href="https://stevekaplan.ai/saaspocolypse" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 700; font-size: 14px;">View the Full Plan</a>

  <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">— Steve<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
</div>`,
  },

  // ─── EMAIL 3: 1 week before (June 26) ───
  {
    name: "SAASpocolypse — The Schedule",
    subject: "26-day schedule is live. Here's when to tune in.",
    scheduledAt: "2026-06-26T14:00:00Z",
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
  <h1 style="font-size: 26px; font-weight: 800; margin-bottom: 20px; color: #000;">One week out. Here's the schedule.</h1>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">Starting July 3rd, I'm building one project per day. Here's the first two weeks:</p>

  <div style="font-family: 'Courier New', monospace; font-size: 14px; background: #000; color: #fff; padding: 24px; margin-bottom: 20px; line-height: 1.8;">
    <div style="color: #C3F73A; margin-bottom: 8px; font-weight: 700;">WEEK 1 — QUICK WINS</div>
    <div>Day 1 &nbsp;Jul 3 &nbsp; StatusBrew (Statuspage)</div>
    <div>Day 2 &nbsp;Jul 4 &nbsp; ProposalForge (PandaDoc)</div>
    <div>Day 3 &nbsp;Jul 5 &nbsp; InsightPulse (Qualtrics)</div>
    <div>Day 4 &nbsp;Jul 6 &nbsp; BoardReady (Diligent)</div>
    <div>Day 5 &nbsp;Jul 7 &nbsp; RecruiterAI (Greenhouse)</div>
    <div style="color: #C3F73A; margin: 12px 0 8px; font-weight: 700;">WEEK 2 — CORE BUILDS</div>
    <div>Day 6 &nbsp;Jul 8 &nbsp; ExpenseZero (SAP Concur)</div>
    <div>Day 7 &nbsp;Jul 9 &nbsp; ContractPilot (Ironclad)</div>
    <div>Day 8 &nbsp;Jul 10&nbsp; ComplianceForge (Vanta)</div>
    <div>Day 9 &nbsp;Jul 11&nbsp; PeopleOS (BambooHR)</div>
    <div>Day 10 Jul 12&nbsp; InvoiceAgent (Coupa)</div>
  </div>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">Every stream goes live simultaneously on YouTube, LinkedIn, X, Facebook, and Instagram. I'll send you an email 1 hour before each build starts.</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 24px;">If you haven't already, register on Lu.ma to get calendar invites with reminders:</p>

  <a href="https://luma.com/event/evt-xtCTLY71gnGQkvp" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 700; font-size: 14px;">Add to Calendar</a>

  <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">— Steve<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
</div>`,
  },

  // ─── EMAIL 4: 3 days before (June 30) ───
  {
    name: "SAASpocolypse — 3 Days Out",
    subject: "Thursday we start breaking things",
    scheduledAt: "2026-06-30T14:00:00Z",
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
  <h1 style="font-size: 26px; font-weight: 800; margin-bottom: 20px; color: #000;">3 days.</h1>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">On Thursday I open my terminal, start the stream, and begin building StatusBrew — an open-source alternative to Atlassian Statuspage.</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">Quick recap of what you're getting out of this:</p>

  <ul style="font-size: 16px; line-height: 2; margin-bottom: 20px; padding-left: 20px;">
    <li>20 functional software projects, built live</li>
    <li>Every repo published as MIT open source on GitHub</li>
    <li>Full over-the-shoulder view of AI-assisted development</li>
    <li>Real architecture decisions, real debugging, real shipping</li>
    <li>Each project comes with database schemas, API docs, and deployment instructions</li>
  </ul>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 24px;">This isn't a tutorial. It's a live build. Things will break. That's the point — you'll see exactly how a developer works through real problems in real time.</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 24px;">See you Thursday.</p>

  <a href="https://luma.com/event/evt-xtCTLY71gnGQkvp" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 700; font-size: 14px;">Make Sure You're Registered</a>

  <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">— Steve<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
</div>`,
  },

  // ─── EMAIL 5: Day before (July 2) ───
  {
    name: "SAASpocolypse — Tomorrow",
    subject: "Tomorrow morning. Be there.",
    scheduledAt: "2026-07-02T18:00:00Z",
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
  <h1 style="font-size: 26px; font-weight: 800; margin-bottom: 20px; color: #000;">It starts tomorrow.</h1>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">Everything is ready. 20 PRDs written. 204 database tables designed. 20 architecture docs complete. Boilerplate deployed. OBS configured. Coffee stocked.</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">Tomorrow morning I'm going live to build <strong>StatusBrew</strong> — a modern open-source status page and incident management tool. It replaces Atlassian Statuspage (which charges up to $16K/year) and Cachet (which was abandoned).</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">Where to watch:</p>

  <div style="background: #f7f7f5; padding: 20px; margin-bottom: 20px; border-left: 4px solid #000;">
    <p style="margin: 0 0 6px; font-size: 15px;"><strong>YouTube</strong> — best for full screen coding view</p>
    <p style="margin: 0 0 6px; font-size: 15px;"><strong>LinkedIn</strong> — if you want to comment professionally</p>
    <p style="margin: 0 0 6px; font-size: 15px;"><strong>X (Twitter)</strong> — for the live commentary thread</p>
    <p style="margin: 0 0 6px; font-size: 15px;"><strong>Facebook</strong> — if that's your platform</p>
    <p style="margin: 0; font-size: 15px;"><strong>Instagram</strong> — for the vertical view</p>
  </div>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 24px;">I'll send one more email tomorrow when the stream goes live with direct links. See you there.</p>

  <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">— Steve<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
</div>`,
  },

  // ─── EMAIL 6: Day of launch (July 3) ───
  {
    name: "SAASpocolypse — We're Live",
    subject: "We're live. Day 1: StatusBrew.",
    scheduledAt: "2026-07-03T13:30:00Z", // 30 min before stream
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
  <h1 style="font-size: 26px; font-weight: 800; margin-bottom: 20px; color: #000;">The SAASpocolypse starts now.</h1>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">Going live in 30 minutes. Day 1: <strong>StatusBrew</strong> — open-source status pages and incident management.</p>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 24px;">Pick your platform and join:</p>

  <div style="margin-bottom: 24px;">
    <a href="https://stevekaplan.ai/saaspocolypse" style="display: inline-block; background: #e53e3e; color: #fff; padding: 14px 28px; text-decoration: none; font-weight: 700; font-size: 16px;">Watch Live Now</a>
  </div>

  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">When the build is done, the GitHub repo goes public. MIT license. Yours to fork.</p>

  <p style="font-size: 16px; line-height: 1.7;">Let's go.</p>

  <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">— Steve<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
</div>`,
  },
];

async function main() {
  console.log("Creating SAASpocolypse email broadcasts...\n");

  for (const email of emails) {
    try {
      const broadcast = await resend.broadcasts.create({
        audienceId: AUDIENCE_ID,
        from: FROM,
        subject: email.subject,
        html: email.html,
        name: email.name,
      });

      console.log(`Created: "${email.name}"`);
      console.log(`  ID: ${broadcast.data?.id}`);
      console.log(`  Scheduled for: ${email.scheduledAt}`);
      console.log(`  Subject: ${email.subject}\n`);

      // To auto-schedule, uncomment this:
      // if (broadcast.data?.id) {
      //   await resend.broadcasts.send(broadcast.data.id, {
      //     scheduledAt: email.scheduledAt,
      //   });
      //   console.log(`  → Scheduled!\n`);
      // }
    } catch (err) {
      console.error(`Failed: "${email.name}"`, err);
    }
  }

  console.log("Done. Review drafts at resend.com/broadcasts");
  console.log("Uncomment the send block in this script to auto-schedule, or schedule manually in the dashboard.");
}

main();
