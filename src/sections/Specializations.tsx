import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  bgGlow: string;
}

interface SkillCategory {
  id: string;
  num: string;
  title: string;
  headline: string;
  description: string;
  technologies: TechItem[];
}

// Authentic brand SVG icons
const icons = {
  csharp: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M116.5 64c0 28.994-23.506 52.5-52.5 52.5S11.5 92.994 11.5 64 35.006 11.5 64 11.5s52.5 23.506 52.5 52.5z" fill="#9B4993"/>
      <path d="M64 24.5C42.185 24.5 24.5 42.185 24.5 64S42.185 103.5 64 103.5c16.275 0 30.29-9.835 36.22-23.89h-17.29C78.435 86.85 71.745 91.5 64 91.5c-15.188 0-27.5-12.312-27.5-27.5S48.812 36.5 64 36.5c7.745 0 14.435 4.65 18.93 11.89h17.29C94.29 34.335 80.275 24.5 64 24.5z" fill="#fff"/>
      <path d="M84.5 54h4v6h-4v7h-6v-7h-5v7h-6v-7h-4v-6h4v-7h-4v-6h4v-7h6v7h5v-7h6v7h4v6h-4v7zm-6 0v-7h-5v7h5zm0 13v-7h-5v7h5z" fill="#fff"/>
    </svg>
  ),
  typescript: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M1.5 1.5h125v125H1.5z" fill="#3178C6"/>
      <path d="M70.3 70.8h13.9c1.6 0 3.3.4 4.8 1.1 1.6.7 2.9 1.8 4 3.1 1.1 1.3 1.9 2.9 2.4 4.6.6 1.7.9 3.6.9 5.5 0 1.9-.3 3.7-.9 5.4-.6 1.7-1.4 3.3-2.6 4.6-1.1 1.3-2.5 2.4-4.2 3.1-1.6.7-3.5 1.1-5.6 1.1-1.8 0-3.6-.3-5.3-.8-1.7-.5-3.3-1.3-4.7-2.3-1.4-1-2.6-2.2-3.6-3.7-1-1.5-1.7-3.1-2.2-4.9l9.9-4c.3 1.2.8 2.2 1.4 3.1.7.9 1.5 1.6 2.4 2.1.9.6 2 .9 3.2.9 1.2 0 2.2-.2 3.1-.7.9-.5 1.6-1.1 2.1-2 .5-.8.8-1.8.8-2.9 0-1.2-.3-2.2-.8-3-.5-.8-1.3-1.4-2.2-1.9-.9-.4-2-.7-3.2-.8l-4.7-.6c-2.3-.3-4.3-.9-6.1-1.8-1.8-.9-3.3-2.2-4.4-3.8-1.1-1.6-1.7-3.7-1.7-6.2 0-2.1.4-4 1.1-5.7.7-1.7 1.8-3.2 3.1-4.4 1.3-1.2 3-2.2 4.9-2.8 1.9-.6 4-.9 6.3-.9 2 0 3.9.3 5.7.8 1.8.5 3.3 1.3 4.6 2.4 1.3 1 2.4 2.3 3.2 3.8.8 1.5 1.3 3.1 1.6 4.8l-9.8 4c-.3-1.4-.9-2.5-1.9-3.4-1-.9-2.3-1.4-4-1.4-1.2 0-2.2.2-3.1.7-.8.5-1.5 1.1-1.9 1.9-.4.8-.7 1.7-.7 2.7 0 1 .3 1.9.8 2.6.5.7 1.2 1.3 2.1 1.7.9.4 1.9.7 3.1.8l4.4.6zM46.7 41.5h11.7v57.8H46.7V51.7H31.8v-10.2h26.6v10.2H46.7V41.5z" fill="#fff"/>
    </svg>
  ),
  python: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M63.6 5.8c-14.8 0-23.7 6.4-23.7 18.7v13.7h24.2v3.4H24.3C9.5 41.6 0 50.8 0 65.6c0 14.8 9.5 24 24.3 24h6.8v-10.2c0-8.8 7.3-16.1 16.1-16.1h24.2c6.5 0 11.8-5.3 11.8-11.8V24.5C87.2 12.2 78.4 5.8 63.6 5.8zm-9.3 7.6a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4z" fill="#3776AB"/>
      <path d="M64.4 122.2c14.8 0 23.7-6.4 23.7-18.7V89.8H63.9v-3.4h39.8c14.8 0 24.3-9.2 24.3-24 0-14.8-9.5-24-24.3-24h-6.8v10.2c0 8.8-7.3 16.1-16.1 16.1H56.6c-6.5 0-11.8 5.3-11.8 11.8v27.2c0 12.3 8.8 18.7 23.6 18.7zm9.3-7.6a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4z" fill="#FFD438"/>
    </svg>
  ),
  java: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M47.2 92.4s-8.1 4.7 5.8 6.3c16.9 1.9 25.7 1.6 44.5-2.2 0 0 5.4 3.5-6.5 6.3-23.2 5.5-56.1 3.5-68.5-2.8-5-2.6 3.8-6.1 24.7-7.6z" fill="#EA2D2E"/>
      <path d="M41.7 80.9s-9.3 6.6 4.4 8.2c17.1 2 29.8 2.2 53.6-3 0 0 3.7 2.7-4.9 4.9-20.3 5.3-54.8 4.4-69.5-2.2-6.5-3 2.9-6.7 16.4-7.9z" fill="#EA2D2E"/>
      <path d="M63.7 58.1c4.9 5.8-3.7 11.2-3.7 11.2s12.5-6.4 6.7-14.5c-5.5-7.7-10.4-11.6 14.1-23.7-27.1 9.9-22 21.2-17.1 27z" fill="#5382A1"/>
      <path d="M89.2 82.2c16.6-9.1 9.1-18.1 3.6-16.9-1.3.3-1.9.9-1.9.9s1-.6 2.8-.8c8-1 12.8 9.5-4.5 16.8z" fill="#EA2D2E"/>
      <path d="M49.9 70.3s-15.6 3.7-5.5 5.2c12.4 1.8 34.6 1.4 56.4-2.8 0 0 3.3 2.1-4.1 3.7-20.2 4.5-57.8 4.3-67.4-1.2-7.5-4.4 5-6.5 20.6-4.9z" fill="#EA2D2E"/>
      <path d="M78.6 40.5c-6.8-9.4-15.8-14-15.8-14s3.7 3.5 8.4 10.6c5.8 8.7 1.9 13.5-3.8 20.2-7.4 8.8 1.1 13.9 1.1 13.9s-4.6-5.8 2.5-12.7c7.4-7.2 13-10.8 7.6-18z" fill="#5382A1"/>
      <path d="M84.4 103.5c-20.2 6.5-58.9 5.5-71.1-.9-4.8-2.5 3.3-5.2 9.6-6.1 4.5-.6 7.6-.7 7.6-.7s-5.6-3.6-17.2 1.3c-11.7 5 3.3 9.4 17.5 10.9 23.3 2.5 50.8.8 63-3 6.9-2.2-9.4-1.5-9.4-1.5z" fill="#EA2D2E"/>
    </svg>
  ),
  cpp: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M116.5 64c0 28.994-23.506 52.5-52.5 52.5S11.5 92.994 11.5 64 35.006 11.5 64 11.5s52.5 23.506 52.5 52.5z" fill="#00599C"/>
      <path d="M64 25C42.46 25 25 42.46 25 64s17.46 39 39 39c16.03 0 29.84-9.69 35.69-23.53H82.26C77.83 85.94 71.42 90.5 64 90.5c-14.64 0-26.5-11.86-26.5-26.5S49.36 37.5 64 37.5c7.42 0 13.83 4.56 18.26 11.03h17.43C93.84 34.69 80.03 25 64 25z" fill="#fff"/>
      <path d="M85 58h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4zm18 0h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4z" fill="#fff"/>
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M1.5 1.5h125v125H1.5z" fill="#F7DF1E"/>
      <path d="M25.7 107.8l9.9-6c2 3.5 4.6 6.1 9.4 6.1 4.8 0 7.8-2.4 7.8-11.7V57.3h12.5v39.1c0 15.7-9.2 22.8-22 22.8-9.8 0-15.6-5.1-17.6-11.4zm48.7-2.3l9.9-5.7c2.7 4.3 6.3 7.8 12.8 7.8 5.6 0 9.2-2.8 9.2-6.7 0-4.6-3.7-6.3-10-9-8.7-3.7-14.5-8.3-14.5-18 0-9 6.8-16.1 17.5-16.1 7.6 0 13.1 2.8 16.9 9.5l-9.2 5.9c-2-3.4-4.2-4.9-7.7-4.9-3.7 0-6.1 2.3-6.1 5.3 0 3.7 2.4 5.2 8.1 7.6 10.3 4.4 16.5 9 16.5 19.3 0 11-8.7 17.3-20.7 17.3-11.2 0-18.8-5.3-22.8-12.3z" fill="#000"/>
    </svg>
  ),
  dotnet: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="54" fill="#512BD4"/>
      <path d="M28 76V52h6v24h-6zm15 0V52h14c5 0 9 3.5 9 8.5s-4 8.5-9 8.5h-8v7h-6zm6-12h7c2 0 4-1 4-3.5S58 57 56 57h-7v7zm26 12V52h6v18h13v6H75zm26 0V52h6v24h-6z" fill="#fff"/>
    </svg>
  ),
  react: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <ellipse cx="64" cy="64" rx="14" ry="34" transform="rotate(30 64 64)" stroke="#61DAFB" strokeWidth="6"/>
      <ellipse cx="64" cy="64" rx="14" ry="34" transform="rotate(90 64 64)" stroke="#61DAFB" strokeWidth="6"/>
      <ellipse cx="64" cy="64" rx="14" ry="34" transform="rotate(150 64 64)" stroke="#61DAFB" strokeWidth="6"/>
      <circle cx="64" cy="64" r="8" fill="#61DAFB"/>
    </svg>
  ),
  qt: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#41CD52"/>
      <path d="M60 42c-15 0-25 10-25 24 0 11 7 20 18 23l-5 8h8l4-7c2 .2 4 .3 6 .3 15 0 25-10 25-24.3C91 52 81 42 66 42h-6zm3 40c-11 0-17-8-17-17s6-17 17-17 17 8 17 17-6 17-17 17zm32-27h-7v-8h-6v8h-6v6h6v14c0 6 3 9 9 9h4v-6h-3c-3 0-4-1-4-4V61h7v-6z" fill="#fff"/>
    </svg>
  ),
  nodejs: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M64 8l52 30v60l-52 30-52-30V38L64 8z" fill="#339933"/>
      <path d="M64 42c-12 0-20 6-20 17 0 19 28 12 28 23 0 4-3 6-8 6-6 0-9-3-9-8h-8c0 10 7 15 17 15 12 0 20-6 20-17 0-19-28-12-28-23 0-4 3-6 8-6 5 0 8 2 8 7h8c0-9-7-14-16-14z" fill="#fff"/>
    </svg>
  ),
  docker: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <rect x="24" y="44" width="14" height="14" rx="2" fill="#2496ED"/>
      <rect x="42" y="44" width="14" height="14" rx="2" fill="#2496ED"/>
      <rect x="60" y="44" width="14" height="14" rx="2" fill="#2496ED"/>
      <rect x="42" y="26" width="14" height="14" rx="2" fill="#2496ED"/>
      <rect x="60" y="26" width="14" height="14" rx="2" fill="#2496ED"/>
      <rect x="78" y="44" width="14" height="14" rx="2" fill="#2496ED"/>
      <path d="M124 58c-3-2-8-3-13-1-3-8-10-13-19-14l-4 3c2 8 0 17-6 23-4 4-9 6-15 6H16c-4 0-8 1-12 3 5 18 20 32 38 37 26 7 55 4 78-10 10-6 16-16 18-27 2-2 1-5-1-7h-13z" fill="#2496ED"/>
    </svg>
  ),
  git: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M124.7 57.5L70.5 3.3a9.2 9.2 0 00-13 0L44.8 16l16.4 16.4a10.9 10.9 0 0113.8 13.8l15.8 15.8a10.8 10.8 0 11-6.5 6.5L69 53.2v31.4a10.9 10.9 0 11-9.2 0V51.7a10.9 10.9 0 01-5.9-14.4L37.5 20.9 3.3 55.1a9.2 9.2 0 000 13l54.2 54.2a9.2 9.2 0 0013 0l54.2-54.2a9.2 9.2 0 000-13.6z" fill="#F05032"/>
    </svg>
  ),
  linux: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M64 10c-18 0-26 14-26 32 0 12 4 24 9 32-6 7-14 18-14 26 0 12 14 18 31 18s31-6 31-18c0-8-8-19-14-26 5-8 9-20 9-32 0-18-8-32-26-32z" fill="#000"/>
      <ellipse cx="54" cy="40" rx="3" ry="5" fill="#fff"/>
      <ellipse cx="74" cy="40" rx="3" ry="5" fill="#fff"/>
      <path d="M56 48c0 5 4 9 8 9s8-4 8-9l-8 3-8-3z" fill="#FFA500"/>
      <path d="M42 90c-8 0-14 4-14 9 0 6 9 9 20 9s16-3 16-7l-22-11zm44 0c8 0 14 4 14 9 0 6-9 9-20 9s-16-3-16-7l22-11z" fill="#FFA500"/>
      <ellipse cx="64" cy="85" rx="18" ry="24" fill="#fff"/>
    </svg>
  ),
  postgresql: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M64 10C35 10 20 28 20 54c0 28 18 48 38 52v-16c-10-3-17-12-17-23 0-14 11-25 25-25s25 11 25 25c0 11-7 20-17 23v16c20-4 38-24 38-52 0-26-15-44-48-44z" fill="#336791"/>
      <path d="M64 36c-18 0-28 12-28 26s10 26 28 26 28-12 28-26-10-26-28-26z" fill="#4169E1"/>
    </svg>
  ),
  supabase: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M72 10L16 78h44l-8 40 56-68H64l8-40z" fill="#3ECF8E"/>
    </svg>
  ),
  sqlite: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#003B57"/>
      <path d="M38 48c0-8 12-14 26-14s26 6 26 14v32c0 8-12 14-26 14s-26-6-26-14V48z" fill="#00A9E0"/>
      <ellipse cx="64" cy="48" rx="26" ry="10" fill="#6BD9FF"/>
    </svg>
  ),
  mysql: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M110 50c-6-16-19-24-34-24-20 0-38 15-42 37-3 15 3 32 14 41 12 10 30 11 44 2-5-4-9-9-11-15-14 8-32 3-38-11-6-15 3-32 18-36 14-4 29 3 35 17 3-5 8-9 14-11z" fill="#00758F"/>
      <path d="M102 70c0 8-6 15-14 15s-14-7-14-15 6-15 14-15 14 7 14 15z" fill="#F29111"/>
    </svg>
  ),
  mongodb: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M64 6c-2 0-3 1-4 3-12 16-32 41-32 64 0 24 16 45 36 49v-42c0-1 0-2 1-3l12-12v-9l-13-13V6zm0 0v37l13 13v9l-12 12c-1 1-1 2-1 3v42c20-4 36-25 36-49 0-23-20-48-32-64-1-2-2-3-4-3z" fill="#47A248"/>
    </svg>
  ),
  vscode: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M96 14l-52 38L22 36l-8 6 16 22L14 86l8 6 22-16 52 38 18-8V22l-18-8z" fill="#007ACC"/>
      <path d="M96 14L44 52l52 38V14z" fill="#1F8AD2"/>
      <path d="M96 90l18 16V22L96 38v52z" fill="#0066B8"/>
    </svg>
  ),
  securityShield: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M12 8v4"/>
      <path d="M12 16h.01"/>
    </svg>
  ),
  binaryCode: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
      <line x1="14" y1="4" x2="10" y2="20"/>
    </svg>
  ),
  networkRadar: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a10 10 0 0 1 10 10"/>
      <path d="M12 6a6 6 0 0 1 6 6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  forensics: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <path d="M11 8v6"/>
      <path d="M8 11h6"/>
    </svg>
  ),
  wireshark: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <path d="M18 100c14-2 36-12 52-32 14-18 26-44 38-52-4 12-2 32 6 44 8 12 18 16 14 24-10 6-36 12-64 16-20 4-38 2-46 0z" fill="#1679A7"/>
    </svg>
  ),
  selenium: (
    <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="#43B02A"/>
      <path d="M42 46h44v10H56v12h24v10H56v14h30v10H42V46z" fill="#fff"/>
    </svg>
  ),
  testing: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  terminalShell: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#E4E4E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  ),
};

