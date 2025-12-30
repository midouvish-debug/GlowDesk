
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  CreditCard, 
  Settings, 
  Bell, 
  Search, 
  LogOut, 
  Home, 
  ChevronRight, 
  TrendingUp, 
  CalendarRange, 
  CheckCircle2, 
  AlertCircle,
  Menu,
  X,
  Globe,
  Edit2,
  Phone,
  MessageCircle,
  Linkedin,
  Facebook,
  Instagram,
  ExternalLink,
  Plus
} from 'lucide-react';
import { useLanguage } from '../i18n/context';
import { User } from '../App';
import OrientaLogo from './OrientaLogo';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  onBackToHome: () => void;
}

type Tab = 'overview' | 'bookings' | 'calendar' | 'billing' | 'profile';

interface ProfileData {
  name: string;
  business: string;
  email: string;
  officePhone: string;
  whatsapp: string;
  calendarLink: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  address: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onBackToHome }) => {
  const { t, isRTL, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Shared Profile State
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem(`orienta_profile_${user.username}`);
    return saved ? JSON.parse(saved) : {
      name: user.username,
      business: user.businessName,
      email: 'contact@orientaservices.com',
      officePhone: '+1 234 567 8900',
      whatsapp: '+1 234 567 8900',
      calendarLink: '', // Initially empty to trigger invitation message
      linkedin: '',
      facebook: '',
      instagram: '',
      address: '123 Luxury Avenue, Salon District'
    };
  });

  useEffect(() => {
    localStorage.setItem(`orienta_profile_${user.username}`, JSON.stringify(profile));
  }, [profile, user.username]);

  const menuItems = [
    { id: 'overview', label: t.dashboard.sidebar.overview, icon: <LayoutDashboard size={20} /> },
    { id: 'bookings', label: t.dashboard.sidebar.bookings, icon: <Users size={20} /> },
    { id: 'calendar', label: t.dashboard.sidebar.calendar, icon: <Calendar size={20} /> },
    { id: 'billing', label: t.dashboard.sidebar.billing, icon: <CreditCard size={20} /> },
    { id: 'profile', label: t.dashboard.sidebar.profile, icon: <Settings size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab user={user} />;
      case 'bookings': return <BookingsTab />;
      case 'calendar': return <CalendarTab profile={profile} onGoToProfile={() => setActiveTab('profile')} />;
      case 'billing': return <BillingTab />;
      case 'profile': return <ProfileTab profile={profile} setProfile={setProfile} />;
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Sidebar - Desktop */}
      <aside className={`hidden lg:flex flex-col w-72 bg-slate-900 text-slate-400 p-6 sticky top-0 h-screen transition-all shadow-2xl`}>
        <div className="flex items-center gap-2 mb-10 px-2">
          <OrientaLogo size={32} className="text-white brightness-200" />
        </div>

        <nav className="flex-1 space-y-1">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/40' 
                  : 'hover:bg-slate-800 hover:text-white'
              } ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-800 space-y-1">
          <button onClick={onBackToHome} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-slate-800 hover:text-white transition-all ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <Home size={20} />
            <span>Public Website</span>
          </button>
          <button onClick={onLogout} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-400 hover:bg-red-400/10 transition-all ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <LogOut size={20} />
            <span>{t.nav.logout}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500"><Menu size={24} /></button>
             <h2 className="text-xl font-bold text-slate-800 hidden sm:block">
               {menuItems.find(i => i.id === activeTab)?.label}
             </h2>
          </div>

          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
             <div className="relative hidden md:block">
               <Search className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL ? 'right-3' : 'left-3'}`} size={16} />
               <input 
                 type="text" 
                 placeholder="Search dashboard..." 
                 className={`bg-slate-100 border-none rounded-full py-2 px-10 text-sm outline-none focus:ring-2 focus:ring-rose-100 w-64 ${isRTL ? 'text-right' : 'text-left'}`}
               />
             </div>
             <button className="relative w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
               <Bell size={20} />
               <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
             </button>
             <div className={`flex items-center gap-3 pl-4 border-l border-slate-200 ${isRTL ? 'flex-row-reverse pr-4 pl-0 border-l-0 border-r' : ''}`}>
                <div className="text-right hidden lg:block">
                  <p className="text-sm font-bold text-slate-900 leading-none">{user.username}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{user.plan}</p>
                </div>
                <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold">
                  {user.username.charAt(0)}
                </div>
             </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
          <aside className={`absolute top-0 bottom-0 w-72 bg-slate-900 text-slate-400 p-6 flex flex-col transition-transform ${isRTL ? 'right-0' : 'left-0'}`}>
             <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 text-slate-400"><X size={24} /></button>
             <div className="mb-10"><OrientaLogo size={32} className="text-white brightness-200" /></div>
             <nav className="flex-1 space-y-1">
                {menuItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id as Tab); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === item.id ? 'bg-rose-600 text-white' : 'hover:bg-slate-800 hover:text-white'} ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                  >
                    {item.icon} <span>{item.label}</span>
                  </button>
                ))}
             </nav>
             <div className="pt-6 border-t border-slate-800 space-y-2">
                <button onClick={onLogout} className={`w-full flex items-center gap-3 px-4 py-2 text-red-400 ${isRTL ? 'flex-row-reverse' : ''}`}><LogOut size={20} /> Logout</button>
             </div>
          </aside>
        </div>
      )}
    </div>
  );
};

// Overview Tab Component (Simplified as original)
const OverviewTab: React.FC<{ user: User }> = ({ user }) => {
  const { t, isRTL } = useLanguage();
  const stats = [
    { label: t.dashboard.overview.stats.total, value: '248', trend: '+12%', icon: <CalendarRange className="text-rose-500" />, positive: true },
    { label: t.dashboard.overview.stats.revenue, value: '€14,200', trend: '+8.4%', icon: <TrendingUp className="text-teal-500" />, positive: true },
    { label: t.dashboard.overview.stats.leads, value: '32', trend: '+5%', icon: <Users className="text-indigo-500" />, positive: true },
    { label: t.dashboard.overview.stats.noshow, value: '2.1%', trend: '-1.5%', icon: <AlertCircle className="text-amber-500" />, positive: true },
  ];
  return (
    <div className={`space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div><h1 className="text-3xl font-serif font-bold text-slate-900">{t.dashboard.overview.title}</h1><p className="text-slate-500">{t.dashboard.overview.subtitle}</p></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
             <p className="text-slate-500 text-sm font-medium mb-1">{s.label}</p>
             <h3 className="text-2xl font-bold text-slate-900">{s.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// Bookings Tab Component (Simplified)
const BookingsTab: React.FC = () => {
  const { isRTL } = useLanguage();
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h1 className="text-3xl font-serif font-bold text-slate-900 mb-8">Reservations</h1>
      <div className="bg-white rounded-3xl border border-slate-100 p-8 text-center text-slate-400 italic">Feature coming soon in Enterprise tier.</div>
    </div>
  );
};

