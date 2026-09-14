import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  ExternalLink,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Certificate } from '../../types';
import { Badge } from '../common/Badge';

interface CinematicCertificateSpotlightProps {
  certificates: Certificate[];
  onSelectCertificate: (certificate: Certificate) => void;
}

export const CinematicCertificateSpotlight: React.FC<CinematicCertificateSpotlightProps> = ({
  certificates,
  onSelectCertificate,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (certificates.length === 0) return null;

  const currentCert = certificates[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <div className="relative w-full rounded-3xl bg-cyber-card/90 border border-cyber-border overflow-hidden shadow-2xl mb-12 group">
      {/* Background Ambient Aura */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan/15 via-blue-500/10 to-cyber-emerald/15 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Certificate High-Resolution Preview with Holographic Frame */}
        <div className="lg:col-span-7 flex justify-center">
          <div 
            onClick={() => onSelectCertificate(currentCert)}
            className="relative max-w-lg w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-cyber-cyan/30 group-hover:border-cyber-cyan/60 transition-all duration-300 shadow-2xl cursor-pointer p-2 flex items-center justify-center group/card"
          >
            {/* Holographic Glowing Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/10 via-transparent to-cyber-emerald/10 opacity-60 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.img
                key={currentCert.id}
                src={currentCert.image}
                alt={currentCert.title}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
                className="max-h-full max-w-full object-contain rounded-xl shadow-lg transition-transform duration-500 group-hover/card:scale-105"
              />
            </AnimatePresence>

            {/* Hover Trigger */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-4 py-2 rounded-xl bg-cyber-card text-white text-xs font-mono font-bold border border-cyber-cyan/50 flex items-center gap-2 shadow-2xl">
                <Maximize2 className="w-4 h-4 text-cyber-cyan" />
                View Cinema Lightbox
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Credential Specs & Authority */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              SPOTLIGHT CREDENTIAL
            </span>

            <div className="flex items-center gap-2 font-mono text-xs text-cyber-textDim">
              <span className="text-cyber-cyan font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(certificates.length).padStart(2, '0')}</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCert.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <Badge variant="cyan" size="md" className="mb-2">
                  {currentCert.category}
                </Badge>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {currentCert.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-cyber-surface/70 border border-cyber-border space-y-2.5 text-xs font-mono">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-cyber-textDim">Issuer:</span>
                  <span className="text-right text-white font-semibold">
                    {currentCert.issuer}
                  </span>
                </div>

                {currentCert.credentialId && (
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-cyber-border/50">
                    <span className="text-cyber-textDim">Verification ID:</span>
                    <span className="text-cyber-emerald font-bold px-2 py-0.5 rounded bg-cyber-emerald/10 border border-cyber-emerald/30">
                      {currentCert.credentialId}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between gap-2 pt-2 border-t border-cyber-border/50">
                  <span className="text-cyber-textDim">Status:</span>
                  <span className="text-cyber-emerald flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Government-Accredited
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => onSelectCertificate(currentCert)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-cyber-cyan text-cyber-bg hover:bg-cyber-cyan/90 hover:shadow-cyan-glow transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect Fullscreen</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous certificate"
                className="p-2.5 rounded-xl bg-cyber-card hover:bg-cyber-cardHover border border-cyber-border text-cyber-textMuted hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next certificate"
                className="p-2.5 rounded-xl bg-cyber-card hover:bg-cyber-cardHover border border-cyber-border text-cyber-textMuted hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
