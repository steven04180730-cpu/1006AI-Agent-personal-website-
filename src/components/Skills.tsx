import React from 'react';
import { Language } from '../types';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-emerald-400 tracking-wider mb-2">
            {lang === 'zh' ? '03. 技術能力與系統架構' : '03. Skills & System Architecture'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {lang === 'zh' ? '領域分群技術矩陣' : 'Domain-Grouped Technical Matrix'}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            {lang === 'zh'
              ? '拒絕虛構的百分比進度條。所有技術標籤皆以實際生產環境落地場景、高併發壓測數據與核心職責維度標註。'
              : 'Categorized by production environment deployments, throughput requirements, and domain depth rather than arbitrary percentage bars.'}
          </p>
        </div>

        {/* 4 Skill Category Columns / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white/[0.015] border border-white/[0.08] rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="border-b border-white/[0.06] pb-4 mb-6">
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {lang === 'zh' ? cat.title : cat.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal">
                    {lang === 'zh' ? cat.subtitle : cat.subtitleEn}
                  </p>
                </div>

                {/* Structured Skill Badges with Context */}
                <div className="space-y-3">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 p-3 rounded-lg border transition-colors ${
                        skill.highlight
                          ? 'bg-white/[0.03] border-white/[0.1] hover:border-emerald-500/40'
                          : 'bg-white/[0.01] border-white/[0.04] hover:border-white/[0.1]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        )}
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-slate-400 sm:text-right">
                        {lang === 'zh' ? skill.proficiencyContext : skill.proficiencyContextEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-note */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{lang === 'zh' ? '穩定交付 · 生產標準' : 'Production Grade'}</span>
                <span>{cat.skills.length} Capabilities</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