// Calendar Tab Component
const CalendarTab: React.FC<{ profile: ProfileData; onGoToProfile: () => void }> = ({ profile, onGoToProfile }) => {
  const { t, isRTL } = useLanguage();
  
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 h-full flex flex-col">
       <div className={`flex justify-between items-center mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div>
            <h1 className="text-3xl font-serif font-bold text-slate-900">{t.dashboard.calendar.title}</h1>
            <p className="text-slate-500">{t.dashboard.calendar.status}</p>
          </div>
          {profile.calendarLink && (
            <a 
              href={profile.calendarLink.startsWith('http') ? profile.calendarLink : `https://${profile.calendarLink}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-rose-600 font-bold hover:underline"
            >
              Open External Calendar <ExternalLink size={16} />
            </a>
          )}
       </div>

       {profile.calendarLink ? (
         <div className="flex-1 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm relative min-h-[500px]">
            {/* Using an Iframe to show the calendar if it's a valid embeddable link, 
                otherwise we just show a rich management UI */}
            <iframe 
              src={profile.calendarLink.includes('calendar.google.com') ? profile.calendarLink : ''}
              className="w-full h-full border-none"
              title="Business Calendar"
            />
            {!profile.calendarLink.includes('calendar.google.com') && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                 <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-6">
                    <CalendarRange size={40} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Calendar Connected</h3>
                 <p className="text-slate-500 max-w-sm mb-8">
                   Your integration link is active. If your provider supports embedding, you'll see your slots here. Otherwise, use the button above to manage appointments.
                 </p>
              </div>
            )}
         </div>
       ) : (
         <div className="flex-1 bg-white rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-6">
               <Calendar size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Calendar Integrated</h3>
            <p className="text-slate-500 max-w-sm mb-8">
              Connect your Google or Outlook calendar in your profile to sync appointments and see them here.
            </p>
            <button 
              onClick={onGoToProfile}
              className="bg-rose-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-rose-700 transition-all shadow-lg shadow-rose-100 flex items-center gap-2"
            >
              <Plus size={18} /> Add Link in Profile
            </button>
         </div>
       )}
    </div>
  );
};

// Billing Tab Component (Placeholder)
const BillingTab: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
       <h1 className="text-3xl font-serif font-bold text-slate-900 mb-8">{t.dashboard.billing.title}</h1>
       <div className="bg-slate-900 text-white p-12 rounded-3xl">Active Plan: {t.pricing.tiers[2].name}</div>
    </div>
  );
};

