import React from 'react';
import { Language } from '../types';
import { CORE_PHILOSOPHY } from '../data/portfolioData';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="about" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-emerald-400 tracking-wider mb-2">
            {lang === 'zh' ? '01. 經歷與專注領域' : '01. Experience & Focus Areas'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {lang === 'zh' ? '以系統思維打造具備極限吞吐與自我修復特性的架構' : 'Building Systems for Extreme Scale and Autonomous Resilience'}
          </h2>
        </div>

        {/* Narrative Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p>
              {lang === 'zh'
                ? '我是一名專注於分散式系統、邊緣運算與智慧 Agent 架構的資深全端工程師。過去數年間，我專注於將複雜的業務邏輯提煉為高容錯、低延遲的軟體架構，從單機承載數十萬並發請求的網路閘道，到支援動態 DAG 拓撲的 AI 決策引擎。'
                : 'I am a full-stack engineer and AI systems specialist dedicated to distributed backends, edge computing, and autonomous agent architectures. I turn convoluted real-world problems into resilient, low-latency software—spanning edge gateways handling six-figure concurrency to dynamic DAG-driven AI decision engines.'}
            </p>

            <p>
              {lang === 'zh'
                ? '在工程實踐中，我堅信「可測量性高於主觀臆測」。我避免採用空泛的熱門概念包裝，而是從網路 I/O 零拷貝、二進位協議序列化、向量檢索命中率到記憶體 GC 停頓，嚴謹地以指標數據為依歸持續壓榨硬體極限，確保系統在真實生產環境的尖峰負載下依然具備 99.95%+ 的高可用性。'
                : 'My core engineering conviction is that empirical measurement trumps speculation. Rather than relying on buzzwords, I optimize down to zero-copy network I/O, binary protocol serialization, vector retrieval recall, and GC pauses—relying on hard benchmarks to guarantee 99.95%+ SLAs under real-world traffic spikes.'}
            </p>

            <p>
              {lang === 'zh'
                ? '在 AI Agent 整合方面，我不將模型視為簡單的黑盒 API，而是將其視為不可靠的非同步推理節點：透過分層記憶快取、狀態機容錯機制與結構化輸出守衛（Guardrails），讓自主 Agent 能在企業生產管線中真正穩健落地，消除幻覺連鎖擴散與資源浪費。'
                : 'When designing AI systems, I treat language models not as infallible black boxes, but as nondeterministic asynchronous compute nodes. By coupling tiered memory caches with state-machine failover and schema guards, I ensure autonomous agents operate reliably in production without cascading failures.'}
            </p>
          </div>

          {/* Quick Technical Profile Card */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 space-y-5">
            <div className="text-sm font-semibold text-white tracking-wide border-b border-white/[0.06] pb-3 flex items-center justify-between">
              <span>{lang === 'zh' ? '核心技術主軸' : 'Core Architecture Pillars'}</span>
              <span className="font-mono text-xs text-emerald-400">Production Tested</span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="text-slate-200 font-medium mb-1">
                  {lang === 'zh' ? '分散式後端與微服務' : 'Distributed Backends & Microservices'}
                </div>
                <div className="text-slate-400 leading-normal">
                  Go, Rust, Redis Cluster, gRPC, PostgreSQL, Kafka, eBPF
                </div>
              </div>

              <div>
                <div className="text-slate-200 font-medium mb-1">
                  {lang === 'zh' ? '自主 AI Agent 與 LLM 管線' : 'Autonomous Agents & LLM Pipelines'}
                </div>
                <div className="text-slate-400 leading-normal">
                  LangGraph, Streaming DAG, Vector Embeddings, Hybrid Search, Tool Calling
                </div>
              </div>

              <div>
                <div className="text-slate-200 font-medium mb-1">
                  {lang === 'zh' ? '極致現代全端與即時協同' : 'Modern Full-Stack & Real-Time Sync'}
                </div>
                <div className="text-slate-400 leading-normal">
                  React 19, TypeScript, Next.js, CRDT (Yjs), WebSockets, WebGL / Canvas
                </div>
              </div>

              <div>
                <div className="text-slate-200 font-medium mb-1">
                  {lang === 'zh' ? '雲原生基礎設施與可觀測性' : 'Cloud Native & Observability'}
                </div>
                <div className="text-slate-400 leading-normal">
                  Docker, Kubernetes, OpenTelemetry, ClickHouse, Prometheus, CI/CD
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy Cards: 01, 02, 03 (Editorial Numbering) */}
        <div className="border-t border-white/[0.06] pt-14">
          <div className="text-xs font-mono text-slate-400 tracking-wider mb-6">
            {lang === 'zh' ? '工程決策心法 / Core Principles' : 'Engineering Principles'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_PHILOSOPHY.map((item) => (
              <div
                key={item.index}
                className="p-6 rounded-lg bg-white/[0.015] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="font-mono text-emerald-400 text-sm font-semibold mb-3">
                  {item.index}.
                </div>
                <h3 className="text-base font-semibold text-white mb-2.5">
                  {lang === 'zh' ? item.titleZh : item.titleEn}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {lang === 'zh' ? item.descZh : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
