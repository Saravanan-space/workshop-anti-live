import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import EducationJourney from './components/EducationJourney';
import Sections from './components/Sections';
import MatrixGridCanvas from './components/MatrixGridCanvas';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Interactive Matrix Dot Background */}
      <MatrixGridCanvas />

      {/* Floating Frosted-Glass Top Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* 1. Intro / Hero Screen */}
        <Hero />

        {/* 2. Featured Projects Showcase with 3D Tilt Physics & Category Filter */}
        <FeaturedProjects />

        {/* 3. Interactive Tech Stack & Skills Showcase */}
        <TechStackSkills />

        {/* 4. Education & Campus Journey: Timeline & Achievement Callouts */}
        <EducationJourney />

        {/* 5. Additional Portfolio Sections: About, Contact & Footer */}
        <Sections />
      </main>
    </div>
  );
}
