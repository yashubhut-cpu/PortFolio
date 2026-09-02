import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'danger' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-space-grotesk font-extrabold uppercase tracking-wider border-2 border-black dark:border-[#e85d04] rounded-xs cursor-pointer transition-all active-press select-none';

  const variantStyles = {
    primary:
      'bg-[#e85d04] hover:bg-[#fb923c] text-black neobrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    secondary:
      'bg-[#0d9488] hover:bg-[#14b8a6] text-white neobrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    dark:
      'bg-[#1a1a2e] hover:bg-[#252542] text-white dark:bg-[#e85d04] dark:hover:bg-[#fb923c] dark:text-[#1a1a2e] neobrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    outline:
      'bg-white dark:bg-[#16213e] text-[#1a1a2e] dark:text-white hover:bg-stone-100 dark:hover:bg-stone-800 neobrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    danger:
      'bg-[#dc2626] hover:bg-rose-700 text-white neobrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    accent:
      'bg-[#059669] hover:bg-emerald-600 text-white neobrutal-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
  };

  const sizeStyles = {
    sm: 'py-1.5 px-3 text-[11px]',
    md: 'py-2.5 px-5 text-xs',
    lg: 'py-3.5 px-8 text-sm sm:text-base',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
