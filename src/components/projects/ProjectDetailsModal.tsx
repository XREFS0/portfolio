import React, { useState, useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  Check, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';

interface ProjectDetailsModalProps {
  project: Project | null;
  allProjects?: Project[];
  onClose: () => void;
  onNavigate?: (newProject: Project) => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  allProjects = [],
  onClose,
  onNavigate,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  // Keyboard navigation for ← and → arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project || allProjects.length <= 1 || !onNavigate) return;

      const currentIndex = allProjects.findIndex((p) => p.id === project.id);
      if (currentIndex === -1) return;

      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % allProjects.length;
        onNavigate(allProjects[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + allProjects.length) % allProjects.length;
        onNavigate(allProjects[prevIdx]);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, allProjects, onNavigate, onClose]);

  if (!project) return null;

  const allImages = [project.image, ...(project.additionalImages || [])];
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);

  const goToNextProject = () => {
    if (!onNavigate || allProjects.length <= 1) return;
    const nextIdx = (currentIndex + 1) % allProjects.length;
    onNavigate(allProjects[nextIdx]);
  };

  const goToPrevProject = () => {
    if (!onNavigate || allProjects.length <= 1) return;
    const prevIdx = (currentIndex - 1 + allProjects.length) % allProjects.length;
    onNavigate(allProjects[prevIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Darkened Cinema Backdrop with Ambient Halo */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 blur-[160px] rounded-full pointer-events-none" />
      </div>

      {/* Cinema Container */}
      <div className="relative w-full max-w-5xl bg-cyber-card border border-cyber-border rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        {/* Cinema Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyber-border bg-cyber-surface/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <Badge variant="cyan" size="md">
              {project.category}
            </Badge>
            <h2 className="text-base sm:text-lg font-bold text-white truncate">
              {project.title}
            </h2>
            {currentIndex !== -1 && allProjects.length > 0 && (
              <span className="text-xs font-mono text-cyber-textDim hidden sm:inline-block">
                ({currentIndex + 1} of {allProjects.length})
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next Navigation in Modal */}
            {allProjects.length > 1 && onNavigate && (
              <div className="flex items-center gap-1 mr-2 border-r border-cyber-border pr-3">
                <button
                  type="button"
                  onClick={goToPrevProject}
                  aria-label="Previous project"
                  title="Previous project (←)"
                  className="p-1.5 rounded-lg bg-cyber-card hover:bg-cyber-cardHover text-cyber-textMuted hover:text-white border border-cyber-border transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNextProject}
                  aria-label="Next project"
                  title="Next project (→)"
                  className="p-1.5 rounded-lg bg-cyber-card hover:bg-cyber-cardHover text-cyber-textMuted hover:text-white border border-cyber-border transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close cinema view"
              className="p-1.5 rounded-lg bg-cyber-card hover:bg-cyber-cardHover text-cyber-textMuted hover:text-white border border-cyber-border transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinema Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Screenshot Stage */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/80 border border-cyber-border/80 flex items-center justify-center group/stage shadow-inner">
              <img
                src={allImages[activeImageIndex]}
                alt={`${project.title} Preview ${activeImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* In-Image Prev/Next for multiple screenshots */}
              {allImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm transition-opacity opacity-0 group-hover/stage:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => (prev + 1) % allImages.length)}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-white border border-white/20 backdrop-blur-sm transition-opacity opacity-0 group-hover/stage:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Screenshots Filmstrip */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 aspect-video rounded-lg overflow-hidden border transition-all ${
                      activeImageIndex === idx
                        ? 'border-cyber-cyan ring-2 ring-cyber-cyan/40 scale-105'
                        : 'border-cyber-border opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Subtitle & Narrative */}
          <div className="space-y-2">
            <p className="text-sm font-mono text-cyber-cyan">
              {project.subtitle}
            </p>
            <p className="text-sm text-cyber-text leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Section */}
          {project.architecture && (
            <div className="p-4 rounded-xl bg-cyber-surface/90 border border-cyber-border space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyber-cyan font-bold tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Technical Architecture &amp; System Design</span>
              </div>
              <p className="text-xs text-cyber-textMuted leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Key Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-cyber-textDim tracking-wider font-bold">
              Engineering Capabilities &amp; System Specifications
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-cyber-card/60 border border-cyber-border/60 text-xs text-cyber-text"
                >
                  <Check className="w-4 h-4 text-cyber-emerald shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-2.5 pt-2 border-t border-cyber-border">
            <h4 className="text-xs font-mono uppercase text-cyber-textDim tracking-wider font-bold">
              Integrated Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="cyan" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Cinema Footer Bar */}
        <div className="px-6 py-4 border-t border-cyber-border bg-cyber-surface/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-cyber-textDim flex items-center gap-2">
            <span>Use <kbd className="px-1.5 py-0.5 rounded bg-cyber-card border border-cyber-border text-white text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-cyber-card border border-cyber-border text-white text-[10px]">→</kbd> to cycle projects</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white text-black hover:bg-white/90 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium text-cyber-textMuted hover:text-white bg-cyber-card border border-cyber-border hover:bg-cyber-cardHover transition-colors"
            >
              Close Theater
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
