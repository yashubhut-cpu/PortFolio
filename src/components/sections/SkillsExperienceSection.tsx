import React from 'react';
import { Layout, Server, Database, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../../data/skills';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../common/SectionHeading';

export const SkillsExperienceSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#fefae0] dark:bg-[#1a1a2e] text-[#1a1a2e] dark:text-white border-y-3 border-black dark:border-[#e85d04] transition-colors duration-300">
      <div className="max-w-[#1280px] mx-auto px-4 sm:px-10 space-y-16">
        {/* Skills Section */}
        <div className="space-y-12">
          <SectionHeading
            badgeText="Engineering Matrix"
            badgeVariant="teal"
            title="Technical Skills & Stack Proficiency"
            subtitle="Full-stack toolkit spanning modern frontend frameworks, real-time backend architecture, cloud databases, and DevOps automation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className="p-6 border-3 border-black dark:border-[#e85d04] bg-white dark:bg-[#16213e] neobrutal-shadow flex flex-col justify-between space-y-6 rounded-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-stone-200 dark:border-white/10 pb-3">
                    <div className="w-10 h-10 bg-[#e85d04] text-black flex items-center justify-center border border-black font-black">
                      {idx === 0 && <Layout size={20} />}
                      {idx === 1 && <Server size={20} />}
                      {idx === 2 && <Database size={20} />}
                    </div>
                    <h3 className="font-montserrat text-lg font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                      {category.categoryName}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-space-grotesk font-bold">
                          <span className="text-[#1a1a2e] dark:text-white">{skill.name}</span>
                          <span className="text-[#e85d04]">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-stone-200 dark:bg-stone-800 border border-black rounded-xs overflow-hidden">
                          <div
                            className="h-full bg-[#0d9488] transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="pt-12 border-t-2 border-black dark:border-[#e85d04]/30 space-y-12">
          <SectionHeading
            badgeText="Career History"
            badgeVariant="orange"
            title="Professional Experience"
            subtitle="Building full-stack web applications, low-latency microservices, and client digital products."
          />

          <div className="relative border-l-2 border-[#e85d04] ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 border-black bg-[#e85d04] shadow-[1px_1px_0px_#000]" />

                <div className="p-6 border-2 border-black dark:border-[#e85d04] bg-white dark:bg-[#16213e] neobrutal-shadow space-y-4 rounded-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-white/10 pb-3">
                    <div>
                      <h3 className="font-montserrat text-xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                        {exp.role}
                      </h3>
                      <span className="font-space-grotesk text-sm font-bold text-stone-800 dark:text-white">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-space-grotesk text-stone-600 dark:text-stone-400">
                      <span className="flex items-center gap-1 bg-stone-100 dark:bg-[#1a1a2e] px-2.5 py-1 border border-stone-300 dark:border-white/10 rounded-xs">
                        <Calendar size={12} className="text-[#e85d04]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 bg-stone-100 dark:bg-[#1a1a2e] px-2.5 py-1 border border-stone-300 dark:border-white/10 rounded-xs">
                        <MapPin size={12} className="text-[#0d9488]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="font-plus-jakarta text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-1">
                    {exp.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                        <CheckCircle2 size={14} className="text-[#0d9488] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-200 dark:border-white/5">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-space-grotesk font-bold bg-stone-100 dark:bg-[#1a1a2e] text-stone-800 dark:text-stone-300 px-2 py-0.5 border border-stone-300 dark:border-white/10 rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
