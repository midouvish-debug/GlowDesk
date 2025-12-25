
import React from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Target, Lightbulb, TrendingUp, ShieldCheck, HeartPulse, UserCheck, BarChart3, Globe, Dumbbell } from 'lucide-react';
import { useLanguage } from '../i18n/context';

interface AboutPageProps {
  onNavigateToContact: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigateToContact }) => {
  const { t, isRTL } = useLanguage();

  const approachIcons = [<TrendingUp className="text-rose-500" />, <ShieldCheck className="text-teal-500" />, <BarChart3 className="text-indigo-500" />];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">{t.about.title}</h1>
          <div className="max-w-4xl mx-auto">
             <h2 className="text-2xl font-bold text-rose-600 mb-4">{t.about.whoHeadline}</h2>
             <p className="text-xl text-slate-600 leading-relaxed mb-8">{t.about.whoText}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <div>
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">{t.about.missionHeadline}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.missionText}
            </p>
          </div>
          <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/20 blur-[80px] rounded-full group-hover:bg-rose-600/30 transition-all"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">{t.about.whatWeDoHeadline}</h3>
            <p className="text-slate-400 mb-8 relative z-10">{t.about.whatWeDoSub}</p>
            <ul className="space-y-6 relative z-10">
              {t.about.whatWeDoItems.map((item, idx) => (
                <li key={idx} className={`flex gap-4 items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="mt-1 w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center shrink-0">
                    <Sparkles size={10} className="text-white" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 pt-8 border-t border-slate-800 text-slate-400 italic text-sm">
              {t.about.whatWeDoEnd}
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">{t.about.approachHeadline}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t.about.approachIntro}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.about.approachItems.map((item, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 ${isRTL ? 'ml-auto' : ''}`}>
                  {approachIcons[idx]}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 container mx-auto px-4 space-y-20">
        <div className="text-center">
           <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">{t.about.productsHeadline}</h2>
           <p className="text-slate-600">{t.about.productsIntro}</p>
        </div>

        {/* GlowDesk Card */}
        <div className={`bg-indigo-950 text-white rounded-[2rem] p-10 lg:p-16 relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-600/10 blur-[120px] rounded-full"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-rose-500">{t.about.glowDeskTitle}</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {t.about.glowDeskText}
              </p>
              <div className="space-y-8">
                 <h4 className="font-bold text-white uppercase tracking-widest text-sm">{t.about.workWithHeadline}</h4>
                 <ul className="space-y-4">
                   {t.about.workWithItems.map((item, i) => (
                     <li key={i} className={`flex gap-3 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                       <UserCheck size={20} className="text-rose-500 shrink-0" />
                       <span className="text-slate-200">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Professional Beauty Salon" 
                className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600"><Globe size={20} /></div>
                   <p className="text-xs font-bold text-slate-800 uppercase tracking-tighter">Global Service AI</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* FitDesk Card */}
        <div className={`bg-slate-900 text-white rounded-[2rem] p-10 lg:p-16 relative overflow-hidden ${isRTL ? 'text-right lg:flex-row-reverse' : 'text-left'}`}>
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? 'lg:order-2' : ''}>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-teal-400">{t.about.fitDeskTitle}</h3>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {t.about.fitDeskText}
              </p>
              <div className="bg-teal-900/20 border border-teal-800/50 p-6 rounded-2xl">
                 <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Dumbbell className="text-teal-400" size={28} />
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Fitness Industry Ready</h4>
                 </div>
                 <p className="text-slate-400 text-sm">FitDesk integrates with popular gym management software to provide real-time class availability and automated membership processing.</p>
              </div>
            </div>
            <div className={`relative ${isRTL ? 'lg:order-1' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Modern Fitness Center" 
                className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className={`absolute -top-6 -right-6 bg-teal-600 p-4 rounded-2xl shadow-xl hidden md:block animate-pulse`}>
                 <Sparkles className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">{t.about.visionHeadline}</h2>
           <p className="text-2xl text-slate-500 italic leading-relaxed mb-12">
             "{t.about.visionText}"
           </p>
           <div className="h-1.5 w-32 bg-rose-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 bg-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">{t.about.ctaHeadline}</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">{t.about.ctaText}</p>
          <button 
            onClick={onNavigateToContact}
            className="bg-white text-rose-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-2xl shadow-rose-900/20 active:scale-[0.98] flex items-center gap-3 mx-auto"
          >
            Start Growing Now {isRTL ? <ArrowLeft /> : <ArrowRight />}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
