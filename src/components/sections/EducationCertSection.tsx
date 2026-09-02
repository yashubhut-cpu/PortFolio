import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { educationData } from '../../data/education';
import { certificationsData } from '../../data/certifications';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export const EducationCertSection: React.FC = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 sm:py-24 bg-[#fefae0] dark:bg-[#1a1a2e] border-t-2 border-black dark:border-[#e85d04] transition-colors duration-300"
    >
      <div className="max-w-[#1280px] mx-auto px-4 sm:px-10 space-y-16">
        <div id="education-heading">
          <SectionHeading
            badgeText="Academic & Credentials"
            badgeVariant="emerald"
            title="Education & Certifications"
            subtitle="Formal academic grounding in Computer Engineering coupled with recognized software development credentials."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-black dark:border-[#e85d04] pb-3">
              <div className="w-10 h-10 bg-[#0d9488] text-white flex items-center justify-center border-2 border-black font-black">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-montserrat text-xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                Education
              </h3>
            </div>

            {educationData.map((edu) => (
              <article key={edu.id}>
                <Card className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-stone-200 dark:border-stone-800 pb-2">
                    <h4 className="font-montserrat text-base font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                      {edu.degree}
                    </h4>
                    <time className="font-space-grotesk text-xs font-bold text-stone-600 dark:text-stone-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.year}
                    </time>
                  </div>
                  <span className="font-space-grotesk text-xs font-extrabold text-stone-800 dark:text-stone-200 block">
                    {edu.institution} — {edu.location}
                  </span>
                  <p className="font-plus-jakarta text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    {edu.details}
                  </p>
                  {edu.gpa && (
                    <div className="inline-block bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-space-grotesk font-black uppercase rounded-xs">
                      {edu.gpa}
                    </div>
                  )}
                </Card>
              </article>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-black dark:border-[#e85d04] pb-3">
              <div className="w-10 h-10 bg-[#e85d04] text-black flex items-center justify-center border-2 border-black font-black">
                <Award size={22} />
              </div>
              <h3 className="font-montserrat text-xl font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                Certifications &amp; Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <article key={cert.id}>
                  <Card className="flex items-start justify-between gap-4 p-5">
                    <div className="space-y-1">
                      <h4 className="font-montserrat text-sm font-black uppercase text-[#1a1a2e] dark:text-[#e85d04]">
                        {cert.title}
                      </h4>
                      <span className="font-space-grotesk text-xs font-semibold text-stone-700 dark:text-stone-400 block">
                        Issued by {cert.issuer}
                      </span>
                      {cert.credentialId && (
                        <span className="font-mono text-[10px] text-stone-500 dark:text-stone-400 block">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <time className="font-space-grotesk text-[10px] font-bold bg-[#dde1ff] text-[#0d9488] dark:bg-blue-950 dark:text-blue-200 px-2 py-0.5 border border-black rounded-xs">
                        {cert.date}
                      </time>
                    </div>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
