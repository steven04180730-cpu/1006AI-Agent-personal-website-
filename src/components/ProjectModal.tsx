import React, { useEffect } from 'react';
import { Project, Language } from '../types';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-3xl bg-[#0f1219] border border-white/[0.12] rounded-xl shadow-2xl shadow-black/80 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
          <div>
            <div className="text-xs font-mono text-emerald-400 tracking-wider mb-1">
              {lang === 'zh' ? '系統架構規格書' : 'Architecture Specification'}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'zh' ? project.title : project.titleEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-md transition-colors"
            aria-label="關閉彈窗"
          >
            ✕
          </button>
        </div>

        {/* Impact Metric & Core Thesis */}
        <div className="mb-6 p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
          <div className="text-xs font-mono text-emerald-400 font-medium mb-1">
            {lang === 'zh' ? '核心效益指標' : 'Key Impact Metric'}
          </div>
          <div className="text-sm font-semibold text-emerald-200">
            {lang === 'zh' ? project.impactMetric : project.impactMetricEn}
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'zh' ? '架構概述 (System Overview)' : 'System Overview'}
            </h4>
            <p className="leading-relaxed bg-white/[0.02] p-4 rounded-lg border border-white/[0.04]">
              {lang === 'zh' ? project.architectureDetails.overview : project.architectureDetails.overviewEn}
            </p>
          </div>

          {/* Technical Challenges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'zh' ? '關鍵技術挑戰 (Key Challenges)' : 'Technical Challenges'}
            </h4>
            <ul className="space-y-2">
              {(lang === 'zh' ? project.architectureDetails.challenges : project.architectureDetails.challengesEn).map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white/[0.015] p-3 rounded-md border border-white/[0.04]">
                    <span className="font-mono text-xs text-rose-400 mt-0.5">✕</span>
                    <span className="text-slate-300 leading-snug">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Key Decisions & Mitigations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'zh' ? '工程決策與解法 (Architectural Solutions)' : 'Engineering Decisions'}
            </h4>
            <ul className="space-y-2">
              {(lang === 'zh' ? project.architectureDetails.keyDecisions : project.architectureDetails.keyDecisionsEn).map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-white/[0.015] p-3 rounded-md border border-white/[0.04]">
                    <span className="font-mono text-xs text-emerald-400 mt-0.5">✓</span>
                    <span className="text-slate-300 leading-snug">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Tech Stack Unboxed */}
          <div className="border-t border-white/[0.08] pt-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'zh' ? '技術棧 (Tech Stack)' : 'Tech Stack'}
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300 font-mono">
              {project.techStack.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {i < project.techStack.length - 1 && <span className="text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 text-xs font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors inline-flex items-center gap-1.5"
              >
                <span>{lang === 'zh' ? '查看演示 / Live Demo' : 'Live Demo'}</span>
                <span>↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded transition-colors inline-flex items-center gap-1.5"
              >
                <span>{lang === 'zh' ? 'GitHub 程式庫' : 'Source Code'}</span>
                <span>↗</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            {lang === 'zh' ? '關閉' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
