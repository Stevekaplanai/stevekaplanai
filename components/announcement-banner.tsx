"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const messages = [
  {
    text: (
      <>
        <span className="text-red-500">SAASpocolypse 2026</span>{" "}
        <span className="text-white/90">begins May 23rd</span>
      </>
    ),
    cta: "Join Free",
    href: "https://stevekaplan.ai/saaspocolypse",
  },
  {
    text: (
      <>
        <span className="text-red-500">20 Enterprise Softwares</span>{" "}
        <span className="text-white/90">in 26 Days All Yours - Free - No Catch</span>
      </>
    ),
    cta: "Watch Live",
    href: "https://stevekaplan.ai/saaspocolypse",
  },
];

export function AnnouncementBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = messages[currentIndex];

  return (
    <div className="sticky top-0 z-[60] bg-black text-white py-4 px-4 border-b border-red-900/50">
      <div
        className={`max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-base sm:text-lg font-bold tracking-wide text-center">
          {current.text}
        </p>
        <Link
          href={current.href}
          className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-2 rounded transition-colors uppercase tracking-wider"
        >
          {current.cta}
        </Link>
      </div>
    </div>
  );
}
