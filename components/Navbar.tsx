
import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-nav py-4 border-b border-slate-100 shadow-sm' 
        : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/images/Asia-Logo-2-1024x205.png" alt="Asia Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link text-[13px] font-semibold transition-colors uppercase tracking-widest ${
                activeSection === item.href.slice(1) 
                  ? 'text-samu' 
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="tel:+94774429944" className="bg-slate-900 text-white px-7 py-3 rounded-full text-[13px] font-bold tracking-widest hover:bg-samu transition-all active:scale-95">
            +94 77 442 9944
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 py-10 px-8 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold ${
                  activeSection === item.href.slice(1) ? 'text-samu' : 'text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+94774429944" onClick={() => setIsOpen(false)} className="bg-samu text-white py-4 rounded-2xl font-bold text-lg block text-center">
              +94 77 442 9944
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
