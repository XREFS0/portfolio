import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Github,
  Maximize2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ProjectDetailsModal } from '../components/projects/ProjectDetailsModal';
import { projects } from '../data/projects';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [selectedCategory]);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0] || projects[0];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % filteredProjects.length;
      }
      return prev === 0 ? filteredProjects.length - 1 : prev - 1;
    });
  };

  const jumpToProject = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, filteredProjects.length]);

  // Slide spring animation variants
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

  // Text content animation variants
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
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Dynamic Ambient Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/5 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Software engineering systems, network security utilities, and desktop applications I've designed and engineered.
            </p>
          </div>

          {/* Slide Indicator & Navigation Controls */}
          <div className="flex items-center gap-4 self-start sm:self-end">
            <div className="text-xs font-mono text-zinc-400">
              <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-zinc-600 mx-1">/</span>
              <span>{String(filteredProjects.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous project"
                className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next project"
                className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/10 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Category Tabs with Animated Pill */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 ${
                  isActive ? 'text-black font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCategory"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* CINEMATIC HERO SHOWCASE STAGE */}
        {currentProject && (
          <div className="relative rounded-3xl bg-[#0c1017] border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px]">
              
              {/* Left Column: Widescreen Image Stage with Directional Spring Slide */}
              <div className="lg:col-span-7 relative">
                <div
                  onClick={() => setSelectedProject(currentProject)}
                  className="group relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl cursor-pointer"
                >
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={currentProject.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full h-full"
                    >
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* Hover Inspect Pill */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="px-5 py-2.5 rounded-full bg-black/90 text-white text-xs font-semibold border border-cyan-500/40 flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4 text-cyan-400" />
                      <span>View Specifications</span>
                    </span>
                  </div>
                </div>

                {/* Direct Stage Navigation Arrows on Image */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(-1);
                  }}
                  aria-label="Previous project"
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
                  aria-label="Next project"
                  className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white border border-white/15 flex items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right Column: Project Details with Smooth Staggered Transition */}
              <div className="lg:col-span-5 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-5"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                        {currentProject.category}
                      </span>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                        {currentProject.title}
                      </h3>

                      <p className="text-sm font-medium text-zinc-400">
                        {currentProject.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {currentProject.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {currentProject.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                      {currentProject.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-md text-xs text-zinc-500 bg-white/[0.02]">
                          +{currentProject.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(currentProject)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all hover:scale-102 active:scale-98 shadow-md"
                      >
                        <span>View Specifications</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {currentProject.githubUrl && (
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Cinematic Thumbnail Filmstrip / Reel */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
              {filteredProjects.map((p, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => jumpToProject(idx)}
                    className={`relative h-16 w-28 sm:h-20 sm:w-36 rounded-xl overflow-hidden border transition-all duration-300 shrink-0 text-left ${
                      isActive
                        ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-105 opacity-100 shadow-lg shadow-cyan-500/20'
                        : 'border-white/10 opacity-40 hover:opacity-80'
                    }`}
                    title={p.title}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-1.5 left-2 right-2 text-[10px] font-medium text-white truncate block">
                      {p.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Global Details Modal */}
        <ProjectDetailsModal
          project={selectedProject}
          allProjects={filteredProjects}
          onClose={() => setSelectedProject(null)}
          onNavigate={(p) => setSelectedProject(p)}
        />
      </div>
    </section>
  );
};
