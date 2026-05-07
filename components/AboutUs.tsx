
import React, { useEffect, useState } from 'react';
import { BadgeCheck, SprayCan, Wrench, Globe2 } from 'lucide-react';

const AboutUs: React.FC = () => {
  const aboutImages = [
    '/images/RAM_4747.webp',
    '/images/Main%20page%20slider%20pic.JPG',
    
  ];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % aboutImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [aboutImages.length]);

  const values = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Authorized Importer & Distributor"
    },
    {
      icon: <SprayCan className="w-6 h-6" />,
      title: "Sandblast & Airless Spray Equipment"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Technical Service"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Leading Global Brands"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="group rounded-[3rem] overflow-hidden bg-slate-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div
                  className="flex h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${activeImage * 100}%)` }}
                >
                  {aboutImages.map((image, index) => (
                    <div key={image} className="h-full w-full shrink-0">
                      <img
                        src={image}
                        alt={`About Section ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

            </div>

            <div className="mt-8">
              <div className="flex flex-nowrap items-center justify-center gap-8 sm:gap-12 overflow-x-auto" style={{ perspective: '1000px' }}>
                {[
                  'Annuco-300x300.png',
                  'Airblast-logo.jpg',
                  'Artboard-4-300x300.png',
                ].map((logo, idx) => (
                  <div
                    key={logo}
                    className="relative group"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'rotateX(0deg) rotateY(0deg)',
                    }}
                  >
                    <div
                      className="flex items-center justify-center transition-all duration-500 ease-out bg-white rounded-3xl p-4 sm:p-6 shadow-md"
                      style={{
                        minHeight: '160px',
                        minWidth: '160px',
                      }}
                    >
                      <img
                        src={`/images/${logo}`}
                        alt={`Brand logo ${idx + 1}`}
                        className="h-24 w-24 sm:h-32 sm:w-32 object-contain opacity-85 transition-all duration-500 ease-out"
                        style={{
                          filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))',
                          transformStyle: 'preserve-3d',
                        }}
                        loading="lazy"
                      />
                    </div>
                    <div 
                      className="absolute inset-0 rounded-2xl transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-110"
                      style={{
                        background: 'radial-gradient(ellipse at top-right, rgba(45, 171, 245, 0.1), transparent)',
                        transform: 'translateZ(-20px)',
                        backfaceVisibility: 'hidden',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 px-3 py-2 rounded-full mb-6">
              <span className="flex h-1.5 w-1.5">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-samu"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.18em]">About Asia Hydraulic Lanka (PVT) Ltd</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-950 mb-6 leading-tight [word-spacing:0.16em]">
              Sri Lanka’s <span className="text-samu text-2xl md:text-4xl">Trusted</span> <br /> Equipment Partner
            </h2>
            <p className="text-slate-600 text-base md:text-md mb-8 leading-relaxed font-medium">
                          Asia Hydraulics is a well known company for imports and distribution of all kinds of hydraulic and industrial hoses and fittings. We also distribute sandblast equipment and airless spray products.<br />

                         Our staff of highly skilled technicians offers world-class hose assembly, crimping, and repair services, including custom modifications for Komatsu, Caterpillar, Forklifts, and all heavy commercial hydraulic machines.<br />

                         We offer a vast range of quality products from leading suppliers such as Mannuco, AirBlast, LBG, Sunflex, and Graco.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-samu/40 hover:shadow-lg"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-samu/10 text-samu transition-colors duration-300 group-hover:bg-samu group-hover:text-white">
                    {React.isValidElement(item.icon)
                      ? React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })
                      : item.icon}
                  </div>
                  <h4 className="text-md md:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
