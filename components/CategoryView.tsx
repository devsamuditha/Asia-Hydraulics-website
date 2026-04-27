
import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';
import { X, ArrowRight, LayoutGrid, Filter } from 'lucide-react';
import ProductSpecsModal from './ProductSpecsModal';
import { Product } from '../types';

interface CategoryViewProps {
  categoryKey: string;
  onClose: () => void;
}

const CategoryView: React.FC<CategoryViewProps> = ({ categoryKey, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const category = SERVICES_DATA[categoryKey];

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-white overflow-y-auto custom-scrollbar animate-in slide-in-from-bottom-12 duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-samu p-2 rounded-lg">
            <LayoutGrid className="text-white" size={20} />
          </div>
          <div>
            <span className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none block">
              {category.title}
            </span>
            <span className="text-[12px] font-bold text-samu uppercase tracking-[0.18em]">All Peoducts</span>
          </div>
        </div>
        <button onClick={onClose} className="bg-slate-900 text-white p-3 rounded-xl hover:bg-samu transition-all active:scale-95 shadow-lg shadow-slate-950/20">
          <X size={20} />
        </button>
      </header>

      {/* Hero Header */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-samu/10 text-samu px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-[0.18em] mb-8">
              <Filter size={14} />
              <span>{category.products.length} Products</span>
            </div>
            
            <div className="mb-8">
              <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Complete <span className="text-samu">{category.title}</span>.
              </h1>
              <div className="h-2 w-32 bg-samu rounded-full shadow-sm shadow-samu/20"></div>
            </div>
            
            <p className="text-md text-slate-500 leading-relaxed font-medium">
              Explore our full range of professional-grade hardware. Tested to the highest industrial safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {category.products.map((product) => (
              <div 
                key={product.id} 
                onClick={() => setSelectedProduct(product)}
                className="group relative cursor-pointer bg-white rounded-[2rem] p-5 border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(45,171,245,0.15)] hover:-translate-y-3 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Removed shine animation */}

                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-50 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <h4 className="font-bold text-slate-950 mb-2 text-md line-clamp-2 text-center px-1">
                  {product.name}
                </h4>
                
                <div className="pt-4 border-t border-slate-50 flex items-center justify-between mt-auto px-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    ID: {product.id.toUpperCase()}
                  </span>
                  <div className="bg-slate-900 p-2.5 rounded-xl text-white">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Banner */}
      <section className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-samu to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h3 className="text-white text-2xl font-bold mb-6 uppercase tracking-tight">Custom Config?</h3>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto text-md leading-relaxed font-medium">
            Our engineering team can customize any component to your specific requirements.
          </p>
          <a
            href="#contact"
            className="bg-samu text-white px-12 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:bg-samu-dark transition-all inline-block"
            onClick={onClose}
          >
            Contact Sales
          </a>
        </div>
      </section>

      <ProductSpecsModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default CategoryView;
