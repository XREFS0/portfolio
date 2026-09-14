import React from 'react';

export const TechnicalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Cinematic Radial Ambient Lighting */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cinematic-cyan/8 via-cinematic-blue/5 to-transparent blur-[160px] rounded-full pointer-events-none" />

      {/* Atmospheric Side Blooms */}
      <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] bg-cinematic-blue/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-[65%] -left-40 w-[600px] h-[600px] bg-cinematic-violet/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cinematic-cyan/5 blur-[160px] rounded-full pointer-events-none" />
    </div>
  );
};
