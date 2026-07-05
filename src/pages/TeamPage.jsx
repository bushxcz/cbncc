import React, { useEffect, useState } from 'react';
import { Footer } from '../components/UI/Footer';
import CircularGallery from '../components/Team/CircularGallery';
import TeamDirectory from '../components/Team/TeamDirectory';
import MemberModal from '../components/Team/MemberModal';
import { coreCouncil } from '../data/coreCouncil';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroH1 = document.querySelector('.team-hero h1');
      if (heroH1) {
        heroH1.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-[60] bg-black/90 backdrop-blur-md border-b border-white/20">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 w-full max-w-container-max mx-auto">
          <div className="font-headline-lg-mobile md:font-headline-lg text-white tracking-tighter uppercase font-black">CBNCC</div>
          <div className="hidden md:flex gap-10 items-center">
            <a className="text-white/60 hover:text-white transition-colors font-label-caps text-label-caps uppercase" href="#">Projects</a>
            <a className="text-white/60 hover:text-white transition-colors font-label-caps text-label-caps uppercase" href="#">Events</a>
            <a className="text-white font-bold border-b-2 border-white pb-1 font-label-caps text-label-caps uppercase" href="#">Team</a>
            <a className="text-white/60 hover:text-white transition-colors font-label-caps text-label-caps uppercase" href="#">About</a>
            <button className="bg-white text-black px-8 py-3 font-label-caps text-label-caps uppercase font-bold hover:bg-white/90 transition-all cursor-pointer">Join Us</button>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-white">menu</span>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="team-hero min-h-[90vh] flex flex-col items-center justify-center px-margin-mobile text-center overflow-hidden relative">
          <div className="z-10 flex flex-col items-center justify-center mt-20">
            <p className="font-label-caps text-label-caps text-white/50 uppercase tracking-[0.5em] mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">Backbone of This Club</p>
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[120px] font-black text-white mb-12 max-w-[90vw] leading-none opacity-0 animate-[fadeInUp_1.2s_ease-out_forwards] transition-transform duration-75 font-['Sora'] tracking-tighter">MEET OUR TEAM</h1>
          </div>
          
          <div className="absolute bottom-12 animate-bounce opacity-0 animate-[fadeIn_2s_ease-out_forwards]">
            <span className="material-symbols-outlined text-white text-4xl">south</span>
          </div>
        </section>

        {/* Circular Gallery Section */}
        <section className="min-h-screen flex flex-col items-center justify-center w-full overflow-hidden py-20">
          <div className="w-full h-[700px] relative opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
            <CircularGallery
              items={coreCouncil.map(m => ({ image: m.image, text: '', subText: '', id: m.id }))}
              bend={2.5}
              textColor="#ffffff"
              borderRadius={0.04}
              scrollEase={0.03}
              scrollSpeed={1.5}
              font="700 48px 'Sora', sans-serif"
              fontUrl="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap"
              onItemClick={(id) => setSelectedMember(coreCouncil.find(m => m.id === id))}
            />
          </div>
        </section>

        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />

        <TeamDirectory onMemberClick={(member) => setSelectedMember(member)} />
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
