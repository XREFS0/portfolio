import React from 'react';
import { 
  Github, 
  Linkedin, 
  Send, 
  Youtube, 
  Instagram, 
  Facebook, 
  Globe, 
  Mail,
  LucideIcon
} from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';
import { SocialLink } from '../../types';

const iconMap: Record<SocialLink['icon'], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  telegram: Send,
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  globe: Globe,
  mail: Mail,
};

interface SocialLinksProps {
  variant?: 'hero' | 'footer' | 'contact' | 'compact';
  filterFeaturedOnly?: boolean;
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'hero',
  filterFeaturedOnly = false,
  className = '',
}) => {
  const linksToDisplay = filterFeaturedOnly
    ? socialLinks.filter((link) => link.featured)
    : socialLinks;

  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return 'p-2 text-sm text-cyber-textMuted hover:text-cyber-cyan hover:bg-cyber-cardHover rounded-lg border border-transparent hover:border-cyber-border';
      case 'footer':
        return 'p-2.5 text-cyber-textMuted hover:text-cyber-cyan hover:bg-cyber-card rounded-lg border border-cyber-border/50 hover:border-cyber-cyan/40 transition-all duration-200';
      case 'contact':
        return 'px-4 py-3 bg-cyber-card/60 hover:bg-cyber-cardHover text-cyber-text hover:text-cyber-cyan rounded-xl border border-cyber-border hover:border-cyber-cyan/40 transition-all duration-200 flex items-center gap-3 text-sm font-medium';
      case 'hero':
      default:
        return 'p-3 bg-cyber-card/80 hover:bg-cyber-cardHover text-cyber-text hover:text-cyber-cyan rounded-xl border border-cyber-border hover:border-cyber-cyan/50 hover:shadow-cyan-glow transition-all duration-300';
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {linksToDisplay.map((link) => {
        const IconComponent = iconMap[link.icon] || Globe;
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className={`group relative flex items-center justify-center transition-all ${getVariantStyles()}`}
          >
            <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
            {variant === 'contact' && (
              <span>{link.name}</span>
            )}
            {/* Tooltip for desktop */}
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-cyber-card px-2 py-1 text-xs text-cyber-cyan opacity-0 shadow border border-cyber-border transition-opacity group-hover:opacity-100 z-30 font-mono hidden sm:inline-block">
              {link.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};
