
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import { Locale } from '../i18n/translations';
import OrientaLogo from './OrientaLogo';
import { User as UserType } from '../App';

interface NavbarProps {
  currentView: 'home' | 'about';
  onViewChange: (view: 'home' | 'about') => void;
  user: UserType | null;
  onLogout: () => void;
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, user, onLogout, onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { locale, setLocale, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.benefits, href: '#benefits', view: 'home' },
    { name: t.nav.demo, href: '#demo', view: 'home' },
    { name: t.nav.pricing, href: '#pricing', view: 'home' },
    { name: t.nav.howItWorks, href: '#how-it-works', view: 'home' },
    { name: t.nav.about, href: '#about', view: 'about' },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' }
  ];

  const handleLinkClick = (e: React.MouseEvent, link: any) => {
    setIsMobileMenuOpen(false);
    if (link.view === 'about') {
      e.preventDefault();
      onViewChange('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentView === 'about' && link.view === 'home') {
      e.preventDefault();
      onViewChange('home');
      setTimeout(() => {
        const id = link.href.replace('#', '');
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const id = link.href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button onClick={() => onViewChange('home')} className="flex items-center group bg-transparent border-none p-0 cursor-pointer">
          <OrientaLogo size={36} />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-sm font-medium transition-colors ${
                (link.view === currentView && (link.href === '#about' || currentView === 'home')) 
                  ? 'text-rose-600 font-bold' 
                  : 'text-slate-600 hover:text-rose-600'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* User / Auth Section */}
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
             {user ? (
               <div className="relative">
                 <button 
                   onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                   className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-all"
                 >
                   <User size={16} />
                   <span>{user.username}</span>
                   <ChevronDown size={14} className={isUserMenuOpen ? 'rotate-180' : ''} />
                 </button>
                 {isUserMenuOpen && (
                   <div className={`absolute top-full mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 ${isRTL ? 'left-0' : 'right-0'}`}>
                      <button onClick={() => { (onViewChange as any)('dashboard'); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-rose-50 hover:text-rose-600">
                        <LayoutDashboard size={16} /> {t.nav.dashboard}
                      </button>
                      <button onClick={() => { onLogout(); setIsUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50">
                        <LogOut size={16} /> {t.nav.logout}
                      </button>
                   </div>
                 )}
               </div>
             ) : (
               <button onClick={onLoginClick} className="text-sm font-bold text-slate-600 hover:text-rose-600 transition-colors">
                 {t.nav.login}
               </button>
             )}

            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors"
              >
                <Globe size={16} />
                <span className="uppercase">{locale}</span>
              </button>
              {isLangOpen && (
                <div className={`absolute top-full mt-2 w-32 bg-white border border-slate-100 rounded-xl shadow-xl py-2 ${isRTL ? 'left-0' : 'right-0'}`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLocale(lang.code as Locale); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-rose-50 transition-colors ${locale === lang.code ? 'text-rose-600 font-bold' : 'text-slate-600'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                const id = 'contact';
                if (currentView === 'about') {
                  onViewChange('home');
                  setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
                } else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-rose-700 transition-all shadow-md shadow-rose-100"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>

        <button className="md:hidden text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 py-6 px-4 flex flex-col gap-4 shadow-xl max-h-[90vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link)}
              className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          {user ? (
            <button onClick={() => { (onViewChange as any)('dashboard'); setIsMobileMenuOpen(false); }} className="text-left py-2 font-bold text-rose-600 border-b border-slate-50">{t.nav.dashboard}</button>
          ) : (
            <button onClick={onLoginClick} className="text-left py-2 font-bold text-slate-600 border-b border-slate-50">{t.nav.login}</button>
          )}
          <div className="flex gap-4 py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLocale(lang.code as Locale); setIsMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded-lg text-sm font-bold ${locale === lang.code ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
