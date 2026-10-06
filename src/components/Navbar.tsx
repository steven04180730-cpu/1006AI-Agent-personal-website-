import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelZh: '關於我', labelEn: 'About' },
    { href: '#projects', labelZh: '精選專案', labelEn: 'Projects' },
    { href: '#skills', labelZh: '技術架構', labelEn: 'Architecture' },
    { href: '#contact', labelZh: '聯絡我', labelEn: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#0b0d11]/90 backdrop-blur-md border-white/[0.08] shadow-lg shadow-black/20'
          : 'bg-[#0b0d11]/50 backdrop-blur-sm border-white/[0.04]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center gap-2 group"
        >
          <span className="font-mono text-emerald-400 font-normal text-sm group-hover:scale-110 transition-transform">
            ⚡
          </span>
          <span>{lang === 'zh' ? `${PERSONAL_INFO.nameEn} · ${PERSONAL_INFO.nameZh}` : PERSONAL_INFO.nameEn}</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {lang === 'zh' ? link.labelZh : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1 text-xs font-mono font-medium text-slate-300 hover:text-white border border-white/10 rounded hover:border-white/20 transition-colors"
            title={lang === 'zh' ? '切換至英文 (Switch to English)' : 'Switch to Traditional Chinese'}
          >
            {lang === 'zh' ? 'EN' : '繁中'}
          </button>

          {/* Resume Quick View Action */}
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors whitespace-nowrap font-sans font-semibold tracking-wide"
          >
            {lang === 'zh' ? '技術履歷' : 'Technical CV'}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-300 hover:text-white focus:outline-none"
            aria-label="選單開關"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1117] border-b border-white/[0.08] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white py-1"
            >
              {lang === 'zh' ? link.labelZh : link.labelEn}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
