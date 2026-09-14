import React from 'react';
import { Award, ExternalLink, ShieldCheck, Eye, Sparkles } from 'lucide-react';
import { Certificate } from '../../types';
import { Badge } from '../common/Badge';

interface CertificateCardProps {
  certificate: Certificate;
  onSelect: (certificate: Certificate) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  onSelect,
}) => {
  const isCyber = certificate.category === 'Cybersecurity';

  return (
    <div
      onClick={() => onSelect(certificate)}
      className="group relative flex flex-col justify-between rounded-2xl bg-cyber-card/75 hover:bg-cyber-cardHover border border-cyber-border hover:border-cyber-cyan/50 p-4 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-cyan-glow/15 overflow-hidden"
    >
      {/* Corner Technical Accents on Hover */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyber-cyan/0 group-hover:border-cyber-cyan/50 transition-colors pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyber-cyan/0 group-hover:border-cyber-cyan/50 transition-colors pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyber-emerald/0 group-hover:border-cyber-emerald/50 transition-colors pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyber-emerald/0 group-hover:border-cyber-emerald/50 transition-colors pointer-events-none" />

      <div>
        {/* Thumbnail Preview */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/60 border border-cyber-border/70 mb-3 group-hover:border-cyber-cyan/30 transition-colors">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-108 group-hover:brightness-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

          {/* Hover Preview Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3 py-1.5 rounded-xl bg-cyber-card text-white text-xs font-mono font-bold border border-cyber-cyan/50 flex items-center gap-1.5 shadow-xl scale-95 group-hover:scale-100 transition-transform">
              <Eye className="w-3.5 h-3.5 text-cyber-cyan" />
              Cinema View
            </span>
          </div>
        </div>

        {/* Title & Category */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <Badge variant={isCyber ? 'cyan' : 'muted'} size="sm">
              {certificate.category}
            </Badge>
            {certificate.credentialId && (
              <span className="text-[10px] font-mono text-cyber-emerald bg-cyber-emerald/10 px-1.5 py-0.5 rounded border border-cyber-emerald/30">
                {certificate.credentialId}
              </span>
            )}
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors line-clamp-2">
            {certificate.title}
          </h4>
        </div>
      </div>

      {/* Issuer footer */}
      <div className="pt-3 mt-3 border-t border-cyber-border/50 flex items-center justify-between text-[11px] font-mono text-cyber-textDim">
        <span className="truncate max-w-[190px]">ITI / MCIT</span>
        <span className="text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 font-bold">
          Inspect <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
