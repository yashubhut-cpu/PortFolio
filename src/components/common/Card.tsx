import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  shadowColor?: 'black' | 'orange' | 'blue' | 'none';
  borderSize?: '2' | '3' | '4';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  shadowColor = 'black',
  borderSize = '2',
}) => {
  const borderStyles = {
    '2': 'border-2',
    '3': 'border-3',
    '4': 'border-4',
  };

  const shadowStyles = {
    black: 'neobrutal-shadow',
    orange: 'neobrutal-shadow-orange',
    blue: 'neobrutal-shadow-blue',
    none: 'shadow-none',
  };

  return (
    <div
      className={cn(
        'bg-white dark:bg-[#16213e] border-black dark:border-[#e85d04] p-6 rounded-xs transition-all duration-300',
        borderStyles[borderSize],
        shadowStyles[shadowColor],
        hoverEffect && 'hover:-translate-y-1 hover:translate-x-0.5',
        className
      )}
    >
      {children}
    </div>
  );
};
