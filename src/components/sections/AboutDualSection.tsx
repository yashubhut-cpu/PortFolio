import React from 'react';
import { Code, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

interface AboutDualSectionProps {
  onExploreServices: () => void;
}

export const AboutDualSection: React.FC<AboutDualSectionProps> = ({ onExploreServices }) => {
  return (
    <section id="about" className="relative z-20 bg-[#fefae0] dark:bg-[#1a1a2e] w-full border-t-3 border-black dark:border-[#e85d04] py-16 sm:py-24 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] transition-colors duration-300">
      <div className="max-w-[#1280px] mx-auto px-4 sm:px-10 space-y-12 sm:space-y-16">
        {/* Title Header */}
        <div className="text-center space-y-4 px-1 max-w-3xl mx-auto">
          <h2 className="font-montserrat text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04] tracking-tight">
            What Does Yash Bhut Bring To The Table?
          </h2>
          <p className="font-plus-jakarta text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            I offer a dual engineering perspective: combining rigorous full-stack technical craftsmanship for engineering teams with rapid product delivery and UI design for startups & businesses.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: For Engineering Teams */}
          <div className="p-6 sm:p-8 border-3 border-black dark:border-[#e85d04] bg-white dark:bg-[#16213e] neobrutal-shadow flex flex-col justify-between space-y-6 h-full hover:-translate-y-1 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#0d9488] text-white flex items-center justify-center border-2 border-black">
                <Code size={24} />
              </div>
              <h3 className="font-montserrat text-xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                For Engineering Teams & Tech Leads
              </h3>
              <p className="font-plus-jakarta text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Production-ready TypeScript, clean modular component architecture, automated CI/CD pipelines, sub-50ms WebSocket real-time state sync, and optimized database indexing.
              </p>
              <ul className="space-y-2 pt-2">
                {['Strict TypeScript & Clean Architecture', 'MERN Stack & Next.js App Router', 'Redis & WebSockets Real-time State', 'PostgreSQL & Prisma Query Optimization'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-stone-800 dark:text-stone-300">
                    <CheckCircle size={14} className="text-[#0d9488]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onExploreServices}
              className="bg-[#0d9488] hover:bg-blue-600 text-white font-space-grotesk text-xs font-black uppercase py-3 px-5 border-2 border-black inline-flex items-center gap-2 justify-center w-full shadow-[2px_2px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>Explore Engineering Services</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Card 2: For Founders & Startups */}
          <div className="p-6 sm:p-8 border-3 border-black dark:border-[#e85d04] bg-white dark:bg-[#16213e] neobrutal-shadow flex flex-col justify-between space-y-6 h-full hover:-translate-y-1 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#e85d04] text-black flex items-center justify-center border-2 border-black">
                <Rocket size={24} />
              </div>
              <h3 className="font-montserrat text-xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                For Founders, Startups & Clients
              </h3>
              <p className="font-plus-jakarta text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Transform vision into pixel-perfect, high-converting digital products. From concept to launch, I deliver responsive custom web applications, SaaS dashboards, and e-commerce platforms.
              </p>
              <ul className="space-y-2 pt-2">
                {['Rapid MVP Development & Delivery', 'Modern Neo-Brutalist & Tailwind UI', 'Payment Gateway & Checkout Workflows', '100% Mobile Responsive Optimization'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-stone-800 dark:text-stone-300">
                    <CheckCircle size={14} className="text-[#e85d04]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onExploreServices}
              className="bg-[#e85d04] hover:bg-[#fb923c] text-black font-space-grotesk text-xs font-black uppercase py-3 px-5 border-2 border-black inline-flex items-center gap-2 justify-center w-full shadow-[2px_2px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>Explore Startup Solutions</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
