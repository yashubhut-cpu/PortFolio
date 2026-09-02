import React from 'react';
import { Github, Linkedin, Mail, Instagram, ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SitemapFooter } from './SitemapFooter';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fefae0] dark:bg-[#1a1a2e] text-[#1a1a2e] dark:text-white border-t-3 border-black dark:border-[#e85d04] pt-12 pb-8 transition-colors duration-300">
      <div className="max-w-[#1280px] mx-auto px-4 sm:px-10 space-y-12">
        {/* Directory Sitemap Section */}
        <SitemapFooter />

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-black/10 dark:border-white/10 text-center md:text-left">
          {/* Brand Info */}
          <div className="space-y-1">
            <h3 className="font-montserrat text-lg font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
              {profileData.name}
            </h3>
            <p className="font-plus-jakarta text-xs text-stone-700 dark:text-stone-400 max-w-md">
              Full-Stack Software Engineer specializing in MERN stack, Next.js, real-time engines, and scalable web apps.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-[#16213e] hover:bg-[#e85d04] text-[#1a1a2e] dark:text-white hover:text-black border-2 border-black dark:border-white/20 rounded-xs transition-colors cursor-pointer shadow-[2px_2px_0px_#000] dark:shadow-none"
              aria-label="Yash Bhut GitHub Profile (@yashubhut-cpu)"
              title="Yash Bhut GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-[#16213e] hover:bg-[#e85d04] text-[#1a1a2e] dark:text-white hover:text-black border-2 border-black dark:border-white/20 rounded-xs transition-colors cursor-pointer shadow-[2px_2px_0px_#000] dark:shadow-none"
              aria-label="Yash Bhut LinkedIn Profile"
              title="Yash Bhut LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 bg-white dark:bg-[#16213e] hover:bg-[#e85d04] text-[#1a1a2e] dark:text-white hover:text-black border-2 border-black dark:border-white/20 rounded-xs transition-colors cursor-pointer shadow-[2px_2px_0px_#000] dark:shadow-none"
              aria-label="Email Yash Bhut (yashubhut@gmail.com)"
              title="Email Yash Bhut"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.instagram.com/mr._yash_bhut/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-[#16213e] hover:bg-[#e85d04] text-[#1a1a2e] dark:text-white hover:text-black border-2 border-black dark:border-white/20 rounded-xs transition-colors cursor-pointer shadow-[2px_2px_0px_#000] dark:shadow-none"
              aria-label="Yash Bhut Instagram Profile"
              title="Yash Bhut Instagram Profile"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            title="Back to Top"
            className="flex items-center gap-2 bg-[#e85d04] hover:bg-[#fb923c] text-black font-space-grotesk text-xs uppercase font-extrabold px-4 py-2 border border-black shadow-[2px_2px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>Back To Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-black/5 dark:border-white/5 font-space-grotesk text-[11px] text-stone-600 dark:text-stone-500 uppercase tracking-wider">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved. Designed & Built with Neo-brutalist Excellence.
        </div>
      </div>
    </footer>
  );
};
