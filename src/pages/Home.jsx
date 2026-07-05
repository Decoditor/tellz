import { CTASection } from "@/components/sections/CTASection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyTellz } from "@/components/sections/WhyTellz";

export default function Home() {
  return (
    <>
      <Hero />
      <Industries />
      <Services />
      <FeaturedProjects />
      <WhyTellz />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}
