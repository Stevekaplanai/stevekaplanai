/**
 * 14-Day Post-Profit-Loop-Audit Sequence
 *
 * Audit recommendation: anchor every email to the buyer's #1 surfaced finding
 * by name. Memory-validated lift target: 8-12% -> 18-24% audit -> retainer
 * conversion.
 *
 * 9 emails across 14 days. Day 1-5 daily, then taper through Day 14.
 *
 * Usage: source .env.local && npx tsx scripts/schedule-post-audit-emails.ts \
 *   --to=email@example.com \
 *   --name="Founder Name" \
 *   --company="Acme Inc" \
 *   --top-finding="Lead routing leaks 32% of inbound to dead-letter status" \
 *   --top-finding-impact="$240K/yr in deals never assigned to a rep" \
 *   --finding-2="Paid media audience targeting on Meta hasn't been refreshed in 11 months" \
 *   --finding-3="3 manual handoffs per deal that an AI workflow can eat in an afternoon" \
 *   --start-date=2026-05-10
 *
 * Required env: RESEND_API_KEY
 */

import { Resend } from "resend";

interface Args {
  to: string;
  name: string;
  company: string;
  topFinding: string;
  topFindingImpact: string;
  finding2: string;
  finding3: string;
  startDate: string;
}

function parseArgs(): Args {
  const args: Partial<Args> = {};
  for (const arg of process.argv.slice(2)) {
    const match = arg.match(/^--([a-z-]+)=(.+)$/);
    if (!match) continue;
    const [, key, value] = match;
    const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    (args as Record<string, string>)[camel] = value;
  }
  const required: (keyof Args)[] = [
    "to",
    "name",
    "company",
    "topFinding",
    "topFindingImpact",
    "finding2",
    "finding3",
    "startDate",
  ];
  for (const k of required) {
    if (!args[k]) {
      throw new Error(`Missing required arg: --${k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())}`);
    }
  }
  return args as Args;
}

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(key);
}

const FROM = "Steve Kaplan <steve@stevekaplan.ai>";

// ───────────────────────────────────────────
// SHARED STYLES
// ───────────────────────────────────────────

const wrapper = (body: string) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
  ${body}
  <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">&mdash; Steve<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
