import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.GIVEAWAY_SUPABASE_URL!,
  process.env.GIVEAWAY_SUPABASE_SERVICE_KEY!
);

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

// POST /api/saaspocolypse-share — register a participant or track a share
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { action } = body;

  // Register new participant
  if (action === "register") {
    const { email } = body;
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Check if already registered
    const { data: existing } = await supabase
      .from("participants")
      .select("share_code, points")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json({
        share_code: existing.share_code,
        points: existing.points,
        existing: true,
      });
    }

    const share_code = generateCode();
    const { data, error } = await supabase
      .from("participants")
      .insert({ email, share_code })
      .select("share_code, points")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      share_code: data.share_code,
      points: data.points,
      existing: false,
    });
  }

  // Track a share action
  if (action === "share") {
    const { share_code, platform } = body;
    if (!share_code || !platform) {
      return NextResponse.json(
        { error: "share_code and platform required" },
        { status: 400 }
      );
    }

    const validPlatforms = ["twitter", "linkedin", "facebook", "instagram", "threads"];
    if (!validPlatforms.includes(platform)) {
      return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
    }

    // Find participant
    const { data: participant } = await supabase
      .from("participants")
      .select("id, points")
      .eq("share_code", share_code)
      .single();

    if (!participant) {
      return NextResponse.json({ error: "Invalid share code" }, { status: 404 });
    }

    // Check if already shared on this platform
    const { data: existingShare } = await supabase
      .from("share_actions")
      .select("id")
      .eq("participant_id", participant.id)
      .eq("platform", platform)
      .single();

    if (existingShare) {
      return NextResponse.json({
        points: participant.points,
        already_shared: true,
      });
    }

    // Record share and add points
    await supabase
      .from("share_actions")
      .insert({ participant_id: participant.id, platform });

    const newPoints = participant.points + 1;
    await supabase
      .from("participants")
      .update({ points: newPoints })
      .eq("id", participant.id);

    return NextResponse.json({ points: newPoints, already_shared: false });
  }

  // Track referral signup
  if (action === "referral") {
    const { share_code, referred_email } = body;
    if (!share_code || !referred_email) {
      return NextResponse.json(
        { error: "share_code and referred_email required" },
        { status: 400 }
      );
    }

    const { data: referrer } = await supabase
      .from("participants")
      .select("id, points")
      .eq("share_code", share_code)
      .single();

    if (!referrer) {
      return NextResponse.json({ error: "Invalid share code" }, { status: 404 });
    }

    // Don't double-count
    const { data: existingRef } = await supabase
      .from("referral_signups")
      .select("id")
      .eq("referrer_id", referrer.id)
      .eq("referred_email", referred_email)
      .single();

    if (!existingRef) {
      await supabase
        .from("referral_signups")
        .insert({ referrer_id: referrer.id, referred_email });

      const newPoints = referrer.points + 5;
      await supabase
        .from("participants")
        .update({ points: newPoints })
        .eq("id", referrer.id);
    }

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}

// GET /api/saaspocolypse-share?code=XXX — get participant info
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "code required" }, { status: 400 });
  }

  const { data: participant } = await supabase
    .from("participants")
    .select("share_code, points, created_at")
    .eq("share_code", code)
    .single();

  if (!participant) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { data: shares } = await supabase
    .from("share_actions")
    .select("platform, created_at")
    .eq("participant_id", code);

  return NextResponse.json({ ...participant, shares: shares ?? [] });
}
