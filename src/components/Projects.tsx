import React, { useState } from 'react';
import { Project, Language } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'backend' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', labelZh: '全部專案', labelEn: 'All Projects' },
    { id: 'ai', labelZh: 'AI Agent & LLM', labelEn: 'AI & LLM Systems' },
    { id: 'backend', labelZh: '後端與基礎設施', labelEn: 'Backend & Infra' },
    { id: 'fullstack', labelZh: '全端與即時協同', labelEn: 'Full-Stack & Sync' },
  ] as const;

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-emerald-400 tracking-wider mb-2">
              {lang === 'zh' ? '02. 精選系統專案' : '02. Featured Engineering Projects'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {lang === 'zh' ? '高併發、分散式協同與自主智能體' : 'High-Concurrency, Distributed Sync & Autonomous Agents'}
            </h2>
          </div>

          {/* Interactive Filter Control (Segmented Buttons) */}
          <div className="inline-flex p-1 bg-white/[0.03] border border-white/[0.08] rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'zh' ? cat.labelZh : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between bg-white/[0.015] hover:bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 rounded-xl p-6 sm:p-7 transition-all duration-200"
            >
              <div>
                {/* Visual Architecture Representation / Blueprint Banner */}
                <div className="w-full h-40 mb-6 rounded-lg bg-[#0d1017] border border-white/[0.06] overflow-hidden relative flex flex-col justify-between p-4 font-mono text-xs select-none">
                  <div className="flex items-center justify-between text-slate-500 border-b border-white/[0.04] pb-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[11px] text-slate-400">{project.id}.topology</span>
                    </span>
                    <span className="text-[10px] text-slate-500 tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Dynamic Technical SVG Diagram per Project */}
                  <div className="my-auto flex items-center justify-center">
                    {project.category === 'ai' && (
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.1] rounded text-[11px]">User Query</div>
                        <span className="text-emerald-400 font-bold">→</span>
                        <div className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-[11px] text-emerald-300">DAG Dispatcher</div>
                        <span className="text-emerald-400 font-bold">→</span>
                        <div className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.1] rounded text-[11px]">Streaming Vector LLM</div>
                      </div>
                    )}
                    {project.category === 'backend' && (
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.1] rounded text-[11px]">Edge Ingress</div>
                        <span className="text-cyan-400 font-bold">⇄</span>
                        <div className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-[11px] text-cyan-300">120k RPS Limiter</div>
                        <span className="text-cyan-400 font-bold">⇄</span>
                        <div className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.1] rounded text-[11px]">Redis Cluster</div>
                      </div>
                    )}
                    {project.category === 'fullstack' && (
                      <div className="flex items-center gap-3 text-slate-300">
                        <div className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.1] rounded text-[11px]">Browser Client</div>
                        <span className="text-teal-400 font-bold">⇌</span>
                        <div className="px-2.5 py-1 bg-teal-500/10 border border-teal-500/30 rounded text-[11px] text-teal-300">CRDT Engine (Yjs)</div>
                        <span className="text-teal-400 font-bold">⇌</span>
                        <div className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.1] rounded text-[11px]">WS Pub/Sub</div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-white/[0.04] pt-2">
                    <span className="text-slate-400 font-sans">
                      {lang === 'zh' ? '指標驗證: ' : 'Verified: '}
                      <span className="text-emerald-300 font-mono">
                        {lang === 'zh' ? project.impactMetric : project.impactMetricEn}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {lang === 'zh' ? project.title : project.titleEn}
                </h3>

                {/* 1-Line Headline / Outcome */}
                <p className="text-sm font-medium text-emerald-400/90 mb-3 leading-snug">
                  {lang === 'zh' ? project.headline : project.headlineEn}
                </p>

                {/* Brief Narrative */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === 'zh' ? project.description : project.descriptionEn}
                </p>

                {/* Zero-Pill Tech Stack Metadata: Clean unboxed text with '·' separator */}
                <div className="mb-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400 font-mono">
                  {project.techStack.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-300">{tech}</span>
                      {i < project.techStack.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo, GitHub, and Architecture Deep Dive */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{lang === 'zh' ? '架構詳解 (Deep Dive)' : 'Architecture Specs'}</span>
                  <span className="text-emerald-400">→</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                      title="開啟 Live Demo"
                    >
                      <span>Demo</span>
                      <span>↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      title="開啟 GitHub 程式庫"
                    >
                      <span>GitHub</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
