import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LiveEventCard } from "@/components/live-event-card";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { GitHub } from "@/components/github";
import { Results } from "@/components/results";
import { AuditFeature } from "@/components/audit-feature";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LiveEventCard />
        <About />
        <Results />
        <AuditFeature />
        <Products />
        <GitHub />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
