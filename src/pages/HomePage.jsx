import Hero from "../components/Hero";
import { AboutSection } from "../components/About/AboutSection";
import OurDomains from "../components/OurDomains";
import { WhyJoinCBNCC } from "../components/WhyJoinCBNCC";
import CtaFooterSection from "../components/CtaFooterSection";
import { aboutData } from "../data/aboutData";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

export default function HomePage() {
  return (
    <>
      <ScrollStack
        className="hero-about-stack"
        itemDistance={0}
        itemScale={0.03}
        itemStackDistance={0}
        stackPosition="0px"
        scaleEndPosition="-10%"
        baseScale={0.94}
        blurAmount={0}
      >
        <ScrollStackItem>
          <Hero />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="about-stack-card">
          <AboutSection data={aboutData} />
        </ScrollStackItem>
      </ScrollStack>
      <OurDomains />
      <WhyJoinCBNCC />
      <CtaFooterSection />
    </>
  );
}
