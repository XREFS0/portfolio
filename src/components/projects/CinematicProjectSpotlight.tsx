import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Github, 
  ArrowRight, 
  Shield, 
  Cpu, 
  Layers, 
  Terminal,
  Sparkles
} from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';

interface CinematicProjectSpotlightProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const CinematicProjectSpotlight: React.FC<CinematicProjectSpotlightProps> = ({
  projects,
  onSelectProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const currentProject = projects[currentIndex] || projects[0];
  const slideDuration = 6000; // 6 seconds per slide

  useEffect(() => {
    if (!isPlaying) return;

    const intervalStep = 50; // update every 50ms
    const stepIncrement = (intervalStep / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % projects.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, projects.length]);

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const selectIndex = (index: number) => {
    setProgress(0);
    setCurrentIndex(index);
  };

  if (!currentProject) return null;

  return (
    <div 
      className="relative w-full rounded-3xl bg-cyber-card/90 border border-cyber-border overflow-hidden shadow-2xl mb-12 group"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan/20 via-cyber-blue/10 to-cyber-emerald/20 blur-3xl opacity-40 pointer-events-none" />

      {/* Main Cinematic Widescreen Stage */}
      <div className="relative min-h-[440px] md:min-h-[520px] w-full flex flex-col justify-end overflow-hidden">
        {/* Background Screenshot with Zoom Effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover object-top filter brightness-[0.75] contrast-[1.08]"
            />
            {/* Cinematic Vignette Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/70 to-transparent opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-bg/90 via-cyber-bg/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Top HUD Bar */}
        <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-lg bg-cyber-bg/85 backdrop-blur-md border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              FLAGSHIP SPOTLIGHT
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-cyber-card/80 backdrop-blur-md border border-cyber-border text-cyber-textMuted text-xs font-mono">
              {currentProject.category}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-cyber-bg/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyber-border/80 font-mono text-xs text-cyber-text">
            <span className="text-cyber-cyan font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-cyber-textDim">/</span>
            <span className="text-cyber-textDim">{String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Cinematic Content Layer */}
        <div className="relative z-20 p-6 sm:p-8 md:p-10 max-w-3xl space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {currentProject.title}
              </h3>

              <p className="text-sm font-mono text-cyber-cyan">
                {currentProject.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-cyber-textMuted leading-relaxed line-clamp-3">
                {currentProject.description}
              </p>

              {/* Technologies in Spotlight */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentProject.technologies.slice(0, 5).map((tech, idx) => (
                  <Badge key={idx} variant="muted" size="sm" className="bg-cyber-card/80 backdrop-blur-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action Triggers */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectProject(currentProject)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-cyber-cyan text-cyber-bg hover:bg-cyber-cyan/90 hover:shadow-cyan-glow transition-all duration-200"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Launch Theater Specs</span>
            </button>

            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium bg-cyber-card/90 hover:bg-cyber-card text-white border border-cyber-border hover:border-cyber-cyan/40 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom Controls Bar */}
        <div className="relative z-20 px-6 py-4 bg-cyber-surface/90 backdrop-blur-md border-t border-cyber-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Thumbnail Filmstrip */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
            {projects.map((proj, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => selectIndex(idx)}
                  className={`group/thumb relative h-10 w-16 sm:h-12 sm:w-20 rounded-lg overflow-hidden border transition-all shrink-0 ${
                    isActive
                      ? 'border-cyber-cyan ring-2 ring-cyber-cyan/40 scale-105'
                      : 'border-cyber-border opacity-50 hover:opacity-90'
                  }`}
                  title={proj.title}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-cyber-cyan/15 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Playback Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous flagship project"
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-textMuted hover:text-white hover:border-cyber-cyan/40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-cyan hover:bg-cyber-cardHover transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next flagship project"
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-textMuted hover:text-white hover:border-cyber-cyan/40 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyber-border/40 z-30">
          <div
            className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-emerald transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
