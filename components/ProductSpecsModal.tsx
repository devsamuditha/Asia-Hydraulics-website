
import React, { useEffect } from 'react';
import { X, CheckCircle2, Package, ShieldCheck, Gauge, Layers, Info, Download } from 'lucide-react';
import { Product } from '../types';

interface ProductSpecsModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductSpecsModal: React.FC<ProductSpecsModalProps> = ({ product, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (product) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500 border border-white/20">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 bg-slate-950 text-white p-4 rounded-2xl hover:bg-samu transition-all active:scale-90"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Cinematic Visual Side */}
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-slate-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-flex items-center space-x-1.5 bg-samu px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest mb-2">
              <Layers className="w-2.5 h-2.5" />
              <span>Technical Spotlight</span>
            </div>
            <h2 className="text-3xl font-black tracking-tighter leading-none mb-2">{product.name}</h2>
            <div className="flex items-center space-x-2 text-white/60 font-black uppercase tracking-widest text-[10px]">
              <span>ID: SM-{product.id.toUpperCase()}</span>
              <span>INDUSTRIAL GRADE</span>
            </div>
          </div>
        </div>

        {/* Data/Spec Side */}
        <div className="md:w-1/2 p-6 overflow-y-auto custom-scrollbar flex flex-col">
          <div className="mb-6">
            <div className="flex items-center space-x-1.5 mb-2">
              <Info className="text-samu w-3 h-3" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Engineering Brief</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-md font-medium tracking-tight">
              {product.description} Developed for mission-critical operations where failure is not an option.
            </p>
          </div>
          <div className="space-y-3 mb-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Verified Specifications</h3>
            <div className="grid grid-cols-1 gap-2">
              {product.specs.slice(0, 2).map((spec, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100 group transition-all">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3 h-3 text-samu shrink-0" />
                    <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">{spec.split(':')[0]}</span>
                  </div>
                  <span className="text-slate-950 font-black text-[10px]">{spec.split(':')[1] || 'Compliant'}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductSpecsModal;
