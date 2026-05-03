"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const EVENT_START = new Date("2026-05-23T00:00:00-04:00");
const EVENT_END = new Date("2026-06-17T23:59:59-04:00");
const HIDE_AFTER = new Date("2026-06-18T00:00:00-04:00");

function daysBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

function formatBand(): string {
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase();
  return `${fmt(EVENT_START)} — ${fmt(EVENT_END)}`;
}

export function LiveEventCard() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  if (now.getTime() >= HIDE_AFTER.getTime()) return null;

  const isLive = now.getTime() >= EVENT_START.getTime() && now.getTime() <= EVENT_END.getTime();
  const daysToStart = daysBetween(now, EVENT_START);
  const daysToEnd = daysBetween(now, EVENT_END);

  const ribbonLabel = isLive
    ? `LIVE NOW // ${daysToEnd} DAYS LEFT // ${formatBand()}`
    : `LIVE EVENT // STARTS IN ${daysToStart} DAYS // ${formatBand()}`;

  return (
    <section className="py-12 bg-midnight">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-electric/10 via-midnight to-amber/5 border border-electric/30 rounded-2xl overflow-hidden">
          {/* Scarcity ribbon */}
          <div className="bg-electric/10 border-b border-electric/30 px-6 py-2.5">
            <div className="flex items-center gap-3 text-electric font-mono text-xs tracking-wider">
              <span className={`w-2 h-2 rounded-full ${isLive ? "bg-emerald animate-pulse" : "bg-amber"}`} />
              {ribbonLabel}
            </div>
          </div>

          <div className="px-6 py-8 md:px-10 md:py-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight tracking-tight mb-3">
                SAASpocolypse 2026.{" "}
                <span className="text-emerald">20 open-source repos.</span>{" "}
                <span className="text-amber">$4.7M of enterprise SaaS replaced.</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                One developer + Claude Code. 26 days. Live build, public spec, every commit on GitHub.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[220px]">
              <Link
                href="/saaspocolypse"
                className="inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric/90 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/25 text-sm"
              >
                {isLive ? "Watch Live" : "See the Build Plan"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="https://github.com/Stevekaplanai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-muted text-foreground hover:bg-slate font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Follow on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
