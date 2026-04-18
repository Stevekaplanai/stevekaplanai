import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.GIVEAWAY_SUPABASE_URL!,
  process.env.GIVEAWAY_SUPABASE_SERVICE_KEY!
);

const ADMIN_KEY = process.env.SAASPOCOLYPSE_ADMIN_KEY!;

function checkAuth(req: NextRequest): boolean {
  const auth = req.headers.get("x-admin-key");
  return auth === ADMIN_KEY;
}

// GET /api/saaspocolypse-admin — get all participants with stats
export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: participants } = await supabase
    .from("participants")
    .select("id, email, share_code, points, created_at")
    .order("points", { ascending: false });

  const { data: shares } = await supabase
    .from("share_actions")
    .select("participant_id, platform, created_at");

  const { data: referrals } = await supabase
    .from("referral_signups")
    .select("referrer_id, referred_email, created_at");

  const sharesByParticipant = new Map<string, string[]>();
  for (const s of shares ?? []) {
    const existing = sharesByParticipant.get(s.participant_id) ?? [];
    existing.push(s.platform);
    sharesByParticipant.set(s.participant_id, existing);
  }

  const referralsByParticipant = new Map<string, number>();
  for (const r of referrals ?? []) {
    referralsByParticipant.set(
      r.referrer_id,
      (referralsByParticipant.get(r.referrer_id) ?? 0) + 1
    );
  }

  const enriched = (participants ?? []).map((p) => ({
    ...p,
    platforms_shared: sharesByParticipant.get(p.id) ?? [],
    referral_count: referralsByParticipant.get(p.id) ?? 0,
  }));

  return NextResponse.json({
    participants: enriched,
    total: enriched.length,
    total_points: enriched.reduce((sum, p) => sum + p.points, 0),
    total_shares: (shares ?? []).length,
    total_referrals: (referrals ?? []).length,
  });
}

// POST /api/saaspocolypse-admin — pick a winner
export async function POST(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { action } = await req.json();

  if (action === "pick_winner") {
    // Weighted random: each point = 1 entry
    const { data: participants } = await supabase
      .from("participants")
      .select("id, email, share_code, points")
      .gt("points", 0);

    if (!participants || participants.length === 0) {
      return NextResponse.json(
        { error: "No eligible participants (need at least 1 point)" },
        { status: 400 }
      );
    }

    const totalWeight = participants.reduce((sum, p) => sum + p.points, 0);
    let random = Math.random() * totalWeight;

    let winner = participants[0];
    for (const p of participants) {
      random -= p.points;
      if (random <= 0) {
        winner = p;
        break;
      }
    }

    return NextResponse.json({
      winner: {
        email: winner.email,
        share_code: winner.share_code,
        points: winner.points,
      },
      total_eligible: participants.length,
      total_entries: totalWeight,
    });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
