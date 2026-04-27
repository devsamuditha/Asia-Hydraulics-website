
import React, { useMemo } from 'react';
import { ArrowRight, Construction } from 'lucide-react';

interface SpecialSectionProps {
  onEnterSubsidiary: () => void;
}

const SpecialSection: React.FC<SpecialSectionProps> = ({ onEnterSubsidiary }) => {
  // Responsive transform for background image
  const getBgTransform = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 'scaleX(-1) translateX(-60px)';
      if (window.innerWidth < 1024) return 'scaleX(-1) translateX(-120px)';
      return 'scaleX(-1) translateX(-300px)';
    }
    return 'scaleX(-1)';
  };

  const [bgTransform, setBgTransform] = React.useState(getBgTransform());

  React.useEffect(() => {
    const handleResize = () => setBgTransform(getBgTransform());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="special" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image only */}

      <div className="absolute inset-0 z-0">
        <img 
          src="/images/RAM_4803.webp" 
          alt="Special Background" 
          className="w-full h-full object-cover"
          style={{
            transform: bgTransform,
            objectPosition: 'center',
            width: '100%',
            height: '100%',
            maxWidth: 'none',
            transition: 'transform 0.3s',
          }}
        />
        {/* Responsive left-to-right #0F172A to transparent gradient overlay */}
        <style>{`
          @media (max-width: 639px) {
            .special-gradient-bg { background: linear-gradient(to right, #0F172A 60%, transparent 100%) !important; }
            .mobile-overlay-bg { display: block !important; }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .special-gradient-bg { background: linear-gradient(to right, #0F172A 40%, transparent 100%) !important; }
            .mobile-overlay-bg { display: block !important; }
          }
          @media (min-width: 1024px) {
            .special-gradient-bg { background: linear-gradient(to right, #0F172A 20%, transparent 110%) !important; }
            .mobile-overlay-bg { display: none !important; }
          }
        `}</style>
        {/* #161e31 overlay for mobile and tab only */}
        <div className="absolute inset-0 mobile-overlay-bg" style={{ background: '#161e31', opacity: 0.88, display: 'none', pointerEvents: 'none' }} />
        <div className="absolute inset-0 special-gradient-bg" style={{ opacity: 0.97 }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl w-full">
          <div className="inline-flex items-center space-x-2 text-samu font-bold text-[10px] tracking-[0.18em] uppercase mb-6">
            <div className="w-8 h-[1px] bg-samu"></div>
            <span>Strategic Subsidiary</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight mb-5">
            <span className="text-samu italic font-extrabold text-2xl md:text-4xl lg:text-5xl">MANNUCO </span>
          </h2>
          <p className="text-md text-slate-400 leading-relaxed mb-8 font-medium">
            Our Tier-1 division specialized in mega-infrastructure deployment and heavy structural foundations. We provide the skeleton for tomorrow's skyscrapers.
          </p>
          <button 
            onClick={onEnterSubsidiary}
            className="group flex items-center space-x-2 bg-white text-slate-950 px-6 py-3 rounded-full font-bold text-[11px] tracking-widest hover:bg-samu hover:text-white transition-all shadow-2xl"
          >
            <span>VISIT SITE</span>
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
