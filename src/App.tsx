import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Ticker } from './components/layout/Ticker';
import { HeroSection } from './components/sections/HeroSection';
import { AboutDualSection } from './components/sections/AboutDualSection';
import { SolutionsShowcase } from './components/sections/SolutionsShowcase';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsExperienceSection } from './components/sections/SkillsExperienceSection';
import { EducationCertSection } from './components/sections/EducationCertSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactCTASection } from './components/sections/ContactCTASection';
import { Footer } from './components/layout/Footer';
import { Modal } from './components/common/Modal';
import { CodeScannerWidget } from './components/ui/CodeScannerWidget';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#fefae0] text-[#1c1b1b] dark:bg-[#1a1a2e] dark:text-[#fefae0] transition-colors duration-300 font-plus-jakarta selection:bg-[#e85d04] selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenHireModal={() => setIsHireModalOpen(true)}
      />

      {/* Tech Ticker Marquee */}
      <Ticker />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onExploreServices={scrollToServices}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 2. Dual Audience / Capabilities Section */}
        <AboutDualSection onExploreServices={scrollToServices} />

        {/* 3. Interactive Solutions Showcase (The 4 Live Micro-Widgets) */}
        <SolutionsShowcase onOpenHireModal={() => setIsHireModalOpen(true)} />

        {/* 4. Projects Showcase Section */}
        <ProjectsSection />

        {/* 5. Skills Grid & Career Experience Timeline */}
        <SkillsExperienceSection />

        {/* 6. Education & Certifications */}
        <EducationCertSection />

        {/* 7. FAQ Section */}
        <FAQSection />

        {/* 8. Contact CTA & Inquiry Section */}
        <ContactCTASection
          isOpenModal={isHireModalOpen}
          onCloseModal={() => setIsHireModalOpen(false)}
          onOpenModal={() => setIsHireModalOpen(true)}
        />
      </main>

      {/* Footer & Sitemap Directory */}
      <Footer />

      {/* Interactive Code Demo Modal */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Yash Bhut — Live Interactive Code Metric Scanner"
        maxWidth="lg"
      >
        <div className="space-y-4 py-2">
          <p className="font-plus-jakarta text-xs text-stone-600 dark:text-stone-300">
            This live widget simulates AST parsing, OCR scanning, and security vulnerability analysis for codebase uploads.
          </p>
          <div className="flex justify-center">
            <CodeScannerWidget />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
