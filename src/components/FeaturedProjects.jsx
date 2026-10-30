import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Sparkles, Layers, Filter } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Campus Event Finder',
    category: 'Web Apps',
    filterTag: 'Web Apps',
    description:
      'A real-time campus activity hub solving fragmented event notifications and club announcements across college departments. Centralizes student hackathons, workshops, and RSVP tracking with instant Google calendar synchronization.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Smart Attendance Tracker',
    category: 'AI / ML',
    filterTag: 'AI / ML',
    description:
      'Automated biometric classroom check-in system that eliminates manual roll calls using facial recognition. Employs lightweight edge computer vision algorithms to log student attendance in under 2 seconds with 98.4% accuracy.',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Student Notes Marketplace',
    category: 'Web Apps',
    filterTag: 'Web Apps',
    description:
      'A peer-to-peer academic repository enabling undergrads to exchange and rate verified semester study guides and lab manuals. Streamlines access to high-yield exam preparation materials with peer review scores and instant previews.',
    tags: ['Tailwind', 'Node.js', 'Express', 'PostgreSQL'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Neural Vision Inspector',
    category: 'AI / ML',
    filterTag: 'AI / ML',
    description:
      'Lightweight browser-based neural network model that identifies defects and anomalies in lab hardware components. Processes visual streams with zero server latency using WebAssembly and ONNX Runtime.',
    tags: ['PyTorch', 'ONNX', 'React', 'Tailwind'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Student Snippet CLI Vault',
    category: 'Mini-Projects',
    filterTag: 'Mini-Projects',
    description:
      'A lightweight command-line tool designed for student developers to store and search frequently used algorithm boilerplate. Eliminates repetitive manual typing during lab exams and competitive programming sprints.',
    tags: ['Node.js', 'CLI', 'SQLite', 'Commander'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'KSIT Syllabus Query Agent',
    category: 'Mini-Projects',
    filterTag: 'Mini-Projects',
    description:
      'A fast question-answering tool that parses VTU syllabus PDFs and past question papers for key exam topics. Provides quick formula summaries and chapter breakdowns directly in the terminal.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'FastAPI'],
    liveDemoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.filterTag === activeFilter);

  return (
    <section id="projects" className="relative z-10 pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
            <span>Curated Student Builds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Interactive student projects solving campus workflows, applying computer vision, and building full-stack platforms.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400 bg-[#161b22]/70 px-3.5 py-1.5 rounded-xl border border-emerald-500/15">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Showing {filteredProjects.length} of {projectsData.length} Projects</span>
        </div>
      </div>

      {/* Filter Pill Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#161b22]/80 border border-emerald-500/20 backdrop-blur-md">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            const count = filter === 'All' 
              ? projectsData.length 
              : projectsData.filter((p) => p.filterTag === filter).length;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500/25 to-lime-500/15 text-emerald-300 border border-emerald-400/80 shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#21262d]/50 border border-transparent'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-emerald-400/20 text-lime-300 font-bold'
                      : 'bg-[#0d1117] text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  );
}

