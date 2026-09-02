import React, { useState, useEffect } from 'react';
import { ArrowRight, Smartphone, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';

interface HeroSectionProps {
  onExploreServices: () => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreServices, onOpenDemo }) => {
  const [acronymIndex, setAcronymIndex] = useState(0);
  const acronyms = [
    { text: 'F S E', label: 'FULL-STACK ENGINEER' },
    { text: 'B M S', label: 'BACKEND & MICROSERVICES' },
    { text: 'W E B', label: 'WEB ARCHITECT' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAcronymIndex((prev) => (prev + 1) % acronyms.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden flex items-center py-12 sm:py-20 text-[#1a1a2e] dark:text-white transition-colors duration-300">
      {/* High-Resolution Surat City & Bridge Skyline Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1920&auto=format&fit=crop"
          alt="Surat City Skyline & Bridge"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark/Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fefae0]/90 via-[#fefae0]/80 to-[#fefae0]/60 dark:from-[#0a0a14]/95 dark:via-[#0a0a14]/85 dark:to-[#0a0a14]/70 transition-colors duration-300" />
      </div>

      <div className="relative z-10 max-w-[#1280px] mx-auto px-4 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Headline & Bio matching The Locale */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Top Floating Tag Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white dark:bg-[#16213e] text-[#1a1a2e] dark:text-white border-2 border-black dark:border-[#e85d04] px-4 py-2 shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#e85d04] rounded-xs select-none">
              <ShieldCheck className="text-[#0d9488]" size={18} />
              <span className="font-space-grotesk text-[10px] sm:text-xs tracking-wider uppercase font-black">
                SURAT'S TRENDING IT & FULL-STACK NETWORK
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-montserrat text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1a1a2e] dark:text-white leading-[1.15]">
                <span className="bg-[#e85d04] text-black px-3 py-1 border-2 border-black inline-block transform -rotate-1 rounded-xs shadow-[3px_3px_0px_#000] mr-2">
                  Yash Bhut
                </span>
                Surat — India's Best
              </h1>

              {/* Acronym highlight */}
              <div className="font-montserrat text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1a1a2e] dark:text-white leading-[1.15] flex flex-wrap items-center gap-3 pt-1">
                <span>Spot</span>
                <span className="bg-[#e85d04] text-black px-3 py-0.5 border-2 border-black inline-block font-black shadow-[3px_3px_0px_#000]">
                  {acronyms[acronymIndex].text}
                </span>
              </div>
            </div>

            {/* Subtitle Bio */}
            <p className="font-plus-jakarta text-sm sm:text-lg text-stone-700 dark:text-stone-200 max-w-2xl leading-relaxed">
              Yash Bhut is Surat's full-stack software engineer & technology architect. Yash maps real-time web engines, aesthetic full-stack web applications, and low-latency microservices across Surat, Vesu, Adajan, VIP Road, and global remote setups.
            </p>
          </div>

          {/* Right Column: Glassmorphism Card & Action Buttons matching The Locale */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-full sm:max-w-[26rem] space-y-4">
              {/* Right Card */}
              <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md border-2 border-black dark:border-[#f59e0b] p-6 sm:p-7 rounded-xs text-[#1a1a2e] dark:text-white space-y-4 shadow-[4px_4px_0px_#000] dark:shadow-2xl">
                <div className="flex items-start gap-2.5 text-[#e85d04] dark:text-[#f59e0b]">
                  <Smartphone size={20} className="shrink-0 mt-0.5" />
                  <span className="font-space-grotesk text-xs uppercase font-black tracking-wider leading-tight">
                    BOOKING SLOTS EXCLUSIVELY IN-APP & HIRE INQUIRIES
                  </span>
                </div>
                <p className="font-plus-jakarta text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  Real-time slot bookings for cricket/football turfs, cafe hotspots, and custom full-stack software projects are handled inside this web platform detailing our engineering curations and team developments.
                </p>
              </div>

              {/* Action Buttons Grid matching The Locale */}
              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 w-full">
                <button
                  onClick={onExploreServices}
                  className="w-full bg-[#e85d04] hover:bg-[#fb923c] text-black font-space-grotesk text-xs uppercase font-black py-4 px-4 border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer text-center leading-tight"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={onOpenDemo}
                  className="w-full bg-[#1a1a2e] hover:bg-[#252542] text-white dark:bg-[#16213e] dark:hover:bg-[#202d54] border-2 border-black dark:border-[#e85d04] shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#e85d04] font-space-grotesk text-xs uppercase font-black py-4 px-4 hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center justify-center gap-2 cursor-pointer text-center leading-tight"
                >
                  <span>WATCH MOBILE DEMO</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
