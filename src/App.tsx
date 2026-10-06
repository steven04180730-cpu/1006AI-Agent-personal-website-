/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Toast, ToastMessage } from './components/Toast';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Toast dispatcher helper
  const addToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // One-click Copy Email action
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(
      () => {
        addToast(
          lang === 'zh'
            ? `已成功複製電子信箱：${PERSONAL_INFO.email}`
            : `Copied email address: ${PERSONAL_INFO.email}`
        );
      },
      () => {
        addToast(
          lang === 'zh'
            ? `請直接聯絡信箱：${PERSONAL_INFO.email}`
            : `Contact directly at: ${PERSONAL_INFO.email}`,
          'info'
        );
      }
    );
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  return (
    <div className="min-h-screen bg-[#0b0d11] text-[#e2e8f0] selection:bg-emerald-500/20 selection:text-emerald-300 font-sans">
      {/* Top Navigation Bar: Strict 3-zone contract */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Single-Page Portfolio Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero lang={lang} onCopyEmail={handleCopyEmail} />

        {/* 2. About Me Section */}
        <About lang={lang} />

        {/* 3. Featured Projects */}
        <Projects lang={lang} />

        {/* 4. Skills & Architecture */}
        <Skills lang={lang} />

        {/* 5. Contact & Footer */}
        <Contact
          lang={lang}
          onCopyEmail={handleCopyEmail}
          onShowToast={(msg) => addToast(msg, 'info')}
        />
      </main>

      {/* Interactive Technical Resume Sheet Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        lang={lang}
        onClose={() => setIsResumeOpen(false)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
