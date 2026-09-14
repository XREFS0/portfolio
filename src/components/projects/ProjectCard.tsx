import React from 'react';
import { Github, ExternalLink, ArrowRight, Shield, Layers, Eye, Sparkles } from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isCyberOrNetworking = 
    project.category === 'Cybersecurity & Recon' || project.category === 'Networking';

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-cyber-card/85 hover:bg-cyber-cardHover border border-cyber-border hover:border-cyber-cyan/50 transition-all duration-300 overflow-hidden shadow-card hover:shadow-cyan-glow/20">
      {/* Corner Technical Accents on Hover */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-cyber-cyan/0 group-hover:border-cyber-cyan/60 transition-colors pointer-events-none z-20" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-cyber-cyan/0 group-hover:border-cyber-cyan/60 transition-colors pointer-events-none z-20" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-cyber-emerald/0 group-hover:border-cyber-emerald/60 transition-colors pointer-events-none z-20" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-cyber-emerald/0 group-hover:border-cyber-emerald/60 transition-colors pointer-events-none z-20" />

      {/* Top Banner / Screenshot */}
      <div>
        <div 
          onClick={() => onSelect(project)}
          className="relative aspect-video w-full overflow-hidden bg-cyber-bg cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-cyber-card/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

          {/* Category Tag Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md border shadow-sm ${
              isCyberOrNetworking
                ? 'bg-cyber-bg/85 text-cyber-cyan border-cyber-cyan/40'
                : 'bg-cyber-bg/85 text-blue-400 border-blue-500/40'
            }`}>
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 backdrop-blur-md flex items-center gap-1 shadow-sm">
                <Sparkles className="w-2.5 h-2.5" />
                Featured
              </span>
            )}
          </div>

          {/* Quick Preview Hover Overlay */}
          <div className="absolute inset-0 bg-cyber-bg/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none z-10">
            <span className="px-3.5 py-1.5 rounded-xl bg-cyber-card/95 text-white text-xs font-mono font-bold border border-cyber-cyan/40 flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
              <Eye className="w-3.5 h-3.5 text-cyber-cyan" />
              Open Theater View
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <div>
            <h3 
              onClick={() => onSelect(project)}
              className="text-base sm:text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{project.title}</span>
            </h3>
            <p className="text-xs font-mono text-cyber-textDim mt-1 line-clamp-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs text-cyber-textMuted leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <Badge key={idx} variant="muted" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono text-cyber-textDim self-center pl-1">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-5 pt-0 border-t border-cyber-border/40 mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyber-cyan hover:text-white transition-colors"
        >
          <span>Specifications</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Repository on GitHub"
            aria-label={`View ${project.title} on GitHub`}
            className="p-1.5 rounded-lg bg-cyber-surface hover:bg-cyber-card border border-cyber-border hover:border-cyber-cyan/50 text-cyber-textMuted hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
