import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

interface ContactCTASectionProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({
  isOpenModal,
  onCloseModal,
  onOpenModal,
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', roleType: 'Full-Time Role', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => {
      setSubmitted(false);
      onCloseModal();
      setFormData({ name: '', email: '', roleType: 'Full-Time Role', message: '' });
    }, 2500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-12 sm:py-16 bg-[#fefae0] dark:bg-[#1a1a2e] transition-colors duration-300"
    >
      <div className="max-w-[#1280px] mx-auto px-4 sm:px-10">
        {/* High-impact Banner Card */}
        <div className="bg-white dark:bg-[#16213e] text-[#1a1a2e] dark:text-white p-6 sm:p-12 md:p-16 border-4 border-black dark:border-[#e85d04] neobrutal-shadow-lg relative overflow-hidden rounded-xs">
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2
              id="contact-heading"
              className="font-montserrat text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl leading-tight font-black tracking-tight uppercase text-[#1a1a2e] dark:text-white"
            >
              Ready to Build Your Next Web Application or Hire Yash Bhut?
            </h2>
            <p className="font-plus-jakarta text-sm sm:text-lg text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
              Connect with me directly for full-time Software Engineer opportunities, freelance web development contracts, or custom full-stack consulting.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenModal}
                aria-label="Open contact form to hire Yash Bhut"
                title="Get in Touch with Yash Bhut"
                className="w-full sm:w-auto bg-[#e85d04] hover:bg-[#fb923c] text-black px-8 sm:px-10 py-4 sm:py-5 border-2 border-black font-space-grotesk text-sm uppercase font-extrabold cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] transition-all shadow-[3px_3px_0px_#000] text-center"
              >
                Get in Touch
              </button>
              <a
                href="#projects"
                title="Browse Yash Bhut's Featured Projects"
                className="w-full sm:w-auto bg-stone-100 dark:bg-transparent border-2 border-black dark:border-white hover:bg-stone-200 dark:hover:bg-white/10 text-[#1a1a2e] dark:text-white px-8 sm:px-10 py-4 sm:py-5 font-space-grotesk text-sm uppercase font-bold cursor-pointer text-center shadow-[2px_2px_0px_#000] dark:shadow-none"
              >
                Browse Projects
              </a>
            </div>
          </div>

          {/* Decorative Skewed Accent Overlays */}
          <div className="absolute right-0 top-0 w-64 h-full bg-[#e85d04]/10 dark:bg-[#7c2d12]/20 opacity-30 transform skew-x-12 translate-x-20 pointer-events-none" />
          <div className="absolute right-20 bottom-0 w-32 h-64 bg-[#0d9488]/15 dark:bg-[#0d9488]/35 opacity-40 transform -skew-x-12 translate-y-10 pointer-events-none" />
        </div>

        {/* Inquiry Modal */}
        <Modal isOpen={isOpenModal} onClose={onCloseModal} title="Contact & Hire Yash Bhut" maxWidth="lg">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#059669] text-white rounded-full flex items-center justify-center mx-auto border-2 border-black shadow-[2px_2px_0px_#000]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-montserrat text-xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                Message Received!
              </h3>
              <p className="font-plus-jakarta text-xs text-stone-600 dark:text-stone-300">
                Thank you for reaching out. I will respond to your email at <strong className="text-[#e85d04]">{formData.email}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="contact-name" className="font-space-grotesk text-xs uppercase font-extrabold block text-[#1a1a2e] dark:text-stone-200">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full p-2.5 bg-white dark:bg-stone-800 border-2 border-black dark:border-stone-700 rounded-xs font-plus-jakarta text-xs text-[#1a1a2e] dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-[#e85d04]"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-email" className="font-space-grotesk text-xs uppercase font-extrabold block text-[#1a1a2e] dark:text-stone-200">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full p-2.5 bg-white dark:bg-stone-800 border-2 border-black dark:border-stone-700 rounded-xs font-plus-jakarta text-xs text-[#1a1a2e] dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-[#e85d04]"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-role" className="font-space-grotesk text-xs uppercase font-extrabold block text-[#1a1a2e] dark:text-stone-200">
                  Inquiry Type
                </label>
                <select
                  id="contact-role"
                  value={formData.roleType}
                  onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                  className="w-full p-2.5 bg-white dark:bg-stone-800 border-2 border-black dark:border-stone-700 rounded-xs font-plus-jakarta text-xs text-[#1a1a2e] dark:text-white focus:outline-none focus:border-[#e85d04]"
                >
                  <option value="Full-Time Role">Full-Time Software Engineer Role</option>
                  <option value="Contract Full Stack">Contract Full-Stack Project</option>
                  <option value="Consulting / Architecture">Technical Architecture Consulting</option>
                  <option value="General Inquiry">General Networking / Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="font-space-grotesk text-xs uppercase font-extrabold block text-[#1a1a2e] dark:text-stone-200">
                  Message / Details
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or open opportunity..."
                  className="w-full p-2.5 bg-white dark:bg-stone-800 border-2 border-black dark:border-stone-700 rounded-xs font-plus-jakarta text-xs text-[#1a1a2e] dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-[#e85d04]"
                />
              </div>

              <div className="pt-2">
                <Button variant="primary" size="md" fullWidth type="submit" className="gap-2">
                  <span>Send Message To Yash</span>
                  <Send size={14} />
                </Button>
              </div>
            </form>
          )}
        </Modal>
      </div>
    </section>
  );
};
