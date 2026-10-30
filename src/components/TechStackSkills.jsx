import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  CircleDashed, 
  Zap,
  BookOpen
} from 'lucide-react';
import {
  CppIcon,
  PythonIcon,
  JavaScriptIcon,
  JavaIcon,
  TypeScriptIcon,
  ReactIcon,
  TailwindIcon,
  NodeIcon,
  GitIcon,
  DsaIcon,
  OopIcon,
  DbmsIcon,
  OsIcon
} from './Icons';

// Skill data structure
const skillCategories = [
  {
    title: 'Languages',
    description: 'Core syntaxes and programming languages used across projects and coursework.',
    icon: Code2,
    badgeCount: '6 Languages',
    skills: [
      { name: 'C++', icon: CppIcon, level: 'Proficient', levelDesc: 'DSA & Performance', color: 'emerald' },
      { name: 'Python', icon: PythonIcon, level: 'Proficient', levelDesc: 'AI/ML & Automation', color: 'emerald' },
      { name: 'JavaScript', icon: JavaScriptIcon, level: 'Proficient', levelDesc: 'Modern ES6+ & Web', color: 'emerald' },
      { name: 'Java', icon: JavaIcon, level: 'Familiar', levelDesc: 'OOP & University Labs', color: 'lime' },
      { name: 'TypeScript', icon: TypeScriptIcon, level: 'Familiar', levelDesc: 'Type-Safe Web Apps', color: 'lime' },
      { name: 'SQL', icon: DbmsIcon, level: 'Proficient', levelDesc: 'Relational Queries', color: 'emerald' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    description: 'Libraries, build tools, runtime environments, and version control ecosystems.',
    icon: Layers,
    badgeCount: '7 Frameworks',
    skills: [
      { name: 'React', icon: ReactIcon, level: 'Proficient', levelDesc: 'Hooks, SPA & State', color: 'emerald' },
      { name: 'Tailwind CSS', icon: TailwindIcon, level: 'Proficient', levelDesc: 'Modern Responsive UI', color: 'emerald' },
      { name: 'Node.js', icon: NodeIcon, level: 'Proficient', levelDesc: 'REST APIs & Backends', color: 'emerald' },
      { name: 'Git / GitHub', icon: GitIcon, level: 'Proficient', levelDesc: 'Workflows & CI/CD', color: 'emerald' },
      { name: 'FastAPI', icon: Terminal, level: 'Familiar', levelDesc: 'High-speed Python APIs', color: 'lime' },
      { name: 'PyTorch', icon: Cpu, level: 'Familiar', levelDesc: 'Deep Learning & Tensors', color: 'lime' },
      { name: 'Docker', icon: Layers, level: 'Currently Learning', levelDesc: 'Containerization', color: 'yellow' },
    ],
  },
  {
    title: 'Core CS Concepts',
    description: 'Fundamental computer science theory, systems architecture, and algorithmic design.',
    icon: Cpu,
    badgeCount: '5 Disciplines',
    skills: [
      { name: 'Data Structures', icon: DsaIcon, level: 'Proficient', levelDesc: 'Trees, Graphs, DP', color: 'emerald' },
      { name: 'OOP', icon: OopIcon, level: 'Proficient', levelDesc: 'Abstraction, Inheritance', color: 'emerald' },
      { name: 'DBMS', icon: DbmsIcon, level: 'Proficient', levelDesc: 'Normalization & ACID', color: 'emerald' },
      { name: 'Operating Systems', icon: OsIcon, level: 'Familiar', levelDesc: 'Concurrency & Memory', color: 'lime' },
      { name: 'Computer Networks', icon: Terminal, level: 'Familiar', levelDesc: 'TCP/IP & Protocols', color: 'lime' },
    ],
  },
];

// Individual Interactive Skill Pill with Hover Tooltip
function SkillBadge({ skill }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const Icon = skill.icon;

  const getStatusColor = (level) => {
    switch (level) {
      case 'Proficient':
        return {
          pillBg: 'hover:bg-emerald-950/40',
          dot: 'bg-emerald-400',
          ping: 'bg-emerald-400',
          badgeText: 'text-emerald-300',
          border: 'border-emerald-400/40',
          glow: 'shadow-[0_0_18px_rgba(16,185,129,0.35)]',
          tooltipBorder: 'border-emerald-500/40',
        };
      case 'Familiar':
        return {
          pillBg: 'hover:bg-lime-950/30',
          dot: 'bg-lime-400',
          ping: 'bg-lime-400',
          badgeText: 'text-lime-300',
          border: 'border-lime-400/40',
          glow: 'shadow-[0_0_18px_rgba(190,242,100,0.3)]',
          tooltipBorder: 'border-lime-500/40',
        };
      case 'Currently Learning':
      default:
        return {
          pillBg: 'hover:bg-yellow-950/30',
          dot: 'bg-yellow-400',
          ping: 'bg-yellow-400',
          badgeText: 'text-yellow-300',
          border: 'border-yellow-400/40',
          glow: 'shadow-[0_0_18px_rgba(250,204,21,0.25)]',
          tooltipBorder: 'border-yellow-500/40',
        };
    }
  };

  const status = getStatusColor(skill.level);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      {/* Sleek Skill Badge */}
      <button
        type="button"
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0d1117] border border-emerald-500/20 text-slate-200 text-xs sm:text-sm font-mono transition-all duration-200 cursor-pointer select-none transform hover:scale-105 active:scale-95 ${
          showTooltip 
            ? `border-emerald-400 ${status.glow} ${status.pillBg}` 
            : 'hover:border-emerald-500/40 hover:bg-[#161b22]'
        }`}
      >
        {/* Tech Icon / Logo */}
        <span className="flex items-center justify-center text-emerald-400 group-hover:text-lime-300 transition-colors">
          <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
        </span>

        {/* Skill Name */}
        <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
          {skill.name}
        </span>

        {/* Tiny Status Indicator Dot */}
        <span className="relative flex h-1.5 w-1.5 ml-1">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.ping}`} />
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${status.dot}`} />
        </span>
      </button>

      {/* Floating Tooltip displaying Comfort Level */}
      {showTooltip && (
        <div 
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-30 px-3 py-1.5 rounded-lg bg-[#161b22]/95 backdrop-blur-xl border ${status.tooltipBorder} shadow-2xl shadow-black whitespace-nowrap animate-in fade-in zoom-in-95 duration-150 pointer-events-none`}
        >
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className={`font-bold ${status.badgeText}`}>
              {skill.level}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-sans text-[11px]">
              {skill.levelDesc}
            </span>
          </div>

          {/* Tooltip caret arrow pointing down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-[#161b22] border-t-4 border-x-transparent border-x-4 border-b-0" />
        </div>
      )}
    </div>
  );
}

export default function TechStackSkills() {
  return (
    <section id="skills" className="relative z-10 pt-4 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Core Competencies // KSIT AI & ML</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Categorized technical toolkit spanning systems programming, frontend frameworks, backend runtimes, and algorithmic principles.
          </p>
        </div>

        {/* Legend strip for comfort levels */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 bg-[#161b22]/70 px-4 py-2 rounded-xl border border-emerald-500/15">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            <span>Familiar</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span>Learning</span>
          </div>
        </div>
      </div>

      {/* 3 Tidy Category Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((cat, idx) => {
          const CategoryIcon = cat.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-2xl bg-[#161b22]/75 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl shadow-black/50 hover:shadow-[0_12px_30px_-8px_rgba(16,185,129,0.2)]"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:text-lime-300 group-hover:border-emerald-400/50 transition-colors">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-400/80 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/15">
                    {cat.badgeCount}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skill Badges Flex Wrap Container */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <SkillBadge key={sIdx} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Subtle footer divider */}
              <div className="mt-6 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Category 0{idx + 1}</span>
                <span className="text-emerald-400/60 font-semibold">Hover for details</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

