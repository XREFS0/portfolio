import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'blue' | 'muted' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'cyan':
        return 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30';
      case 'emerald':
        return 'bg-cyber-emerald/10 text-cyber-emerald border-cyber-emerald/30';
      case 'blue':
        return 'bg-cyber-blue/10 text-blue-400 border-blue-500/30';
      case 'outline':
        return 'bg-transparent text-cyber-textMuted border-cyber-border';
      case 'muted':
      default:
        return 'bg-cyber-surface text-cyber-textMuted border-cyber-border';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'md':
        return 'px-3 py-1 text-xs font-mono';
      case 'sm':
      default:
        return 'px-2.5 py-0.5 text-[11px] font-mono';
    }
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border font-medium tracking-wide transition-colors ${getVariantStyles()} ${getSizeStyles()} ${className}`}
    >
      {children}
    </span>
  );
};
