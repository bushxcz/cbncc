import { motion } from 'framer-motion';
import { domainsData } from '../data/domains';

// Custom high-fidelity SVGs for specific technologies to match the original style
const AiIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" fill="currentColor" stroke="none">AI</text>
  </svg>
);

const PandasIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* Left Column */}
    <rect x="4" y="8" width="3.5" height="4.5" rx="0.5" />
    <rect x="4" y="14" width="3.5" height="6.5" rx="0.5" />
    {/* Middle Column */}
    <rect x="10.25" y="4" width="3.5" height="5.5" rx="0.5" />
    <rect x="10.25" y="11" width="3.5" height="3.5" rx="0.5" fill="#EC4899" />
    <rect x="10.25" y="16" width="3.5" height="4" rx="0.5" />
    {/* Right Column */}
    <rect x="16.5" y="6" width="3.5" height="5" rx="0.5" />
    <rect x="16.5" y="12.5" width="3.5" height="7.5" rx="0.5" />
  </svg>
);

const HackingIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Monitor Frame */}
    <rect x="2" y="3" width="20" height="13" rx="2" />
    {/* Monitor Stand */}
    <line x1="12" y1="16" x2="12" y2="21" />
    <line x1="8" y1="21" x2="16" y2="21" />
    {/* Detective / Hacker Hat & Glasses */}
    <path d="M7 12c0-1.8 1-3 5-3s5 1.2 5 3" />
    <line x1="5.5" y1="10.5" x2="18.5" y2="10.5" strokeWidth="2.2" />
    <circle cx="9.5" cy="12.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="12.5" r="1.2" fill="currentColor" stroke="none" />
    <line x1="10.7" y1="12.5" x2="13.3" y2="12.5" />
  </svg>
);

const BlockchainIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {/* Pixelated Capital B */}
    <rect x="4" y="3" width="3" height="18" />
    <rect x="7" y="3" width="8" height="3" />
    <rect x="15" y="6" width="3" height="4" />
    <rect x="7" y="10" width="8" height="3" />
    <rect x="15" y="13" width="3" height="5" />
    <rect x="7" y="18" width="9" height="3" />
    {/* Glitch nodes around it */}
    <rect x="19" y="4" width="2" height="2" />
    <rect x="1" y="8" width="1.5" height="1.5" />
    <rect x="20" y="10" width="2" height="2" />
    <rect x="1" y="15" width="2" height="2" />
    <rect x="19" y="16" width="1.5" height="1.5" />
    <rect x="11" y="14" width="2" height="2" />
    <rect x="12" y="7" width="2" height="2" />
  </svg>
);

export default function OurDomains() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const renderIcon = (tech, className) => {
    if (tech.icon === 'ai-file') return <AiIcon className={className} />;
    if (tech.icon === 'pandas') return <PandasIcon className={className} />;
    if (tech.icon === 'hacking') return <HackingIcon className={className} />;
    if (tech.icon === 'blockchain') return <BlockchainIcon className={className} />;
    
    const IconComponent = tech.icon;
    return <IconComponent className={className} />;
  };

  return (
    <section id="domains" className="relative w-full py-10 md:py-14 px-4 md:px-8 xl:px-12 bg-transparent overflow-hidden select-none">
      <div className="relative max-w-[90rem] mx-auto z-10">
        
        <div className="text-center mb-8 md:mb-10">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-xl text-[clamp(2.15rem,9vw,3rem)] md:text-[clamp(2.75rem,4.5vw,4.25rem)] font-extrabold uppercase text-white tracking-[-0.02em] leading-[0.95] mb-3"
          >
            Our Domains
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-space text-sm sm:text-base md:text-lg text-white/65 max-w-4xl mx-auto leading-relaxed px-1"
          >
            Explore the core technology pillars driving developer communities, shaping engineering talents, and engineering software products.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 xl:gap-6 w-full max-w-full 2xl:max-w-[104rem] mx-auto"
        >
          {domainsData.map((tech) => {
            return (
              <motion.div
                key={tech.id}
                variants={cardVariants}
                style={{ '--hover-color': tech.color }}
                className="group relative aspect-square flex items-center justify-center rounded-2xl bg-white/[0.06] hover:bg-white/[0.10] backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-premium-hover transition-all duration-500 overflow-hidden cursor-pointer"
                whileHover={{ 
                  y: -6, 
                  scale: 1.03,
                  boxShadow: `0 15px 30px ${tech.color}15`,
                  borderColor: `${tech.color}40`
                }}
                transition={{ type: "spring", stiffness: 450, damping: 28 }}
                title={tech.name}
              >
                <div className="relative z-10 flex items-center justify-center w-full h-full p-3">
                  {renderIcon(tech, "w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 xl:w-28 xl:h-28 text-white/80 group-hover:text-[var(--hover-color)] transition-colors duration-500")}
                </div>
                {/* Thin overlay border highlighting the brand color on hover */}
                <div 
                  className="absolute inset-0 border border-transparent group-hover:border-[var(--hover-color)]/20 rounded-2xl pointer-events-none transition-colors duration-500" 
                />
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
