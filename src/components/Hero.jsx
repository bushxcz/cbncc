import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full bg-transparent select-none">

      {/* Mobile & Tablet Layout (< md breakpoint) */}
      <div className="flex md:hidden flex-col items-center w-full min-h-screen px-6 pt-14 pb-10 select-none relative z-20 justify-center">

        {/* Robot Image & Glowing Halo */}
        <div className="relative w-[70vw] max-w-[310px] flex items-center justify-center mb-1.5 mt-2 animate-fade-up">
          {/* 1. Large Soft Outer Glow (Radial White Glow) */}
          <div className="absolute w-[118%] aspect-square rounded-full bg-white/10 blur-2xl opacity-40 z-0 pointer-events-none" />

          {/* 2. Soft Inner Glow Circle */}
          <div className="absolute w-[100%] aspect-square rounded-full bg-white/[0.04] blur-md z-0 pointer-events-none" />

          {/* Robot Image */}
          <img
            alt="CBNCC Chrome Robot Profile"
            className="w-full h-auto object-contain z-10 select-none relative drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
            src="/robo.png"
          />
        </div>

        {/* Title Heading */}
        <h1
          className="text-[clamp(3.8rem,15vw,5.5rem)] text-white uppercase text-center leading-none tracking-[-0.065em] mt-[5px] relative z-20 animate-fade-up delay-100"
          style={{ fontFamily: "'Sora', 'Montserrat', sans-serif" }}
        >
          CBNCC
        </h1>

        {/* Separator: Line with center dot */}
        <div className="flex items-center gap-4 w-28 my-3 opacity-60 animate-fade-up delay-200">
          <div className="h-[1px] flex-1 bg-white/25"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
          <div className="h-[1px] flex-1 bg-white/25"></div>
        </div>

        {/* Description */}
        <p
          className="text-center text-[13px] sm:text-[14px] leading-relaxed text-white/80 max-w-[85%] sm:max-w-md mx-auto mb-6 font-body-md animate-fade-up delay-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Code Busters & Coding Club is the official Tech Club of <strong className="font-bold text-white">Netaji Subhas University</strong> which brings together coders, innovators, and problem-solvers.
        </p>

        {/* CTA Buttons */}
        <div className="w-full max-w-[320px] flex flex-col gap-3 mb-7 animate-fade-up delay-400">
          <button
            className="flex items-center justify-between w-full px-6 py-4 bg-white text-[#0d1117] rounded-2xl font-body-md font-semibold text-[14px] transition-all duration-300 hover:opacity-90 active:scale-98 shadow-md cursor-pointer border border-transparent"
          >
            <span>Join CBNCC</span>
            <span className="material-symbols-outlined text-base">east</span>
          </button>

          <button
            className="flex items-center justify-between w-full px-6 py-4 bg-white/5 border border-white/20 text-white rounded-2xl font-body-md font-semibold text-[14px] transition-all duration-300 hover:bg-white/10 active:scale-98 shadow-sm cursor-pointer"
          >
            <span>Learn More</span>
            <span className="material-symbols-outlined text-base">east</span>
          </button>
        </div>

        {/* Navigation Shortcuts Bar (Floating Glassmorphism pill) */}
        <div className="glass-panel w-full max-w-[360px] p-2.5 rounded-2xl flex justify-between items-center z-30 shadow-[0_4px_30px_rgba(0,0,0,0.2)] border border-white/10 bg-[#0d1117]/70 backdrop-blur-md mb-6 animate-fade-up delay-500">
          <Link to="/#about" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-white/70 hover:text-white transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">About Us</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/10"></div>
          <Link to="/#team" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-white/70 hover:text-white transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">groups</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">Team</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/10"></div>
          <Link to="/#events" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-white/70 hover:text-white transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">Events</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/10"></div>
          <Link to="/alumni" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-white/70 hover:text-white transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">school</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">Alumni</span>
          </Link>
          <div className="w-[1px] h-6 bg-white/10"></div>
          <Link to="/#contact" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-white/70 hover:text-white transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">Contact</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-0.5 text-[8px] tracking-[0.25em] font-bold text-white/50 uppercase select-none animate-bounce mt-auto pb-4">
          <span>Scroll to explore</span>
          <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
        </div>

        {/* Mobile Inline Footer (Copyright) */}
        <div className="text-[8px] text-white/30 tracking-widest font-semibold uppercase text-center mt-2">
          © {new Date().getFullYear()} CBNCC • AI • AUTOMATION • FUTURE
        </div>
      </div>

      {/* Desktop Layout (>= md breakpoint) */}
      <div className="hidden md:flex relative min-h-screen w-full items-center justify-center select-none overflow-hidden bg-transparent">
        <div className="relative flex items-center justify-center w-full h-full max-w-5xl px-4">

          <h1
            style={{
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "'Sora', 'Montserrat', sans-serif",
            }}
            className="relative z-10 text-[27vw] md:text-[25vw] lg:text-[21vw] font-medium font-black tracking-tighter uppercase text-center leading-none select-none -translate-y-10"
          >
            CBNCC
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <img
              alt="CBNCC Chrome Robot Profile"
              className="
                h-[60vh]
                sm:h-[60vh]
                md:h-[75vh]
                lg:h-[100vh]
                w-auto
                object-contain
                select-none
                translate-y-10 sm:translate-y-12 md:translate-y-20
                drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)]
              "
              src="/robo.png"
            />
          </div>
        </div>

        <div className="absolute left-6 md:left-12 top-[35%] -translate-x-1/2 -rotate-90 origin-center z-30 select-none hidden sm:block">
          <p
            className="text-[10px] tracking-[0.25em] font-semibold uppercase whitespace-nowrap"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255, 255, 255, 0.75)"
            }}
          >
            BUILD &gt; BREAK &gt; LEARN &gt; REPEAT
          </p>
        </div>

        <div className="absolute bottom-48 sm:bottom-15 left-4 md:left-20 z-30 max-w-md hidden sm:block">
          <p
            className="text-sm md:text-base font-bold leading-relaxed mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255, 255, 255, 0.9)"
            }}
          >
            Code Busters & Coding Club is the official Tech club of <strong className="font-extrabold" style={{ color: "rgba(255, 255, 255, 1)" }}>NETAJI SUBHAS UNIVERSITY</strong> which brings together coders, innovators, and problem-solvers.
          </p>
          <div className="z-30 flex flex-row gap-4 mt-6 justify-center pr-15">
            <button
              className="
                flex items-center justify-between gap-4
                min-w-[220px]
                px-7 py-4
                bg-white text-[#0d1117]
                rounded-2xl
                font-semibold
                text-[15px]
                shadow-lg
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-xl
                cursor-pointer
              "
            >
              <span>Join CBNCC</span>
              <span className="material-symbols-outlined text-lg">east</span>
            </button>
            <button
              className="
                flex items-center justify-between gap-4
                min-w-[220px]
                px-7 py-4
                bg-white/5
                border border-white/20
                backdrop-blur-md
                text-white
                rounded-2xl
                font-semibold
                text-[15px]
                shadow-sm
                transition-all duration-300
                hover:bg-white hover:text-[#0d1117]
                hover:scale-[1.03]
                cursor-pointer
              "
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-lg">east</span>
            </button>
          </div>
        </div>

        <div className="absolute right-6 md:right-20 top-[80%] -translate-x-1/2 rotate-360 origin-center z-30 select-none hidden sm:block">
          <p
            className="text-[10px] tracking-[0.25em] font-semibold uppercase whitespace-nowrap"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255, 255, 255, 0.75)"
            }}
          >
            scroll to explore---&gt;
          </p>
        </div>
      </div>

    </main>
  );
}