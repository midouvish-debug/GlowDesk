
import React from 'react';
import { ArrowRight, Play, CheckCircle2, Sparkles, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/context';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-rose-50/50 to-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-rose-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-teal-200 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          {t.hero.badge}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6 max-w-4xl mx-auto">
          {t.hero.headline} <span className="text-rose-600 italic">{t.hero.headlineItalic}</span>{t.hero.headlineEnd}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#contact" className="group w-full sm:w-auto bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center justify-center gap-2">
            {t.hero.primaryCTA}
            {isRTL ? <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
          </a>
          <button 
            onClick={scrollToDemo}
            className="w-full sm:w-auto bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            <Play size={18} fill="currentColor" className={isRTL ? 'rotate-180' : ''} />
            {t.hero.secondaryCTA}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-teal-500" /> {t.hero.check1}</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-teal-500" /> {t.hero.check2}</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-teal-500" /> {t.hero.check3}</div>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200&h=600" 
              alt="Professional Beauty Salon Interface" 
              className="rounded-xl w-full h-full object-cover min-h-[300px]"
            />
          </div>
          <div className={`absolute -bottom-10 hidden md:block z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce-slow ${isRTL ? '-left-10 text-right' : '-right-10 text-left'}`}>
             <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
               <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                 <Sparkles size={20} />
               </div>
               <div>
                 <p className="text-xs text-slate-500">{t.hero.bookingLabel}</p>
                 <p className="text-sm font-bold text-slate-800">{t.hero.bookingService}</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
