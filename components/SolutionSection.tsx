
import React from 'react';
import { ShieldCheck, CalendarCheck, Zap, Bot, MessageCircle, PhoneCall } from 'lucide-react';
import { useLanguage } from '../i18n/context';

const SolutionSection: React.FC = () => {
  const { t } = useLanguage();
  
  const icons = [
    <PhoneCall className="text-rose-500" />,
    <MessageCircle className="text-teal-500" />,
    <CalendarCheck className="text-indigo-500" />,
    <Bot className="text-purple-500" />,
    <Zap className="text-amber-500" />,
    <ShieldCheck className="text-emerald-500" />
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 text-center mb-16">
        <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-4 block">{t.solutions.badge}</span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
          {t.solutions.headline} <span className="text-rose-600">{t.solutions.headlineAccent}</span>
        </h2>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          {t.solutions.subheadline}
        </p>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.solutions.items.map((feature, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-50 transition-all group">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {icons[idx]}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
