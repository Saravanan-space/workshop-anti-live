import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Mail, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Code,
  Award,
  Users
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Sections() {
  return (
    <div className="relative z-10 space-y-24 pb-20">
      
      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-emerald-400 text-sm">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">About Me</h2>
          <div className="h-[1px] bg-emerald-500/20 flex-grow ml-4 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-2xl bg-[#161b22]/70 border border-emerald-500/15 backdrop-blur-md space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am an undergraduate student currently in my <span className="text-emerald-400 font-semibold">2nd Year of Artificial Intelligence and Machine Learning</span> at <span className="text-white font-medium">K.S. Institute of Technology (KSIT)</span>, Bengaluru.
            </p>
            <p>
              My journey bridges the gap between deep algorithmic machine learning models and high-performance, responsive modern web interfaces. I thrive on translating abstract theoretical concepts into production-grade interactive tools that users enjoy interacting with.
            </p>
            <p>
              When I am not training models or architecting user interfaces in React and Tailwind, you'll find me participating in hackathons, contributing to student dev communities, and exploring the edge of generative autonomous agents.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/30 to-[#121720] border border-emerald-500/25 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Academic Base</span>
              <h3 className="text-lg font-bold text-white mt-1">KSIT, Bengaluru</h3>
              <p className="text-xs text-slate-400 mt-1">B.E. in Artificial Intelligence & Machine Learning</p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/15 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Batch:</span>
                <span className="text-emerald-400">2024 - 2028</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Status:</span>
                <span className="text-lime-400">Active Student</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Seeking:</span>
                <span className="text-emerald-300">Summer Internships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#161b22] to-[#0d1117] border border-emerald-500/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
            // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-2 mb-4">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Whether you have an internship opportunity, a project collaboration, or simply want to talk about tech and AI, my inbox is always open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:saravanan@ksit.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-carbon-900 bg-gradient-to-r from-emerald-400 to-lime-300 hover:from-emerald-300 hover:to-lime-200 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send An Email</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-200 bg-[#121720] border border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-1 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-200 bg-[#121720] border border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-300 hover:-translate-y-1 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-emerald-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          Designed & Built by <span className="text-emerald-400 font-semibold">T M Saravanan</span>
        </div>
        <div className="flex items-center gap-4">
          <span>KSIT AI & ML</span>
          <span>•</span>
          <span className="text-lime-400/80">Cyber-Emerald Edition</span>
        </div>
      </footer>
    </div>
  );
}
