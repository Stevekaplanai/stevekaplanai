import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Problem } from "@/components/problem";
import { WhitePaperPreview } from "@/components/white-paper-preview";
import { Stack } from "@/components/stack";
import { Results } from "@/components/results";
import { Timeline } from "@/components/timeline";
import { CTA } from "@/components/cta";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <WhitePaperPreview />
        <Stack />
        <Results />
        <Timeline />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
