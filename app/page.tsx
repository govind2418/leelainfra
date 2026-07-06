import { Hero } from "@/sections/home/Hero";
import { Expertise } from "@/sections/home/Expertise";
import { AboutTeaser } from "@/sections/home/AboutTeaser";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { FeaturedProjects } from "@/sections/home/FeaturedProjects";
import { Sectors } from "@/sections/home/Sectors";
import { Testimonials } from "@/sections/home/Testimonials";
import { NewArrivals } from "@/sections/home/NewArrivals";
import { GalleryTeaser } from "@/sections/home/GalleryTeaser";
import { CTASection } from "@/sections/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <AboutTeaser />
      <WhyChooseUs />
      <FeaturedProjects />
      <Sectors />
      <Testimonials />
      <NewArrivals />
      <GalleryTeaser />
      <CTASection />
    </>
  );
}
