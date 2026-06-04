import { useState, useEffect } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial sync
    setIsDark(document.documentElement.classList.contains("dark"));

    // MutationObserver to listen for class changes on <html>
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-background select-none transition-colors duration-300">
      
      {/* Mobile & Tablet Layout (< md breakpoint) */}
      <div className="flex md:hidden flex-col items-center w-full min-h-screen px-6 pt-14 pb-10 select-none relative z-20 justify-center">
        
        {/* Robot Image & Glowing Halo */}
        <div className="relative w-[70vw] max-w-[310px] flex items-center justify-center mb-1.5 mt-2 animate-fade-up">
          {/* 1. Large Soft Outer Glow (Radial White Glow) */}
          <div className="absolute w-[118%] aspect-square rounded-full bg-white dark:bg-white/10 blur-2xl opacity-95 dark:opacity-40 z-0 pointer-events-none" />

          {/* 2. Soft Inner Glow Circle */}
          <div className="absolute w-[100%] aspect-square rounded-full bg-white/75 dark:bg-white/[0.04] blur-md z-0 pointer-events-none" />

          {/* Robot Image */}
          <img
            alt="CBNCC Chrome Robot Profile"
            className="w-full h-auto object-contain z-10 select-none relative drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
            src="/robo.png"
          />
        </div>

        {/* Title Heading */}
        <h1 
          className="text-[clamp(3.8rem,15vw,5.5rem)] font-black text-on-background uppercase text-center leading-none tracking-[-0.065em] mt-[5px] relative z-20 animate-fade-up delay-100"
          style={{ fontFamily: "'Sora', 'Montserrat', sans-serif" }}
        >
          CBNCC
        </h1>

        {/* Separator: Line with center dot */}
        <div className="flex items-center gap-4 w-28 my-3 opacity-60 animate-fade-up delay-200">
          <div className="h-[1px] flex-1 bg-on-background/25"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-on-background/70"></div>
          <div className="h-[1px] flex-1 bg-on-background/25"></div>
        </div>

        {/* Description */}
        <p
          className="text-center text-[13px] sm:text-[14px] leading-relaxed text-on-background/80 dark:text-on-background/90 max-w-[85%] sm:max-w-md mx-auto mb-6 font-body-md animate-fade-up delay-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Code Busters & Coding Club is the official Tech Club of <strong className="font-bold text-on-background">Netaji Subhas University</strong> which brings together coders, innovators, and problem-solvers.
        </p>

        {/* CTA Buttons */}
        <div className="w-full max-w-[320px] flex flex-col gap-3 mb-7 animate-fade-up delay-400">
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
      <div className="hidden md:flex relative min-h-screen w-full items-center justify-center select-none overflow-hidden bg-background">
        <div className="relative flex items-center justify-center w-full h-full max-w-5xl px-4">
          
          <h1
            style={{
              color: isDark ? "rgba(255, 255, 255, 0.54)" : "rgba(2, 2, 2, 0.94)",
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
                drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)]
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
              color: isDark ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.75)"
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
              color: isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.88)"
            }}
          >
            Code Busters & Coding Club is the official Tech club of <strong className="font-extrabold" style={{ color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)" }}>NETAJI SUBHAS UNIVERSITY</strong> which brings together coders, innovators, and problem-solvers.
          </p>
          <div className="z-30 flex flex-row gap-4 mt-6 justify-center pr-15">
            <button
              className="
                flex items-center justify-between gap-4
                min-w-[220px]
                px-7 py-4
                bg-black text-white
                dark:bg-white dark:text-black
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
                bg-white/90 dark:bg-black/40
                border border-black/30 dark:border-white/20
                backdrop-blur-md
                text-black dark:text-white
                rounded-2xl
                font-semibold
                text-[15px]
                shadow-sm
                transition-all duration-300
                hover:bg-black hover:text-white
                dark:hover:bg-white dark:hover:text-black
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
              color: isDark ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 0.75)"
            }}
          >
            scroll to explore---&gt;
          </p>
        </div>
      </div>

    </main>
  );
}