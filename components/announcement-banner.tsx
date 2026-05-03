import Link from "next/link";

export function AnnouncementBanner() {
  return (
    <div className="sticky top-0 z-[60] bg-electric text-white text-center py-2 px-4">
      <p className="text-sm font-medium">
        Saaspocolypse 2026 begins May 23rd{" "}
        <Link
          href="https://stevekaplan.ai/saaspocolypse"
          className="underline underline-offset-2 hover:text-white/90 transition-colors"
        >
          [learn more]
        </Link>
      </p>
    </div>
  );
}
