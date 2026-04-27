
import React from 'react';
import { Hammer, Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16 mb-8 sm:mb-5">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <img src="/images/Asia-Logo-2-1024x205.png" alt="Asia Hydraulics Logo" className="h-10 sm:h-12 w-auto" />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] sm:text-sm leading-relaxed max-w-xs font-medium">
              Trusted industrial and hydraulic solutions since 1998. Providing the strength Sri Lanka builds on.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-1.5">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-samu transition-colors p-2 bg-white/5 rounded-lg" tabIndex={0} aria-label="Social Link">
                  <Icon className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h6 className="font-bold uppercase tracking-[0.18em] text-[10px] mb-4 sm:mb-6 text-slate-500">Navigation</h6>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="text-slate-300 hover:text-samu transition-colors font-semibold text-[10px] sm:text-xs py-1.5"
                  tabIndex={0}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h6 className="font-bold uppercase tracking-[0.18em] text-[10px] mb-4 sm:mb-6 text-slate-500">Office</h6>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-slate-300">
                <Phone size={13} className="text-samu" />
                <span className="text-[10px] sm:text-xs font-semibold">94 75 944 2404</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-slate-300">
                <Mail size={13} className="text-samu" />
                <span className="text-[10px] sm:text-xs font-semibold">asiahydraulicsltd@gmail.com</span>
              </div>
              <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed font-medium pt-1.5">
                587 Negombo Rd,<br />Wattala 11300.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-bold tracking-widest uppercase gap-2 sm:gap-3">
          <p className="text-center">2026 © Asia Hydraulics Lanka (Pvt) Ltd</p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors py-1 px-1 sm:px-2">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors py-1 px-1 sm:px-2">Terms</a>
            <a href="#" className="hover:text-slate-300 transition-colors py-1 px-1 sm:px-2">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
