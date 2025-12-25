
import React from 'react';

const OrientaLogo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 32 }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" className="text-rose-600" />
        <path d="M50 15L55 40L80 45L55 50L50 75L45 50L20 45L45 40L50 15Z" fill="currentColor" className="text-indigo-900" />
        <circle cx="50" cy="45" r="4" fill="white" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-serif font-bold tracking-tight text-slate-900">
          Glow<span className="text-rose-600">Desk</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">by Orienta</span>
      </div>
    </div>
  );
};

export default OrientaLogo;
