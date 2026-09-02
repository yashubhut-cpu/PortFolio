import React, { useState } from 'react';
import { Terminal, Code2, Cpu, Database, Zap, Layers } from 'lucide-react';
import { Badge } from './Badge';

interface ProjectCardImageProps {
  src: string;
  alt: string;
  category: string;
  projectId: string;
}

export const ProjectCardImage: React.FC<ProjectCardImageProps> = ({
  src,
  alt,
  category,
  projectId,
}) => {
  const [hasError, setHasError] = useState(false);

  // Gradient patterns for neo-brutalist fallback placeholders
  const placeholders: Record<string, { bg: string; icon: React.ComponentType<{ size?: number; className?: string }>; tag: string }> = {
    gambles: {
      bg: 'bg-gradient-to-br from-[#1a1a2e] via-[#7c2d12] to-[#e85d04]',
      icon: Zap,
      tag: 'WEBSOCKETS & REDIS ENGINE',
    },
    givewithtrust: {
      bg: 'bg-gradient-to-br from-[#1a1a2e] via-[#0d9488] to-[#059669]',
      icon: Database,
      tag: 'TRANSPARENT DONATION PROTOCOL',
    },
    'locale-dev': {
      bg: 'bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#e85d04]',
      icon: Terminal,
      tag: 'NEO-BRUTALIST SUITE',
    },
    'ai-reviewer': {
      bg: 'bg-gradient-to-br from-[#1a1a2e] via-purple-900 to-[#0d9488]',
      icon: Cpu,
      tag: 'LLM CODE REVIEW BOT',
    },
    'vivid-analytics': {
      bg: 'bg-gradient-to-br from-[#1a1a2e] via-blue-900 to-[#059669]',
      icon: Layers,
      tag: 'METRICS TELEMETRY DASHBOARD',
    },
  };

  const currentPlaceholder = placeholders[projectId] || {
    bg: 'bg-gradient-to-br from-[#1a1a2e] to-[#7c2d12]',
    icon: Code2,
    tag: 'FULL-STACK APPLICATION',
  };

  const IconComponent = currentPlaceholder.icon;

  return (
    <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b-2 border-black dark:border-stone-800 bg-[#16213e] select-none">
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        /* Neo-Brutalist Code Window Fallback Graphic */
        <div className={`w-full h-full ${currentPlaceholder.bg} p-4 flex flex-col justify-between relative overflow-hidden`}>
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-white/20 pb-2 z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black" />
            </div>
            <span className="font-mono text-[9px] text-white/70 uppercase tracking-widest font-bold">
              {currentPlaceholder.tag}
            </span>
          </div>

          {/* Center Icon & Branding */}
          <div className="flex flex-col items-center justify-center py-2 z-10 space-y-2">
            <div className="w-12 h-12 bg-black/40 border-2 border-white/40 rounded-xs flex items-center justify-center text-white shadow-[2px_2px_0px_#000]">
              <IconComponent size={24} className="text-[#e85d04]" />
            </div>
            <span className="font-montserrat text-xs font-black text-white uppercase text-center tracking-wider max-w-[200px] truncate">
              {alt}
            </span>
          </div>

          {/* Skewed Background Grid Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        </div>
      )}

      {/* Category Badge on top right */}
      <div className="absolute top-3 right-3 z-20">
        <Badge variant="orange">{category}</Badge>
      </div>
    </div>
  );
};
