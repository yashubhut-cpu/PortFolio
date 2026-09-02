import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'teal' | 'emerald' | 'rose' | 'amber' | 'lavender' | 'dark' | 'outline';
  rotate?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  rotate = false,
  className,
  size = 'md',
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-space-grotesk font-black uppercase border border-black dark:border-white/20 rounded-xs select-none shadow-[1px_1px_0px_#000]';

  const sizeStyles = {
    sm: 'text-[9px] px-2 py-0.5',
    md: 'text-[11px] px-3 py-1',
  };

  const variantStyles = {
    orange: 'bg-[#e85d04] text-black',
    teal: 'bg-[#0d9488] text-white',
    emerald: 'bg-[#059669] text-white',
    rose: 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200 border-rose-600',
    amber: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border-amber-500',
    lavender: 'bg-[#dde1ff] text-[#0d9488] dark:bg-blue-950 dark:text-blue-200',
    dark: 'bg-[#1a1a2e] text-white dark:bg-white dark:text-[#1a1a2e]',
    outline: 'bg-white/90 dark:bg-stone-900/90 text-[#1a1a2e] dark:text-stone-200',
  };

  return (
    <span
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        rotate && 'transform -rotate-1',
        className
      )}
    >
      {children}
    </span>
  );
};
