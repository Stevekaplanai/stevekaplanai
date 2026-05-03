import Link from "next/link";

export function AnnouncementBanner() {
  return (
    <div className="sticky top-0 z-[60] bg-black text-white py-3 px-4 border-b border-red-900/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <p className="text-base sm:text-lg font-bold tracking-wide text-center">
          <span className="text-red-500">SAASpocolypse 2026</span>{" "}
          <span className="text-white/90">begins May 23rd</span>
        </p>
        <Link
          href="https://stevekaplan.ai/saaspocolypse"
          className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-2 rounded transition-colors uppercase tracking-wider"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
