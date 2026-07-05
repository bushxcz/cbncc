import React, { useEffect } from 'react';
import { teams } from '../../data/teamData';

const TeamDirectory = ({ onMemberClick }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    const reveals = document.querySelectorAll('.scroll-reveal');
    const handleScroll = () => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getPhotoSrc = (member) => member.photo || member.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap space-y-section-gap" id="teams-container">
      {teams.map((team, index) => (
        <section key={index} className="scroll-reveal">
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-0.5 bg-white w-full hidden md:block opacity-30"></div>
            <h2 className="font-headline-lg text-headline-lg text-white shrink-0 uppercase tracking-tighter text-center">{team.name}</h2>
            <div className="h-0.5 bg-white w-full hidden md:block opacity-30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.members.map((m, mIdx) => (
              <div 
                key={mIdx} 
                className="team-card relative group aspect-3/4 overflow-hidden bg-black ghost-border cursor-pointer transition-all duration-500"
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
                />
                
                <div className="absolute bottom-0 left-0 w-full p-8 bg-black/80 backdrop-blur-sm group-hover:translate-y-full transition-transform duration-500">
                  <h4 className="font-headline-lg-mobile text-white mb-1 uppercase font-bold text-xl">{m.name}</h4>
                  <p className="font-label-caps text-[10px] text-white/50 uppercase tracking-widest">{m.role}</p>
                </div>

                <div className="overlay absolute inset-0 bg-white p-6 md:p-8 flex flex-col opacity-0 translate-y-8 transition-all duration-500 ease-out z-20 overflow-y-auto overflow-x-hidden">
                  <div className="grow">
                    <span className="font-label-caps text-[10px] text-black/40 uppercase tracking-[0.2em] mb-4 block font-bold">{m.degree} | {m.batch}</span>
                    <h4 className="font-headline-lg text-[24px] lg:text-[28px] text-black mb-4 leading-none uppercase font-black tracking-tight">{m.name}</h4>
                    <p className="font-body-md text-black/80 text-sm md:text-base leading-relaxed">{m.bio}</p>
                  </div>
                  <div className="border-t-2 border-black pt-4 mt-6 shrink-0">
                    <p className="font-body-md italic text-black text-lg font-medium leading-snug">"{m.quote}"</p>
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
