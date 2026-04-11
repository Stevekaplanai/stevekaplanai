import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { WhitePaperPreview } from "@/components/white-paper-preview";
import { GitHub } from "@/components/github";
import { Results } from "@/components/results";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhitePaperPreview />
        <GitHub />
        <Results />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
