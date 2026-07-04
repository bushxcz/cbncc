import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-white/10 transition-colors duration-300 text-white">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex items-center gap-3 select-none cursor-pointer">
            <span className="font-display-xl text-body-lg font-extrabold tracking-tighter text-white">
              CBNCC
            </span> 
          </div>

          {/* Desktop Menu - visible on md and up */}
          <nav className="hidden md:flex gap-8 font-body-md text-[14px] font-medium items-center">
            <Link className="text-white/60 hover:text-white transition-colors duration-300 hover-underline-slide" to="/#about">
              HOME PAGE
            </Link>
            <Link className="text-white/60 hover:text-white transition-colors duration-300 hover-underline-slide" to="/#team">
              TEAM
            </Link>
            <NavLink className={({ isActive }) => `transition-colors duration-300 hover-underline-slide ${isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}`} to="/alumni">
              ALUMNI
            </NavLink>
            <Link className="text-white/60 hover:text-white transition-colors duration-300 hover-underline-slide" to="/#contact">
              CONTACT US
            </Link>
            <Link className="text-white/60 hover:text-white transition-colors duration-300 hover-underline-slide" to="/#events">
              EVENTS
            </Link>
            <Link className="text-white/60 hover:text-white transition-colors duration-300 hover-underline-slide" to="/#faq">
              FAQ
            </Link>
          </nav>

          {/* Actions (Join Us + Hamburger Menu) */}
          <div className="flex items-center gap-4">
            {/* Join Us Button - hidden on mobile (below md breakpoint) */}
            <button className="hidden md:flex px-6 py-2.5 border border-white rounded-full font-body-md text-[13px] font-semibold text-white hover:bg-white hover:text-[#0d1117] transition-all duration-300 items-center gap-2 group cursor-pointer shadow-sm">
            CONTACT US
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-icon="north_east">
                north_east
              </span>
            </button>

            {/* Hamburger Toggle Button - visible below md breakpoint */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-all duration-300 cursor-pointer select-none text-white md:hidden"
              title="Open Menu"
            >
              <span className="material-symbols-outlined text-lg">
                menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] sm:w-[320px] bg-[#0d1117] text-white z-50 border-l border-white/10 shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3 select-none">
            <span className="font-display-xl text-body-lg font-extrabold tracking-tighter text-white">
              CBNCC
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/5 transition-all duration-300 cursor-pointer select-none text-white"
            title="Close Menu"
          >
            <span className="material-symbols-outlined text-lg">
              close
            </span>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="flex flex-col gap-6 font-body-md text-[18px] font-medium">
          <Link
            className="text-white/60 hover:text-white transition-colors duration-300"
            to="/#about"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            className="text-white/60 hover:text-white transition-colors duration-300"
            to="/#team"
            onClick={() => setIsMenuOpen(false)}
          >
            TEAM
          </Link>
          <NavLink
            className={({ isActive }) => `transition-colors duration-300 ${isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white'}`}
            to="/alumni"
            onClick={() => setIsMenuOpen(false)}
          >
            ALUMNI
          </NavLink>
          <Link
            className="text-white/60 hover:text-white transition-colors duration-300"
            to="/#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </Link>
          <Link
            className="text-white/60 hover:text-white transition-colors duration-300"
            to="/#events"
            onClick={() => setIsMenuOpen(false)}
          >
            EVENTS
          </Link>
          <Link
            className="text-white/60 hover:text-white transition-colors duration-300"
            to="/#faq"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
        </nav>

        {/* Drawer Actions — JOIN US CTA only */}
        <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
          <button className="w-full justify-center px-6 py-3 border border-white rounded-full font-body-md text-[14px] font-semibold text-white hover:bg-white hover:text-[#0d1117] transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-sm">
            JOIN US
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-icon="north_east">
              north_east
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