</div>`;

const h1 = (text: string) =>
  `<h1 style="font-size: 24px; font-weight: 800; margin-bottom: 18px; color: #000;">${text}</h1>`;

const p = (text: string) =>
  `<p style="font-size: 16px; line-height: 1.7; margin-bottom: 16px;">${text}</p>`;

const cta = (label: string, href: string, color = "#000") =>
  `<a href="${href}" style="display: inline-block; background: ${color}; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 700; font-size: 14px; margin-top: 8px;">${label}</a>`;

const callout = (content: string) =>
  `<div style="background: #f7f7f5; border-left: 4px solid #10b981; padding: 16px 20px; margin-bottom: 20px;">${content}</div>`;

// ───────────────────────────────────────────
// TEMPLATES — anchored to buyer's #1 finding
// ───────────────────────────────────────────

interface EmailTemplate {
  dayOffset: number;
  subjectFn: (a: Args) => string;
  htmlFn: (a: Args) => string;
}

const templates: EmailTemplate[] = [
  // Day 1 — restate finding + simplest first step
  {
    dayOffset: 1,
    subjectFn: (a) => `${a.name} — your #1 finding, in one paragraph`,
    htmlFn: (a) => wrapper(`
      ${h1(`The win that matters most.`)}
      ${p(`${a.name} —`)}
      ${p(`Yesterday I delivered the audit. Today, the only thing that matters is whether the #1 finding ships.`)}
      ${callout(`<p style="margin: 0; font-size: 15px;"><strong>Finding #1:</strong> ${a.topFinding}</p><p style="margin: 8px 0 0; font-size: 14px; color: #666;"><strong>Impact:</strong> ${a.topFindingImpact}</p>`)}
      ${p(`The audit ranks it first because it's the highest lift you can ship in the next 30 days at the lowest effort. Every other finding is downstream of this one moving.`)}
      ${p(`The single first step (under 30 minutes): identify the one person on your team who owns this. Not "the team." One named person.`)}
      ${p(`Reply with their name and I'll send you a 30-min plan they can run today.`)}
    `),
  },
  // Day 2 — the mechanism behind why
  {
    dayOffset: 2,
    subjectFn: (a) => `Why ${a.company}'s top finding is sticky`,
    htmlFn: (a) => wrapper(`
      ${h1(`The pattern behind the finding.`)}
      ${p(`${a.name} —`)}
      ${p(`I see this exact finding in roughly 7 of 10 audits. Not because the operators are careless &mdash; because the system that produced it was set up two years ago, when the company had a different shape.`)}
      ${callout(`<p style="margin: 0; font-size: 15px;"><strong>The pattern:</strong> ${a.topFinding}</p>`)}
      ${p(`The reason it persists: nobody owns it directly. Marketing thinks ops owns it. Ops thinks RevOps owns it. RevOps thinks marketing owns it. The leak compounds for ${a.topFindingImpact} before anyone surfaces it.`)}
      ${p(`The fix is rarely technical. It's an ownership decision. Once one person owns it, the technical fix takes a day.`)}
    `),
  },
  // Day 3 — case study / pattern proof
  {
    dayOffset: 3,
    subjectFn: () => `Case: how a $25M B2B SaaS shipped this in 3 days`,
    htmlFn: (a) => wrapper(`
      ${h1(`A pattern that already shipped.`)}
      ${p(`${a.name} —`)}
      ${p(`A $25M B2B SaaS with 60 employees had effectively the same #1 finding as ${a.company}. Different stack. Same underlying leak.`)}
      ${callout(`<p style="margin: 0; font-size: 15px;"><strong>What they did:</strong> Day 1, named one owner. Day 2, owner ran the audit's recommended fix. Day 3, the leak closed and they backfilled the dead-letter queue.</p>`)}
      ${p(`Recovered $180K in deals over 6 weeks that had been routed to a status nobody monitored.`)}
      ${p(`Want the SOP they used? Reply &ldquo;SOP&rdquo; and I&apos;ll send the actual checklist.`)}
    `),
  },
  // Day 4 — tactical step with template
  {
    dayOffset: 4,
    subjectFn: () => `The 30-min step that unlocks the rest`,
    htmlFn: (a) => wrapper(`
      ${h1(`30 minutes. One owner. Ship it.`)}
      ${p(`${a.name} —`)}
      ${p(`If you&apos;ve named the owner, the next 30-min step is a kickoff call between them and you. Three questions, in this order:`)}
      ${callout(`
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>1.</strong> What's the smallest version of the fix you can ship by Friday?</p>
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>2.</strong> What's the one thing blocking it that you need from me?</p>
        <p style="margin: 0; font-size: 15px;"><strong>3.</strong> How will we know in two weeks whether it worked?</p>
      `)}
      ${p(`That's the entire kickoff. Nothing else. The audit document has the answer to the &ldquo;how&rdquo; &mdash; this call locks the &ldquo;who&rdquo; and the &ldquo;when.&rdquo;`)}
      ${p(`Forward this to the owner. They&apos;ll know what to do with it.`)}
    `),
  },
  // Day 5 — check-in
  {
    dayOffset: 5,
    subjectFn: (a) => `${a.name} — quick check on Friday`,
    htmlFn: (a) => wrapper(`
      ${h1(`How's the #1 finding looking?`)}
      ${p(`${a.name} —`)}
      ${p(`A week in. Two questions:`)}
      ${callout(`
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>1.</strong> Has the owner been named?</p>
        <p style="margin: 0; font-size: 15px;"><strong>2.</strong> Is the smallest version of the fix scoped to ship by Friday?</p>
      `)}
      ${p(`If yes to both, you&apos;re on the conversion path. The other 80% of buyers I deliver this audit to never get past Day 5 without losing the thread.`)}
      ${p(`If no, reply with where you&apos;re stuck. I&apos;ll give you the unblock in under 24 hours.`)}
    `),
  },
  // Day 7 — surface findings 2 + 3
  {
    dayOffset: 7,
    subjectFn: () => `The wins ranked #2 and #3 (and why they wait)`,
    htmlFn: (a) => wrapper(`
      ${h1(`Findings #2 and #3, in context.`)}
      ${p(`${a.name} —`)}
      ${p(`Most clients ask about findings #2 and #3 by Day 7. Here&apos;s the honest answer: they wait until #1 ships.`)}
      ${callout(`
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>Finding #2:</strong> ${a.finding2}</p>
        <p style="margin: 0; font-size: 15px;"><strong>Finding #3:</strong> ${a.finding3}</p>
      `)}
      ${p(`Both are real. Both ship in the 60- and 90-day track for a reason &mdash; they compound off the data baseline that #1 establishes. Run #2 before #1 and you&apos;re tuning a channel that's still leaking on the back end.`)}
      ${p(`The order matters. Ship #1 first.`)}
    `),
  },
  // Day 9 — what to expect at 30 days
  {
    dayOffset: 9,
    subjectFn: () => `What week-4 looks like if you ship`,
    htmlFn: (a) => wrapper(`
      ${h1(`The 30-day picture.`)}
      ${p(`${a.name} —`)}
      ${p(`If the #1 finding ships by Day 14, here&apos;s what week 4 typically looks like for a company at ${a.company}'s size:`)}
      ${callout(`
        <p style="margin: 0 0 8px; font-size: 15px;">&rarr; Weekly leakage cut by 60-90% on the surface fix.</p>
        <p style="margin: 0 0 8px; font-size: 15px;">&rarr; Backfill of any deals stuck in the leak (often $30-100K of recovered pipeline).</p>
        <p style="margin: 0; font-size: 15px;">&rarr; Owner is now equipped to monitor it &mdash; one dashboard, one Slack alert.</p>
      `)}
      ${p(`That's the ROI on Finding #1. Findings #2 and #3 stack on top, but they don't move until #1 is closed.`)}
    `),
  },
  // Day 11 — what waiting costs
  {
    dayOffset: 11,
    subjectFn: () => `What 6 more months of this would cost`,
    htmlFn: (a) => wrapper(`
      ${h1(`The cost of waiting.`)}
      ${p(`${a.name} —`)}
      ${p(`The hardest math in the audit isn&apos;t the wins &mdash; it&apos;s the cost of running another quarter without them.`)}
      ${callout(`<p style="margin: 0; font-size: 15px;"><strong>If Finding #1 doesn't ship in the next 90 days:</strong> ~3x the impact in ${a.topFindingImpact} compounds before anyone notices.</p>`)}
      ${p(`I'm not saying this to push the conversion &mdash; I'm saying it because the audit&apos;s only useful if you act on it. If something internal is blocking the ship, tell me what it is.`)}
      ${p(`Common blockers: no named owner; the owner has too much in flight; the team isn&apos;t aligned that #1 is actually #1.`)}
      ${p(`Reply with the blocker. I&apos;ll spend 20 minutes on it with you, no charge.`)}
    `),
  },
  // Day 13 — soft pitch
  {
    dayOffset: 13,
    subjectFn: () => `Want me to run the wins for you?`,
    htmlFn: (a) => wrapper(`
      ${h1(`Where you go from here.`)}
      ${p(`${a.name} —`)}
      ${p(`The audit was a snapshot. The wins are real, but they decay if nobody ships them &mdash; channels move, attribution shifts, your own data gets dirtier.`)}
      ${p(`Two paths from here:`)}
      ${callout(`
        <p style="margin: 0 0 12px; font-size: 15px;"><strong>Path A:</strong> Your team ships the 30/60/90 plan. I'm available to unblock by email at no charge for the next 30 days.</p>
        <p style="margin: 0; font-size: 15px;"><strong>Path B:</strong> I run the highest-leverage wins on retainer. The audit credits 100% toward month one. We start Monday.</p>
      `)}
      ${p(`No wrong answer. Path A is the right call for most operators &mdash; the plan is built so a competent team can execute. Path B is the right call when the team has bandwidth elsewhere or the wins need someone in the seat full-time.`)}
      ${p(`Reply &ldquo;A&rdquo; or &ldquo;B&rdquo; and I&apos;ll send the next step.`)}
    `),
  },
  // Day 14 — direct retainer offer
  {
    dayOffset: 14,
    subjectFn: () => `Last note from the audit sequence`,
    htmlFn: (a) => wrapper(`
      ${h1(`Two weeks in. One last note.`)}
      ${p(`${a.name} —`)}
      ${p(`This is the last email in the post-audit sequence. The audit is paid for. The plan is yours either way.`)}
      ${p(`If you want me on retainer to run Findings #1-5: $3,500 from the audit credits 100% toward month one. ${a.company}-specific monthly retainer starts at $8K and scales with the work.`)}
      ${p(`If you don&apos;t: keep the audit, ship the wins, and we&apos;ll talk again in 6 months when you want a refresh.`)}
      ${p(`Either way: when ${a.company} crosses $50M ARR, send me the news. I&apos;ll be the first one to congratulate you.`)}
      ${cta("Book a retainer call", "https://stevekaplan.ai/audit", "#3b82f6")}
    `),
  },
];

// ───────────────────────────────────────────
// SCHEDULER
// ───────────────────────────────────────────

function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T09:00:00-04:00");
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

async function main() {
  const args = parseArgs();
  const resend = getResend();

  console.log(`\n14-day post-audit sequence for ${args.name} (${args.to})`);
  console.log(`Anchored to: ${args.topFinding}`);
  console.log(`Starting: ${args.startDate}\n`);

  for (const t of templates) {
    const scheduledAt = addDays(args.startDate, t.dayOffset);
    const subject = t.subjectFn(args);
    const html = t.htmlFn(args);

    try {
      const result = await resend.emails.send({
        from: FROM,
        to: args.to,
        subject,
        html,
        scheduledAt,
      });
      console.log(`  Day ${String(t.dayOffset).padStart(2)} | ${scheduledAt.slice(0, 10)} | ${subject}`);
      if (result.error) {
        console.error(`    ERROR: ${result.error.message}`);
      }
    } catch (e) {
      console.error(`  Day ${t.dayOffset} | FAILED:`, e instanceof Error ? e.message : e);
    }
  }

  console.log(`\nDone. ${templates.length} emails scheduled.\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
