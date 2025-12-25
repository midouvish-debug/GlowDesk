
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import { Locale } from '../i18n/translations';
import OrientaLogo from './OrientaLogo';

interface NavbarProps {
  currentView: 'home' | 'about';
  onViewChange: (view: 'home' | 'about') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
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
    if (link.view === 'about') {
      e.preventDefault();
      onViewChange('about');
      setIsMobileMenuOpen(false);
    } else if (currentView === 'about' && link.view === 'home') {
      // If we are on about page and click a home anchor, switch to home first
      onViewChange('home');
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button onClick={() => onViewChange('home')} className="flex items-center group bg-transparent border-none p-0 cursor-pointer">
          <OrientaLogo size={36} className="group-hover:scale-105 transition-transform" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
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

          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors"
            >
              <Globe size={16} />
              <span className="uppercase">{locale}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangOpen && (
              <div className={`absolute top-full mt-2 w-32 bg-white border border-slate-100 rounded-xl shadow-xl py-2 ${isRTL ? 'left-0' : 'right-0'}`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code as Locale);
                      setIsLangOpen(false);
                    }}
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
              if (currentView === 'about') {
                e.preventDefault();
                onViewChange('home');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-rose-700 transition-all hover:shadow-lg hover:shadow-rose-200"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 py-6 px-4 flex flex-col gap-4 shadow-xl">
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
          <div className="flex gap-4 py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code as Locale);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-1 rounded-lg text-sm font-bold ${locale === lang.code ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
          <a 
            href="#contact" 
            className="bg-rose-600 text-white px-6 py-4 rounded-xl text-center font-semibold text-lg"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              if (currentView === 'about') {
                e.preventDefault();
                onViewChange('home');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
