import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_SAASPOCOLYPSE_AUDIENCE_ID!;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  try {
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });

    await resend.emails.send({
      from: "Steve Kaplan <steve@stevekaplan.ai>",
      to: email,
      subject: "You're in — SAASpocolypse 2026",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 28px; font-weight: 800; margin-bottom: 16px; color: #000;">SAASpocolypse 2026</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #1a1a1a; margin-bottom: 16px;">You're on the list.</p>
          <p style="font-size: 16px; line-height: 1.6; color: #1a1a1a; margin-bottom: 16px;">Over 26 days this summer, I'm building 20 open-source alternatives to enterprise software that companies pay $20K-$1M+ per year for — live on camera, using Claude Code. Every repo gets published as MIT licensed open source.</p>
          <p style="font-size: 16px; line-height: 1.6; color: #1a1a1a; margin-bottom: 16px;">You'll get one email before each build goes live. That's it. No spam, no sequences, no upsells.</p>
          <p style="font-size: 16px; line-height: 1.6; color: #1a1a1a; margin-bottom: 24px;">See the full lineup of what we're building:</p>
          <a href="https://stevekaplan.ai/saaspocolypse" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 600; font-size: 14px;">View the 20 Builds</a>
          <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">— Steve Kaplan<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to subscribe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
