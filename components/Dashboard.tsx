
import React, { useState } from 'react';
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
  Edit2
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

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onBackToHome }) => {
  const { t, isRTL, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      case 'calendar': return <CalendarTab />;
      case 'billing': return <BillingTab />;
      case 'profile': return <ProfileTab user={user} />;
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

// Overview Tab Component
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
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">{t.dashboard.overview.title}</h1>
          <p className="text-slate-500">{t.dashboard.overview.subtitle}</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50">Last 30 Days</button>
           <button className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-rose-700 shadow-lg shadow-rose-100">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
             <div className={`flex justify-between items-start mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">{s.icon}</div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${s.positive ? 'bg-teal-50 text-teal-600' : 'bg-red-50 text-red-600'}`}>{s.trend}</span>
             </div>
             <p className="text-slate-500 text-sm font-medium mb-1">{s.label}</p>
             <h3 className="text-2xl font-bold text-slate-900">{s.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-6">{t.dashboard.overview.chartTitle}</h4>
            <div className="h-64 flex items-end gap-2">
               {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                 <div key={i} className="flex-1 bg-rose-50 rounded-t-lg group relative cursor-pointer">
                    <div style={{ height: `${h}%` }} className="bg-rose-600 rounded-t-lg transition-all group-hover:bg-rose-700"></div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h} bookings
                    </div>
                 </div>
               ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
         </div>

         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-6">Recent Activity</h4>
            <div className="space-y-6">
               {[1, 2, 3].map(i => (
                 <div key={i} className={`flex gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0"><CheckCircle2 size={20} /></div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">New Booking: Facial Treatment</p>
                      <p className="text-xs text-slate-500">AI handled via WhatsApp • 12 mins ago</p>
                    </div>
                 </div>
               ))}
               <button className="w-full py-3 text-sm font-bold text-rose-600 bg-rose-50 rounded-xl hover:bg-rose-100 transition-colors">View All Bookings</button>
            </div>
         </div>
      </div>
    </div>
  );
};

// Bookings Tab Component
const BookingsTab: React.FC = () => {
  const { isRTL } = useLanguage();
  const bookings = [
    { client: "Jessica Miller", service: "Eternal Glow Facial", date: "Oct 24, 2:30 PM", status: "Confirmed", source: "Phone AI" },
    { client: "Ahmed Al-Farsi", service: "Full Body Massage", date: "Oct 25, 10:00 AM", status: "Pending", source: "WhatsApp" },
    { client: "Sophie Dubois", service: "Laser Session", date: "Oct 25, 4:15 PM", status: "Confirmed", source: "WhatsApp" },
    { client: "Mark Thompson", service: "Consultation", date: "Oct 26, 11:30 AM", status: "Cancelled", source: "Phone AI" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900">Manage Reservations</h1>
        <button className="bg-rose-600 text-white px-6 py-2 rounded-xl font-bold">Add Manual Booking</button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}>
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Client</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Service</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date & Time</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Source</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {bookings.map((b, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{b.client}</td>
                  <td className="px-6 py-4 text-slate-600">{b.service}</td>
                  <td className="px-6 py-4 text-slate-600">{b.date}</td>
                  <td className="px-6 py-4 text-slate-500 text-sm italic">{b.source}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-tighter ${
                      b.status === 'Confirmed' ? 'bg-teal-50 text-teal-600' : 
                      b.status === 'Cancelled' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                     <button className="text-slate-400 hover:text-rose-600 p-2"><Edit2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Calendar Tab Component
const CalendarTab: React.FC = () => {
  const { t, isRTL } = useLanguage();
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-5xl">
       <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm mb-8">
          <div className={`flex flex-col md:flex-row items-center gap-8 ${isRTL ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
             <div className="w-24 h-24 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center shrink-0">
                <Globe size={48} />
             </div>
             <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">{t.dashboard.calendar.title}</h2>
                <p className="text-slate-500 mb-6">{t.dashboard.calendar.connected.replace('{email}', 'contact@orientaservices.com')}</p>
                <div className="flex flex-wrap gap-4">
                   <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">{t.dashboard.calendar.btn}</button>
                   <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">Disconnect</button>
                </div>
             </div>
             <div className="bg-teal-50 border border-teal-100 px-4 py-2 rounded-full flex items-center gap-2 text-teal-600 text-sm font-bold">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                {t.dashboard.calendar.status}
             </div>
          </div>
       </div>

       <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Synchronization Logs</h3>
          <div className="space-y-4">
             {[1, 2, 3].map(i => (
                <div key={i} className={`p-4 bg-slate-50 rounded-2xl flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                   <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <p className="text-sm text-slate-600 font-medium">Synced {i*3} appointments with Google Calendar</p>
                   </div>
                   <span className="text-xs text-slate-400 font-bold uppercase">{i}h ago</span>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

// Billing Tab Component
const BillingTab: React.FC = () => {
  const { t, isRTL } = useLanguage();
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-5xl">
       <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/20 blur-[80px] rounded-full"></div>
             <div className="relative z-10">
                <span className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-4 block">{t.dashboard.billing.currentPlan}</span>
                <h2 className="text-4xl font-serif font-bold mb-2">Professional Tier</h2>
                <p className="text-slate-400 mb-10">Your next billing date is Nov 1, 2025 for €99.00</p>
                <div className="flex flex-wrap gap-4">
                   <button className="bg-rose-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-900/40">{t.dashboard.billing.manage}</button>
                   <button className="bg-slate-800 text-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all">Switch to Yearly (Save 20%)</button>
                </div>
             </div>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
             <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4"><CheckCircle2 size={32} /></div>
             <h4 className="font-bold text-slate-900 mb-2">Payment Method</h4>
             <p className="text-slate-500 text-sm mb-6">Visa ending in 4242</p>
             <button className="text-rose-600 font-bold hover:underline">Update Method</button>
          </div>
       </div>

       <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-10 py-6 border-b border-slate-100"><h3 className="font-bold text-slate-900">{t.dashboard.billing.history}</h3></div>
          <div className="overflow-x-auto">
             <table className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                <thead className="bg-slate-50">
                   <tr>
                      <th className="px-10 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                      <th className="px-10 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                      <th className="px-10 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                      <th className="px-10 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Receipt</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {[1, 2, 3].map(i => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                         <td className="px-10 py-4 text-slate-900 font-medium">Oct {i}, 2025</td>
                         <td className="px-10 py-4 text-slate-900 font-bold">€99.00</td>
                         <td className="px-10 py-4"><span className="text-[10px] bg-teal-50 text-teal-600 font-bold px-2 py-1 rounded-full">PAID</span></td>
                         <td className="px-10 py-4 text-center">
                            <button className="text-rose-600 p-2"><Calendar size={16} /></button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );
};

// Profile Tab Component
const ProfileTab: React.FC<{ user: User }> = ({ user }) => {
  const { isRTL } = useLanguage();
  const [profile, setProfile] = useState({
    name: user.username,
    business: user.businessName,
    email: 'contact@orientaservices.com',
    phone: '+44 20 7123 4567',
    address: '123 AI Lane, London, UK'
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-3xl">
       <div className="flex items-center gap-6 mb-12">
          <div className="w-24 h-24 bg-rose-600 text-white rounded-[2rem] flex items-center justify-center text-3xl font-bold shadow-xl shadow-rose-200">
             {profile.name.charAt(0)}
          </div>
          <div>
             <h1 className="text-3xl font-serif font-bold text-slate-900">{profile.name}</h1>
             <p className="text-slate-500">{profile.business}</p>
          </div>
       </div>

       <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
             <div className={isRTL ? 'text-right' : 'text-left'}>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Business Name</label>
                <input 
                  type="text" 
                  value={profile.business} 
                  onChange={e => setProfile({...profile, business: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-rose-400 transition-all font-medium text-slate-700"
                />
             </div>
             <div className={isRTL ? 'text-right' : 'text-left'}>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={profile.email}
                  disabled
                  className="w-full bg-slate-100 border border-slate-100 rounded-xl px-4 py-3 outline-none font-medium text-slate-400 cursor-not-allowed"
                />
             </div>
          </div>
          
          <div className={isRTL ? 'text-right' : 'text-left'}>
             <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Business Address</label>
             <input 
               type="text" 
               value={profile.address} 
               onChange={e => setProfile({...profile, address: e.target.value})}
               className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-rose-400 transition-all font-medium text-slate-700"
             />
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
             <button className="text-slate-500 font-bold px-6 py-2">Reset</button>
             <button className="bg-slate-900 text-white px-10 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">Save Profile Changes</button>
          </div>
       </div>

       <div className="mt-8 bg-red-50 p-8 rounded-[2rem] border border-red-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
             <h4 className="font-bold text-red-900 mb-1">Danger Zone</h4>
             <p className="text-sm text-red-600 opacity-80">Deleting your account is permanent and cannot be undone.</p>
          </div>
          <button className="bg-white text-red-600 border border-red-200 px-6 py-2 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all whitespace-nowrap">Delete Account</button>
       </div>
    </div>
  );
};

export default Dashboard;
