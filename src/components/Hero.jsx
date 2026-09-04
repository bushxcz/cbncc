import { Link } from "react-router-dom";

export default function Hero() {
  const isDark = true;

  return (
    <main className="relative min-h-screen w-full bg-[#0d1117] select-none">

      {/* Mobile & Tablet Layout (< lg breakpoint) */}
      <div className="flex lg:hidden flex-col w-full min-h-[100svh] bg-[#0d1117] select-none relative z-20 overflow-hidden">

        {/* Robot Image bleeding on the right/bottom */}
        <div className="absolute right-[-18%] bottom-[-6%] w-[calc(92%+2px)] sm:right-[-15%] sm:w-[calc(70%+2px)] max-w-[422px] h-[calc(64svh+2px)] sm:h-[calc(70svh+2px)] pointer-events-none z-0 flex items-end justify-end opacity-80 sm:opacity-100">
          <img
            alt="CBNCC Chrome Robot Profile"
            src="/blackrobo.png"
            className="w-full h-full object-contain object-right-bottom scale-[1.01] origin-bottom-right"
          />
        </div>

        {/* Text Content Area */}
        <div className="relative z-10 flex flex-col justify-center flex-grow w-full px-5 pt-24 pb-10 sm:px-12 max-w-[550px]">

          {/* Main Headline Stacked Vertically */}
          <h1
            className="text-[clamp(2.05rem,12vw,4.2rem)] font-black uppercase tracking-tight leading-[0.95] mb-6 animate-fade-up delay-100"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontFamily: "'Sora', sans-serif"
            }}
          >
            BUILD.<br />
            INNOVATE.<br />
            SHAPE THE<br />
            FUTURE.
          </h1>

          {/* Subtitle */}
          <p
            className="text-[clamp(1rem,4.4vw,1.3rem)] leading-relaxed text-white mb-8 font-body-md animate-fade-up delay-200 max-w-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A community of<br />
            innovators, builders<br />
            and changemakers.
          </p>

          <div className="animate-fade-up delay-300 flex justify-start">
            <Link
              to="/events"
              className="flex items-center justify-between gap-5 px-6 sm:px-8 py-[15px] sm:py-[16px] bg-white text-black rounded-2xl font-body-md font-bold text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-md cursor-pointer border border-white/10"
            >
              <span>Explore</span>
              <span className="text-sm font-black">→</span>
            </Link>
          </div>

        </div>

      </div>

      {/* Desktop Layout (>= lg breakpoint) */}
      <div className="hidden lg:flex relative min-h-screen w-full items-center justify-center select-none overflow-hidden bg-[#0d1117]">
        {/* The wordmark continuously travels behind the hero image, like the supplied opening reference. */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none">
          <h1
            aria-label="CBNCC"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontFamily: "'Sora', sans-serif"
            }}
            className="hero-wordmark-track flex w-max whitespace-nowrap text-[21vw] font-medium font-black tracking-tighter uppercase leading-none select-none"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index} aria-hidden="true" className="pr-[12vw]">CBNCC</span>
            ))}
          </h1>
        </div>

        <div className="relative flex items-center justify-center w-full h-full max-w-5xl px-4">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <img
              alt="CBNCC Chrome Robot Profile"
              className="
                hero-image-reveal
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
              src="/blackrobo.png"
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

        <div className="absolute bottom-14 sm:bottom-16 md:bottom-20 left-6 md:left-16 lg:left-24 z-30 max-w-xl hidden sm:block">
          <p
            className="text-[clamp(1.05rem,1.8vw,1.4rem)] leading-relaxed text-white mb-5 font-body-md animate-fade-up delay-200 text-left"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A community of innovators, builders<br />
            and changemakers.
          </p>
          <div className="z-30 flex flex-row items-center justify-start">
            <Link
              to="/events"
              className="
                flex items-center justify-between gap-4
                min-w-[190px]
                px-7 py-3.5 sm:py-4
                bg-white text-black
                rounded-2xl
                font-semibold
                text-[15px]
                shadow-lg
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-xl
                hover:bg-white/90
                cursor-pointer
              "
            >
              <span>Explore</span>
              <span className="material-symbols-outlined text-lg">east</span>
            </Link>
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
