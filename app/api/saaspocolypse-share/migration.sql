-- SAASpocolypse Giveaway System
-- Run this in a Supabase project SQL editor

CREATE TABLE IF NOT EXISTS participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  share_code text UNIQUE NOT NULL,
  points integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS share_actions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_id uuid NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  platform text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(participant_id, platform)
);

CREATE TABLE IF NOT EXISTS referral_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id uuid NOT NULL REFERENCES participants(id) ON DELETE CASCADE,
  referred_email text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_participants_share_code ON participants(share_code);
CREATE INDEX idx_participants_points ON participants(points DESC);
CREATE INDEX idx_share_actions_participant ON share_actions(participant_id);

-- 2 tables, lightweight, no RLS needed (server-side API only)
