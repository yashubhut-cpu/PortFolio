import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsData } from '../../data/faqs';
import { SectionHeading } from '../common/SectionHeading';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="py-16 sm:py-24 bg-[#fefae0] dark:bg-[#1a1a2e] border-t-2 border-black dark:border-[#e85d04] transition-colors duration-300"
    >
      <div className="max-w-[#1280px] mx-auto px-4 sm:px-10 space-y-12">
        <div id="faq-heading">
          <SectionHeading
            badgeText="Common Inquiries"
            badgeVariant="amber"
            title="Frequently Asked Questions"
            subtitle="Quick answers regarding technical capabilities, work arrangements, software contracts, and hiring."
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="border-2 border-black dark:border-[#e85d04] bg-white dark:bg-[#16213e] rounded-xs neobrutal-shadow transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  title={faq.question}
                  className="w-full flex items-center justify-between p-5 text-left font-montserrat text-sm sm:text-base font-black uppercase text-[#1a1a2e] dark:text-[#e85d04] cursor-pointer"
                >
                  <span itemProp="name">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform duration-300 text-[#e85d04] ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="px-5 pb-5 pt-1 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-[#16213e]"
                  >
                    <p itemProp="text" className="font-plus-jakarta text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
