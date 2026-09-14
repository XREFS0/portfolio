import React from 'react';

interface SectionHeaderProps {
  badgeText?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  highlightText,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {badgeText && (
        <div className={`flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-cyber-cyan font-semibold">
            {badgeText}
          </span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
        {title}{' '}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-emerald">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-cyber-textMuted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
