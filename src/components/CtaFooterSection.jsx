import { Link } from "react-router-dom";

export default function CtaFooterSection() {

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0d1117] pt-0 pb-0 px-3 sm:px-6 lg:px-8 flex flex-col items-center transition-colors duration-300">
      {/* Premium Futuristic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Tech Dot Matrix */}
        <div
          className="absolute inset-0 opacity-[0.03] select-none pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* Ambient Glowing Orbs (static, GPU friendly) */}
        <div
          className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full opacity-25 dark:opacity-15 blur-[50px] z-0 pointer-events-none"
          style={{ backgroundColor: "var(--orb-top)", transition: "background-color 0.5s ease" }}
        />
        <div
          className="absolute -bottom-40 right-1/4 h-[450px] w-[450px] rounded-full opacity-20 dark:opacity-10 blur-[50px] z-0 pointer-events-none"
          style={{ backgroundColor: "var(--orb-bottom)", transition: "background-color 0.5s ease" }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1530px] flex flex-col items-center flex-1">

        {/* --- CTA Content Area (merged with page body) --- */}
        <div className="w-full px-2 py-4 sm:px-6 sm:py-6 lg:px-12 text-center relative overflow-hidden flex-1 flex flex-col justify-center">

          {/* Dot matrix grid top-left under the bracket */}
          <div className="absolute top-8 left-8 grid grid-cols-2 gap-1.5 opacity-15 select-none pointer-events-none hidden sm:grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground" />
            ))}
          </div>

          {/* Interactive grid container */}
          <div className="relative z-10 flex flex-col items-center justify-center py-2 sm:py-4">

            {/* CTA Text Content */}
            <div className="flex flex-col items-center text-center max-w-3xl w-full px-2 sm:px-4">

              {/* Heading */}
              <div className="relative mt-0 max-w-fit mx-auto">
                <h2 className="text-[clamp(2.1rem,7vw,4.5rem)] font-black tracking-tight text-foreground font-heading leading-[1.05] text-center">
                  Ready to Build
                  <br />
                  With Us?
                </h2>

                {/* Floating sparkles/stars next to the word "Build" */}
                <div className="absolute top-0 -right-12 lg:-right-16 text-foreground/85 select-none hidden sm:block animate-float pointer-events-none">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                  </svg>
                </div>
                <div className="absolute top-6 -right-8 lg:-right-10 text-foreground/45 select-none hidden sm:block animate-float-delayed pointer-events-none">
                  <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-[17px] text-muted font-body max-w-xl text-center font-normal leading-relaxed mx-auto px-2">
                Become part of a growing community of innovators, builders, and problem-solvers at Netaji Subhas University.
              </p>

              {/* CTA Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  to="/events"
                  className="relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-[15px] font-bold text-background shadow-lg shadow-card-shadow transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:opacity-90 active:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Explore</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* --- Premium Futuristic Footer --- */}
        <footer className="w-full mt-auto relative rounded-t-[2rem] overflow-hidden">

          {/* Futuristic Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/cbncc-hologram.png"
              alt="Footer background"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.15] scale-[1.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-[#0d1117]/90 to-[#0d1117]" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </div>

          {/* Footer Content */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-10 pb-6">

            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-6">

              {/* Left side info block */}
              <div className="md:col-span-4 flex flex-col items-start space-y-4">
                {/* Brand logo */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background font-heading font-black text-lg tracking-wider shadow-lg">
                    C
                  </div>
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-foreground">
                    CBNCC
                  </span>
                </div>

                {/* Decorative line */}
                <div className="flex items-center gap-2">
                  <span className="w-12 h-[2px] bg-foreground/15"></span>
                  <span className="w-2 h-2 rounded-full bg-foreground/10"></span>
                  <span className="w-2 h-2 rounded-full bg-foreground/5"></span>
                </div>

                <p className="text-sm text-muted font-body leading-relaxed max-w-xs">
                  Building a culture of innovation through technology. Empowering students to build next-generation applications and solve real-world problems.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-3 pt-1">
                  {[
                    {
                      name: "LinkedIn",
                      icon: (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                      ),
                      href: "https://www.linkedin.com/company/cbncc/"
                    },
                    {
                      name: "Instagram",
                      icon: (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                        />
                      ),
                      href: "https://www.instagram.com/cbncc/"
                    },
                    {
                      name: "Email",
                      icon: (
                        <path
                          d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                        />
                      ),
                      href: "mailto:cbncc@nsu.edu"
                    }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-card-border bg-card-bg backdrop-blur-sm text-muted transition-all duration-300 hover:bg-foreground hover:text-background hover:-translate-y-1 hover:shadow-lg"
                    >
                      <svg
                        className="h-4.5 w-4.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        {social.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Columns */}
              <div className="md:col-span-8 grid grid-cols-2 gap-10 lg:gap-14">

                {/* CLUB Column */}
                <div className="flex flex-col space-y-4">
                  {/* Column Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-card-border bg-card-bg backdrop-blur-sm shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-foreground">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground font-heading">
                    Club
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { label: "Home", to: "/" },
                      { label: "Our Team", to: "/team" },
                      { label: "Events", to: "/events" }
                    ].map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          onClick={() => {
                            document.documentElement.style.scrollBehavior = 'auto';
                            window.scrollTo(0, 0);
                            document.documentElement.scrollTop = 0;
                            document.body.scrollTop = 0;
                            requestAnimationFrame(() => {
                              document.documentElement.style.scrollBehavior = '';
                            });
                          }}
                          className="text-sm text-muted hover:text-foreground transition-colors relative py-0.5 group inline-flex items-center gap-2"
                        >
                          <span className="text-muted/60 text-xs group-hover:text-foreground transition-colors">&gt;</span>
                          {link.label}
                          <span className="absolute bottom-0 left-4 w-0 h-[1.5px] bg-foreground transition-all duration-300 group-hover:w-[calc(100%-16px)]" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SOCIALS Column */}
                <div className="flex flex-col space-y-4">
                  {/* Column Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-card-border bg-card-bg backdrop-blur-sm shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-foreground">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-foreground font-heading">
                    Socials
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { label: "LinkedIn", href: "https://www.linkedin.com/company/cbncc/" },
                      { label: "Instagram", href: "https://www.instagram.com/cbncc/" },
                      { label: "Email Us", href: "mailto:cbncc@nsu.edu" }
                    ].map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-muted hover:text-foreground transition-colors relative py-0.5 group inline-flex items-center gap-2"
                        >
                          <span className="text-muted/60 text-xs group-hover:text-foreground transition-colors">&gt;</span>
                          {item.label}
                          <span className="absolute bottom-0 left-4 w-0 h-[1.5px] bg-foreground transition-all duration-300 group-hover:w-[calc(100%-16px)]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </footer>

      </div>
    </section>
  );
}