const categories: SkillCategory[] = [
  {
    id: 'languages',
    num: '01',
    title: 'Languages',
    headline: 'Languages',
    description: 'Strong foundation in systems, typed and object-oriented programming languages.',
    technologies: [
      { name: 'C#', icon: icons.csharp, bgGlow: 'hover:border-purple-500/40' },
      { name: 'TypeScript', icon: icons.typescript, bgGlow: 'hover:border-blue-500/40' },
      { name: 'Python', icon: icons.python, bgGlow: 'hover:border-yellow-500/40' },
      { name: 'Java', icon: icons.java, bgGlow: 'hover:border-red-500/40' },
      { name: 'C++', icon: icons.cpp, bgGlow: 'hover:border-blue-600/40' },
      { name: 'JavaScript', icon: icons.javascript, bgGlow: 'hover:border-amber-400/40' },
    ],
  },
  {
    id: 'frameworks',
    num: '02',
    title: 'Frameworks',
    headline: 'Frameworks & Systems',
    description: 'Desktop frameworks, reactive user interfaces, and robust backend services.',
    technologies: [
      { name: '.NET 8 / Core', icon: icons.dotnet, bgGlow: 'hover:border-purple-500/40' },
      { name: 'WPF & MVVM', icon: icons.dotnet, bgGlow: 'hover:border-indigo-500/40' },
      { name: 'PySide6 / Qt', icon: icons.qt, bgGlow: 'hover:border-emerald-500/40' },
      { name: 'React', icon: icons.react, bgGlow: 'hover:border-cyan-400/40' },
      { name: 'Node.js & Express', icon: icons.nodejs, bgGlow: 'hover:border-green-500/40' },
      { name: 'Windows Forms', icon: icons.dotnet, bgGlow: 'hover:border-blue-500/40' },
    ],
  },
  {
    id: 'security',
    num: '03',
    title: 'Security',
    headline: 'Cybersecurity & Forensics',
    description: 'Offensive reconnaissance, reverse code engineering, and digital forensics.',
    technologies: [
      { name: 'Reverse Engineering', icon: icons.binaryCode, bgGlow: 'hover:border-cyan-500/40' },
      { name: 'Malware Analysis', icon: icons.securityShield, bgGlow: 'hover:border-rose-500/40' },
      { name: 'Digital Forensics', icon: icons.forensics, bgGlow: 'hover:border-purple-500/40' },
      { name: 'Network Scanning', icon: icons.networkRadar, bgGlow: 'hover:border-teal-500/40' },
      { name: 'OWASP Top 10', icon: icons.securityShield, bgGlow: 'hover:border-amber-500/40' },
      { name: 'DevSecOps', icon: icons.testing, bgGlow: 'hover:border-emerald-500/40' },
    ],
  },
  {
    id: 'infrastructure',
    num: '04',
    title: 'Infrastructure',
    headline: 'Systems & Infrastructure',
    description: 'Operating systems, network protocol handling, and system architecture.',
    technologies: [
      { name: 'Linux (Red Hat/Ubuntu)', icon: icons.linux, bgGlow: 'hover:border-amber-500/40' },
      { name: 'Bash Scripting', icon: icons.terminalShell, bgGlow: 'hover:border-zinc-400/40' },
      { name: 'Docker Containers', icon: icons.docker, bgGlow: 'hover:border-blue-500/40' },
      { name: 'Git Version Control', icon: icons.git, bgGlow: 'hover:border-orange-500/40' },
      { name: 'Raw Sockets & Scapy', icon: icons.networkRadar, bgGlow: 'hover:border-cyan-500/40' },
      { name: 'SELinux & Firewalls', icon: icons.securityShield, bgGlow: 'hover:border-red-500/40' },
    ],
  },
  {
    id: 'databases',
    num: '05',
    title: 'Databases',
    headline: 'Databases & Storage',
    description: 'Relational data modeling, ACID compliance, and embedded database engines.',
    technologies: [
      { name: 'PostgreSQL', icon: icons.postgresql, bgGlow: 'hover:border-blue-500/40' },
      { name: 'Supabase', icon: icons.supabase, bgGlow: 'hover:border-emerald-400/40' },
      { name: 'SQLite', icon: icons.sqlite, bgGlow: 'hover:border-sky-500/40' },
      { name: 'MySQL', icon: icons.mysql, bgGlow: 'hover:border-blue-600/40' },
      { name: 'MongoDB', icon: icons.mongodb, bgGlow: 'hover:border-green-500/40' },
      { name: 'Dapper ORM', icon: icons.dotnet, bgGlow: 'hover:border-purple-500/40' },
    ],
  },
  {
    id: 'tools',
    num: '06',
    title: 'Tools',
    headline: 'Developer Tools & QA',
    description: 'Testing frameworks, browser automation, packet sniffers, and IDEs.',
    technologies: [
      { name: 'VS Code & Visual Studio', icon: icons.vscode, bgGlow: 'hover:border-blue-500/40' },
      { name: 'Selenium WebDriver', icon: icons.selenium, bgGlow: 'hover:border-green-500/40' },
      { name: 'Wireshark & Packet Capture', icon: icons.wireshark, bgGlow: 'hover:border-blue-500/40' },
      { name: 'xUnit & Testing', icon: icons.testing, bgGlow: 'hover:border-emerald-500/40' },
      { name: 'Postman & REST APIs', icon: icons.binaryCode, bgGlow: 'hover:border-orange-500/40' },
      { name: 'LiveCharts2 Telemetry', icon: icons.networkRadar, bgGlow: 'hover:border-cyan-500/40' },
    ],
  },
];

