import { useState } from "react";
import {
  Sparkles,
  Braces,
  CalendarClock,
  UsersRound,
  X,
  ArrowRight
} from "lucide-react";
import ShinyText from "./ShinyText";

const benefits = [
  {
    number: "01",
    title: "Learn by Building",
    tagline: "BUILD THE FUTURE",
    description: "Create real-world projects, experiment with emerging technologies, and gain practical experience that extends beyond traditional learning.",
    longDescription: "Dive deep into hands-on development. Through our project-focused approach, you'll work with modern tech stacks, learn software design patterns, and contribute to open-source initiatives. You'll build production-grade applications that solve real-world problems and add significant value to your developer portfolio.",
    logoUrl: "/logo_rocket.png",
    accent: "silver",
    activities: [
      "Collaborative project builds",
      "Open-source contributions",
      "Tech stack exploration sessions",
      "Code & architecture reviews"
    ]
  },
  {
    number: "02",
    title: "Grow Together",
    tagline: "COMMUNITY FIRST",
    description: "Join a vibrant community of developers, designers, innovators, and technology enthusiasts who support and inspire each other.",
    longDescription: "Innovation doesn't happen in isolation. Connect with peers who share your drive. Our community fosters cross-functional collaboration between developers, designers, and product enthusiasts. Participate in peer-led study groups, code reviews, and social meetups to expand your network and grow collectively.",
    logoUrl: "/logo_handshake.png",
    accent: "silver",
    activities: [
      "Peer-to-peer mentorship",
      "Weekly community syncs",
      "Design & UI review boards",
      "Study cohorts & hack teams"
    ]
  },
  {
    number: "03",
    title: "Push Your Limits",
    tagline: "NEVER STOP GROWING",
    description: "Participate in hackathons, workshops, coding challenges, and technical events that accelerate your growth and problem-solving abilities.",
    longDescription: "Step out of your comfort zone and tackle hard problems. We host and participate in intensive hackathons, high-stakes coding challenges, and algorithmic workshops designed to sharpen your cognitive abilities. Test your boundaries, fail fast, and build resilience under pressure.",
    logoUrl: "/logo_bolt.png",
    accent: "silver",
    activities: [
      "Intra-community hackathons",
      "Algorithmic sprints & puzzles",
      "Expert-led tech workshops",
      "Live bug bounty contests"
    ]
  },
  {
    number: "04",
    title: "Create Impact",
    tagline: "MAKE A DIFFERENCE",
    description: "Lead initiatives, organize events, contribute to meaningful projects, and leave a lasting impact on the community.",
    longDescription: "Empower others by taking charge. As a member, you'll have the opportunity to lead initiatives, coordinate workshops, design event agendas, and mentor junior developers. Your contributions will directly shape the learning curve of hundreds of students and elevate the entire ecosystem.",
    logoUrl: "/logo_star.png",
    accent: "silver",
    activities: [
      "Community leadership roles",
      "Tech event organization",
      "Student mentorship programs",
      "Outreach & tech evangelism"
    ]
  },
  {
    number: "05",
    title: "Industry Connect",
    tagline: "BRIDGE THE GAP",
    description: "Engage with professionals, mentors, alumni, and industry leaders while gaining exposure to the latest technology trends.",
    longDescription: "Bridge the gap between academia and industry. We connect you with seasoned engineering professionals, tech leaders, alumni, and recruiters. Get insights into modern hiring processes, system design trends, and work cultures through fireside chats, resume teardowns, and mock interviews.",
    logoUrl: "/logo_globe.png",
    accent: "silver",
    activities: [
      "Alumni networking circles",
      "Fireside chats with tech experts",
      "Mock technical interviews",
      "Resume & portfolio reviews"
    ]
  },
  {
    number: "06",
    title: "Showcase Excellence",
    tagline: "STAND OUT",
    description: "Build a strong portfolio, demonstrate your skills through projects and competitions, and stand out as a future-ready innovator.",
    longDescription: "Get recognized for your skills and hard work. We provide platforms to demo your products, present your projects at showcases, and pitch your ideas to judges and mentors. Build a public developer persona and showcase your achievements to potential employers.",
    logoUrl: "/logo_trophy.png",
    accent: "silver",
    activities: [
      "Project showcase nights",
      "Developer portfolio audits",
      "Pitch deck & presentation practice",
      "Technical writing workshops"
    ]
  }
];

