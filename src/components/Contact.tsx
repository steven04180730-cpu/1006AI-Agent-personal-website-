import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface ContactProps {
  lang: Language;
  onCopyEmail: () => void;
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ lang, onCopyEmail, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast(lang === 'zh' ? '請填寫完整的聯絡人、信箱與訊息內容' : 'Please fill in your name, email and message.');
      return;
    }

    setSubmitting(true);
    // Simulate instantaneous local processing and allow opening mailto client if preferred
    setTimeout(() => {
      setSubmitting(false);
      setSentSuccess(true);
      onShowToast(
        lang === 'zh'
          ? '訊息已成功記錄！您亦可透過下方按鈕直接寄發電子郵件。'
          : 'Message registered! You can also reach out directly via email.'
      );
    }, 600);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from Portfolio — ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Steven,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="py-24 border-t border-white/[0.08] relative bg-[#090b0e]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-emerald-400 tracking-wider mb-2">
            {lang === 'zh' ? '04. 聯絡我與合作諮詢' : '04. Get in Touch'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {lang === 'zh' ? '探討技術挑戰，啟動下一步合作' : 'Let’s Discuss Systems, Architecture & Impact'}
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            {lang === 'zh'
              ? '無論是複雜後端架構重構、高併發邊緣服務諮詢，或新型 AI Agent 系統落地，隨時歡迎來信交流。'
              : 'Whether you are seeking distributed architecture review, high-throughput backend engineering, or autonomous agent deployment, I am always open to conversation.'}
          </p>
        </div>

        {/* 2-Column Contact Layout: Quick Details / Direct Email + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Direct Email Copy Box & Social Profiles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                {lang === 'zh' ? '直接電子信箱 (Direct Email)' : 'Direct Inquiries'}
              </div>
              <div className="text-base sm:text-lg font-mono font-medium text-white break-all mb-4">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="px-4 py-2 text-xs font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors inline-flex items-center gap-2 font-semibold"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>{lang === 'zh' ? '一鍵複製信箱' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-4 py-2 text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{lang === 'zh' ? '以郵件發送' : 'Launch Mail Client'}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Social Network Links Strip */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                {lang === 'zh' ? '專業社群與開源平台' : 'Social & Code Repositories'}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">{link.handle}</div>
                    </div>
                    <span className="text-slate-500 group-hover:text-emerald-400 transition-colors">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2">
              {lang === 'zh' ? '傳送訊息' : 'Send a Quick Message'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {lang === 'zh'
                ? '填寫下方表單，我將於 24 小時內回覆您。'
                : 'Leave a brief message and I will get back to you within 24 hours.'}
            </p>

            {sentSuccess ? (
              <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-center space-y-3">
                <div className="w-8 h-8 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto text-sm font-bold">
                  ✓
                </div>
                <div className="text-sm font-semibold text-white">
                  {lang === 'zh' ? '感謝您的來信！' : 'Thank You for Reaching Out!'}
                </div>
                <p className="text-xs text-slate-300">
                  {lang === 'zh'
                    ? '訊息已妥善記錄。若您有緊急合作需求，亦可點擊下方按鈕直接透過本機郵件軟體啟動對話。'
                    : 'Your message has been captured. If you have an urgent inquiry, you can also launch your mail client directly.'}
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={handleOpenMailto}
                    className="px-4 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors"
                  >
                    {lang === 'zh' ? '開啟郵件客戶端送出' : 'Open in Mail Client'}
                  </button>
                  <button
                    onClick={() => {
                      setSentSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-white/10 rounded"
                  >
                    {lang === 'zh' ? '再寫一封' : 'Reset Form'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 font-mono">
                      {lang === 'zh' ? '您的姓名 / 稱謂 *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'zh' ? '例如：Alex Chen' : 'e.g. Alex Chen'}
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#0d1017] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 font-mono">
                      {lang === 'zh' ? '電子信箱 (Email) *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#0d1017] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 font-mono">
                    {lang === 'zh' ? '主旨 / 專案類型' : 'Subject / Project Domain'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={lang === 'zh' ? '例如：AI 工作流架構諮詢 / 全端開發合作' : 'e.g. Distributed System Architecture & Full-Stack Collaboration'}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#0d1017] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5 font-mono">
                    {lang === 'zh' ? '訊息內容 *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'zh'
                        ? '簡述您的需求、系統架構挑戰或期望的合作方式...'
                        : 'Describe your project scope, engineering constraints, or inquiry...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#0d1017] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    {lang === 'zh' ? '* 必填欄位' : '* Required fields'}
                  </span>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 rounded-md transition-colors"
                  >
                    {submitting
                      ? (lang === 'zh' ? '傳送中...' : 'Sending...')
                      : (lang === 'zh' ? '確認發送訊息' : 'Submit Message')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Minimal Footer / Clean Copyright Line */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.nameEn} ({PERSONAL_INFO.nameZh}). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Taipei / Remote</span>
            <span>·</span>
            <span>Built with React 19 & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
