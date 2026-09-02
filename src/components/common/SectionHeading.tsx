import React from 'react';
import { Badge } from './Badge';
import { cn } from '../../utils/cn';

export interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: 'orange' | 'teal' | 'emerald' | 'rose' | 'amber' | 'lavender';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant = 'orange',
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col space-y-3 mb-10 sm:mb-14', alignmentStyles[align], className)}>
      {badgeText && (
        <Badge variant={badgeVariant} rotate>
          {badgeText}
        </Badge>
      )}
      <h2 className="font-montserrat text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1a1a2e] dark:text-[#e85d04]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-plus-jakarta text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
