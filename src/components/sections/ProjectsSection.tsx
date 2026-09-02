import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Project, ProjectCategory } from '../../types/portfolio';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { ProjectCardImage } from '../common/ProjectCardImage';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full Stack', 'Real-time & Cloud', 'AI & ML', 'Open Source'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#fefae0] dark:bg-[#1a1a2e] border-t-2 border-black dark:border-[#e85d04] transition-colors duration-300">
      <div className="max-w-[#1280px] mx-auto px-4 sm:px-10">
        {/* Section Header */}
        <SectionHeading
          badgeText="Featured Portfolios & Engines"
          badgeVariant="orange"
          title="Featured IT Projects & Codebases"
          subtitle="Explore full-stack web applications, low-latency WebSocket gaming engines, transparent donation protocols, and AI developer utilities."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-space-grotesk text-xs uppercase font-extrabold px-4 py-2 border-2 border-black dark:border-[#e85d04] rounded-xs transition-all cursor-pointer select-none ${
                selectedCategory === cat
                  ? 'bg-[#e85d04] text-black shadow-[2px_2px_0px_#000]'
                  : 'bg-white dark:bg-[#16213e] text-[#1a1a2e] dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 shadow-[2px_2px_0px_#000] dark:shadow-none'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border-3 border-black dark:border-[#e85d04] bg-white dark:bg-[#16213e] neobrutal-shadow flex flex-col justify-between overflow-hidden rounded-xs transition-all hover:-translate-y-1.5"
            >
              {/* Project Image Header with Fallback */}
              <ProjectCardImage
                src={project.image}
                alt={project.title}
                category={project.category}
                projectId={project.id}
              />

              {/* Body Info */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-montserrat text-lg font-black uppercase text-[#1a1a2e] dark:text-[#e85d04] leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-plus-jakarta text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-space-grotesk font-bold bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-300 px-2 py-0.5 border border-stone-300 dark:border-stone-700 rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-space-grotesk text-xs uppercase font-extrabold text-[#e85d04] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black dark:border-white/20 bg-stone-100 dark:bg-stone-800 hover:bg-[#e85d04] hover:text-black rounded-xs transition-colors"
                        aria-label="GitHub Codebase"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-black dark:border-white/20 bg-stone-100 dark:bg-stone-800 hover:bg-[#0d9488] hover:text-white rounded-xs transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            maxWidth="xl"
          >
            <div className="space-y-6">
              <div className="overflow-hidden rounded-xs">
                <ProjectCardImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  category={selectedProject.category}
                  projectId={selectedProject.id}
                />
              </div>

              <div>
                <Badge variant="orange" className="mb-2">
                  {selectedProject.category}
                </Badge>
                <p className="font-plus-jakarta text-sm text-stone-800 dark:text-stone-300 leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Metrics */}
              {selectedProject.metrics && (
                <div className="grid grid-cols-3 gap-3 p-3 bg-stone-100 dark:bg-stone-800/60 border border-black dark:border-stone-700 rounded-xs text-center">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="font-space-grotesk text-[10px] text-stone-600 dark:text-stone-400 uppercase font-bold block">
                        {m.label}
                      </span>
                      <span className="font-montserrat text-base font-black text-[#e85d04] block">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="font-space-grotesk text-xs uppercase font-black text-[#1a1a2e] dark:text-[#e85d04]">
                  Technical Architecture Highlights
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <CheckCircle2 size={14} className="text-[#059669] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#e85d04] hover:bg-[#fb923c] text-black font-space-grotesk text-xs uppercase font-extrabold py-2.5 px-5 border-2 border-black inline-flex items-center gap-2 shadow-[2px_2px_0px_#000]"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a1a2e] hover:bg-[#252542] text-white font-space-grotesk text-xs uppercase font-extrabold py-2.5 px-5 border-2 border-black inline-flex items-center gap-2 shadow-[2px_2px_0px_#000]"
                  >
                    <span>View Repository</span>
                    <Github size={14} />
                  </a>
                )}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};
