import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`relative rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#0d1117]/85 backdrop-blur-xl border-emerald-500/25 shadow-xl shadow-emerald-950/30'
              : 'bg-[#0d1117]/60 backdrop-blur-lg border-emerald-500/15 shadow-lg shadow-black/40'
          }`}
        >
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-lime-500/10 border border-emerald-500/30 group-hover:border-emerald-400 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]">
              <Terminal className="w-5 h-5 text-emerald-400 group-hover:text-cyber-lime transition-colors duration-200" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                <span>T M Saravanan</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono text-emerald-400">
                  dev
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                KSIT // AI & ML
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-all duration-200 group hover:bg-emerald-500/10"
              >
                <span className="relative z-10 flex items-center gap-1">
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">
                    /
                  </span>
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-400 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Right Action Pill / Let's Talk */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-400 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-emerald-400" />
            ) : (
              <Menu className="w-5 h-5 text-emerald-400" />
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0d1117]/95 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all duration-200 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono text-xs">&gt;</span>
                    {link.name}
                  </span>
                  <span className="text-xs font-mono text-slate-500">navigate</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-emerald-500/15">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono font-semibold text-carbon-900 bg-gradient-to-r from-emerald-400 to-lime-300 hover:from-emerald-300 hover:to-lime-200 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

