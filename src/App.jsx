import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';
import HUD from './components/HUD';
import HomePage from './pages/HomePage';
import AlumniPage from './pages/AlumniPage';
import Events from './pages/Events';
const TeamPage = lazy(() => import('./pages/TeamPage'));
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';
import './styles/WhyJoin.css';

export default function App() {
  return (
    <div className="dark relative min-h-screen bg-[#0d1117] text-white font-body-md">
      <ErrorBoundary>
      {/* Glow cursor */}
      <div id="glow-cursor" className="glow-cursor" />

      {/* ── Premium Background Layer (fixed, behind everything) ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base grid pattern */}
        <div className="absolute inset-0 premium-bg-grid opacity-60"></div>

        {/* Ambient glow orb — Cyan (top-left) */}
        <div
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Ambient glow orb — Indigo (center-right) */}
        <div
          className="absolute top-[45%] right-[5%] w-[600px] h-[600px] rounded-full animate-pulse-slow-delay"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Ambient glow orb — Fuchsia (bottom-left) */}
        <div
          className="absolute bottom-[10%] left-[15%] w-[450px] h-[450px] rounded-full animate-pulse-slow-delay2"
          style={{
            background: 'radial-gradient(circle, rgba(217, 70, 239, 0.3) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Navigation TopAppBar */}
      <Navigation />

      {/* HUD overlays and corners */}
      <HUD />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Suspense fallback={<div className="p-8 text-center">Loading...</div>}><TeamPage /></Suspense>} />
      </Routes>

      </ErrorBoundary>

      {/* Bottom Footer */}
      <footer className="fixed bottom-0 left-0 w-full px-margin-mobile md:px-margin-desktop py-gutter flex justify-between items-end z-40 pointer-events-none select-none hidden md:flex">
        <div className="pointer-events-auto transition-colors duration-300">
          <p className="font-body-md text-[9px] sm:text-[10px] text-white/40 tracking-widest font-semibold">
            © {new Date().getFullYear()} CBNCC • AI • AUTOMATION • FUTURE
          </p>
        </div>
      </footer>
    </div>
  );
}
