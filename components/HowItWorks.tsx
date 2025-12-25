
import React from 'react';
import { CalendarRange, PhoneIncoming, HeartPulse } from 'lucide-react';
import { useLanguage } from '../i18n/context';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  
  const icons = [
    <CalendarRange size={32} />,
    <PhoneIncoming size={32} />,
    <HeartPulse size={32} />
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">{t.howItWorks.headline}</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t.howItWorks.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-dashed border-t-2 border-dashed border-slate-200"></div>
          
          {t.howItWorks.steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-rose-100 hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
