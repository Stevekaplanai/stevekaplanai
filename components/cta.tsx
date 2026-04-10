import Link from "next/link";

export function CTA() {
  return (
    <section
      id="get-white-paper"
      className="py-24 bg-gradient-to-b from-slate/30 to-midnight"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 text-balance">
          Get the Full White Paper{" "}
          <span className="text-emerald">Free</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          16 pages. Architecture diagrams. Cost breakdowns. 4-week implementation
          playbook. Real case studies.
        </p>

        <Link
          href="https://www.linkedin.com/in/stevekaplanseo/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-electric hover:bg-electric/90 text-white text-lg font-semibold px-10 py-5 rounded-xl transition-all hover:shadow-lg hover:shadow-electric/25"
        >
          Comment &quot;STACK&quot; on LinkedIn
        </Link>

        <p className="text-sm text-muted-foreground mt-6">
          I&apos;ll DM you the PDF. No email gate. No sales pitch.
        </p>
      </div>
    </section>
  );
}
