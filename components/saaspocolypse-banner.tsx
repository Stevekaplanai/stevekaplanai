"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const EVENT_START = new Date("2026-05-23T00:00:00-04:00");
const EVENT_END = new Date("2026-06-17T23:59:59-04:00");
const HIDE_AFTER = new Date("2026-06-18T00:00:00-04:00");

const DISMISS_KEY = "saaspocolypse_banner_v1_dismissed";
const BANNER_HEIGHT_DESKTOP = "56px";
const BANNER_HEIGHT_MOBILE = "72px";

function daysBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export function SaaspocolypseBanner() {
  const [now, setNow] = useState<Date | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setNow(new Date());
    setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const isVisible =
    now !== null &&
    !dismissed &&
    now.getTime() < HIDE_AFTER.getTime();

  useEffect(() => {
    if (!isVisible) {
      document.documentElement.style.setProperty("--banner-h", "0px");
      return;
    }
    const setHeight = () => {
      const height = window.innerWidth >= 768 ? BANNER_HEIGHT_DESKTOP : BANNER_HEIGHT_MOBILE;
      document.documentElement.style.setProperty("--banner-h", height);
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => {
      window.removeEventListener("resize", setHeight);
      document.documentElement.style.setProperty("--banner-h", "0px");
    };
  }, [isVisible]);

  if (!isVisible || !now) return null;

  const isLive = now.getTime() >= EVENT_START.getTime() && now.getTime() <= EVENT_END.getTime();
  const daysToStart = daysBetween(now, EVENT_START);
  const daysToEnd = daysBetween(now, EVENT_END);

  const tag = isLive
    ? `LIVE NOW // ${daysToEnd} DAY${daysToEnd === 1 ? "" : "S"} LEFT`
    : `LIVE EVENT // STARTS IN ${daysToStart} DAY${daysToStart === 1 ? "" : "S"}`;

  const headline = isLive
    ? "The SAASpocolypse is live. New builds dropping daily."
    : "20 SaaS killers. 26 days. $4.7M replaced.";

  const headlineMobile = isLive
    ? "Live now → 20 builds. $4.7M replaced."
    : "20 SaaS killers · 26 days · $4.7M replaced";

  const ctaLabel = isLive ? "WATCH LIVE" : "SEE THE BUILD";

  const handleDismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <div
      role="region"
      aria-label="SAASpocolypse 2026 announcement"
      className="fixed top-0 inset-x-0 z-[60] bg-[#FFD166] border-b-4 border-black shadow-[0_6px_0_rgba(0,0,0,1)]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-2.5 flex items-center gap-3 md:gap-5">
        {/* Tag pill */}
        <span
          className="hidden sm:inline-flex items-center bg-[#FF6B6B] text-black font-bold uppercase tracking-[0.15em] text-[10px] md:text-[11px] px-2 py-1 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] flex-shrink-0"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {tag}
        </span>

        {/* Live dot mobile-only */}
        <span
          className={`sm:hidden flex-shrink-0 w-2.5 h-2.5 rounded-full border-2 border-black ${
            isLive ? "bg-[#00C853] animate-pulse" : "bg-[#FF6B6B]"
          }`}
          aria-hidden="true"
        />

        {/* Headline */}
        <Link
          href="/saaspocolypse"
          className="flex-1 min-w-0 text-black hover:text-black group"
        >
          <span className="hidden md:inline text-[17px] lg:text-[19px] font-extrabold tracking-tight leading-tight">
            {headline}{" "}
            <span className="underline underline-offset-4 decoration-2 decoration-black group-hover:decoration-[3px]">
              {ctaLabel} →
            </span>
          </span>
          <span className="md:hidden text-[13px] sm:text-[14px] font-extrabold tracking-tight leading-tight block">
            {headlineMobile}
            <span className="block text-[11px] font-bold uppercase tracking-wider mt-0.5">
              {tag} · {ctaLabel} →
            </span>
          </span>
        </Link>

        {/* CTA Button (desktop only — mobile uses the inline arrow) */}
        <Link
          href="/saaspocolypse"
          className="hidden md:inline-flex items-center gap-2 bg-black text-white font-extrabold uppercase tracking-wider text-xs lg:text-sm px-4 py-2 border-2 border-black hover:bg-[#0f172a] hover:translate-y-[-1px] hover:shadow-[2px_3px_0_rgba(0,0,0,1)] transition-all flex-shrink-0"
        >
          {ctaLabel}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Dismiss */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss SAASpocolypse banner"
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-black hover:bg-black hover:text-[#FFD166] border-2 border-transparent hover:border-black transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
