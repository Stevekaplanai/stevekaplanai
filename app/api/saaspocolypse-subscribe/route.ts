import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_SAASPOCOLYPSE_AUDIENCE_ID!;

const supabase = process.env.GIVEAWAY_SUPABASE_URL
  ? createClient(
      process.env.GIVEAWAY_SUPABASE_URL!,
      process.env.GIVEAWAY_SUPABASE_SERVICE_KEY!
    )
  : null;

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export async function POST(req: NextRequest) {
  const { email, ref } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  try {
    // Add to Resend audience
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });

    // Register in giveaway system
    let shareCode = "";
    if (supabase) {
      const { data: existing } = await supabase
        .from("participants")
        .select("share_code")
        .eq("email", email)
        .single();

      if (existing) {
        shareCode = existing.share_code;
      } else {
        shareCode = generateCode();
        await supabase
          .from("participants")
          .insert({ email, share_code: shareCode });
      }

      // Track referral if ref code provided
      if (ref && ref !== shareCode) {
        const { data: referrer } = await supabase
          .from("participants")
          .select("id, points")
          .eq("share_code", ref)
          .single();

        if (referrer) {
          const { data: existingRef } = await supabase
            .from("referral_signups")
            .select("id")
            .eq("referrer_id", referrer.id)
            .eq("referred_email", email)
            .single();

          if (!existingRef) {
            await supabase
              .from("referral_signups")
              .insert({ referrer_id: referrer.id, referred_email: email });

            await supabase
              .from("participants")
              .update({ points: referrer.points + 5 })
              .eq("id", referrer.id);
          }
        }
      }
    }

    const shareLink = shareCode
      ? `https://stevekaplan.ai/saaspocolypse/share?code=${shareCode}`
      : "https://stevekaplan.ai/saaspocolypse";

    // Send confirmation email with giveaway CTA
    await resend.emails.send({
      from: "Steve Kaplan <steve@stevekaplan.ai>",
      to: email,
      subject: "You're in — SAASpocolypse 2026",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 28px; font-weight: 800; margin-bottom: 16px; color: #000;">SAASpocolypse 2026</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #1a1a1a; margin-bottom: 16px;">You're on the list.</p>
          <p style="font-size: 16px; line-height: 1.6; color: #1a1a1a; margin-bottom: 16px;">Over 26 days this summer, I'm building 20 open-source alternatives to enterprise software that companies pay 20K to over 1M per year for — live on camera, using Claude Code. Every repo gets published as MIT licensed open source.</p>
          <p style="font-size: 16px; line-height: 1.6; color: #1a1a1a; margin-bottom: 24px;">You'll get one email before each build goes live. No spam, no sequences, no upsells.</p>

          <div style="background: #C3F73A; border: 3px solid #000; padding: 20px; margin-bottom: 24px;">
            <h2 style="font-size: 20px; font-weight: 800; margin-bottom: 8px; color: #000;">Win a $100 Amazon Gift Card</h2>
            <p style="font-size: 14px; color: #000; margin-bottom: 16px; line-height: 1.5;">Share the SAASpocolypse on social media to earn entries. Each share = 1 entry. Each friend who signs up with your link = 5 entries. Winner drawn randomly after the event.</p>
            <a href="${shareLink}" style="display: inline-block; background: #000; color: #C3F73A; padding: 12px 24px; text-decoration: none; font-weight: 700; font-size: 14px;">Share & Earn Entries</a>
          </div>

          <a href="https://stevekaplan.ai/saaspocolypse" style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; font-weight: 600; font-size: 14px;">View the 20 Builds</a>
          <p style="font-size: 14px; color: #666; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">— Steve Kaplan<br><a href="https://stevekaplan.ai" style="color: #666;">stevekaplan.ai</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, share_code: shareCode });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to subscribe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
