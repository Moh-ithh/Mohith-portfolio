import { Navbar } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { FeaturedWork } from "@/components/featured-work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <FeaturedWork />
      </main>
    </>
  );
}
