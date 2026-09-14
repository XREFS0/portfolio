import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { mailtoUrl } from '../../data/socialLinks';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-6">
      <div
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border border-white/15 shadow-2xl'
            : 'bg-black/50 backdrop-blur-md border border-white/10 shadow-lg'
        }`}
      >
        {/* Left: Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group focus:outline-none shrink-0"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.45)]">
            <img
              src="/logo.jpg"
              alt="Mohamed Mamdouh Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Mohamed Mamdouh
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={mailtoUrl}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.65)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 rounded-full text-zinc-300 hover:text-white bg-white/[0.05] md:hidden transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 space-y-3 md:hidden shadow-2xl z-50 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <a
              href={mailtoUrl}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
