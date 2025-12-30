
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mic, MicOff, PhoneOff, CheckCircle, Sparkles, User, MapPin, AlertCircle, Calendar, MessageSquare, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/context';
// Correct import of Type from @google/genai
import { GoogleGenAI, LiveServerMessage, Modality, Type } from '@google/genai';

// Audio Helpers
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const ContactForm: React.FC = () => {
  const { t, isRTL, locale } = useLanguage();
  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'connected' | 'completed'>('idle');
  const [leadInfo, setLeadInfo] = useState({
    name: '',
    phone: '',
    address: '',
    issue: '',
    demoTime: ''
  });

  // Audio Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const outputNodeRef = useRef<GainNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Transcription State for UI feedback
  const [aiText, setAiText] = useState("");
  const [userText, setUserText] = useState("");

  const startCall = async () => {
    setCallStatus('connecting');
    setIsCalling(true);

    try {
      // Initialize with correct parameter name
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      outputNodeRef.current = outputAudioContextRef.current.createGain();
      outputNodeRef.current.connect(outputAudioContextRef.current.destination);

      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setCallStatus('connected');
            // Microphone input processing
            const source = inputAudioContextRef.current!.createMediaStreamSource(streamRef.current!);
            const scriptProcessor = inputAudioContextRef.current!.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              if (isMuted) return;
              const inputData = e.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000',
              };
              // Crucial: sessionPromise.then to ensure the session is active before sending
              sessionPromiseRef.current?.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContextRef.current!.destination);

            // Immediate Greeting Trigger
            sessionPromise.then(session => {
              session.sendRealtimeInput({ 
                text: locale === 'ar' ? "مرحباً، أنا المساعد الذكي لـ GlowDesk. كيف يمكنني مساعدتك في صالونك اليوم؟" : (locale === 'fr' ? "Bonjour, je suis l'assistant IA GlowDesk. Comment puis-je aider votre salon aujourd'hui ?" : "Hello, I am the GlowDesk AI assistant. How can I help your beauty business today?") 
              });
            });
          },
          onmessage: async (message: LiveServerMessage) => {
            // Handle Transcription
            if (message.serverContent?.outputTranscription) {
              setAiText(prev => prev + message.serverContent.outputTranscription.text);
            } else if (message.serverContent?.inputTranscription) {
              setUserText(prev => prev + message.serverContent.inputTranscription.text);
            }

            if (message.serverContent?.turnComplete) {
              setAiText("");
              setUserText("");
            }

            // Handle Audio
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && outputAudioContextRef.current) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContextRef.current.currentTime);
              const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContextRef.current, 24000, 1);
              const source = outputAudioContextRef.current.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputNodeRef.current!);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              activeSourcesRef.current.add(source);
              source.onended = () => activeSourcesRef.current.delete(source);
            }

            // Handle Interruption
            if (message.serverContent?.interrupted) {
              activeSourcesRef.current.forEach(s => s.stop());
              activeSourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }

            // Handle Function Calls (Data Extraction)
            if (message.toolCall) {
              for (const fc of message.toolCall.functionCalls) {
                if (fc.name === 'updateLeadInfo') {
                  const args = fc.args as any;
                  setLeadInfo(prev => ({
                    ...prev,
                    ...args
                  }));
                  
                  sessionPromiseRef.current?.then(session => {
                    session.sendToolResponse({
                      functionResponses: { id: fc.id, name: fc.name, response: { status: "updated" } }
                    });
                  });
                } else if (fc.name === 'completeBooking') {
                  setCallStatus('completed');
                  setTimeout(() => endCall(), 3000);
                  sessionPromiseRef.current?.then(session => {
                    session.sendToolResponse({
                      functionResponses: { id: fc.id, name: fc.name, response: { status: "booking_confirmed" } }
                    });
                  });
                }
              }
            }
          },
          onerror: (e) => console.error("Live API Error:", e),
          onclose: () => setIsCalling(false)
        },
        config: {
          responseModalities: [Modality.AUDIO],
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          },
          tools: [{
            functionDeclarations: [
              {
                name: 'updateLeadInfo',
                description: 'Updates the customer lead information as it is extracted from the conversation.',
                parameters: {
                  // Fixed: Use Type enum members instead of string literals
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING, description: 'Full name of the prospect' },
                    phone: { type: Type.STRING, description: 'Phone number' },
                    address: { type: Type.STRING, description: 'Business address' },
                    issue: { type: Type.STRING, description: 'Business challenge or problem description' },
                    demoTime: { type: Type.STRING, description: 'Chosen time for the demo' }
                  }
                }
              },
              {
                name: 'completeBooking',
                description: 'Call this when all information (name, phone, address, issue, demoTime) has been collected and the booking is confirmed.',
                // Fixed: Use Type enum members instead of string literals
                parameters: { type: Type.OBJECT, properties: {} }
              }
            ]
          }],
          systemInstruction: `You are the GlowDesk AI Front Desk Assistant by Orienta. GlowDesk is a specialized AI for high-end Beauty and Spa Salons. 
          Language: ${locale === 'ar' ? 'Arabic' : locale === 'fr' ? 'French' : 'English'}.
          
          1. Greet them warmly as a specialized beauty/spa receptionist. Explain that GlowDesk handles calls and WhatsApp for salons 24/7.
          2. Help them choose a virtual time for a demo.
          3. Once a time is chosen, collect:
             - Full Name
             - Phone Number
             - Salon Address
             - Main business challenge.
          4. When you extract info, call 'updateLeadInfo'.
          5. Once all fields are filled, call 'completeBooking' and thank them.
          6. Be sophisticated, professional, and efficient. 
          7. Plans: Lite €49, Pro €99, Enterprise €149.`
        }
      });
      sessionPromiseRef.current = sessionPromise;
    } catch (err) {
      console.error("Failed to start call", err);
      setIsCalling(false);
      setCallStatus('idle');
    }
  };

  const endCall = () => {
    setIsCalling(false);
    setCallStatus(callStatus === 'completed' ? 'completed' : 'idle');
    streamRef.current?.getTracks().forEach(track => track.stop());
    inputAudioContextRef.current?.close();
    outputAudioContextRef.current?.close();
    sessionPromiseRef.current?.then(s => s.close());
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className={`bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 flex flex-col lg:flex-row shadow-2xl relative`}>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>

          {/* Left Panel: Info & AI Pulse */}
          <div className={`p-10 lg:p-16 lg:w-1/2 flex flex-col justify-between relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-rose-500/20">
                <Sparkles size={12} />
                Orienta Niche AI
              </div>
              <h2 className="text-4xl font-serif font-bold text-white mb-6 leading-tight">
                {callStatus === 'completed' ? "Booking Confirmed!" : "Speak with GlowDesk AI"}
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Experience exactly how our AI handles salon clients. Talk to our specialized beauty assistant to book your GlowDesk installation.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-10">
              {callStatus === 'idle' && (
                <button 
                  onClick={startCall}
                  className="group relative flex flex-col items-center gap-4"
                >
                  <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-900/50 hover:bg-green-500 hover:scale-105 transition-all active:scale-95">
                    <Phone className="text-white" size={36} />
                  </div>
                  <span className="text-green-500 font-bold uppercase tracking-widest text-xs animate-pulse">START CALL</span>
                </button>
              )}

              {isCalling && (
                <div className="flex flex-col items-center gap-8 w-full">
                  {/* Visualizer Circle */}
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-2 bg-green-500/10 rounded-full animate-pulse"></div>
                    <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center border-4 border-green-600 z-10">
                      <Mic className="text-green-500" size={32} />
                    </div>
                  </div>

                  {/* Transcripts */}
                  <div className="w-full space-y-3 px-4 h-24 overflow-hidden flex flex-col justify-end">
                    {userText && (
                      <p className="text-sm text-slate-300 italic opacity-80 animate-in fade-in slide-in-from-bottom-2">
                        "{userText}"
                      </p>
                    )}
                    {aiText && (
                      <p className="text-sm text-rose-400 font-medium animate-in fade-in slide-in-from-bottom-2">
                        {aiText}
                      </p>
                    )}
                  </div>

                  {/* Call Controls */}
                  <div className="flex gap-6">
                    <button 
                      onClick={toggleMute}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all border ${isMuted ? 'bg-red-500 border-red-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'}`}
                    >
                      {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
                    </button>
                    <button 
                      onClick={endCall}
                      className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-900/40 hover:bg-red-700"
                    >
                      <PhoneOff size={24} />
                    </button>
                  </div>
                </div>
              )}

              {callStatus === 'completed' && (
                <div className="flex flex-col items-center text-center animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mb-6 border-2 border-teal-500/50">
                    <CheckCircle size={48} />
                  </div>
                  <p className="text-teal-400 font-bold mb-2">Success!</p>
                  <p className="text-slate-400 text-sm">Your salon installation call is scheduled.</p>
                  <button onClick={() => setCallStatus('idle')} className="mt-6 text-rose-500 text-sm font-bold hover:underline">Restart Interaction</button>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Extracted Lead Data */}
          <div className="lg:w-1/2 bg-slate-800/50 p-10 lg:p-16 border-l border-slate-800 flex flex-col">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-10 flex items-center gap-2">
              <Sparkles size={14} className="text-rose-500" />
              Real-time Salon Onboarding
            </h3>

            <div className="space-y-6 flex-1">
              <InfoItem icon={<User size={18} />} label="Professional Name" value={leadInfo.name} active={isCalling} />
              <InfoItem icon={<Phone size={18} />} label="Contact Number" value={leadInfo.phone} active={isCalling} />
              <InfoItem icon={<MapPin size={18} />} label="Salon Address" value={leadInfo.address} active={isCalling} />
              <InfoItem icon={<Calendar size={18} />} label="Trial Start" value={leadInfo.demoTime} active={isCalling} />
              <InfoItem icon={<MessageSquare size={18} />} label="Salon Challenge" value={leadInfo.issue} active={isCalling} />
            </div>

            <div className="mt-10 pt-10 border-t border-slate-700/50">
              <div className="flex items-center gap-4 text-slate-500">
                 <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] uppercase font-bold tracking-tighter">AI Extraction Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  active: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value, active }) => (
  <div className={`p-4 rounded-2xl border transition-all duration-500 ${value ? 'bg-rose-600/10 border-rose-500/30' : 'bg-slate-900/50 border-slate-800'}`}>
    <div className="flex items-center gap-3 mb-1">
      <div className={`${value ? 'text-rose-400' : 'text-slate-600'}`}>
        {icon}
      </div>
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
    <div className="min-h-[1.5rem] flex items-center">
      {value ? (
        <p className="text-white font-medium animate-in slide-in-from-left-2">{value}</p>
      ) : (
        active ? (
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-slate-700 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-slate-700 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-1.5 h-1.5 bg-slate-700 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
        ) : (
          <p className="text-slate-700 italic text-sm">Listening for details...</p>
        )
      )}
    </div>
  </div>
);

export default ContactForm;