export function WhyJoinCBNCC() {
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const openModal = (benefit) => {
    setSelectedBenefit(benefit);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedBenefit(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="why-join" aria-labelledby="why-join-title">
      {/* Background Ambient Glow Orbs */}
      <div className="why-join__glow-orb why-join__glow-orb--1" aria-hidden="true" />
      <div className="why-join__glow-orb why-join__glow-orb--2" aria-hidden="true" />
      <div className="why-join__glow-orb why-join__glow-orb--3" aria-hidden="true" />

      {/* Hero Header */}
      <div className="why-join__hero">
        <div className="why-join__hero-bg" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" strokeWidth="1" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" strokeWidth="1" />
          </svg>
        </div>

        <div className="why-join__hero-content">
          <div className="why-join__eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            <ShinyText
              text="Student tech community"
              speed={2}
              className="why-join__eyebrow-text"
              color="#ffffff"
              shineColor="#a1a1aa"
            />
          </div>
          <h1 id="why-join-title" className="why-join__hero-title">
            WHY JOIN <br /> CBNCC?
          </h1>
          <p className="why-join__hero-description why-join__hero-description--desktop">
            At CBNCC, learning goes beyond classrooms. Build real projects,
            collaborate with ambitious innovators, and become part of a community
            shaping the future of technology.
          </p>
          <p className="why-join__hero-description why-join__hero-description--mobile">
            Beyond Classrooms: Build. Innovate. Connect.
          </p>

          <div className="why-join__hero-stats-row">
            <div className="why-join__stat">
              <span className="why-join__stat-top">
                <Braces size={16} aria-hidden="true" />
                <strong>25+</strong>
              </span>
              <span className="why-join__stat-label">live builds</span>
            </div>
            <div className="why-join__stat">
              <span className="why-join__stat-top">
                <CalendarClock size={16} aria-hidden="true" />
                <strong>12+</strong>
              </span>
              <span className="why-join__stat-label">tech events</span>
            </div>
            <div className="why-join__stat">
              <span className="why-join__stat-top">
                <UsersRound size={16} aria-hidden="true" />
                <strong>500+</strong>
              </span>
              <span className="why-join__stat-label">community reach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Title */}
      <div className="why-join__section-header">
        <h2 className="why-join__benefits-title">OUR BENEFITS</h2>
        <div className="why-join__title-underline" />
      </div>

      {/* Glassmorphic Benefits Grid */}
      <div className="why-join__benefits-grid-container">
        <div className="why-join__benefits-grid" role="list" aria-label="CBNCC member benefits">
          {benefits.map((benefit) => {
            const { number, title, description, logoUrl, accent } = benefit;
            return (
              <div
                key={number}
                className="benefit-glass-card"
                data-accent={accent}
                role="listitem"
                onClick={() => openModal(benefit)}
              >
                {/* Visual Glass Refraction Sweeper */}
                <div className="benefit-glass-card__sweep" />

                {/* Big Card Number */}
                <div className="benefit-glass-card__number">{number}</div>

                {/* Logo Image Wrapper */}
                <div className="benefit-glass-card__logo-container">
                  <img 
                    src={logoUrl} 
                    alt={`${title} Logo`} 
                    className="benefit-glass-card__logo-img" 
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="benefit-glass-card__content">
                  <h3 className="benefit-glass-card__title">{title}</h3>
                  
                  {/* Under Card Title info */}
                  <div className="benefit-glass-card__footer">
                    <span className="benefit-glass-card__footer-tag">{title}</span>
                  </div>

                  {/* Hidden/Desktop-only details preview */}
                  <p className="benefit-glass-card__description">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Popup */}
      {selectedBenefit && (
        <div className="benefit-modal" role="dialog" aria-modal="true" onClick={closeModal}>
          <div 
            className="benefit-modal__container" 
            data-accent="silver"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glow in Modal */}
            <div className="benefit-modal__bg-glow" />

            {/* Modal Header */}
            <div className="benefit-modal__header">
              <div className="benefit-modal__logo-container">
                <img 
                  src={selectedBenefit.logoUrl} 
                  alt={`${selectedBenefit.title} Logo`} 
                  className="benefit-modal__logo-img" 
                />
              </div>
              <span className="benefit-modal__number">{selectedBenefit.number}</span>
              <button 
                className="benefit-modal__close-btn" 
                onClick={closeModal} 
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="benefit-modal__content-wrapper">
              <div className="benefit-modal__badge-row">
                <span className="benefit-modal__tagline">{selectedBenefit.tagline}</span>
              </div>

              <h3 className="benefit-modal__title">{selectedBenefit.title}</h3>
              <p className="benefit-modal__description">{selectedBenefit.longDescription}</p>

              {/* Key Activities Section */}
              {selectedBenefit.activities && (
                <div className="benefit-modal__activities">
                  <h4 className="benefit-modal__activities-title">KEY INITIATIVES</h4>
                  <ul className="benefit-modal__activities-list">
                    {selectedBenefit.activities.map((act, index) => (
                      <li key={index} className="benefit-modal__activity-item">
                        <ArrowRight size={14} className="benefit-modal__activity-arrow" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