export const Specializations: React.FC = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Skills &amp; Technologies
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              TECHNICAL <br />
              <span className="text-cyan-400">EXPERTISE</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-md">
              A solid foundation in modern technologies and a deep specialization in security, performance, and clean architecture.
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Split Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0c1017] border border-white/[0.08] p-6 sm:p-8 shadow-2xl grid grid-cols-1 sm:grid-cols-12 gap-6 min-h-[380px] backdrop-blur-xl">
              
              {/* Left Column of Panel: Category Selection */}
              <div className="sm:col-span-5 space-y-1.5 border-b sm:border-b-0 sm:border-r border-white/[0.08] pb-4 sm:pb-0 sm:pr-4">
                {categories.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveTab(cat.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-white text-black font-bold shadow-sm'
                          : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className={`font-mono text-xs ${isActive ? 'text-zinc-700 font-bold' : 'text-zinc-500'}`}>
                        {cat.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide">
                        {cat.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Column of Panel: Technologies Display with Real Icons */}
              <div className="sm:col-span-7 flex flex-col justify-between sm:pl-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {currentCategory.headline}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {currentCategory.description}
                      </p>
                    </div>

                    {/* Tech Badges Grid with Real Brand SVGs */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {currentCategory.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] ${tech.bgGlow} transition-all duration-200 group`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center shadow-sm shrink-0 transition-transform group-hover:scale-110">
                            {tech.icon}
                          </div>
                          <span className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
