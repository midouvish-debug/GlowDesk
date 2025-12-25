
import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/context';

const ContactForm: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // The destination email is barakat33@hotmail.com
  const targetEmail = "barakat33@hotmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call to a backend that would forward this to barakat33@hotmail.com
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      console.log(`Form data conceptually sent to: ${targetEmail}`);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className={`bg-rose-50/50 rounded-3xl overflow-hidden border border-rose-100 flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          <div className={`p-8 lg:p-16 lg:w-2/5 bg-rose-600 text-white ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-3xl font-serif font-bold mb-6">{t.contact.headline}</h2>
            <p className="mb-8 opacity-90">{t.contact.subheadline}</p>
            <ul className="space-y-4 mb-12">
              {t.contact.points.map((p, i) => (
                <li key={i} className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle size={20} className="text-rose-200 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-rose-500/50">
               <p className="text-sm font-medium opacity-80 mb-2">{t.contact.trusted}</p>
               <div className="flex items-center gap-1 text-rose-200">
                 <span className="text-xs">Direct Routing Enabled</span>
               </div>
            </div>
          </div>

          <div className={`p-8 lg:p-16 lg:w-3/5 ${isRTL ? 'text-right' : 'text-left'}`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6 shadow-sm"><CheckCircle size={40} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.success}</h3>
                <p className="text-slate-600 max-w-xs">{t.contact.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.labels.biz}</label>
                    <input type="text" required disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all disabled:opacity-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.labels.name}</label>
                    <input type="text" required disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all disabled:opacity-50" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.labels.email}</label>
                    <input type="email" required disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all disabled:opacity-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.labels.phone}</label>
                    <input type="tel" required disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all disabled:opacity-50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.labels.type}</label>
                  <select disabled={isSubmitting} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all disabled:opacity-50">
                    {t.contact.types.map(type => <option key={type}>{type}</option>)}
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-rose-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-lg hover:bg-rose-700 shadow-lg shadow-rose-200 transition-all active:scale-[0.98] disabled:bg-slate-400 disabled:shadow-none ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {isSubmitting ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <>
                      {t.contact.cta} <Send size={18} className={isRTL ? 'rotate-180' : ''} />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">Securely processed via GlowDesk Cloud</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
