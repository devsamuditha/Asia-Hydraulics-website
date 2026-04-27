import React from 'react';

interface PreloaderProps {
  isExiting: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isExiting }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,94,177,0.12),transparent_45%)]"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-56 rounded-full bg-samu/15 blur-2xl animate-pulse"></div>
          <img
            src="/images/Asia-Logo-2-1024x205.png"
            alt="Asia Hydraulics"
            className="relative h-14 sm:h-16 md:h-20 w-auto"
          />
        </div>

        <div className="h-1.5 w-52 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-samu to-samu-dark"
            style={{ animation: 'preloaderSlide 1.35s ease-in-out infinite' }}
          />
        </div>

        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
          Loading
        </p>
      </div>

      <style>{`
        @keyframes preloaderSlide {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(80%); }
          100% { transform: translateX(220%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
