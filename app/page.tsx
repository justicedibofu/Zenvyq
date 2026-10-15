import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-paper flex flex-col selection:bg-blue-500 selection:text-white">
      {/* 1. Nav with full-screen menu overlay & smooth scroll contact button */}
      <Nav />

      {/* 2. Hero with glossy orb, hex cluster, black square arrow, micro-labels & 3D particle wave */}
      <Hero />

      {/* 3. Who We Are (dark --ink, 1px vertical grid, corner ticks, generative 3D visual) */}
      <WhoWeAre />

      {/* 4. What We Build (signature horizontal expanding-panel accordion, 5 generative animated visuals) */}
      <Services />

      {/* 5. How We Work (light --paper, 4 connected steps with scroll-drawing line) */}
      <Process />

      {/* 6. Why ZENVYQ (light bento grid, dark server tile, honest African infrastructure value props) */}
      <WhyUs />

      {/* 7. Connect (brutalist L-bracket frame, rotated blue diamond, WhatsApp CTA + contact form) */}
      <Connect />

      {/* 8. Footer (dark --ink, live-text wordmark + ribbon icon, socials, bordered nav rows) */}
      <Footer />
    </main>
  );
}
