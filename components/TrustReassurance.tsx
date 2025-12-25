
import React from 'react';
import { Shield, Star, Award, Zap } from 'lucide-react';

const TrustReassurance: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Trusted by Service Professionals Globally</h2>
            <div className="grid grid-cols-2 gap-8 mb-12">
               <div>
                  <div className="text-rose-500 mb-3"><Shield size={32} /></div>
                  <h4 className="font-bold text-lg mb-2">GDPR Compliant</h4>
                  <p className="text-slate-400 text-sm">We handle your data with enterprise-grade security.</p>
               </div>
               <div>
                  <div className="text-teal-400 mb-3"><Star size={32} /></div>
                  <h4 className="font-bold text-lg mb-2">4.9/5 Rating</h4>
                  <p className="text-slate-400 text-sm">Voted #1 AI tool for Aesthetic Clinics in 2024.</p>
               </div>
               <div>
                  <div className="text-indigo-400 mb-3"><Award size={32} /></div>
                  <h4 className="font-bold text-lg mb-2">Certified Tech</h4>
                  <p className="text-slate-400 text-sm">Partnered with leading salon management systems.</p>
               </div>
               <div>
                  <div className="text-amber-400 mb-3"><Zap size={32} /></div>
                  <h4 className="font-bold text-lg mb-2">Instant Setup</h4>
                  <p className="text-slate-400 text-sm">Go live in under 24 hours with your first assistant.</p>
               </div>
            </div>
            <div className="flex flex-wrap gap-4 opacity-50 grayscale contrast-150">
               {/* Just symbolic logos */}
               <span className="font-serif italic text-xl">GLAMOUR</span>
               <span className="font-serif italic text-xl">VOGUE</span>
               <span className="font-serif italic text-xl">SPA TODAY</span>
               <span className="font-serif italic text-xl">ELLE</span>
            </div>
          </div>

          <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
             <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
             </div>
             <blockquote className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed text-slate-200">
               "Implementing GlowDesk was the single best decision for my clinic this year. We saw a 34% increase in bookings within the first month just from calls that usually went to voicemail."
             </blockquote>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="font-bold text-white">Sarah Jenkins</p>
                   <p className="text-slate-400 text-sm">Owner, Glow Aesthetics London</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustReassurance;
