import { Navbar } from "@/components/navigation";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
    </>
  );
}
