import React from 'react';

export const SitemapFooter: React.FC = () => {
  const directoryLinks = [
    { label: 'Yash Bhut Profile', desc: 'Full-Stack Software Engineer & Architect overview', href: '#about' },
    { label: 'GamBles Engine', desc: 'Real-time WebSocket & betting platform showcase', href: '#projects' },
    { label: 'GiveWithTrust', desc: 'Transparent donation protocol & escrow solution', href: '#projects' },
    { label: 'Frontend Stack', desc: 'React 19, Next.js App Router, TypeScript & Tailwind', href: '#skills' },
    { label: 'Backend Architecture', desc: 'Node.js, Express, Python FastAPI & microservices', href: '#skills' },
    { label: 'Work History & Bio', desc: '3+ years full-stack consulting & development', href: '#experience' },
    { label: 'Developer FAQ', desc: 'Hiring, pricing, contracts & technical questions', href: '#faq' },
  ];

  return (
    <nav
      aria-labelledby="sitemap-heading"
      className="mb-12 border-t-2 border-black/10 dark:border-[#e85d04]/20 pt-12"
    >
      <div className="text-center space-y-2 mb-8">
        <h2
          id="sitemap-heading"
          className="font-montserrat text-2xl sm:text-3xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]"
        >
          Explore Yash Bhut IT Directory
        </h2>
        <p className="font-plus-jakarta text-sm text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Navigate through my technical stack, live project showcases, development experience, and consulting options.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {directoryLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            title={`${item.label} — ${item.desc}`}
            aria-label={`${item.label}: ${item.desc}`}
            className="group p-4 border-2 border-black dark:border-[#e85d04] bg-white dark:bg-[#16213e] hover:bg-[#e85d04]/20 dark:hover:bg-[#7c2d12] transition-colors rounded-xs neobrutal-shadow-sm"
          >
            <span className="font-space-grotesk text-xs uppercase font-black text-[#1a1a2e] dark:text-[#e85d04] group-hover:underline block">
              {item.label}
            </span>
            <p className="font-plus-jakarta text-xs text-stone-600 dark:text-stone-400 mt-1">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </nav>
  );
};
