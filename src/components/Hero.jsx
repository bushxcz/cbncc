export default function Hero() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-background select-none overflow-hidden">
      <div className="relative flex items-center justify-center w-full h-full max-w-5xl px-4">
        
        <h1 
          className="relative z-10 text-[27vw] md:text-[25vw] lg:text-[21vw] font-medium font-black tracking-tighter text-black uppercase text-center leading-none select-none -translate-y-10 "
          style={{ fontFamily: " 'Sora','Montserrat', 'Sora', sans-serif" }}
        >
        CBNCC
        </h1>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <img
            alt="CBNCC Chrome Robot Profile"
            className="w-[190px] h-[270px] xs:w-[240px] xs:h-[340px] sm:w-[280px] sm:h-[380px] md:w-[410px] md:h-[530px]  object-contain select-none translate-y-10 sm:translate-y-12 md:translate-y-20"
            src="/robot.png"
            style={{
              mixBlendMode: 'multiply',
          WebkitMaskImage: `
  linear-gradient(to bottom, black 0%, black 70%, transparent 100%),
  linear-gradient(to right, black 0%, black 60%, transparent 100%)
`,
maskImage: `
  linear-gradient(to bottom, black 0%, black 75%, transparent 100%),
  linear-gradient(to right, black 0%, black 75%, transparent 100%)
`,
WebkitMaskComposite: 'destination-in',
maskComposite: 'intersect',
            }}
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
      <div
  className="
    absolute
    bottom-24 sm:bottom-20
    left-4 md:left-10
    z-30
    max-w-md
    hidden sm:block
  "
>
  <p
    className="
      text-sm md:text-base
      text-black/80 dark:text-black
      font-bold
      leading-relaxed 
    "
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
  >
    Code Busters & Coding Club is the official coding and innovation club of
    Netaji Subhas University, bringing together students passionate about
    technology, problem-solving, and building meaningful solutions.
  </p>
</div>
      
      <div className="absolute right-6 md:right-20 top-[80%] -translate-x-1/2 rotate-360 origin-center z-30 select-none hidden sm:block">
        <p 
          className="text-[10px] tracking-[0.25em] text-white/60 dark:text-black/60 font-semibold uppercase whitespace-nowrap"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          scroll to explore---&gt;
        </p>
      </div>

      {/* Bottom Right Buttons */}
<div className="absolute bottom-10 right-4 md:right-10 z-30 flex gap-4">
  
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
      border-radius-2xl
      hover:scale-105 hover:bg-black hover:text-white cursor-pointer
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
    </main>
  );
}