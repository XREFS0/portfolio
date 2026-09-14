import React, { useEffect } from 'react';
import { 
  Award, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  X, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { Certificate } from '../../types';
import { Badge } from '../common/Badge';

interface CertificateModalProps {
  certificate: Certificate | null;
  allCertificates?: Certificate[];
  onClose: () => void;
  onNavigate?: (cert: Certificate) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  allCertificates = [],
  onClose,
  onNavigate,
}) => {
  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!certificate || allCertificates.length <= 1 || !onNavigate) return;

      const currentIndex = allCertificates.findIndex((c) => c.id === certificate.id);
      if (currentIndex === -1) return;

      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % allCertificates.length;
        onNavigate(allCertificates[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + allCertificates.length) % allCertificates.length;
        onNavigate(allCertificates[prevIdx]);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    if (certificate) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [certificate, allCertificates, onNavigate, onClose]);

  if (!certificate) return null;

  const currentIndex = allCertificates.findIndex((c) => c.id === certificate.id);

  const goToNext = () => {
    if (!onNavigate || allCertificates.length <= 1) return;
    const nextIdx = (currentIndex + 1) % allCertificates.length;
    onNavigate(allCertificates[nextIdx]);
  };

  const goToPrev = () => {
    if (!onNavigate || allCertificates.length <= 1) return;
    const prevIdx = (currentIndex - 1 + allCertificates.length) % allCertificates.length;
    onNavigate(allCertificates[prevIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Cinema Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/92 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 blur-[180px] rounded-full pointer-events-none" />
      </div>

      {/* Lightbox Container */}
      <div className="relative w-full max-w-5xl bg-cyber-card border border-cyber-border rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[94vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyber-border bg-cyber-surface/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <Badge variant="cyan" size="md">
              {certificate.category}
            </Badge>
            <h2 className="text-base sm:text-lg font-bold text-white truncate">
              {certificate.title}
            </h2>
            {currentIndex !== -1 && allCertificates.length > 0 && (
              <span className="text-xs font-mono text-cyber-textDim hidden sm:inline-block">
                ({currentIndex + 1} of {allCertificates.length})
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {allCertificates.length > 1 && onNavigate && (
              <div className="flex items-center gap-1 mr-2 border-r border-cyber-border pr-3">
                <button
                  type="button"
                  onClick={goToPrev}
                  aria-label="Previous certificate"
                  title="Previous credential (←)"
                  className="p-1.5 rounded-lg bg-cyber-card hover:bg-cyber-cardHover text-cyber-textMuted hover:text-white border border-cyber-border transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next certificate"
                  title="Next credential (→)"
                  className="p-1.5 rounded-lg bg-cyber-card hover:bg-cyber-cardHover text-cyber-textMuted hover:text-white border border-cyber-border transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate lightbox"
              className="p-1.5 rounded-lg bg-cyber-card hover:bg-cyber-cardHover text-cyber-textMuted hover:text-white border border-cyber-border transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Resolution Certificate Stage */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="relative w-full rounded-2xl overflow-hidden bg-black/90 border border-cyber-border/80 flex items-center justify-center p-3 sm:p-6 group/stage shadow-inner">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[64vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />

            {/* Stage Side Navigation Arrows */}
            {allCertificates.length > 1 && onNavigate && (
              <>
                <button
                  type="button"
                  onClick={goToPrev}
                  aria-label="Previous certificate"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-black/70 hover:bg-black/95 text-white border border-white/20 backdrop-blur-sm transition-opacity opacity-0 group-hover/stage:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next certificate"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-black/70 hover:bg-black/95 text-white border border-white/20 backdrop-blur-sm transition-opacity opacity-0 group-hover/stage:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Credential Data HUD */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-cyber-surface/70 border border-cyber-border text-xs font-mono">
            <div>
              <span className="text-cyber-textDim block mb-1">Issuing Authority:</span>
              <span className="text-white font-semibold">
                {certificate.issuer}
              </span>
            </div>

            <div>
              <span className="text-cyber-textDim block mb-1">Discipline Area:</span>
              <span className="text-cyber-cyan font-bold">
                {certificate.category}
              </span>
            </div>

            <div>
              <span className="text-cyber-textDim block mb-1">Verification Status:</span>
              <span className="text-cyber-emerald flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {certificate.credentialId ? `ID: ${certificate.credentialId}` : 'Verified Credential'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="px-6 py-4 border-t border-cyber-border bg-cyber-surface/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-cyber-textDim">
            <span>Use <kbd className="px-1.5 py-0.5 rounded bg-cyber-card border border-cyber-border text-white text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-cyber-card border border-cyber-border text-white text-[10px]">→</kbd> to browse certificates</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-cyber-card hover:bg-cyber-cardHover text-cyber-text border border-cyber-border hover:border-cyber-cyan/40 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Full Resolution</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium text-cyber-textMuted hover:text-white bg-cyber-surface border border-cyber-border hover:bg-cyber-card transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
