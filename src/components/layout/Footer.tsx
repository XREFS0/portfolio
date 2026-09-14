import React from 'react';
import { Github, Linkedin, Youtube, Mail, Send } from 'lucide-react';
import { mailtoUrl } from '../../data/socialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-black/50 py-10 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Brand info matching mockup */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg overflow-hidden border border-cyan-400/30 shadow-sm shrink-0">
              <img
                src="/logo.jpg"
                alt="Mohamed Mamdouh Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-sm tracking-tight text-white">
              Mohamed Mamdouh
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="text-xs text-zinc-400">
            Senior Systems Architect &amp; Cybersecurity Engineer
          </span>
        </div>

        {/* Right Info and Minimal Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Mohamed Mamdouh. All rights reserved.</p>

          <div className="flex items-center gap-3 text-zinc-400">
            <a
              href="https://github.com/XREFS0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cinematic-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/xrefs0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cinematic-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@XREFS0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cinematic-cyan transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/MrMasaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cinematic-cyan transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={mailtoUrl}
              className="hover:text-cinematic-cyan transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
