export default function Hero() {
  return (
    <main className="relative min-h-screen w-full bg-background select-none transition-colors duration-300">
      
      {/* Mobile & Tablet Layout (< md breakpoint) */}
      <div className="flex md:hidden flex-col items-center w-full min-h-screen px-6 pt-16 pb-12 select-none relative z-20">
        
        {/* Robot Image & Glowing Halo */}
        <div className="relative w-[82vw] sm:w-[75vw] max-w-[350px] aspect-square flex items-center justify-center mb-3 animate-fade-up">
          {/* 1. Large Soft Outer Glow (Radial White Glow) */}
          <div className="absolute w-[118%] h-[118%] rounded-full bg-white dark:bg-white/10 blur-2xl opacity-95 dark:opacity-40 z-0 pointer-events-none" />

          {/* 2. Soft Inner Glow Circle */}
          <div className="absolute w-[100%] h-[100%] rounded-full bg-white/75 dark:bg-white/[0.04] blur-md z-0 pointer-events-none" />

          {/* 3. Primary Glowing Outer Ring */}
          <div className="absolute w-[94%] h-[94%] rounded-full border border-white dark:border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.95),inset_0_0_20px_rgba(255,255,255,0.85)] dark:shadow-[0_0_25px_rgba(255,255,255,0.15)] z-0 pointer-events-none blur-[0.5px]" />

          {/* 4. Defining Thin Ring (Light gray in light theme, white in dark theme) */}
          <div className="absolute w-[94%] h-[94%] rounded-full border border-black/10 dark:border-white/15 z-0 pointer-events-none" />

          {/* 5. Inner Accent Ring */}
          <div className="absolute w-[82%] h-[82%] rounded-full border border-black/5 dark:border-white/10 opacity-80 z-0 pointer-events-none" />

          {/* Robot Image */}
          <img
            alt="CBNCC Chrome Robot Profile"
            className="h-full w-auto object-contain z-10 select-none relative drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
            src="/robo.png"
          />
        </div>

        {/* Title Heading */}
        <h1 
          className="text-[clamp(3.2rem,14vw,5rem)] font-black text-on-background uppercase text-center leading-none tracking-tighter mt-1 animate-fade-up delay-100"
          style={{ fontFamily: "'Sora', 'Montserrat', sans-serif" }}
        >
          CBNCC
        </h1>

        {/* Separator: Line with center dot */}
        <div className="flex items-center gap-4 w-28 my-4 opacity-60 animate-fade-up delay-200">
          <div className="h-[1px] flex-1 bg-on-background/25"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-on-background/70"></div>
          <div className="h-[1px] flex-1 bg-on-background/25"></div>
        </div>

        {/* Description */}
        <p
          className="text-center text-[13px] sm:text-[14px] leading-relaxed text-on-background/80 dark:text-on-background/90 max-w-[85%] sm:max-w-md mx-auto mb-8 font-body-md animate-fade-up delay-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Code Busters & Coding Club is the official Tech Club of <strong className="font-bold text-on-background">Netaji Subhas University</strong> which brings together coders, innovators, and problem-solvers.
        </p>

        {/* CTA Buttons */}
        <div className="w-full max-w-[320px] flex flex-col gap-3.5 mb-10 animate-fade-up delay-400">
          <button
            className="flex items-center justify-between w-full px-6 py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-body-md font-semibold text-[14px] transition-all duration-300 hover:opacity-90 active:scale-98 shadow-md cursor-pointer border border-transparent"
          >
            <span>Join CBNCC</span>
            <span className="material-symbols-outlined text-base">east</span>
          </button>

          <button
            className="flex items-center justify-between w-full px-6 py-4 bg-white/40 dark:bg-black/40 border border-black/20 dark:border-white/20 text-on-background rounded-2xl font-body-md font-semibold text-[14px] transition-all duration-300 hover:bg-on-background/5 active:scale-98 shadow-sm cursor-pointer"
          >
            <span>Learn More</span>
            <span className="material-symbols-outlined text-base">east</span>
          </button>
        </div>

        {/* Navigation Shortcuts Bar (Floating Glassmorphism pill) */}
        <div className="glass-panel w-full max-w-[360px] p-2.5 rounded-2xl flex justify-between items-center z-30 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-on-background/10 bg-white/70 dark:bg-black/70 backdrop-blur-md mb-6 animate-fade-up delay-500">
          <a href="#about" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-on-background/70 hover:text-on-background transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">About Us</span>
          </a>
          <div className="w-[1px] h-6 bg-on-background/10"></div>
          <a href="#team" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-on-background/70 hover:text-on-background transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">groups</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">Team</span>
          </a>
          <div className="w-[1px] h-6 bg-on-background/10"></div>
          <a href="#events" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-on-background/70 hover:text-on-background transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">Events</span>
          </a>
          <div className="w-[1px] h-6 bg-on-background/10"></div>
          <a href="#alumni" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-on-background/70 hover:text-on-background transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">school</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">Alumni</span>
          </a>
          <div className="w-[1px] h-6 bg-on-background/10"></div>
          <a href="#contact" className="flex flex-col items-center justify-center flex-1 py-1 gap-1 cursor-pointer text-on-background/70 hover:text-on-background transition-colors min-h-[44px]">
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span className="text-[8px] font-bold tracking-wider font-label-caps uppercase text-center">Contact</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-0.5 text-[8px] tracking-[0.25em] font-bold text-on-background/50 uppercase select-none animate-bounce mt-auto pb-4">
          <span>Scroll to explore</span>
          <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
        </div>

        {/* Mobile Inline Footer (Copyright) */}
        <div className="text-[8px] text-on-background/30 tracking-widest font-semibold uppercase text-center mt-2">
          © {new Date().getFullYear()} CBNCC • AI • AUTOMATION • FUTURE
        </div>
      </div>

      {/* Desktop Layout (>= md breakpoint) */}
      <div className="hidden md:flex relative min-h-screen w-full items-center justify-center select-none overflow-hidden">
        <div className="relative flex items-center justify-center w-full h-full max-w-5xl px-4">
          
          <h1 
            className="relative z-10 text-[27vw] md:text-[25vw] lg:text-[21vw] font-medium font-black tracking-tighter text-black uppercase text-center leading-none select-none -translate-y-10"
            style={{ fontFamily: "'Sora', 'Montserrat', sans-serif" }}
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
              "
              src="/robo.png"
            />
          </div>
        </div>

        <div className="absolute left-6 md:left-12 top-[35%] -translate-x-1/2 -rotate-90 origin-center z-30 select-none hidden sm:block">
          <p 
            className="text-[10px] tracking-[0.25em] text-black/60 dark:text-black/60 font-semibold uppercase whitespace-nowrap"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            BUILD &gt; BREAK &gt; LEARN &gt; REPEAT
          </p>
        </div>

        <div className="absolute bottom-48 sm:bottom-15 left-4 md:left-20 z-30 max-w-md hidden sm:block">
          <p
            className="text-sm md:text-base text-black/80 dark:text-black font-bold leading-relaxed mb-5"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Code Busters & Coding Club is the official Tech club of NETAJI SUBHAS UNIVERSITY which brings together coders, innovators, and problem-solvers.
          </p>
          <div className="z-30 flex gap-4">
            <button
              className="
                px-6 py-3
                rounded-2xl
                bg-black
                text-white
                dark:bg-white
                dark:text-black
                font-semibold
                text-sm md:text-base
                transition-all duration-300
                hover:scale-105
                hover:opacity-90
                cursor-pointer
                shadow-lg
                border-solid border-black
                border-2
                hover:bg-black hover:text-white
              "
            >
              Join CBNCC
            </button>

            <button
              className="
                px-6 py-3
                rounded-2xl
                border
                border-black
                dark:border-white
                bg-white/80
                dark:bg-black/80
                text-black
                dark:text-white
                font-semibold
                text-sm md:text-base
                backdrop-blur-md
                transition-all duration-300
                hover:scale-105
                hover:bg-black
                hover:text-white
                dark:hover:bg-white
                dark:hover:text-black
                cursor-pointer
                shadow-lg
                hover:border-solid hover:border-black hover:border-2
              "
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute right-6 md:right-20 top-[80%] -translate-x-1/2 rotate-360 origin-center z-30 select-none hidden sm:block">
          <p 
            className="text-[10px] tracking-[0.25em] text-white/60 dark:text-black/60 font-semibold uppercase whitespace-nowrap"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            scroll to explore---&gt;
          </p>
        </div>
      </div>

    </main>
  );
}