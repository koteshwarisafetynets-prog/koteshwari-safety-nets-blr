import HeroCarousel from "@/components/sections/HeroCarousel";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import Stats from "@/components/sections/Stats";
import FeaturedServices from "@/components/sections/FeaturedServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CostCalculator from "@/components/sections/CostCalculator";
import ServiceAreas from "@/components/sections/ServiceAreas";
import BeforeAfter from "@/components/sections/BeforeAfter";
import CustomerReviews from "@/components/sections/CustomerReviews";
import Materials from "@/components/sections/Materials";
import ServiceCategories from "@/components/sections/ServiceCategories";
import InstallationProcess from "@/components/sections/InstallationProcess";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Team from "@/components/sections/Team";
import ContactForm from "@/components/forms/ContactForm";

export default function Home() {
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://koteshwarisafetynets.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://koteshwarisafetynets.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* SearchAction Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionSchema) }}
      />

      {/* Varied, Flow-Optimized Homepage Structure */}
      <HeroCarousel />
      <MarqueeTicker />
      <Stats />
      <FeaturedServices />
      <WhyChooseUs />
      <CostCalculator />
      <ServiceAreas />
      <BeforeAfter />
      <CustomerReviews />
      <Materials />
      <ServiceCategories />
      <InstallationProcess />
      <FAQAccordion />
      <Team />
      <ContactForm />
    </>
  );
}
