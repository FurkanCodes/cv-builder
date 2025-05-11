import Header from "@/components/layout/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Benefits from "@/components/landing/Benefits";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="w-full">
        <Header />
      </div>
      <main className="flex-grow w-full max-w-[1400px] mx-auto">
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
