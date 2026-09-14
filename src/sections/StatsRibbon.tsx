import React from 'react';

export const StatsRibbon: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-y border-white/[0.06] bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 w-full lg:w-auto">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
              10+
            </div>
            <div className="text-xs text-zinc-400 font-medium mt-1">
              Projects
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
              20+
            </div>
            <div className="text-xs text-zinc-400 font-medium mt-1">
              Certificates
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
              50+
            </div>
            <div className="text-xs text-zinc-400 font-medium mt-1">
              Technologies
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
              3+
            </div>
            <div className="text-xs text-zinc-400 font-medium mt-1">
              Years Experience
            </div>
          </div>
        </div>

        {/* Right Quote matching mockup */}
        <div className="lg:border-l lg:border-white/10 lg:pl-10 text-center lg:text-left">
          <p className="text-sm font-medium text-zinc-300 italic max-w-sm">
            "Technology is not just what I do, it's who I am."
          </p>
        </div>
      </div>
    </section>
  );
};
