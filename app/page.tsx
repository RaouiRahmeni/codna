import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Service";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Projects />

      <Contact />
    </div>
  );
}
