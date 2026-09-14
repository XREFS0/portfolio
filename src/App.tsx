import React from 'react';
import { TechnicalBackground } from './components/common/TechnicalBackground';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Specializations } from './sections/Specializations';
import { ProjectsSection } from './sections/ProjectsSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { StatsRibbon } from './sections/StatsRibbon';
import { ContactSection } from './sections/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cinematic-bg text-cinematic-text selection:bg-cinematic-cyan selection:text-black font-sans antialiased relative">
      {/* Cinematic Ambient Lighting Backdrop */}
      <TechnicalBackground />

      {/* Floating Translucent Pill Navbar */}
      <Navbar />

      {/* Main Sections Composition */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Specializations />
        <ProjectsSection />
        <CertificatesSection />
        <StatsRibbon />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Subtle Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;
