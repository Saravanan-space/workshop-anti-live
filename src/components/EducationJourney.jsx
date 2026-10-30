import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Zap, 
  Users, 
  FileCode2, 
  Calendar, 
  Sparkles, 
  CheckCircle,
  ExternalLink,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const milestones = [
  {
    year: '2026',
    status: 'Current Milestone',
    title: 'Pre-Final Year B.Tech & Hackathon Finalist',
    subtitle: 'KSIT Bengaluru // 2nd & 3rd Year Transition',
    description: 'Deepening specialization in AI, autonomous agents, and scalable web apps while competing as a hackathon finalist and preparing for industry internships.',
    badge: 'In Progress',
    badgeColor: 'emerald',
    icon: Sparkles,
  },
  {
    year: '2025',
    status: 'Key Milestone',
    title: 'Core Technical Club Member / Web Lead',
    subtitle: 'Campus Dev Community & Peer Mentorship',
    description: 'Conducted frontend and Python workshops for 100+ juniors, coordinated inter-department hackathons, and built internal club platforms.',
    badge: 'Completed',
    badgeColor: 'lime',
    icon: Users,
  },
  {
    year: '2024',
    status: 'Foundation Milestone',
    title: 'Began Degree & Built First Web App',
    subtitle: 'K.S. Institute of Technology (KSIT)',
    description: 'Commenced B.E. in Artificial Intelligence & Machine Learning, mastered algorithmic C++ & Python fundamentals, and shipped first production web apps.',
    badge: 'Milestone Achieved',
    badgeColor: 'emerald',
    icon: GraduationCap,
  },
];

const achievements = [
  {
    id: 1,
    emoji: '🏆',
    title: '1st Place - University Hackathon',
    description: 'Secured top prize among 40+ collegiate teams for building an agentic campus inquiry bot.',
    tag: 'Hackathon Win',
  },
  {
    id: 2,
    emoji: '⚡',
    title: '150+ LeetCode Problems Solved',
    description: 'Consistent focus on Arrays, Binary Trees, Graphs, Hash Maps, and Dynamic Programming.',
    tag: 'Problem Solving',
  },
  {
    id: 3,
    emoji: '👥',
    title: 'Tech Club Organizer',
    description: 'Organized campus bootcamps, code-jams, and peer study groups for undergraduate developers.',
    tag: 'Leadership',
  },
  {
    id: 4,
    emoji: '📜',
    title: 'Full-Stack Certified',
    description: 'Certified in modern React, Node.js, and relational database architecture with honors.',
    tag: 'Certification',
  },
];

export default function EducationJourney() {
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  return (
    <section id="campus-life" className="relative z-10 pt-4 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-lime-400" />
            <span>Academic Background // KSIT Bengaluru</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Campus Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            My engineering trajectory at KSIT, academic progression, campus leadership, and verified builder accomplishments.
          </p>
        </div>

        {/* Current status pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#161b22]/70 border border-emerald-500/20 font-mono text-xs text-slate-300 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span>B.E. AI & ML (2024 - 2028)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column: Interactive Vertical Milestone Timeline (7 cols) */}
        <div className="lg:col-span-7 relative">
          
          {/* Subtle Cyber Container Header */}
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-emerald-500/10">
            <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Timeline Trajectory</span>
            </span>
            <span className="font-mono text-[11px] text-slate-500">3 Milestones</span>
          </div>

          {/* Vertical Connecting Line */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-emerald-400 before:via-emerald-500/40 before:to-emerald-500/10">
            
            {milestones.map((item, index) => {
              const isHovered = hoveredMilestone === index;
              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  onMouseEnter={() => setHoveredMilestone(index)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                  className="relative group transition-all duration-300"
                >
                  {/* Glowing Nodal Dot on Timeline */}
                  <div
                    className={`absolute -left-6 sm:-left-8 top-1.5 -translate-x-1/2 flex items-center justify-center transition-all duration-300 ${
                      index === 0
                        ? 'w-7 h-7 rounded-full bg-[#0d1117] border-2 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
                        : isHovered
                        ? 'w-7 h-7 rounded-full bg-[#0d1117] border-2 border-lime-400 shadow-[0_0_15px_rgba(190,242,100,0.8)]'
                        : 'w-5 h-5 rounded-full bg-[#161b22] border-2 border-emerald-500/40 group-hover:border-emerald-400'
                    }`}
                  >
                    {/* Inner core node */}
                    <span
                      className={`rounded-full transition-all duration-300 ${
                        index === 0
                          ? 'w-2.5 h-2.5 bg-emerald-400 animate-pulse'
                          : isHovered
                          ? 'w-2.5 h-2.5 bg-lime-300'
                          : 'w-1.5 h-1.5 bg-emerald-500/60'
                      }`}
                    />
                  </div>

                  {/* Milestone Content Card */}
                  <div
                    className={`p-5 sm:p-6 rounded-2xl bg-[#161b22]/75 backdrop-blur-xl border transition-all duration-300 ${
                      isHovered || index === 0
                        ? 'border-emerald-500/40 bg-[#161b22]/90 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.15)] -translate-y-0.5'
                        : 'border-emerald-500/15 hover:border-emerald-500/30'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded-lg border border-emerald-500/30">
                          {item.year}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          // {item.status}
                        </span>
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                          item.badgeColor === 'emerald'
                            ? 'text-emerald-300 bg-emerald-950/30 border-emerald-500/20'
                            : 'text-lime-300 bg-lime-950/30 border-lime-500/20'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5 mb-2.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Right Column: Compact 2x2 Achievement Callout Grid (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-emerald-500/10">
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-lime-400" />
                <span>Verified Milestones</span>
              </span>
              <span className="font-mono text-[11px] text-slate-500">2x2 Grid</span>
            </div>

            {/* 2x2 Grid of Accomplishment Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  className="group relative p-4 rounded-xl bg-[#161b22]/75 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.25)] flex flex-col justify-between"
                >
                  {/* Subtle corner reticle on hover */}
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400/30 group-hover:bg-emerald-400 transition-colors" />

                  <div>
                    {/* Emoji + Tag */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl sm:text-2xl filter drop-shadow group-hover:scale-110 transition-transform">
                        {item.emoji}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-400 font-sans mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-emerald-500/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span className="text-emerald-400/80">Verified</span>
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Academic Summary Pill Box */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-[#121720] border border-emerald-500/25 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">Engineering Goal</span>
                <span className="text-xs font-bold text-white">Full-Stack / AI Engineer Intern</span>
              </div>
            </div>
            <span className="font-mono text-xs text-lime-400 bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              Open 2026
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

