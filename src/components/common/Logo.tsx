import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const LogoMark: React.FC<{ sizePx?: number; className?: string }> = ({
  sizePx = 36,
  className = '',
}) => {
  return (
    <svg
      width={sizePx}
      height={sizePx}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 group-hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      {/* Dark Hard Shadow Layer */}
      <rect x="36" y="36" width="440" height="440" rx="44" fill="#000000" />
      
      {/* Primary Brand Tile */}
      <rect
        x="24"
        y="24"
        width="440"
        height="440"
        rx="44"
        fill="#e85d04"
        stroke="#000000"
        strokeWidth="18"
      />

      {/* Top Subtle Highlight */}
      <rect x="44" y="44" width="400" height="16" rx="8" fill="#ffffff" fillOpacity="0.3" />

      {/* Monogram YB */}
      <text
        x="100"
        y="325"
        fontFamily="'Space Grotesk', 'Montserrat', system-ui, -apple-system, sans-serif"
        fontSize="230"
        fontWeight="900"
        fill="#1a1a2e"
        letterSpacing="-12"
      >
        YB
      </text>

      {/* Terminal Code Cursor Prompt Accent (>_) */}
      <path
        d="M 370 230 L 400 250 L 370 270"
        stroke="#1a1a2e"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="370" y="295" width="34" height="16" rx="4" fill="#1a1a2e" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  size = 'sm',
  showBadge = true,
  className = '',
  onClick,
}) => {
  const iconSizes = {
    sm: 36,
    md: 44,
    lg: 56,
  };

  const textSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const badgeSizes = {
    sm: 'text-[9px] sm:text-[10px] px-1.5 py-0.5',
    md: 'text-[10px] sm:text-[11px] px-2 py-0.5',
    lg: 'text-[11px] sm:text-[12px] px-2.5 py-1',
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#"
      title="Yash Bhut — Full-Stack Software Engineer & Technology Architect"
      aria-label="Yash Bhut Portfolio Homepage"
      onClick={handleLogoClick}
      className={`group flex items-center gap-2.5 sm:gap-3 select-none transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85d04] rounded-sm ${className}`}
    >
      {/* Brand Emblem Logo Mark */}
      <div className="relative flex items-center justify-center">
        <LogoMark sizePx={iconSizes[size]} />
      </div>

      {/* Brand Name Typography & Location Badge */}
      <div className="flex items-center gap-2">
        <span
          className={`font-montserrat font-black tracking-tighter uppercase text-[#1a1a2e] dark:text-white transition-colors duration-200 group-hover:text-[#e85d04] dark:group-hover:text-[#e85d04] ${textSizes[size]}`}
        >
          YASH BHUT
        </span>

        {showBadge && (
          <span
            className={`bg-[#e85d04] text-black font-montserrat font-black uppercase border border-black rounded-xs shadow-[1.5px_1.5px_0px_#000] tracking-wider shrink-0 ${badgeSizes[size]}`}
          >
            SURAT
          </span>
        )}
      </div>
    </a>
  );
};
