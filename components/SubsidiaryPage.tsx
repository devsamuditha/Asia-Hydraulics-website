import React, { useState, useEffect } from 'react';
import { SUBSIDIARY_DATA } from '../constants';
import { X, ArrowRight, Construction, Building2, Cog, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductSpecsModal from './ProductSpecsModal';
import { Product } from '../types';

interface SubsidiaryPageProps {
  onClose: () => void;
}

const SubsidiaryPage: React.FC<SubsidiaryPageProps> = ({ onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="fixed inset-0 z-[150] bg-white overflow-y-auto custom-scrollbar animate-in slide-in-from-bottom-12 duration-500">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-samu p-1.5 rounded-lg">
            <Construction className="text-white" size={16} />
          </div>
          <span className="text-xs font-black text-slate-900 tracking-tighter uppercase">SAMU <span className="text-samu">INDUSTRIAL</span> SITE</span>
        </div>
        <button onClick={onClose} className="p-2 bg-slate-900 text-white rounded-xl hover:bg-samu transition-all active:scale-95">
          <X size={16} />
        </button>
      </header>

      {/* Hero */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 bg-slate-200 text-slate-600 px-2 py-1 rounded-full text-[7px] font-black uppercase tracking-widest mb-4">
              <Cog size={11} className="animate-spin-slow" />
              <span>Heavy Industry Division</span>
            </div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 mb-5 tracking-tight leading-tight">Engineering Massive <span className="text-samu">Foundations.</span></h1>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              We provide the strongest steel and biggest machines for building projects in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions Grid with Sliders */}
      <div className="container mx-auto px-4 py-16">
        {/* Infrastructure */}
        <div className="mb-20">
          <div className="flex items-center space-x-2 mb-6 border-b border-slate-100 pb-3">
            <div className="p-2 bg-slate-900 rounded-2xl text-white">
              <Building2 size={16} />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">Strong Building Parts</h2>
              <p className="text-slate-500 text-[9px] font-medium">Heavy steel beams and foundation units.</p>
            </div>
          </div>
          {/* FIX: Use a valid category key from SUBSIDIARY_DATA */}
          <ProductAutoSlider products={SUBSIDIARY_DATA.categories.hydraulic.products} onProductClick={setSelectedProduct} />
        </div>

        {/* Machinery */}
        <div>
          <div className="flex items-center space-x-2 mb-6 border-b border-slate-100 pb-3">
            <div className="p-2 bg-slate-900 rounded-2xl text-white">
              <Cog size={16} />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">Heavy Working Machines</h2>
              <p className="text-slate-500 text-[9px] font-medium">Power machines for digging and lifting.</p>
            </div>
          </div>
          <ProductAutoSlider products={SUBSIDIARY_DATA.categories.industrial.products} onProductClick={setSelectedProduct} />
        </div>
      </div>

      <ProductSpecsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

const ProductAutoSlider = ({ products, onProductClick }: { products: Product[], onProductClick: (p: Product) => void }) => {
  // Remove tripleProducts and infinite scroll logic for stability
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, products.length]);

  // Reset index if products change (fixes stuck/blank issue)
  useEffect(() => {
    setCurrentIndex(0);
  }, [products]);

  // Get visible products for current view
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(products[(currentIndex + i) % products.length]);
    }
    return visible;
  };

  return (
    <div 
      className="relative group/aslider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden -mx-4">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ width: '100%', willChange: 'transform' }}
        >
          {getVisibleProducts().map((p, idx) => (
            <div key={`${p.id}-${idx}`} className="w-full md:w-1/3 shrink-0 px-2">
              <DivisionProductCard product={p} onClick={() => onProductClick(p)} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-4 rounded-full shadow-lg opacity-0 group-hover/aslider:opacity-100 transition-all z-10 hidden md:block hover:bg-samu hover:text-white">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => setCurrentIndex((prev) => (prev + 1) % products.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-4 rounded-full shadow-lg opacity-0 group-hover/aslider:opacity-100 transition-all z-10 hidden md:block hover:bg-samu hover:text-white">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const DivisionProductCard = ({ product, onClick }: { product: Product, onClick: () => void }) => (
  <div 
    onClick={onClick} 
    className="group cursor-pointer relative bg-white p-2 rounded-[1.5rem] border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(45,171,245,0.1)] hover:-translate-y-2 transition-all duration-500"
  >
    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-50">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
      />
    </div>
    
    <div className="px-1">
      <h4 className="text-xs font-bold text-slate-900 mb-3 group-hover:text-samu transition-colors duration-300 tracking-tight">
        {product.name}
      </h4>
      <div className="flex items-center justify-between border-t border-slate-50 pt-2">
        <span className="text-[7px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-samu/60 transition-colors">
          PRODUCT INFO
        </span>
        <div className="bg-slate-50 group-hover:bg-samu p-1 rounded-xl transition-all duration-300">
          <ArrowRight size={11} className="text-slate-400 group-hover:text-white" />
        </div>
      </div>
    </div>
  </div>
);

export default SubsidiaryPage;
