
import React, { useState } from 'react';
import { X, Lock, User as UserIcon, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/context';
import { User } from '../App';
import OrientaLogo from './OrientaLogo';

interface LoginModalProps {
  onClose: () => void;
  onSuccess: (user: User) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSuccess }) => {
  const { t, isRTL } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Mock API Auth
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        const userData: User = {
          username: 'Admin User',
          role: 'admin',
          businessName: 'Orienta Pro Services',
          plan: 'Enterprise'
        };
        sessionStorage.setItem('orienta_user', JSON.stringify(userData));
        onSuccess(userData);
      } else {
        setError(t.auth.error);
        setIsLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden relative animate-in zoom-in slide-in-from-bottom-4 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          <div className="flex justify-center mb-8">
            <OrientaLogo size={40} />
          </div>

          <h2 className="text-2xl font-serif font-bold text-slate-900 text-center mb-2">{t.auth.title}</h2>
          <p className="text-slate-500 text-sm text-center mb-8">{t.auth.subtitle}</p>

          {error && (
            <div className={`mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm flex items-center gap-3 animate-in shake duration-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{t.auth.userLabel}</label>
              <div className="relative">
                <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} text-slate-400`}>
                  <UserIcon size={18} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-12 outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-50 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            <div className={isRTL ? 'text-right' : 'text-left'}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{t.auth.passLabel}</label>
              <div className="relative">
                <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} text-slate-400`}>
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-12 outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-50 transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-rose-600 uppercase tracking-wider">
              <a href="#" className="hover:text-rose-700">{t.auth.forgot}</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-rose-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-lg hover:bg-rose-700 transition-all shadow-lg shadow-rose-100 disabled:bg-slate-400"
            >
              {isLoading ? <Loader2 size={24} className="animate-spin" /> : t.auth.btn}
            </button>
          </form>

          <p className="mt-8 text-center text-slate-400 text-[10px] uppercase tracking-widest font-bold">
            Protected by GlowDesk Auth Server
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
