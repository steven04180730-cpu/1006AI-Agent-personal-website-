import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO, HERO_METRICS, SOCIAL_LINKS } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onCopyEmail }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Engineering Background Pattern: Hairline grid & radial ambient illumination */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Availability & Location status line */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200">
              {lang === 'zh' ? PERSONAL_INFO.statusZh : PERSONAL_INFO.statusEn}
            </span>
          </div>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <span className="text-slate-400 hidden sm:inline">
            {lang === 'zh' ? PERSONAL_INFO.locationZh : PERSONAL_INFO.locationEn}
          </span>
        </div>

        {/* Primary Headline & Identity */}
        <div className="max-w-4xl">
          <div className="text-sm md:text-base font-mono text-emerald-400 tracking-wider mb-3">
            {PERSONAL_INFO.nameEn} · {PERSONAL_INFO.nameZh}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 text-balance">
            {lang === 'zh' ? (
              <>
                建構高併發後端系統與
                <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                  自主 AI Agent
                </span>{' '}
                架構
              </>
            ) : (
              <>
                Architecting High-Throughput Systems &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                  Autonomous AI Agents
                </span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
            {lang === 'zh'
              ? '專注於分散式服務的高可用設計、微秒級延遲最佳化、跨平台極致體驗，以及具備自我修復與動態拓撲調度能力的 LLM Agent 工作流。'
              : 'Engineering resilient distributed services, microsecond-grade latency optimization, multi-platform applications, and fault-tolerant agentic workflows with dynamic DAG execution.'}
          </p>

          {/* CTAs & Social Links */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            {/* CTA 1: View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all duration-150 shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5"
            >
              <span>{lang === 'zh' ? '查看精選專案' : 'View Featured Projects'}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* CTA 2: Contact Me / Quick Email Copy */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] rounded-md transition-all duration-150 hover:-translate-y-0.5"
            >
              <span>{lang === 'zh' ? '聯絡我 · 洽談合作' : 'Get in Touch'}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Quick Email Copy Chip */}
            <button
              onClick={onCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-3 text-xs font-mono text-slate-400 hover:text-slate-200 border border-white/[0.08] hover:border-white/[0.2] rounded-md transition-colors bg-[#0f121a]/60"
              title="點擊複製信箱"
            >
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{PERSONAL_INFO.email}</span>
            </button>
          </div>

          {/* Social Profiles quick row */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-t border-white/[0.06] pt-6">
            <span className="text-slate-500">{lang === 'zh' ? '網路蹤跡 / Profiles:' : 'Profiles:'}</span>
            <div className="flex flex-wrap items-center gap-4">
              {SOCIAL_LINKS.filter((s) => s.icon !== 'mail').map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span>{item.name}</span>
                  <span className="text-slate-600">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* High-Impact Quantitative Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/[0.08]">
          {HERO_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight tabular-nums mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mb-1">
                {lang === 'zh' ? metric.labelZh : metric.labelEn}
              </div>
              <div className="text-xs text-slate-400 font-normal">
                {lang === 'zh' ? metric.descZh : metric.descEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
