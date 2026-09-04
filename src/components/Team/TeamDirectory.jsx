import React, { useEffect, useRef } from 'react';
import { teams } from '../../data/teamData';

const TeamDirectory = ({ onMemberClick }) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('td-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    sectionRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getPhotoSrc = (member) => member.photo || member.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";

  const openMember = (member) => {
    if (onMemberClick) {
      onMemberClick({ ...member, image: getPhotoSrc(member) });
    }
  };

  return (
    <>
      {/* Scoped styles for the new card-grid team directory */}
      <style>{`
        .td-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .td-section.td-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Section badge */
        .td-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }
        .td-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
          opacity: 0.5;
        }

        /* Section heading */
        .td-heading {
          font-family: 'Sora', sans-serif !important;
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 800;
          color: rgba(255,255,255,0.95);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-align: center;
        }

        /* Grid — single row with equal columns, auto-sized to member count */
        .td-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
          justify-items: center;
        }
        @media (min-width: 640px) {
          .td-grid {
            gap: 28px;
          }
        }
        @media (min-width: 768px) {
          .td-grid {
            gap: 32px;
          }
          .td-grid[data-count="2"] { grid-template-columns: repeat(2, minmax(0, 250px)); justify-content: center; }
          .td-grid[data-count="3"] { grid-template-columns: repeat(3, minmax(0, 250px)); justify-content: center; }
          .td-grid[data-count="4"] { grid-template-columns: repeat(4, minmax(0, 250px)); justify-content: center; }
          .td-grid[data-count="5"] { grid-template-columns: repeat(5, minmax(0, 250px)); justify-content: center; }
          .td-grid[data-count="6"] { grid-template-columns: repeat(6, minmax(0, 220px)); justify-content: center; }
        }

        /* Individual card */
        .td-card {
          position: relative;
          cursor: pointer;
          outline: none;
        }
        .td-card:focus-visible {
          outline: 2px solid rgba(255,255,255,0.4);
          outline-offset: 4px;
          border-radius: 4px;
        }

        /* Photo frame — the decorative border from the reference image */
        .td-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: #161b22;
        }

        /* Outer decorative border ring with clipped corner */
        .td-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid rgba(255,255,255,0.12);
          z-index: 2;
          pointer-events: none;
          transition: border-color 0.4s ease;
        }
        .td-card:hover .td-frame::before {
          border-color: rgba(255,255,255,0.35);
        }

        /* Corner accent — small decorative square at top-left */
        .td-frame::after {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          width: 20px;
          height: 20px;
          border-bottom: 2px solid rgba(255,255,255,0.25);
          border-right: 2px solid rgba(255,255,255,0.25);
          z-index: 3;
          pointer-events: none;
          transition: border-color 0.4s ease;
        }
        .td-card:hover .td-frame::after {
          border-color: rgba(255,255,255,0.5);
        }

        /* Photo image */
        .td-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(15%);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }
        .td-card:hover .td-photo {
          transform: scale(1.06);
          filter: grayscale(0%);
        }

        /* Photo gradient overlay */
        .td-photo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13,17,23,0.6) 0%, transparent 40%);
          z-index: 1;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .td-card:hover .td-photo-gradient {
          opacity: 0.4;
        }

        /* Hover detail overlay */
        .td-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          background: linear-gradient(
            to top,
            rgba(13,17,23,0.97) 0%,
            rgba(13,17,23,0.85) 40%,
            rgba(13,17,23,0.4) 70%,
            transparent 100%
          );
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .td-card:hover .td-overlay {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .td-overlay-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.7);
          margin-bottom: 6px;
        }
        .td-overlay-name {
          font-family: 'Sora', sans-serif !important;
          font-size: 18px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.2;
          margin-bottom: 8px;
        }
        .td-overlay-bio {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .td-overlay-quote {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.85);
          font-style: italic;
          padding-top: 8px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        .td-overlay-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.5);
          margin-top: 10px;
          transition: color 0.3s ease;
        }
        .td-card:hover .td-overlay-cta {
          color: rgba(255,255,255,0.9);
        }

        /* Name & role below the card */
        .td-info {
          padding: 14px 4px 0;
        }
        .td-name {
          font-family: 'Sora', sans-serif !important;
          font-size: 15px;
          font-weight: 700;
          color: rgba(255,255,255,0.95);
          letter-spacing: 0.01em;
          line-height: 1.3;
          transition: color 0.3s ease;
        }
        .td-card:hover .td-name {
          color: #ffffff;
        }
        .td-role {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          margin-top: 3px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Divider line between sections */
        .td-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
          margin: 0 auto;
          width: 80%;
        }

        /* Stagger children reveal */
        .td-visible .td-card {
          animation: tdCardReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .td-visible .td-card:nth-child(1) { animation-delay: 0.05s; }
        .td-visible .td-card:nth-child(2) { animation-delay: 0.1s; }
        .td-visible .td-card:nth-child(3) { animation-delay: 0.15s; }
        .td-visible .td-card:nth-child(4) { animation-delay: 0.2s; }
        .td-visible .td-card:nth-child(5) { animation-delay: 0.25s; }
        .td-visible .td-card:nth-child(6) { animation-delay: 0.3s; }
        .td-visible .td-card:nth-child(7) { animation-delay: 0.35s; }
        .td-visible .td-card:nth-child(8) { animation-delay: 0.4s; }

        @keyframes tdCardReveal {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 space-y-28" id="teams-container">
        {teams.map((team, index) => (
          <section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="td-section"
          >
            {/* Section Divider (not on first) */}
            {index > 0 && <div className="td-divider mb-16" />}

            {/* Section Header */}
            <div className="flex flex-col items-center gap-4 mb-14">
              <div className="td-badge">
                <span className="td-badge-dot" />
                {team.name}
              </div>
              <h2 className="td-heading">
                {team.name}
              </h2>
              <div className="h-px bg-white/10 w-24 mt-1" />
            </div>

            {/* Card Grid */}
            <div className="td-grid" data-count={team.members.length}>
              {team.members.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="td-card"
                  onClick={() => openMember(m)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${m.name}'s profile`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openMember(m);
                    }
                  }}
                >
                  {/* Photo Frame */}
                  <div className="td-frame">
                    <img
                      src={getPhotoSrc(m)}
                      className="td-photo"
                      alt={m.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                    <div className="td-photo-gradient" />

                    {/* Hover Overlay */}
                    <div className="td-overlay">
                      <span className="td-overlay-tag">
                        {m.degree} · {m.batch}
                      </span>
                      <h4 className="td-overlay-name">{m.name}</h4>
                      <p className="td-overlay-bio">{m.bio}</p>
                      <p className="td-overlay-quote">"{m.quote}"</p>
                      <span className="td-overlay-cta">
                        View profile
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                      </span>
                    </div>
                  </div>

                  {/* Name & Role Below */}
                  <div className="td-info">
                    <h4 className="td-name">{m.name}</h4>
                    <p className="td-role">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default TeamDirectory;
