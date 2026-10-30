import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Code2, 
  Sparkles, 
  Terminal, 
  ExternalLink, 
  Cpu, 
  BrainCircuit, 
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saravanan@ksit.ac.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient Cyber Light Wells (Emerald & Lime, strictly dark matte carbon background) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[350px] h-[350px] bg-lime-400/[0.06] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-600/[0.07] rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content (Left 7 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* 1. Status Badge: Animated Blinking Radar Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161b22]/90 border border-emerald-500/30 backdrop-blur-md shadow-sm shadow-emerald-950/40 group hover:border-emerald-400/60 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                {/* Outer radar pulse wave */}
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                {/* Secondary wave for realistic radar pulse */}
                <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500/20 animate-pulse"></span>
                {/* Core bright neon dot */}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
              </span>
              <span className="font-mono text-xs font-semibold text-emerald-300 tracking-wide flex items-center gap-1.5">
                <span>🟢 Student Developer</span>
                <span className="text-emerald-500/60">//</span>
                <span className="text-lime-300/90 font-medium">Open for Internships</span>
              </span>
            </div>

            {/* 2. Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
                Hey, I am{' '}
                <span className="relative inline-block text-white">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300">
                    T M Saravanan
                  </span>
                  {/* Subtle underline cyber tick */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400/80 via-lime-400/60 to-transparent rounded-full" />
                </span>{' '}
                — Building the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  Future of Tech.
                </span>
              </h1>
            </div>

            {/* 3. Student Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl font-normal">
              <span className="font-semibold text-emerald-300/95 font-mono text-sm bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20 mr-1.5">
                2nd Year AI ML at KSIT
              </span>
              passionate about <span className="text-white font-medium underline decoration-emerald-500/50 underline-offset-4">web development</span>,{' '}
              <span className="text-white font-medium underline decoration-lime-400/50 underline-offset-4">AI</span>, and building real-world projects that solve genuine human problems.
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary Glowing Button: View My Projects */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-bold text-carbon-900 bg-gradient-to-r from-emerald-400 via-emerald-400 to-lime-300 hover:from-emerald-300 hover:to-lime-200 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.65)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                {/* Cyber button shine sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out" />
              </a>

              {/* Secondary Outline Button: Download Resume / CV */}
              <a
                href="#resume"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-200 hover:text-emerald-300 bg-[#161b22]/70 hover:bg-[#161b22] border border-emerald-500/30 hover:border-emerald-400 shadow-sm shadow-emerald-950/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-emerald-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Download Resume / CV</span>
              </a>
            </div>

            {/* Quick Tech Highlights & Social Strip */}
            <div className="pt-4 border-t border-emerald-500/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-slate-400">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Core Stack:</span>
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {['Python', 'React', 'PyTorch', 'Tailwind', 'Next.js', 'FastAPI'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#161b22] border border-emerald-500/15 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Cyber Terminal & Student Profile Visual (Right 5 cols) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            {/* Visual Frame with Cyber Emerald Accents */}
            <div className="w-full max-w-md relative group">
              {/* Corner target reticles */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400 pointer-events-none z-20" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-400 pointer-events-none z-20" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none z-20" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none z-20" />

              {/* Glowing backplate */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-emerald-950/20 to-lime-500/10 rounded-2xl filter blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Main Cyber Terminal Card */}
              <div className="relative rounded-2xl bg-[#121720]/90 backdrop-blur-xl border border-emerald-500/30 overflow-hidden shadow-2xl shadow-black/80">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#0d1117] border-b border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400">saravanan@ksit-terminal:~</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">online</span>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs space-y-4">
                  {/* Bio Spec JSON representation */}
                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500 flex items-center gap-2">
                      <span className="text-emerald-400">&gt;</span>
                      <span>identity.inspect()</span>
                    </p>
                    <div className="pl-3 border-l-2 border-emerald-500/30 space-y-1">
                      <p>
                        <span className="text-lime-400">name</span>: <span className="text-emerald-300">"T M Saravanan"</span>,
                      </p>
                      <p>
                        <span className="text-lime-400">role</span>: <span className="text-emerald-300">"AI & ML Undergrad // Builder"</span>,
                      </p>
                      <p>
                        <span className="text-lime-400">institution</span>: <span className="text-emerald-300">"KSIT Bangalore"</span>,
                      </p>
                      <p>
                        <span className="text-lime-400">year</span>: <span className="text-yellow-400">2</span>,
                      </p>
                      <p>
                        <span className="text-lime-400">interests</span>: [
                        <span className="text-emerald-300">"GenAI"</span>,{' '}
                        <span className="text-emerald-300">"FullStack"</span>,{' '}
                        <span className="text-emerald-300">"Agents"</span>
                        ],
                      </p>
                      <p>
                        <span className="text-lime-400">internship_ready</span>: <span className="text-emerald-400 font-bold">true</span>
                      </p>
                    </div>
                  </div>

                  {/* Student Stats Mini Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-[#0d1117]/80 border border-emerald-500/20 flex flex-col">
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-emerald-400" /> Focus Area
                      </span>
                      <span className="font-semibold text-white mt-1">AI / ML & Web</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#0d1117]/80 border border-emerald-500/20 flex flex-col">
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <BrainCircuit className="w-3 h-3 text-lime-400" /> Current Goal
                      </span>
                      <span className="font-semibold text-white mt-1">2026 Internship</span>
                    </div>
                  </div>

                  {/* Quick Connect & Copy Box */}
                  <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-emerald-400 text-xs">$</span>
                      <span className="text-[11px] text-slate-300">saravanan.contact</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2 py-1 rounded bg-[#0d1117] hover:bg-emerald-900/40 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 transition-colors flex items-center gap-1 text-[10px]"
                      title="Copy contact handle"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-lime-400" />
                          <span className="text-lime-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="px-4 py-2 bg-[#090d12] border-t border-emerald-500/15 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>UTF-8 // UNIX</span>
                  <span className="text-emerald-400/80">LATENCY: 18ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
