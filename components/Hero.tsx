import React, { memo } from 'react';
import { ArrowRight, Award, BadgeCheck, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const backgroundImage = '/images/RAM_4747.webp';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      {/* Background overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.88) 52%, rgba(255,255,255,0) 88%)',
        }}
      ></div>
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-[2] opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2dabf5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-16 md:pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
          {/* Content Side */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-slate-50 border border-slate-100 px-3 sm:px-4 py-2 rounded-full mb-5 sm:mb-7">
              <span className="flex h-1.5 w-1.5">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-samu"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-[0.18em]">Trusted Industrial Supplier</span>
            </div>
            <h1 className="text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-950 leading-[1.1] mb-5 sm:mb-7 tracking-tight">
              <span className="block font-extrabold text-samu drop-shadow-[0_4px_24px_rgba(30,41,59,0.35)] py-1.5">
                <span className="text-xl xs:text-2xl md:text-4xl lg:text-5xl">No 1</span><br />
                <span className="text-samu text-xl xs:text-2xl md:text-4xl lg:text-5xl">Hydraulic Hoses</span><br />
                <span className="text-xl xs:text-2xl md:text-4xl lg:text-5xl">supplier in Sri Lanka</span>
              </span>
            </h1>
            <p className="text-md xs:text-base text-slate-700 mb-4 sm:mb-5 pr-0 sm:pr-20 md:pr-60">
              Asia Hydraulics is an importer and distributor of hydraulics and industrial hoses and fittings in Sri Lanka. We are the leading importer for sandblasting equipment and airless spray products of high-quality brands in the global market.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-4 sm:mb-5">
              <a href="#services" className="w-full sm:w-auto bg-slate-950 text-white px-4 py-2 rounded-xl font-semibold text-[11px] tracking-wide hover:bg-samu transition-all shadow-lg shadow-slate-950/10 flex items-center justify-center space-x-1.5 group">
                <span className="text-sm sm:text-base">VIEW OUR PRODUCTS</span>
                <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            {/* Trust Ticker */}
            <div className="pt-4 sm:pt-5 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7">
              <div className="flex items-center space-x-2"><BadgeCheck size={16} className="text-samu"/><span className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-widest">High Quality</span></div>
              <div className="flex items-center space-x-2"><ShieldCheck size={16} className="text-samu"/><span className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-widest">High Durability</span></div>
              <div className="flex items-center space-x-2"><Award size={16} className="text-samu"/><span className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-widest">20 Years Service</span></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
