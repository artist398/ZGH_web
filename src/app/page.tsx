import { Header } from "@/components/salon/Header";
import { Hero } from "@/components/salon/Hero";
import { Services } from "@/components/salon/Services";
import { VideoBlock } from "@/components/salon/VideoBlock";
import { Gallery } from "@/components/salon/Gallery";
import { Footer } from "@/components/salon/Footer";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden bg-white text-neutral-900 max-sm:bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_45%,#ffffff_100%)]">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-40 max-sm:opacity-50"
        aria-hidden
      >
        <div className="salon-bg-grid absolute inset-0 max-sm:opacity-70" />
        <div className="absolute left-1/2 top-0 h-[min(85vh,780px)] w-[min(100vw,980px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(185,28,28,0.06),transparent_62%)] max-sm:h-[min(95vh,840px)] max-sm:w-[min(110vw,1200px)] max-sm:bg-[radial-gradient(ellipse_85%_65%_at_50%_8%,rgba(185,28,28,0.11),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--salon-gold)]/20 to-transparent max-sm:via-[var(--salon-gold)]/28" />
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
