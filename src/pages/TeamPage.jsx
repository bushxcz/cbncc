import React, { useState, useEffect } from 'react';
import TeamHero from '../components/Team/TeamHero';
import CoreTeamSection from '../components/Team/CoreTeamSection';
import TeamDirectory from '../components/Team/TeamDirectory';
import MemberModal from '../components/Team/MemberModal';
import CtaFooterSection from '../components/CtaFooterSection';

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = '';
    });
  }, []);

  return (
    <div className="w-full bg-[#0d1117] text-white min-h-screen">
      <main>
        {/* Full-screen Hero Section matching Events page */}
        <TeamHero />

        {/* Core Team Section with Hover Slider */}
        <CoreTeamSection />

        {/* Member Details Modal */}
        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />

        {/* Team Directory Sections */}
        <TeamDirectory onMemberClick={(member) => setSelectedMember(member)} />
      </main>

      {/* Footer Section */}
      <CtaFooterSection />
    </div>
  );
}
