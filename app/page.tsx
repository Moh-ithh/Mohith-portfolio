import { Navbar } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { FeaturedWork } from "@/components/featured-work";
import { EngineeringDomains } from "@/components/engineering-domains";
import { CaseStudies } from "@/components/case-studies";
import { AIPlayground } from "@/components/ai-playground";
import { DeveloperTerminal } from "@/components/developer-terminal";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <FeaturedWork />
        <EngineeringDomains />
        <CaseStudies />
        <AIPlayground />
        <DeveloperTerminal />
        <Contact />
      </main>
    </>
  );
}
