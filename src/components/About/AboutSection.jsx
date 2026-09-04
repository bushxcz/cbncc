import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../animations/variants";
import SplitText from "../SplitText";
import BendingMarquee from "../BendingMarquee";

export const AboutSection = ({ data }) => {
  return (
    <motion.section
      className="px-4 md:px-grid-margin py-14 sm:py-20 md:py-section-gap relative overflow-hidden"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-element-gap items-center relative z-10">
        <div className="md:col-span-7 lg:col-span-8 relative">
          <motion.div variants={staggerItem} className="mt-4">
            <h2
              className="about-title font-display-xl font-extrabold uppercase text-white tracking-[-0.02em] leading-[0.95] mb-8 md:mb-12 text-[clamp(2.6rem,10vw,3.75rem)] md:text-[clamp(3.5rem,5.8vw,5.25rem)] lg:text-[clamp(4.2rem,6.8vw,6.5rem)]"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800 }}
            >
              <SplitText
                text="WHO WE ARE?"
                tag="span"
                textAlign="left"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800 }}
                className="inline-block font-display-xl font-extrabold uppercase text-white tracking-[-0.02em]"
                delay={40}
                duration={1.2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.15}
                rootMargin="-50px"
              />
            </h2>
          </motion.div>
          {/* Metadata Block */}
          <motion.div 
            variants={staggerItem}
            className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block font-label-mono text-[10px] text-on-surface-variant/50 tracking-[0.3em] uppercase"
          >
            SYS.OP.01 / ORG
          </motion.div>
        </div>
        
        <div className="md:col-span-5 lg:col-span-4 space-y-8 md:space-y-12">
          <motion.div variants={staggerItem} className="space-y-6">
            <div className="w-12 h-[1px] bg-primary/20" />
            <p className="font-body-lg text-[17px] sm:text-[19px] md:text-[21px] text-on-surface-variant leading-relaxed font-light">
              {data.description}
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerItem}
            className="pt-6 md:pt-8 border-t border-border-subtle group cursor-pointer hover:gap-4 transition-all"
          >
            <span className="font-label-mono text-[11px] md:text-label-mono uppercase tracking-widest flex items-center gap-2">
              {data.cta}
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-2">
                arrow_forward
              </span>
            </span>
          </motion.div>
        </div>
      </div>
      <BendingMarquee className="about-section-marquee" />
    </motion.section>
  );
};
