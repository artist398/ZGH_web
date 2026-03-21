import { Header } from "@/components/salon/Header";
import { Hero } from "@/components/salon/Hero";
import { Services } from "@/components/salon/Services";
import { VideoBlock } from "@/components/salon/VideoBlock";
import { Gallery } from "@/components/salon/Gallery";
import { Footer } from "@/components/salon/Footer";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden bg-[#030102] text-white">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.5]"
        aria-hidden
      >
        <div className="salon-bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-0 h-[min(85vh,780px)] w-[min(100vw,980px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(196,30,58,0.2),transparent_62%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--salon-gold)]/20 to-transparent" />
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <VideoBlock />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
