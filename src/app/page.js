import FAQ from "@/Components/FAQ";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";
import TopPick from "@/Components/TopPick";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <TopPick />
      <FAQ />
    </div>
  );
}
