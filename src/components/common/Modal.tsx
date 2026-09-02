import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'lg',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const widthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog Box */}
      <div
        className={cn(
          'relative w-full bg-white dark:bg-[#16213e] border-3 border-black dark:border-[#e85d04] neobrutal-shadow-lg p-6 rounded-xs z-10 text-[#1a1a2e] dark:text-white transition-all',
          widthStyles[maxWidth]
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-black dark:border-[#e85d04]/40 pb-4 mb-4">
          {title && (
            <h3 className="font-montserrat text-lg sm:text-xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-xs border-2 border-black bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 dark:border-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};
