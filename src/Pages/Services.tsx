import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ProcessSection from "@/components/services/ProcessSection";
import CTASection from "@/components/home/CTASection";

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </main>
  );
}