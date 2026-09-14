import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  ArrowUpRight, 
  Maximize2,
  Download,
  CheckCircle2,
  LayoutGrid,
  Tv
} from 'lucide-react';
import { CertificateModal } from '../components/certificates/CertificateModal';
import { certificates } from '../data/certificates';
import { Certificate } from '../types';

export const CertificatesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<'stage' | 'grid'>('stage');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Extract unique categories
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(certificates.map((c) => c.category)))];
  }, []);

  // Filter certificates
  const filteredCertificates = useMemo(() => {
    return certificates.filter((c) => {
      const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.credentialId && c.credentialId.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset on category/search change
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
    setVisibleCount(12);
  }, [selectedCategory, searchQuery]);

  const currentCert = filteredCertificates[currentIndex] || filteredCertificates[0] || certificates[0];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % filteredCertificates.length;
      }
      return prev === 0 ? filteredCertificates.length - 1 : prev - 1;
    });
  };

  const jumpToCert = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCert) return;
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, filteredCertificates.length]);

  // Spring slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(6px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 28 },
        opacity: { duration: 0.45 },
        scale: { duration: 0.45 },
        filter: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(6px)',
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 28 },
        opacity: { duration: 0.3 },
        filter: { duration: 0.25 },
      },
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 15 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const, delay: 0.1 },
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25 } },
  };

  return (
    <section id="certificates" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Soft Ambient Aura */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Certifications
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Professional credentials in cybersecurity, reverse engineering, digital forensics, and software development accredited by ITI Mahara-Tech and the Ministry of Communications and Information Technology (MCIT).
            </p>
          </div>

          {/* View Toggle & Search */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 self-start md:self-end">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search credentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0c1017] border border-white/[0.08] focus:border-cyan-500/50 text-xs text-white placeholder-zinc-500 outline-none transition-all"
              />
            </div>

            <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode('stage')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'stage' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                }`}
                title="Cinematic Showcase"
              >
                <Tv className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                }`}
                title="Grid Catalog"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(12);
                }}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 ${
                  isActive ? 'text-black font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCertCategory"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* VIEW 1: CINEMATIC SHOWCASE STAGE */}
        {viewMode === 'stage' && currentCert && (
          <div className="relative rounded-3xl bg-[#0c1017] border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[440px]">
              
              {/* Left Column: Certificate Preview with Directional Spring Slide */}
              <div className="lg:col-span-7 relative flex justify-center">
                <div
                  onClick={() => setSelectedCert(currentCert)}
                  className="group relative max-w-xl w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/90 border border-white/10 shadow-2xl cursor-pointer p-4 flex items-center justify-center"
                >
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={currentCert.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={currentCert.image}
                        alt={currentCert.title}
                        className="max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-103"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="px-5 py-2.5 rounded-full bg-black/90 text-white text-xs font-semibold border border-cyan-500/40 flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4 text-cyan-400" />
                      <span>View Full Resolution</span>
                    </span>
                  </div>
                </div>

                {/* Stage Side Navigation Arrows */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(-1);
                  }}
                  aria-label="Previous certificate"
                  className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white border border-white/15 flex items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(1);
                  }}
                  aria-label="Next certificate"
                  className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white border border-white/15 flex items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right Column: Certificate Details */}
              <div className="lg:col-span-5 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCert.id}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                        {currentCert.category}
                      </span>
                      <div className="text-xs font-mono text-zinc-400">
                        <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                        <span className="text-zinc-600 mx-1">/</span>
                        <span>{String(filteredCertificates.length).padStart(2, '0')}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      {currentCert.title}
                    </h3>

                    <div className="space-y-2 text-sm text-zinc-300">
                      <p className="text-zinc-400">
                        Issuing Institution: <span className="text-white font-medium">{currentCert.issuer}</span>
                      </p>
                      {currentCert.credentialId && (
                        <p className="text-zinc-400">
                          Verification ID: <span className="text-emerald-400 font-mono font-medium">{currentCert.credentialId}</span>
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedCert(currentCert)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all hover:scale-102 active:scale-98 shadow-md"
                      >
                        <Maximize2 className="w-4 h-4" />
                        <span>Inspect Certificate</span>
                      </button>

                      <a
                        href={currentCert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                      >
                        <Download className="w-4 h-4 text-cyan-400" />
                        <span>Download</span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Thumbnail Scrubber Reel */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
              {filteredCertificates.map((c, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => jumpToCert(idx)}
                    className={`relative h-16 w-24 sm:h-20 sm:w-28 rounded-xl overflow-hidden border transition-all duration-300 shrink-0 text-left ${
                      isActive
                        ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-105 opacity-100 shadow-lg shadow-cyan-500/20'
                        : 'border-white/10 opacity-40 hover:opacity-80'
                    }`}
                    title={c.title}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-medium text-white truncate block">
                      {c.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: GRID CATALOG */}
        {viewMode === 'grid' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCertificates.slice(0, visibleCount).map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group flex flex-col justify-between rounded-2xl bg-[#0c1017] hover:bg-[#101622] border border-white/[0.08] hover:border-cyan-500/40 p-4 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/80 border border-white/[0.06] mb-3.5">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-black/80 text-zinc-300 border border-white/10 backdrop-blur-md">
                        {cert.category}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-[11px] text-zinc-400 mt-1.5 line-clamp-1">
                      ITI Mahara-Tech · MCIT
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                    <span className="group-hover:text-white transition-colors flex items-center gap-1 text-[11px] font-medium">
                      View Credential <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>

                    {cert.credentialId && (
                      <span className="text-[10px] text-emerald-400/80 font-mono">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredCertificates.length > visibleCount && (
              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                >
                  <span>Load More ({filteredCertificates.length - visibleCount} remaining)</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Lightbox Modal */}
        <CertificateModal
          certificate={selectedCert}
          allCertificates={filteredCertificates}
          onClose={() => setSelectedCert(null)}
          onNavigate={(c) => setSelectedCert(c)}
        />
      </div>
    </section>
  );
};