// Profile Tab Component
const ProfileTab: React.FC<{ profile: ProfileData; setProfile: (p: ProfileData) => void }> = ({ profile, setProfile }) => {
  const { isRTL } = useLanguage();
  
  const updateField = (field: keyof ProfileData, val: string) => {
    setProfile({...profile, [field]: val});
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-4xl">
       <div className="flex items-center gap-6 mb-12">
          <div className="w-24 h-24 bg-rose-600 text-white rounded-[2rem] flex items-center justify-center text-3xl font-bold shadow-xl shadow-rose-200">
             {profile.name.charAt(0)}
          </div>
          <div className={isRTL ? 'text-right' : 'text-left'}>
             <h1 className="text-3xl font-serif font-bold text-slate-900">{profile.name}</h1>
             <p className="text-slate-500">{profile.business}</p>
          </div>
       </div>

       <div className="space-y-10">
          {/* Business Info Section */}
          <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
               <Globe size={20} className="text-rose-500" /> Business Profile
             </h3>
             <div className="grid md:grid-cols-2 gap-6">
                <div className={isRTL ? 'text-right' : 'text-left'}>
                   <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Display Name</label>
                   <input type="text" value={profile.name} onChange={e => updateField('name', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-rose-400 transition-all" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                   <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Salon Name</label>
                   <input type="text" value={profile.business} onChange={e => updateField('business', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-rose-400 transition-all" />
                </div>
                <div className={`md:col-span-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                   <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Physical Address</label>
                   <input type="text" value={profile.address} onChange={e => updateField('address', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-rose-400 transition-all" />
                </div>
             </div>
          </section>

          {/* Communication & Sync Section */}
          <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
               <Phone size={20} className="text-rose-500" /> Communication & Sync
             </h3>
             <div className="grid md:grid-cols-2 gap-6">
                <div className={isRTL ? 'text-right' : 'text-left'}>
                   <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Office Phone Number</label>
                   <div className="relative">
                      <Phone size={16} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                      <input type="tel" value={profile.officePhone} onChange={e => updateField('officePhone', e.target.value)} className={`w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-12 outline-none focus:border-rose-400 transition-all ${isRTL ? 'text-right' : 'text-left'}`} />
                   </div>
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                   <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">WhatsApp Number</label>
                   <div className="relative">
                      <MessageCircle size={16} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                      <input type="tel" value={profile.whatsapp} onChange={e => updateField('whatsapp', e.target.value)} className={`w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-12 outline-none focus:border-rose-400 transition-all ${isRTL ? 'text-right' : 'text-left'}`} />
                   </div>
                </div>
                <div className={`md:col-span-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                   <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Calendar Integration Link (Gcal/Outlook)</label>
                   <div className="relative">
                      <Calendar size={16} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL ? 'right-4' : 'left-4'}`} />
                      <input type="text" placeholder="https://calendar.google.com/..." value={profile.calendarLink} onChange={e => updateField('calendarLink', e.target.value)} className={`w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-12 outline-none focus:border-rose-400 transition-all ${isRTL ? 'text-right' : 'text-left'}`} />
                   </div>
                   <p className="mt-2 text-[10px] text-slate-400 italic">This link is used by GlowDesk AI to check your availability and sync bookings.</p>
                </div>
             </div>
          </section>

          {/* Social Presence Section */}
          <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
               <Users size={20} className="text-rose-500" /> Social Presence
             </h3>
             <div className="grid sm:grid-cols-3 gap-6">
                <div className={isRTL ? 'text-right' : 'text-left'}>
                   <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                     <Instagram size={14} className="text-rose-500" /> Instagram
                   </label>
                   <input type="text" placeholder="username" value={profile.instagram} onChange={e => updateField('instagram', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:border-rose-400" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                   <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                     <Facebook size={14} className="text-blue-600" /> Facebook
                   </label>
                   <input type="text" placeholder="page-url" value={profile.facebook} onChange={e => updateField('facebook', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:border-rose-400" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                   <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                     <Linkedin size={14} className="text-blue-700" /> LinkedIn
                   </label>
                   <input type="text" placeholder="company-link" value={profile.linkedin} onChange={e => updateField('linkedin', e.target.value)} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:border-rose-400" />
                </div>
             </div>
          </section>

          <div className="flex justify-end pt-4 pb-12">
             <button className="bg-rose-600 text-white px-12 py-4 rounded-xl font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-100 active:scale-[0.98]">
               Save Settings
             </button>
          </div>
       </div>
    </div>
  );
};

export default Dashboard;
