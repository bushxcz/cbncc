import React, { useEffect } from 'react';
import { teams } from '../../data/teamData';

const TeamDirectory = ({ onMemberClick }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.team-section-reveal').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const getPhotoSrc = (member) => member.photo || member.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 space-y-24" id="teams-container">
      {teams.map((team, index) => (
        <section key={index} className="team-section-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-px bg-white/20 w-full hidden md:block"></div>
            <h2 className="font-display-xl text-2xl md:text-4xl text-white shrink-0 uppercase tracking-wider text-center font-extrabold">
              {team.name}
            </h2>
            <div className="h-px bg-white/20 w-full hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.members.map((m, mIdx) => (
              <div 
                key={mIdx} 
                className="team-card relative group aspect-[3/4] overflow-hidden bg-[#161b22] border border-white/10 rounded-xl cursor-pointer transition-all duration-500 hover:border-white/40 shadow-xl"
                onClick={() => {
                  if (onMemberClick) {
                    onMemberClick({
                      ...m,
                      image: getPhotoSrc(m)
                    });
                  }
                }}
              >
                <img 
                  src={getPhotoSrc(m)} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                
                {/* Default Label */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-xs group-hover:opacity-0 transition-opacity duration-300">
                  <h4 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide">{m.name}</h4>
                  <p className="text-white/60 text-xs font-mono uppercase tracking-widest mt-1">{m.role}</p>
                </div>

                {/* Hover Overlay */}
                <div className="overlay absolute inset-0 bg-[#161b22]/95 backdrop-blur-md p-6 md:p-8 flex flex-col opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out z-20 overflow-y-auto border border-white/20">
                  <div className="grow">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block font-bold">
                      {m.degree} | {m.batch}
                    </span>
                    <h4 className="text-white font-display-xl font-black text-2xl mb-3 uppercase leading-tight tracking-tight">
                      {m.name}
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed font-body">
                      {m.bio}
                    </p>
                  </div>
                  <div className="border-t border-white/20 pt-4 mt-4 shrink-0">
                    <p className="italic text-white/90 text-sm font-medium leading-snug">
                      "{m.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default TeamDirectory;
