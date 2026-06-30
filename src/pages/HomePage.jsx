import Hero from "../components/Hero";
import { AboutSection } from "../components/About/AboutSection";
import { QuoteSection } from "../components/Quote/QuoteSection";
import OurDomains from "../components/OurDomains";
import { WhyJoinCBNCC } from "../components/WhyJoinCBNCC";
import CtaFooterSection from "../components/CtaFooterSection";
import { aboutData } from "../data/aboutData";
import { quotesData } from "../data/quotesData";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection data={aboutData} />
      <QuoteSection quotes={quotesData} />
      <OurDomains />
      <WhyJoinCBNCC />
      <CtaFooterSection />
    </>
  );
}
