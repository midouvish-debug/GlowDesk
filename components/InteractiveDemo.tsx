
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, Calendar, Send, User, Mic, Play, Check } from 'lucide-react';
import { useLanguage } from '../i18n/context';

type TabType = 'whatsapp' | 'voice' | 'calendar';

const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('whatsapp');
  const { t, isRTL } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">{t.demo.headline}</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{t.demo.subheadline}</p>
      </div>

      <div className={`flex p-1 bg-slate-100 rounded-2xl mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
        {(['whatsapp', 'voice', 'calendar'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${
              activeTab === tab ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab === 'whatsapp' && <MessageCircle size={18} />}
            {tab === 'voice' && <Phone size={18} />}
            {tab === 'calendar' && <Calendar size={18} />}
            <span className="capitalize">{t.demo[tab]}</span>
          </button>
        ))}
      </div>

      <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl min-h-[550px] border border-slate-800 flex flex-col">
        {activeTab === 'whatsapp' && <WhatsAppDemo />}
        {activeTab === 'voice' && <VoiceDemo />}
        {activeTab === 'calendar' && <CalendarDemo />}
      </div>
    </div>
  );
};

const WhatsAppDemo: React.FC = () => {
  const { t, isRTL, locale } = useLanguage();
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string, options?: string[]}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState<'service' | 'time' | 'confirmed'>('service');

  useEffect(() => {
    // Initial welcome message
    setMessages([{ role: 'user', text: locale === 'ar' ? "أهلاً، أريد حجز موعد من فضلك" : (locale === 'fr' ? "Bonjour, j'aimerais prendre rendez-vous." : "Hi, I'd like to book an appointment please.") }]);
    triggerBotResponse(
      locale === 'ar' ? "أهلاً بك في صالون GlowDesk! يمكنني مساعدتك في حجز خدمات السبا والشعر. أي خدمة تود حجزها؟" : (locale === 'fr' ? "Bonjour ! Bienvenue chez GlowDesk Spa. Quel soin souhaitez-vous réserver ?" : "Hello! Welcome to GlowDesk Beauty. Which service would you like to book?"),
      locale === 'ar' ? ["تنظيف بشرة", "مانيكير", "ليزر"] : (locale === 'fr' ? ["Soin du visage", "Manucure", "Épilation laser"] : ["Facial Treatment", "Manicure", "Laser Hair Removal"])
    );
  }, [locale]);

  const triggerBotResponse = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text, options }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleOptionSelect = (option: string) => {
    if (stage === 'confirmed') return; // Discussion finished

    setMessages(prev => [...prev, { role: 'user', text: option }]);
    
    if (stage === 'service') {
      setStage('time');
      setTimeout(() => {
        triggerBotResponse(
          locale === 'ar' ? `رائع! لخدمة ${option} لدينا توفر غداً. هل الساعة 10:00 صباحاً أم 2:30 ظهراً تناسبك؟` : (locale === 'fr' ? `Parfait ! Pour votre ${option}, nous avons des disponibilités demain. 10h00 ou 14h30 ?` : `Perfect! For your ${option}, we have availability tomorrow. Does 10:00 AM or 2:30 PM work better for you?`),
          ["10:00 AM", "2:30 PM"]
        );
      }, 500);
    } else if (stage === 'time') {
      setStage('confirmed');
      setTimeout(() => {
        triggerBotResponse(
          locale === 'ar' ? `تم التأكيد! حجزنا لك الموعد في تمام ${option}. لقد أرسلنا رسالة تأكيد إلى هاتفك. نراك قريباً!` : (locale === 'fr' ? `C'est confirmé ! Votre rendez-vous est réservé pour ${option}. Nous vous avons envoyé un SMS de confirmation. À bientôt !` : `Confirmed! Your appointment is successfully booked for ${option}. We have sent a confirmation text to your phone. See you soon!`)
        );
      }, 500);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#e5ddd5] dark:bg-[#0b141a]">
      <div className={`bg-[#075e54] text-white p-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
          <img src="https://picsum.photos/seed/orienta-bot/40/40" alt="Avatar" />
        </div>
        <div className={isRTL ? 'text-right' : 'text-left'}>
          <p className="font-bold">{t.demo.waHeader}</p>
          <p className="text-xs opacity-80">{t.demo.waSub}</p>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}>
             <div className={`max-w-[80%] p-3 rounded-lg shadow-sm text-sm ${
               m.role === 'user' 
                ? 'bg-[#dcf8c6] text-slate-800' + (isRTL ? ' rounded-tl-none' : ' rounded-tr-none') 
                : 'bg-white text-slate-800' + (isRTL ? ' rounded-tr-none' : ' rounded-tl-none')
             } ${isRTL ? 'text-right' : 'text-left'}`}>
               {m.text}
               {m.options && (
                 <div className={`mt-3 flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                   {m.options.map(opt => (
                     <button key={opt} onClick={() => handleOptionSelect(opt)} className="px-3 py-1.5 bg-rose-50 text-rose-600 border border-rose-200 rounded-full font-semibold hover:bg-rose-600 hover:text-white transition-colors">{opt}</button>
                   ))}
                 </div>
               )}
             </div>
          </div>
        ))}
        {isTyping && (
          <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <div className="bg-white p-3 rounded-lg shadow-sm flex gap-1">
              <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        )}
      </div>

      <div className={`bg-[#f0f2f5] p-3 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={`flex-1 bg-white rounded-full px-4 py-2 text-slate-400 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{t.demo.waInput}</div>
        <button className="bg-[#128c7e] text-white p-2.5 rounded-full rotate-0 rtl:rotate-180"><Send size={18} /></button>
      </div>
    </div>
  );
};

