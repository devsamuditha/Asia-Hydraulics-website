import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { SERVICES_DATA } from '../constants';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import ProductSpecsModal from './ProductSpecsModal';

interface ServicesProps {
  onViewAll?: (category: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onViewAll }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Memoize setSelectedProduct to avoid unnecessary re-renders
  const handleProductClick = useCallback((product: Product) => setSelectedProduct(product), []);
  const sandBlastingProduct: Product = {
    id: 'sb1',
    name: 'Sand Blasting Machine',
    image: '/images/air-less.png',
    specs: ['Heavy Duty', 'High Capacity', 'Durable Construction'],
    description: 'Efficient sand blasting machine suitable for a wide range of industrial uses.'
  };
  const airlessProduct: Product = {
    id: 'al1',
    name: 'Airless Spray Machine',
    image: '/images/Sandblasting-equipments.png',
    specs: ['Fine Spray', 'Easy Operation', 'Consistent Results'],
    description: 'Reliable airless spray machine for industrial and commercial use.'
  };

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 px-2 py-1.5 rounded-full mb-5">
            <span className="flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-samu"></span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.18em]">Our Products</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-950 mb-6 leading-tight [word-spacing:0.16em]">Hydraulic & Industrial Hoses and Fittings</h2>
          <p className="text-slate-600 text-md font-medium leading-relaxed">
            High-quality hydraulic hoses, industrial hoses, and precision fittings designed for durability, safety, and maximum performance across demanding applications.
          </p>
        </div>

        {/* Division 1: Hydraulics */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-200 pb-6 gap-6">
            <div className="max-w-md">
              <h3 className="text-1xl md:text-2xl font-bold text-slate-950 mb-3 flex items-center">
                Hydraulics Hoses
                <span className="ml-3 w-8 h-[2px] bg-samu"></span>
              </h3>
            </div>
            <button 
              onClick={() => onViewAll?.('hydraulic')}
              className="group flex items-center space-x-2 text-[13px] font-bold tracking-wide text-slate-950 hover:text-samu transition-all"
            >
              <span>SEE MORE</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <ProductSlider products={SERVICES_DATA.hydraulic.products} onProductClick={handleProductClick} />
        </div>

        {/* Division 2: Industrial */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-200 pb-6 gap-6">
            <div className="max-w-md">
              <h3 className="text-1xl md:text-2xl font-bold text-slate-950 mb-3 flex items-center">
                Industrial Hoses
                <span className="ml-3 w-8 h-[2px] bg-samu"></span>
              </h3>
            </div>
            <button 
              onClick={() => onViewAll?.('industrial')}
              className="group flex items-center space-x-2 text-[13px] font-bold tracking-wide text-slate-950 hover:text-samu transition-all"
            >
              <span>SEE MORE</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <ProductSlider products={SERVICES_DATA.industrial.products} onProductClick={handleProductClick} />
                {/* Division 3: Fittings */}
                <div className="mb-32 mt-[110px]">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-200 pb-6 gap-6">
                    <div className="max-w-md">
                      <h3 className="text-1xl md:text-2xl font-bold text-slate-950 mb-3 flex items-center">
                        Fittings
                        <span className="ml-3 w-8 h-[2px] bg-samu"></span>
                      </h3>
                    </div>
                    <button 
                      onClick={() => onViewAll && onViewAll('fittings')}
                      className="group flex items-center space-x-2 text-[13px] font-bold tracking-wide text-slate-950 hover:text-samu transition-all"
                    >
                      <span>SEE MORE</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <ProductSlider 
                    products={[
                        { id: 'fit1', name: 'Claw Couplings', image: '/images/Claw%20couplings.jpg', specs: ['Steel', '45° Angle'], description: 'Durable hydraulic elbow fitting.' },
                        { id: 'fit2', name: 'Adaptors', image: '/images/Adaptors.jpg', specs: ['Brass', 'Threaded'], description: 'Reliable pipe coupling for industrial use.' },
                        { id: 'fit3', name: 'Ferrules', image: '/images/Ferrules.JPG', specs: ['Stainless', 'Quick Release'], description: 'Easy-to-use quick connector.' },
                        { id: 'fit4', name: 'Fittings', image: '/images/Fittings.JPG', specs: ['Steel', 'T-Shape'], description: 'Versatile tee fitting for multiple connections.' },
                        { id: 'fit5', name: 'Flangers', image: '/images/Flangers.JPG', specs: ['Aluminum', 'Size Reduction'], description: 'Reducer fitting for size transitions.' },
                        { id: 'fit6', name: 'Jonters', image: '/images/Jointers.JPG', specs: ['Brass', 'Threaded'], description: 'Secure threaded joint for hydraulic systems.' },
                        { id: 'fit7', name: 'Cam lock couplings', image: '/images/Cam%20lock%20couplings.JPG', specs: ['Steel', 'Quick Connect'], description: 'Quick connect coupling for easy assembly.' },
                    ]}
                    onProductClick={handleProductClick}
                  />
                </div>
        </div>

        {/* Division 4: Sand Blasting Equipments */}
        <div className="mb-24">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl md:text-4xl font-bold text-slate-950 mb-6 leading-tight">Sand Blasting Equipment</h3>
            <p className="text-slate-600 text-md font-medium leading-relaxed">High-performance sand blasting equipment for industrial applications.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm h-full flex flex-col">
              <div className="overflow-hidden rounded-xl bg-slate-100 h-[320px] sm:h-[360px] lg:h-[380px]">
                <img
                  src={sandBlastingProduct.image}
                  alt={sandBlastingProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">{sandBlastingProduct.name}</p>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">SM-{sandBlastingProduct.id.toUpperCase()}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm h-full">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">Product Overview</p>
              <h4 className="text-xl md:text-2xl font-bold text-slate-950 mb-4">{sandBlastingProduct.name}</h4>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{sandBlastingProduct.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">Product Code</p>
                  <p className="text-sm font-semibold text-slate-800">SM-{sandBlastingProduct.id.toUpperCase()}</p>
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">Category</p>
                  <p className="text-sm font-semibold text-slate-800">Sand Blasting</p>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">Key Features</p>
                <ul className="space-y-2.5">
                  {sandBlastingProduct.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-samu"></span>
                      <span className="font-medium leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Division 5: AirLess Spray Products */}
        <div className="mb-32">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl md:text-4xl font-bold text-slate-950 mb-6 leading-tight">AirLess Spray Equipment</h3>
            <p className="text-slate-600 text-md font-medium leading-relaxed">Professional airless spray equipment for precise applications.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm h-full flex flex-col">
              <div className="overflow-hidden rounded-xl bg-slate-100 h-[320px] sm:h-[360px] lg:h-[380px]">
                <img
                  src={airlessProduct.image}
                  alt={airlessProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">{airlessProduct.name}</p>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">SM-{airlessProduct.id.toUpperCase()}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm h-full">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">Product Overview</p>
              <h4 className="text-xl md:text-2xl font-bold text-slate-950 mb-4">{airlessProduct.name}</h4>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">{airlessProduct.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">Product Code</p>
                  <p className="text-sm font-semibold text-slate-800">SM-{airlessProduct.id.toUpperCase()}</p>
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">Category</p>
                  <p className="text-sm font-semibold text-slate-800">Airless Spray</p>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">Key Features</p>
                <ul className="space-y-2.5">
                  {airlessProduct.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-samu"></span>
                      <span className="font-medium leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductSpecsModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

const ProductSlider = memo(({ products, onProductClick }: { products: Product[], onProductClick: (p: Product) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(5);

  // Responsive items per view (debounced)
  useEffect(() => {
    let timeout: any;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setItemsPerView(window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 5));
      }, 100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // Auto-play: advance slider every 3 seconds on all devices
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  // Reset index if products change
  useEffect(() => {
    setCurrentIndex(0);
  }, [products]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  // Memoize visible products
  const getVisibleProducts = useCallback(() => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(products[(currentIndex + i) % products.length]);
    }
    return visible;
  }, [products, currentIndex, itemsPerView]);

  // Touch swipe handlers
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        // Swiped left
        handleNext();
      } else if (diff < -50) {
        // Swiped right
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex overflow-hidden -mx-4">
        <div 
          className="flex"
          style={{ width: '100%' }}
        >
          {getVisibleProducts().map((product, idx) => (
            <div key={`${product.id}-${idx}`} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-4">
              <MemoProductCard product={product} onClick={() => onProductClick(product)} />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-slate-900 p-4 rounded-full shadow-xl hover:bg-samu hover:text-white z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-slate-900 p-4 rounded-full shadow-xl hover:bg-samu hover:text-white z-10"
      >
        <ChevronRight size={24} />
      </button>
      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2 mt-12">
        {products.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full ${currentIndex === idx ? 'w-8 bg-samu' : 'w-2 bg-slate-200'}`}
          />
        ))}
      </div>
    </div>
  );
});

const MemoProductCard = memo(function ProductCard({ product, onClick }: { product: Product, onClick: () => void }) {
  // Only highlight sand blasting and airless spray products
  const isSpecial = product.id === 'sb1' || product.id === 'al1';
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-xl p-3 border border-slate-100 hover:border-samu/30 hover:shadow-xl flex flex-col shadow-sm"
      style={isSpecial ? {
        width: '100%',
        maxWidth: 600,
        minWidth: 0,
        minHeight: 0,
        height: 'auto',
        alignSelf: 'flex-start',
        boxSizing: 'border-box'
      } : {}}
    >
      <div
        className={`rounded-lg overflow-hidden mb-4 bg-slate-100 relative${isSpecial ? ' border-2 border-samu' : ''} ${isSpecial ? '' : 'aspect-square'}`}
        style={isSpecial ? {
          width: '100%',
          maxWidth: 550,
          minWidth: 0,
          height: 'auto',
          alignSelf: 'flex-start'
        } : {}}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 ${isSpecial ? '' : 'aspect-square'} responsive-special-img`}
          style={isSpecial ? {
            width: '100%',
            maxWidth: 550,
            minWidth: 0,
            height: 'auto',
            display: 'block'
          } : {}}
        />
        <div className="absolute inset-0 bg-samu/0 group-hover:bg-samu/5 transition-colors duration-300"></div>
      </div>
      <div className="flex flex-col flex-grow">
        <h4 className="font-bold text-slate-950 mb-1 text-lg sm:text-md group-hover:text-samu transition-colors line-clamp-2 text-center">
          {product.name}
        </h4>
        <div className="mt-auto pt-2 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">SM-{product.id.toUpperCase()}</span>
          <div className="bg-slate-50 group-hover:bg-samu p-1 rounded-lg transition-colors duration-300">
            <ArrowRight size={12} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Services;
