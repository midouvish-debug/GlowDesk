
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
import Dashboard from './components/Dashboard';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/context';

type View = 'home' | 'about' | 'dashboard';

export interface User {
  username: string;
  role: 'admin' | 'customer';
  businessName: string;
  plan: string;
}

const Main: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    // Check for existing session
    const savedUser = sessionStorage.getItem('orienta_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleLogout = () => {
    sessionStorage.removeItem('orienta_user');
    setUser(null);
    setView('home');
  };

  const handleLoginSuccess = (userData: User) => {
    setUser(userData);
    setIsLoginOpen(false);
    setView('dashboard');
  };

  return (
    <div className="min-h-screen transition-all duration-300">
      {view !== 'dashboard' && (
        <Navbar 
          currentView={view as any} 
          onViewChange={setView as any} 
          user={user}
          onLogout={handleLogout}
          onLoginClick={() => setIsLoginOpen(true)}
        />
      )}
      
      <main>
        {view === 'home' && (
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
        )}

        {view === 'about' && (
          <AboutPage onNavigateToContact={() => setView('home')} />
        )}

        {view === 'dashboard' && user && (
          <Dashboard user={user} onLogout={handleLogout} onBackToHome={() => setView('home')} />
        )}
      </main>

      {view !== 'dashboard' && <Footer onViewChange={setView as any} />}
      
      {isLoginOpen && (
        <LoginModal 
          onClose={() => setIsLoginOpen(false)} 
          onSuccess={handleLoginSuccess}
        />
      )}
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
