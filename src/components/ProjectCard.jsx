import React, { useRef, useState } from 'react';
import { ExternalLink, Terminal, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized coordinates from -0.5 to 0.5
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;

    // Interactive 3D perspective tilt physics
    const maxTilt = 12; // Maximum degrees of tilt
    const rotateX = -normY * maxTilt;
    const rotateY = normX * maxTilt;

    setTransformStyle(
      `perspective(1000px) translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    );

    // Track cursor for dynamic shine effect
    setShinePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return card to rest state
    setTransformStyle('perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle || 'perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
      }}
      className={`group relative rounded-2xl bg-[#161b22]/85 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isHovered
          ? 'border-emerald-400/60 shadow-[0_15px_35px_-5px_rgba(16,185,129,0.28),0_0_20px_rgba(16,185,129,0.2)]'
          : 'border-emerald-500/20 shadow-xl shadow-black/60'
      }`}
    >
      {/* Sleek Dynamic Shine Overlay tracking cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 280px at ${shinePos.x}% ${shinePos.y}%, rgba(16, 185, 129, 0.18), rgba(190, 242, 100, 0.08) 35%, transparent 70%)`,
        }}
      />

      {/* Cyber Corner Reticles on Hover */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none z-10">
        <span className={`absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 transition-all duration-300 ${
          isHovered ? 'border-emerald-400 scale-100' : 'border-emerald-500/30 scale-75'
        }`} />
      </div>

      <div className="p-6 relative z-10 flex flex-col flex-grow">
        
        {/* Top Header: Category & Terminal Indicator */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
              {project.category}
            </span>
          </div>
          <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400/70 transition-colors">
            {`0${index + 1}`}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-emerald-400/40 group-hover:text-lime-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>

        {/* 2-Sentence Description */}
        <p className="text-sm text-slate-300/90 font-sans leading-relaxed mt-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-5 pt-4 border-t border-emerald-500/15 flex flex-wrap gap-2">
          {project.tags.map((badge, bIdx) => (
            <span
              key={bIdx}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0d1117] border border-emerald-500/20 text-slate-300 group-hover:border-emerald-500/40 group-hover:text-emerald-300 transition-colors"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons: 'Live Demo' & 'GitHub Code' */}
      <div className="p-6 pt-0 relative z-10">
        <div className="grid grid-cols-2 gap-3 pt-2">
          {/* Live Demo Button */}
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-mono text-xs font-bold text-carbon-900 bg-gradient-to-r from-emerald-400 to-lime-300 hover:from-emerald-300 hover:to-lime-200 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-200 active:scale-95"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>

          {/* GitHub Code Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-200 hover:text-emerald-300 bg-[#0d1117] hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <GithubIcon className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-lime-300 transition-colors" />
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

