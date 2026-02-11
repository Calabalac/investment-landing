import { Hero } from "@/components/sections/hero";
import { WhyInvest } from "@/components/sections/why-invest";
import { Gallery } from "@/components/sections/gallery";
import { LeadForm } from "@/components/sections/lead-form";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <WhyInvest />
      <Gallery />
      <LeadForm />
      <Footer />
    </main>
  );
}

