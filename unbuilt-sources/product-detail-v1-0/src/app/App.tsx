import { useState } from "react";
import { Header } from "./components/product/Header";
import { Hero } from "./components/product/Hero";
import { TechSnapshot } from "./components/product/TechSnapshot";
import { Benefits } from "./components/product/Benefits";
import { Applications } from "./components/product/Applications";
import { Gallery } from "./components/product/Gallery";
import { BodyContent } from "./components/product/BodyContent";
import { SpecsTable } from "./components/product/SpecsTable";
import { Options } from "./components/product/Options";
import { Downloads } from "./components/product/Downloads";
import { Warranty } from "./components/product/Warranty";
import { Related } from "./components/product/Related";
import { ContactForm } from "./components/product/ContactForm";
import { StickyCTA } from "./components/product/StickyCTA";
import { Footer } from "./components/product/Footer";
import { Lightbox } from "./components/product/Lightbox";

export default function App() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-neutral-900 pb-16 lg:pb-0">
      <Header />
      <main>
        <Hero onOpenLightbox={setLightbox} />
        <TechSnapshot />
        <Benefits />
        <Applications />
        <Gallery onOpen={setLightbox} />
        <BodyContent />
        <SpecsTable />
        <Options />
        <Downloads />
        <Warranty />
        <Related />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
      <Lightbox index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
    </div>
  );
}
