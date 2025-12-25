
import React from 'react';
import { PhoneOff, Clock, MessageSquareX, Scissors, CalendarX } from 'lucide-react';
import { useLanguage } from '../i18n/context';

const ProblemSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  const icons = [<PhoneOff size={24} />, <Clock size={24} />, <MessageSquareX size={24} />];

  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className={isRTL ? 'order-2' : ''}>
            <span className="text-rose-600 font-bold tracking-widest text-sm uppercase mb-4 block">{t.problems.badge}</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              {t.problems.headline} <span className="italic">{t.problems.headlineItalic}</span>{t.problems.headlineEnd}
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              {t.problems.subheadline}
            </p>
            <div className="space-y-4">
               {t.problems.items.map((p, idx) => (
                 <div key={idx} className={`flex gap-4 p-4 rounded-xl hover:bg-rose-50/50 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="text-rose-500 mt-1">{icons[idx]}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{p.title}</h4>
                      <p className="text-slate-600 text-sm">{p.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className={`relative ${isRTL ? 'order-1' : ''}`}>
             <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
               <img 
                 src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800&h=800" 
                 alt="Overwhelmed office professional" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-rose-900/10 mix-blend-multiply"></div>
             </div>
             <div className={`absolute -top-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden lg:block ${isRTL ? '-right-10' : '-left-10'}`}>
               <p className="text-slate-800 font-medium italic">{t.problems.testimonial}</p>
               <p className="text-slate-400 text-sm mt-3">— {t.problems.author}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
