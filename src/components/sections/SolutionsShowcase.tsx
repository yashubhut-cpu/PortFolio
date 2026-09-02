import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/services';
import { LiveCartWidget } from '../ui/LiveCartWidget';
import { TaskBoardWidget } from '../ui/TaskBoardWidget';
import { CodeScannerWidget } from '../ui/CodeScannerWidget';
import { OperationsWidget } from '../ui/OperationsWidget';

interface SolutionsShowcaseProps {
  onOpenHireModal: () => void;
}

export const SolutionsShowcase: React.FC<SolutionsShowcaseProps> = ({ onOpenHireModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="services"
      aria-labelledby="solutions-heading"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#fefae0] dark:bg-[#1a1a2e] border-y-2 border-black dark:border-[#e85d04] transition-colors duration-300"
    >
      <div className="max-w-[#1280px] mx-auto w-full px-4 sm:px-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-rose-600 bg-rose-50 text-rose-600 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-400 px-3 py-1 font-space-grotesk text-[10px] sm:text-xs tracking-wider uppercase font-black rounded-xs shadow-[2px_2px_0px_#000]">
            Meeting Diverse Tech Needs
          </div>
          <h2
            id="solutions-heading"
            className="font-montserrat text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04] tracking-tight leading-none pt-2 text-center"
          >
            What My IT Solutions Can Do For You
          </h2>
          <p className="font-plus-jakarta text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-xl mx-auto leading-relaxed">
            Tailored full-stack products and developer infrastructure. Interactive live widgets demonstrate real engineering modules.
          </p>
        </div>

        {/* Showcase Grid: Accordion Left + Live Widget Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          {/* Left Column: Interactive Accordion Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-start border-t-2 border-black dark:border-[#e85d04]/40">
            {servicesData.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <div key={service.id} className="border-b-2 border-black dark:border-[#e85d04]/40 transition-colors">
                  <button
                    onClick={() => setActiveTab(index)}
                    className="w-full flex items-center justify-between py-5 text-left font-montserrat text-base sm:text-lg lg:text-xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04] cursor-pointer"
                  >
                    <span>{service.title}</span>
                    <span
                      className={`text-lg font-space-grotesk font-black transform transition-transform duration-300 ${
                        isActive ? 'rotate-90 text-[#0d9488]' : 'rotate-0 text-stone-400'
                      }`}
                    >
                      →
                    </span>
                  </button>

                  {/* Expanded text preview */}
                  <div className="pb-5">
                    <p className="font-plus-jakarta text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <button
                      onClick={onOpenHireModal}
                      className="text-[#dc2626] dark:text-rose-400 font-space-grotesk text-xs uppercase font-extrabold tracking-wider inline-flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Inquire About {service.subtitle}</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Widget Box */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[360px] sm:min-h-[420px]">
            <div className={`flex-1 w-full border-3 border-black dark:border-[#e85d04] p-5 sm:p-8 rounded-xs neobrutal-shadow-lg transition-all duration-500 bg-gradient-to-br ${servicesData[activeTab].bgColor} flex flex-col justify-between h-full`}>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-black/20 dark:border-white/10 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 font-space-grotesk text-xs font-black uppercase tracking-wider text-stone-900 dark:text-white">
                  <span className="w-6 h-6 flex items-center justify-center bg-black text-white rounded-xs text-[10px] font-black border border-black shadow-[1px_1px_0px_#000]">
                    {activeTab + 1}
                  </span>
                  <span>{servicesData[activeTab].subtitle}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-space-grotesk text-[9px] uppercase tracking-widest text-stone-700 dark:text-stone-400 font-bold">
                    LIVE DEMO WIDGET
                  </span>
                </div>
              </div>

              {/* Dynamic Interactive Widget Body */}
              <div className="flex-1 flex flex-col justify-center items-center w-full py-4">
                {activeTab === 0 && <LiveCartWidget />}
                {activeTab === 1 && <TaskBoardWidget />}
                {activeTab === 2 && <CodeScannerWidget />}
                {activeTab === 3 && <OperationsWidget />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
