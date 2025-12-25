
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import InteractiveDemo from './components/InteractiveDemo';
import PricingSection from './components/PricingSection';
import HowItWorks from './components/HowItWorks';
import TrustReassurance from './components/TrustReassurance';
import ContactForm from './components/ContactForm';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/context';

type View = 'home' | 'about';

const Main: React.FC = () => {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen transition-all duration-300">
      <Navbar currentView={view} onViewChange={setView} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <div id="demo" className="py-20 bg-white">
              <InteractiveDemo />
            </div>
            <HowItWorks />
            <PricingSection />
            <TrustReassurance />
            <ContactForm />
          </>
        ) : (
          <AboutPage onNavigateToContact={() => setView('home')} />
        )}
      </main>
      <Footer onViewChange={setView} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
};

export default App;
