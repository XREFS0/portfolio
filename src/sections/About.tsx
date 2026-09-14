import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, Cpu, Code2, Sparkles } from 'lucide-react';

const selectedExpertise = [
  {
    icon: Layers,
    title: 'Software Architecture',
    subtitle: 'Designing scalable and maintainable systems',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    subtitle: 'Protecting systems and data',
  },
  {
    icon: Cpu,
    title: 'Reverse Engineering',
    subtitle: 'Understanding the unknown',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    subtitle: 'From UI to infrastructure',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Narrative & Signature */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-mono tracking-[0.2em] text-cinematic-cyan uppercase font-semibold">
              ABOUT ME
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Bridging Software <br />
              Architecture &amp; <br />
              <span className="text-cinematic-cyan">Cybersecurity</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg font-normal">
              I'm a passionate Software Engineer with a strong focus on cybersecurity, reverse engineering, and building robust systems. I love solving complex problems, learning new technologies, and turning ideas into scalable and secure solutions.
            </p>

            {/* Handwritten Signature */}
            <div className="pt-2">
              <div className="font-signature text-3xl sm:text-4xl text-cinematic-cyan select-none tracking-wide">
                Mohamed Mamdouh
              </div>
            </div>
          </div>

          {/* Right Column: Selected Expertise */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-5">
              Selected Expertise
            </h3>

            <div className="space-y-4">
              {selectedExpertise.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-cinematic-cyan/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cinematic-cyan/10 border border-cinematic-cyan/20 flex items-center justify-center text-cinematic-cyan shrink-0 transition-transform group-hover:scale-105">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cinematic-cyan transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