const VoiceDemo: React.FC = () => {
  const { t, isRTL, locale } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'calling' | 'connected'>('idle');
  const [transcript, setTranscript] = useState<string[]>([]);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startCall = () => {
    setStatus('calling');
    setTimeout(() => {
      setStatus('connected');
      setTimer(0);
      intervalRef.current = window.setInterval(() => setTimer(prev => prev + 1), 1000);
      
      const lines = locale === 'ar' ? [
        ["AI", "مرحباً بك في صالون التجميل الفاخر. يمكنني مساعدتك في حجز موعد لشعر أو سبا. ما هي الخدمة التي تهتم بها؟"],
        ["Caller", "أهلاً، أبحث عن تنظيف بشرة الأسبوع القادم."],
        ["AI", "لدينا موعد متاح يوم الثلاثاء الساعة 11:00 صباحاً. هل يناسبك؟"]
      ] : (locale === 'fr' ? [
        ["AI", "Bienvenue à votre institut de beauté GlowDesk. Je peux vous aider à réserver un soin. Quel service vous intéresse ?"],
        ["Caller", "Bonjour, je cherche un soin du visage pour la semaine prochaine."],
        ["AI", "Nous avons une disponibilité mardi à 11h00. Cela vous convient-il ?"]
      ] : [
        ["AI", "Hello, welcome to GlowDesk Beauty Spa. I can help you book a luxury treatment. Which service are you interested in?"],
        ["Caller", "Hi, I'm looking for an anti-aging facial sometime next week."],
        ["AI", "We have our signature 'Eternal Glow' facial available on Tuesday at 11:00 AM. Would that work?"]
      ]);

      lines.forEach((l, i) => {
        setTimeout(() => setTranscript(prev => [...prev, `${l[0]}: ${l[1]}`]), (i + 1) * 2000);
      });
    }, 1000); 
  };

  const endCall = () => {
    setStatus('idle');
    setTranscript([]);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`flex-1 flex flex-col bg-slate-900 p-8 text-white relative ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col justify-between">
        {status === 'idle' ? (
          <div className="text-center mt-20">
            <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={40} className="animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{t.demo.voiceTitle}</h3>
            <p className="text-slate-400 mb-8">{t.demo.voiceDesc}</p>
            <button onClick={startCall} className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg uppercase tracking-wider">{t.demo.voiceCTA}</button>
          </div>
        ) : (
          <>
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto mb-4 border-2 border-slate-700 overflow-hidden">
                <img src="https://picsum.photos/seed/caller-id/80/80" alt="Bot" />
              </div>
              <p className="text-xl font-bold">{status === 'calling' ? '...' : t.demo.waHeader}</p>
              <p className="text-slate-400">{status === 'connected' ? formatTime(timer) : t.demo.voiceInbound}</p>
            </div>
            <div className="flex-1 my-8 overflow-y-auto space-y-3 px-4 max-h-48 scrollbar-hide">
              {transcript.map((line, i) => (
                <p key={i} className={`text-sm ${line.startsWith('AI') ? 'text-rose-400' : 'text-slate-200'}`}>{line}</p>
              ))}
            </div>
            <div className={`flex justify-center gap-12 pb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
               <div className="flex flex-col items-center gap-2">
                 <button className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center"><Mic size={24} /></button>
                 <span className="text-xs text-slate-500">{t.demo.voiceMute}</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <button onClick={endCall} className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg"><Phone size={24} className="rotate-[135deg]" /></button>
                 <span className="text-xs text-slate-500">{t.demo.voiceEnd}</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <button className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center"><User size={24} /></button>
                 <span className="text-xs text-slate-500">{t.demo.voiceInfo}</span>
               </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CalendarDemo: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const slots = [
    { time: "11:30 AM", status: "free" },
    { time: "2:00 PM", status: "booked" },
    { time: "10:00 AM", status: "free" },
    { time: "12:30 PM", status: "free" },
  ];

  return (
    <div className={`flex-1 flex flex-col bg-white p-6 md:p-10 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className={`flex justify-between items-center mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">{t.demo.calTitle}</h3>
          <p className="text-slate-500 text-sm">{t.demo.calSub}</p>
        </div>
        <div className={`flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Check size={16} className="text-teal-500" />
          <span className="text-xs font-semibold text-slate-600 uppercase">{t.demo.calSync}</span>
        </div>
      </div>

      {selectedSlot ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
           <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4"><Check size={32} /></div>
           <h4 className="text-xl font-bold text-slate-900">{t.demo.calSuccess}</h4>
           <p className="text-slate-500 mb-6">{t.demo.calSuccessSub.replace('{slot}', selectedSlot)}</p>
           <button onClick={() => setSelectedSlot(null)} className="text-rose-600 font-bold hover:underline">{t.demo.calAnother}</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {slots.map((slot, i) => (
            <div 
              key={i} 
              className={`p-4 border rounded-xl flex items-center justify-between group transition-all ${slot.status === 'booked' ? 'bg-slate-50 opacity-60' : 'bg-white border-slate-200 hover:border-rose-300 cursor-pointer'} ${isRTL ? 'flex-row-reverse' : ''}`}
              onClick={() => {
                if (slot.status === 'free') {
                  setSelectedSlot(slot.time);
                }
              }}
            >
              <p className="text-lg font-bold text-slate-800">{slot.time}</p>
              {slot.status === 'booked' ? (
                <span className="text-[10px] bg-slate-200 text-slate-500 px-2 py-1 rounded font-bold">{t.demo.calReserved}</span>
              ) : (
                <button className="text-xs bg-rose-50 text-rose-600 px-3 py-1.5 rounded-lg font-bold group-hover:bg-rose-600 group-hover:text-white">{t.demo.calBookNow}</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;
