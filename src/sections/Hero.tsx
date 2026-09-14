import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mouse } from 'lucide-react';
import { mailtoUrl } from '../data/socialLinks';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center min-h-[82vh]">
        {/* Left Column: Hero Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6 text-center lg:text-left z-20"
        >
          {/* Eyebrow */}
          <div className="inline-block">
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-cinematic-cyan uppercase">
              SENIOR SYSTEMS ARCHITECT / CYBERSECURITY ENGINEER
            </span>
          </div>

          {/* Giant Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-none">
            Mohamed Mamdouh
          </h1>

          {/* Subtitle */}
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Senior Systems Architect &amp; <br className="hidden sm:inline" />
            <span className="text-cinematic-cyan">Cybersecurity</span> Engineer
          </div>

          {/* Professional Narrative */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
            Building secure, scalable and efficient digital solutions. From code to security — I turn ideas into real impact.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-cinematic-cyan text-black hover:bg-cyan-300 hover:shadow-cyan-glow/50 transition-all duration-300 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Bottom Stats & Scroll Indicator */}
          <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between gap-6 max-w-xl">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">35+</div>
                <div className="text-[11px] text-zinc-500 font-medium">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">60+</div>
                <div className="text-[11px] text-zinc-500 font-medium">Certificates</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">50+</div>
                <div className="text-[11px] text-zinc-500 font-medium">Technologies</div>
              </div>
            </div>

            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, 'about')}
              className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 hover:text-cinematic-cyan transition-colors"
            >
              <span>Scroll Down</span>
              <Mouse className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Cinematic Portrait with Floating Glass Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative flex items-center justify-center z-10"
        >
          {/* Ambient Lighting Behind Portrait */}
          <div className="absolute w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] bg-gradient-to-tr from-cinematic-cyan/20 via-cinematic-blue/15 to-transparent blur-[120px] rounded-full pointer-events-none" />

          {/* Main Portrait Masked Composition */}
          <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden flex items-end justify-center">
            {/* Authentic Photo */}
            <img
              src="/profile/masa.png"
              alt="Mohamed Mamdouh — Senior Systems Architect &amp; Cybersecurity Engineer"
              className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[0.95]"
              loading="eager"
            />

            {/* Seamless Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-cinematic-bg via-transparent to-transparent opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-cinematic-bg/60 via-transparent to-cinematic-bg/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
