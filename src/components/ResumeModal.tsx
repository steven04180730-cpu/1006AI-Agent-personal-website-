import React, { useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, lang, onClose, onCopyEmail }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0e1118] border border-white/[0.12] rounded-xl shadow-2xl shadow-black/90 p-6 sm:p-10 z-10 max-h-[92vh] overflow-y-auto font-sans">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {lang === 'zh' ? '技術履歷概要 / TECHNICAL RESUME SPEC' : 'TECHNICAL RESUME OVERVIEW'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded transition-colors"
            >
              {lang === 'zh' ? '列印 / 列印成 PDF' : 'Print / Save as PDF'}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded transition-colors"
              aria-label="關閉"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-8 text-sm">
          {/* Header Info */}
          <div className="border-b border-white/[0.06] pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
              {PERSONAL_INFO.nameEn} ({PERSONAL_INFO.nameZh})
            </h2>
            <div className="text-emerald-400 font-mono text-sm mb-3">
              {lang === 'zh' ? PERSONAL_INFO.titleZh : PERSONAL_INFO.titleEn}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span>{PERSONAL_INFO.email}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.locationZh}</span>
              <span>·</span>
              <span>GitHub: @steven-shih</span>
              <span>·</span>
              <span>LinkedIn: Steven Shih</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              {lang === 'zh' ? '專業簡述 (Executive Summary)' : 'Executive Summary'}
            </h3>
            <p className="text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-lg border border-white/[0.04]">
              {lang === 'zh'
                ? '資深全端工程師與 AI 系統架構師，具備 4+ 年高可用微服務、邊緣反向代理、即時分散式協同系統與自主 Agent 工作流的架構與落地經驗。精通 Go、TypeScript、React 19 與 Python，擅長以嚴謹的指標數據推動架構演進，並在極限負載下保障 99.95%+ 系統穩定性。'
                : 'Senior Full-Stack Engineer and AI Systems Architect with 4+ years designing high-throughput microservices, edge proxies, real-time distributed collaboration tools, and autonomous agent pipelines. Expert in Go, TypeScript, React 19, and Python, dedicated to data-driven architectural evolution and 99.95%+ reliability.'}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
              {lang === 'zh' ? '核心工程經歷 (Engineering Trajectory)' : 'Engineering Experience'}
            </h3>

            <div className="space-y-6">
              {/* Job 1 */}
              <div className="border-l-2 border-emerald-500/40 pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-white font-semibold text-sm">
                    {lang === 'zh' ? '資深系統工程師 / AI 系統負責人' : 'Senior Systems Engineer / AI Lead'}
                  </span>
                  <span>2024 — Present</span>
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'zh' ? '自主 AI Agent 引擎與高併發後端基礎設施' : 'Autonomous AI Agent Engine & High-Concurrency Infra'}
                </div>
                <ul className="list-disc list-inside text-slate-300 text-xs space-y-1 pt-1">
                  <li>
                    {lang === 'zh'
                      ? '架構 AegisFlow 動態 DAG 代理排程核心，整合 LangGraph 與 Redis Streams，降低多步驟推理延遲 42%。'
                      : 'Architected AegisFlow dynamic DAG scheduler, integrating LangGraph and Redis Streams to reduce multi-hop latency by 42%.'}
                  </li>
                  <li>
                    {lang === 'zh'
                      ? '推動邊緣 API 閘道重構，運用 Go + Rust 零拷貝技術處理 120k+ 峰值 RPS，p99 延遲穩定低於 8ms。'
                      : 'Spearheaded edge gateway rewrite in Go + Rust, scaling to 120k+ peak RPS under 8ms p99 latency.'}
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-2 border-white/20 pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-white font-semibold text-sm">
                    {lang === 'zh' ? '全端架構工程師' : 'Full-Stack Software Engineer'}
                  </span>
                  <span>2022 — 2024</span>
                </div>
                <div className="text-xs text-slate-400">
                  {lang === 'zh' ? '分散式即時協同系統與 WebGL 視覺化平台' : 'Distributed Real-Time Collaboration & WebGL Platform'}
                </div>
                <ul className="list-disc list-inside text-slate-300 text-xs space-y-1 pt-1">
                  <li>
                    {lang === 'zh'
                      ? '設計基於 CRDT (Yjs) 的無衝突多人畫布同步演算法，支援 100+ 人同時在線編輯無卡頓。'
                      : 'Designed CRDT-based state synchronization engine (Yjs + WebSockets) ensuring zero-conflict editing for 100+ concurrent users.'}
                  </li>
                  <li>
                    {lang === 'zh'
                      ? '主導全站型別安全防禦工程，將生產環境執行期錯誤率（Runtime Errors）降低 75%。'
                      : 'Implemented full-stack end-to-end type safety policies, cutting production runtime exceptions by 75%.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              {lang === 'zh' ? '學歷背景 (Education)' : 'Education'}
            </h3>
            <div className="bg-white/[0.02] p-4 rounded-lg border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <div className="text-white font-semibold">
                  {lang === 'zh' ? '資訊工程學士 (B.S. in Computer Science)' : 'B.S. in Computer Science'}
                </div>
                <div className="text-slate-400">
                  {lang === 'zh' ? '主修分散式運算、演算法與軟體架構' : 'Focus: Distributed Computing & Software Architecture'}
                </div>
              </div>
              <div className="text-slate-500 font-mono mt-1 sm:mt-0">Graduated with Honors</div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={onCopyEmail}
            className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
          >
            <span>✉ Copy Email: {PERSONAL_INFO.email}</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors"
          >
            {lang === 'zh' ? '關閉' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
