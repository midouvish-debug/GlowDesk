
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import OrientaLogo from './OrientaLogo';

interface FooterProps {
  onViewChange?: (view: 'home' | 'about') => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const { t, isRTL } = useLanguage();

  const handleNav = (view: 'home' | 'about', sectionId?: string) => {
    if (onViewChange) {
      onViewChange(view);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-4 gap-12 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className={`col-span-1 md:col-span-1 ${isRTL ? 'order-4' : ''}`}>
            <button onClick={() => handleNav('home')} className={`flex items-center gap-2 mb-6 bg-transparent border-none p-0 cursor-pointer w-full ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <OrientaLogo size={32} />
            </button>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {t.hero.subheadline}
            </p>
            <div className={`flex gap-4 text-slate-400 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <a href="#" className="hover:text-rose-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-rose-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-rose-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-rose-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className={isRTL ? 'order-3' : ''}>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">{t.nav.benefits}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={() => handleNav('home', 'benefits')} className="hover:text-rose-600 transition-colors bg-transparent border-none p-0 cursor-pointer">{t.nav.benefits}</button></li>
              <li><button onClick={() => handleNav('home', 'demo')} className="hover:text-rose-600 transition-colors bg-transparent border-none p-0 cursor-pointer">{t.nav.demo}</button></li>
              <li><button onClick={() => handleNav('home', 'pricing')} className="hover:text-rose-600 transition-colors bg-transparent border-none p-0 cursor-pointer">{t.nav.pricing}</button></li>
              <li><button onClick={() => handleNav('home', 'how-it-works')} className="hover:text-rose-600 transition-colors bg-transparent border-none p-0 cursor-pointer">{t.nav.howItWorks}</button></li>
            </ul>
          </div>

          <div className={isRTL ? 'order-2' : ''}>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Orienta Group</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={() => handleNav('about')} className="hover:text-rose-600 transition-colors bg-transparent border-none p-0 cursor-pointer">About Orienta</button></li>
              <li><a href="#" className="hover:text-rose-600 transition-colors">Global Solutions</a></li>
              <li><button onClick={() => handleNav('home', 'contact')} className="hover:text-rose-600 transition-colors bg-transparent border-none p-0 cursor-pointer">Contact</button></li>
            </ul>
          </div>

          <div className={isRTL ? 'order-1' : ''}>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-rose-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-rose-600 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p>© 2025 GlowDesk by Orienta. All rights reserved.</p>
          <p>The Orientation of Modern Service.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
