import { motion } from "framer-motion";
import { Users, Building2, Globe2, Sparkles, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SectionLabel } from "../UI";
import { staggerContainer, staggerItem } from "../../animations/variants";
import { alumniData, alumniStats } from "../../data/alumniData";

// Icons mapper for stats
const statIcons = {
  alumni: Users,
  companies: Building2,
  countries: Globe2,
  stories: Sparkles,
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const iconBtnClass =
  "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md text-white/55 transition-all duration-300 ease-out hover:scale-110 hover:border-indigo-400/50 hover:bg-indigo-400/10 hover:text-indigo-300 hover:shadow-[0_0_16px_rgba(99,102,241,0.35)]";

export default function AlumniSection() {
  return (
    <section
      id="alumni-section"
      className="relative w-full py-20 md:py-32 px-4 md:px-margin-desktop xl:px-12 bg-transparent overflow-hidden"
    >
      {/* Background grid/dot overlay */}
      <div className="absolute inset-0 premium-bg-grid opacity-[0.22] pointer-events-none z-0" />

      {/* Scoped glow orbs */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 filter blur-[100px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -25, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 filter blur-[110px] pointer-events-none z-0"
      />

      <div className="relative max-w-[90rem] mx-auto z-10 flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl">
          <SectionLabel>CBNCC Alumni Network</SectionLabel>
          <h2 className="relative mb-8 md:mb-12 leading-none">
            {/* Line 1 — clean bold sans-serif */}
            <span
              className="block font-extrabold uppercase text-white"
              style={{
                fontFamily: "'Sora', 'Montserrat', sans-serif",
                fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Where They Are
            </span>

            {/* Line 2 — elegant serif italic, softly tinted */}
            <span
              className="block text-indigo-200/85"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(3rem, 9vw, 7rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
              }}
            >
              Now.
            </span>

            {/* Centered hairline accent */}
            <span className="block mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
          </h2>
          <p className="font-body-lg text-base md:text-lg text-white/65 leading-relaxed">
            Our alumni are building the future across global tech companies, innovative startups, and top-tier research institutions. Discover their achievements and testimonials.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mb-20">
          {alumniStats.map((stat) => {
            const Icon = statIcons[stat.id] || Users;
            return (
              <div
                key={stat.id}
                className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-6 text-center overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none" />
                <Icon size={20} className="text-indigo-300/80 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                <p className="font-display-xl text-2xl md:text-3xl font-extrabold text-white relative z-10">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="font-label-mono text-[9px] uppercase tracking-[0.18em] text-white/50 relative z-10">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Alumni Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center w-full"
        >
          {alumniData.map((alum) => (
            <motion.div
              key={alum.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full max-w-[340px] flex flex-col items-center text-center rounded-[24px] border border-white/10 bg-white/[0.05] backdrop-blur-xl overflow-hidden p-6 transition-[border-color,box-shadow,background-color] duration-300 ease-out shadow-[0_12px_30px_rgba(0,0,0,0.28)] hover:border-indigo-400/30 hover:bg-white/[0.07] hover:shadow-[0_18px_44px_rgba(99,102,241,0.18)]"
            >
              {/* Card Hover Ambient Orb */}
              <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-[radial-gradient(circle_at_50%_-10%,rgba(99,102,241,0.16),transparent_65%)]" />

              {/* Avatar Photo / Initials Fallback */}
              <div className="relative z-10 w-28 h-28 rounded-full overflow-hidden border border-white/15 bg-white/[0.05] flex items-center justify-center mb-4 transition-transform duration-300 ease-out group-hover:scale-105">
                {alum.photo ? (
                  <img
                    src={alum.photo}
                    alt={`${alum.name}, ${alum.role} at ${alum.company}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display-xl text-xl font-extrabold text-white/70">
                    {getInitials(alum.name)}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="relative z-10 font-display-xl text-[19px] font-extrabold text-white tracking-tight leading-tight">
                {alum.name}
              </h3>

              {/* Batch */}
              <p className="relative z-10 font-label-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mt-1.5">
                Batch of {alum.batch}
              </p>

              {/* Divider */}
              <div className="relative z-10 w-10 h-px bg-white/10 my-4" />

              {/* Role + Company */}
              <p className="relative z-10 font-body-md text-[15px] font-semibold text-white/90">
                {alum.role} @ {alum.company}
              </p>

              {/* Testimonial Quote */}
              <p className="relative z-10 font-body-md text-[13px] italic text-white/60 mt-3.5 leading-relaxed line-clamp-2 max-w-[280px]">
                "{alum.quote}"
              </p>

              {/* Social Links */}
              <div className="relative z-10 flex items-center gap-3 mt-6">
                <a
                  href={alum.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${alum.name}'s LinkedIn Profile`}
                  className={iconBtnClass}
                >
                  <FaLinkedin size={16} />
                </a>

                {alum.github && (
                  <a
                    href={alum.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${alum.name}'s GitHub Profile`}
                    className={iconBtnClass}
                  >
                    <FaGithub size={16} />
                  </a>
                )}

                {alum.portfolio && (
                  <a
                    href={alum.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${alum.name}'s Portfolio Website`}
                    className={iconBtnClass}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing CTA */}
        <div className="mt-20 md:mt-28 text-center border-t border-white/10 pt-10 md:pt-16 max-w-4xl w-full">
          <p className="font-body-md text-white/50 text-sm md:text-base mb-5">
            Are you a CBNCC alumnus? We'd love to stay connected and showcase your journey.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 font-label-mono text-xs md:text-sm uppercase tracking-widest text-white hover:text-indigo-400 group transition-colors duration-300 hover-underline-slide"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-sm md:text-base transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
