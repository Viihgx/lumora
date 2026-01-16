import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/home/CTASection";

export default function About() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <TeamSection />
      <CTASection />
    </main>
  );
}