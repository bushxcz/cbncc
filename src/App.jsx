import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HUD from './components/HUD';
import HomePage from './pages/HomePage';
import AlumniPage from './pages/AlumniPage';
import Events from './pages/Events';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';
import './styles/WhyJoin.css';

export default function App() {
  return (
    <div className="dark relative min-h-screen bg-[#0d1117] text-white font-body-md">

      {/* Navigation TopAppBar */}
      <Navigation />

      {/* HUD overlays and corners */}
      <HUD />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/events" element={<Events />} />
      </Routes>

    </div>
  );
}
