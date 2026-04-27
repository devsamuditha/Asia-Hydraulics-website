
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-24">
          
          {/* Information & Map Column */}
          <div className="lg:w-1/2">
            <div className="max-w-xl">
              <span className="text-samu font-bold text-[10px] uppercase tracking-[0.18em] mb-4 block">Get in Touch</span>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-950 mb-6 leading-tight">
                Talk to Our <br /> <span className="text-samu">Asia Hydraulic</span> Experts.
              </h2>
              <p className="text-slate-600 text-md mb-8 leading-relaxed font-medium">
                If you have questions about our products or need a price quote, please call us or visit our office in Colombo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="group flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-samu shadow-sm group-hover:bg-samu group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-slate-950 font-bold text-sm">+94 11 432 9945</p>
                    <p className="text-slate-950 font-bold text-sm">+94 77 447 9944</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-samu shadow-sm group-hover:bg-samu group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-slate-950 font-bold text-sm">asiahydraulicsltd@gmail.com</p>
                  </div>
                </div>

              </div>

              {/* Map for 587 Negombo Rd, Wattala 11300 */}
              <div className="relative w-full h-80 rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps?q=587+Negombo+Rd,+Wattala+11300&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Asia Hydraulics Location"
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-samu p-2.5 rounded-lg text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[7px] font-bold text-slate-950 uppercase tracking-widest">Our Office</p>
                      <p className="text-xs text-slate-600 font-bold">587 Negombo Rd, Wattala 11300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-1/2">
            <div className="bg-slate-50 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950 mb-5">Send Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-slate-600 uppercase tracking-widest ml-1">Your Name *</label>
                    <input 
                      name="name"
                      type="text" 
                      placeholder="e.g. Mr. Kamal" 
                      required
                      autoComplete="name"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:ring-4 focus:ring-samu/10 focus:border-samu outline-none transition-all placeholder:text-slate-300 shadow-sm" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-slate-600 uppercase tracking-widest ml-1">Mobile Number *</label>
                    <input 
                      name="mobile"
                      type="tel" 
                      placeholder="e.g. 077 123 4567" 
                      required
                      autoComplete="tel"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:ring-4 focus:ring-samu/10 focus:border-samu outline-none transition-all placeholder:text-slate-300 shadow-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-600 uppercase tracking-widest ml-1">What do you searching for</label>
                  <select
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:ring-4 focus:ring-samu/10 focus:border-samu outline-none transition-all shadow-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="Industrial Hose">Industrial Hose</option>
                    <option value="Hydraulic Hose">Hydraulic Hose</option>
                    <option value="Sand Blasting Machine">Sand Blasting Machine</option>
                    <option value="Airless Spray Machine">Airless Spray Machine</option>
                    <option value="other tools">Other Tools</option>
                    <option value="mannuco">Mannuco</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-600 uppercase tracking-widest ml-1">Your Question</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us what you need help with..." 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:ring-4 focus:ring-samu/10 focus:border-samu outline-none transition-all placeholder:text-slate-300 resize-none shadow-sm"
                  ></textarea>
                </div>
                <button className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold text-[11px] tracking-wide hover:bg-samu transition-all shadow-lg flex items-center justify-center space-x-2 group">
                  <span>SEND YOUR MESSAGE</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
