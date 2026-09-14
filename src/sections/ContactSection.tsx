import React from 'react';
import { Mail, Github, Linkedin, Youtube, ArrowRight, Laptop, Send } from 'lucide-react';
import { mailtoUrl, primaryEmail } from '../data/socialLinks';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-black/70 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-cinematic-cyan/15 via-cinematic-blue/10 to-transparent blur-[160px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: CTA Narrative & Button */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-mono tracking-[0.2em] text-cinematic-cyan uppercase font-semibold">
                GET IN TOUCH
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                Have a project in mind? <br />
                <span className="text-cinematic-cyan">Let's build it.</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed font-normal">
                I'm always open to discussing new opportunities, collaborations or just a friendly chat.
              </p>

              <div className="pt-2">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-cinematic-cyan text-black hover:bg-cyan-300 hover:shadow-cyan-glow/50 transition-all duration-300 group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Direct Channels matching mockup */}
            <div className="lg:col-span-6 space-y-4 max-w-md lg:ml-auto w-full">
              {/* Email */}
              <a
                href={mailtoUrl}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cinematic-cyan/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cinematic-cyan/10 border border-cinematic-cyan/20 flex items-center justify-center text-cinematic-cyan shrink-0 transition-transform group-hover:scale-105">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cinematic-cyan transition-colors">
                    {primaryEmail}
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/XREFS0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cinematic-cyan/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 shrink-0 transition-transform group-hover:scale-105">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">GitHub</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cinematic-cyan transition-colors">
                    github.com/XREFS0
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/xrefs0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cinematic-cyan/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 transition-transform group-hover:scale-105">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">LinkedIn</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cinematic-cyan transition-colors">
                    linkedin.com/in/xrefs0
                  </div>
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/MrMasaOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cinematic-cyan/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 transition-transform group-hover:scale-105">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Telegram</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cinematic-cyan transition-colors">
                    @MrMasaOfficial
                  </div>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@XREFS0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cinematic-cyan/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 transition-transform group-hover:scale-105">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">YouTube</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cinematic-cyan transition-colors">
                    youtube.com/@XREFS0
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
