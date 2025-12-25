
import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../i18n/context';

const PricingSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-rose-50/30">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">{t.pricing.headline}</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t.pricing.subheadline}</p>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-6xl">
        {t.pricing.tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`relative bg-white p-8 rounded-3xl border transition-all hover:scale-[1.02] ${isRTL ? 'text-right' : 'text-left'} ${
              idx === 1 ? 'border-rose-600 shadow-2xl z-10' : 'border-slate-100 shadow-sm'
            }`}
          >
            {idx === 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-600 text-white text-xs font-bold uppercase py-1.5 px-4 rounded-full">
                {t.pricing.mostPopular}
              </div>
            )}
            <h3 className="text-xl font-bold text-slate-800 mb-2">{tier.name}</h3>
            <p className="text-slate-500 text-sm mb-6">{tier.desc}</p>
            <div className={`flex items-baseline gap-1 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-4xl font-bold text-slate-900">€{tier.price}</span>
              <span className="text-slate-500">{t.pricing.perMo}</span>
            </div>
            <a 
              href="#contact" 
              className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                idx === 1 ? 'bg-rose-600 text-white hover:bg-rose-700' : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
