import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Results } from "@/components/results";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { GTMVPSection } from "@/components/gtmvp";
import { AttribyteSection } from "@/components/attribyte";
import { GitHub } from "@/components/github";
import { AuditFeature } from "@/components/audit-feature";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Results />
        <About />
        <Products />
        <GTMVPSection />
        <AttribyteSection />
        <GitHub />
        <AuditFeature />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
