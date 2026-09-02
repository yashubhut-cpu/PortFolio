import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/navigation';
import { profileData } from '../../data/profile';
import { Button } from '../common/Button';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenHireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenHireModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Scroll Spy observer
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      setActiveSection(targetId);
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fefae0]/90 dark:bg-[#121220]/95 backdrop-blur-md border-b-2 border-black dark:border-[#e85d04] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo matching The Locale */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 select-none"
        >
          <span className="font-montserrat text-xl sm:text-2xl font-black tracking-tighter uppercase text-[#1a1a2e] dark:text-white">
            YASH BHUT
          </span>
          <span className="bg-[#e85d04] text-black font-montserrat text-[10px] font-black uppercase px-2 py-0.5 border border-black rounded-xs shadow-[1px_1px_0px_#000]">
            SURAT
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {NAV_ITEMS.map((item) => {
            const itemKey = item.href.replace('#', '');
            const isActive = activeSection === itemKey;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 font-space-grotesk text-xs uppercase font-extrabold transition-all select-none ${
                  isActive
                    ? 'bg-[#e85d04] text-black font-black border-2 border-black shadow-[2px_2px_0px_#000] rounded-xs'
                    : 'text-stone-700 dark:text-stone-300 hover:text-[#e85d04] dark:hover:text-[#e85d04]'
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-black dark:border-[#e85d04] bg-white dark:bg-[#16213e] text-[#1a1a2e] dark:text-[#e85d04] rounded-xs shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#e85d04] hover:bg-[#e85d04] hover:text-black dark:hover:bg-[#e85d04] dark:hover:text-black transition-all cursor-pointer"
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-stone-800" />
            )}
          </button>

          {/* Hire Me CTA Button */}
          <Button variant="primary" size="sm" onClick={onOpenHireModal} className="hidden sm:inline-flex gap-1">
            <span>Hire Me</span>
            <ArrowUpRight size={14} />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border-2 border-black bg-[#e85d04] text-black rounded-xs shadow-[2px_2px_0px_#000] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fefae0] dark:bg-[#1a1a2e] border-b-3 border-black dark:border-[#e85d04] px-4 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const itemKey = item.href.replace('#', '');
              const isActive = activeSection === itemKey;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group flex flex-col p-3 border-2 border-black rounded-xs transition-all ${
                    isActive
                      ? 'bg-[#e85d04] text-black font-black shadow-[3px_3px_0px_#000]'
                      : 'bg-white dark:bg-[#16213e] text-[#1a1a2e] dark:text-white border-black/20 dark:border-white/10 hover:border-black dark:hover:border-[#e85d04]'
                  }`}
                >
                  <span className="font-space-grotesk text-sm uppercase font-black">
                    {item.label}
                  </span>
                  {item.desc && (
                    <span
                      className={`font-plus-jakarta text-xs mt-0.5 ${
                        isActive ? 'text-black/80' : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      {item.desc}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
