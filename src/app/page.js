import Contact from "@/Components/Contact";
import FAQ from "@/Components/FAQ";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";
import TopPick from "@/Components/TopPick";
import Ways from "@/Components/Ways";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <TopPick />
      <FAQ />
      <Ways />
      <Testimonials />
      <Contact />
    </div>
  );
}
