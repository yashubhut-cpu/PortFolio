import React from 'react';
import { Terminal, Zap, Code, Cpu, Database, Flame } from 'lucide-react';

export const Ticker: React.FC = () => {
  const items = [
    { text: 'REACT 19 & NEXT.JS APP ROUTER', icon: Code },
    { text: 'TYPESCRIPT & FULL-STACK ARCHITECTURE', icon: Terminal },
    { text: 'REAL-TIME WEBSOCKETS & REDIS PUB/SUB', icon: Zap },
    { text: 'NODE.JS & PYTHON FASTAPI MICROSERVICES', icon: Cpu },
    { text: 'POSTGRESQL & PRISMA DATA MODELS', icon: Database },
    { text: 'AVAILABLE FOR NEW FULL-STACK ROLES', icon: Flame },
  ];

  return (
    <div className="w-full bg-[#e85d04] text-black border-y-2 border-black py-2.5 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2.5 font-space-grotesk text-xs uppercase font-extrabold tracking-wider">
              <IconComponent size={14} className="flex-shrink-0" />
              <span>{item.text}</span>
              <span className="ml-6 font-black opacity-40">★</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
