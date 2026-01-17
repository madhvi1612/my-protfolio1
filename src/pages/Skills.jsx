"use client";

import React from "react";
import Header from "../components/Header";
import {
  Sparkles,
  Code,
  Database,
  Layout,
  Terminal,
  GitBranch,
  Globe,
  Server,
  ShoppingCart,
} from "lucide-react";
import Footer from "../components/Footer";

const Skills = () => {
  const technicalSkills = [
    { name: "React.js", icon: <Code className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "Next.js", icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "Node.js", icon: <Server className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "Express.js", icon: <Terminal className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "MongoDB", icon: <Database className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "Tailwind CSS", icon: <Layout className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "TypeScript", icon: <Code className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "JavaScript (ES6+)", icon: <Code className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "HTML5 & CSS3", icon: <Layout className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "WooCommerce", icon: <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12" /> },
  ];

  const tools = [
    { name: "Git / GitHub", icon: <GitBranch className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "VS Code", icon: <Terminal className="w-10 h-10 sm:w-12 sm:h-12" /> },
    { name: "Postman", icon: <Database className="w-10 h-10 sm:w-12 sm:h-12" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden mt-15">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl -top-32 -left-32 sm:-top-48 sm:-left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-32 -right-32 sm:-bottom-48 sm:-right-48 animate-pulse delay-700"></div>
      </div>

      <Header />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 w-fit mx-auto">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-xs sm:text-sm font-medium text-purple-300">My Skills</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Technical Expertise
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-purple-300 font-medium max-w-3xl mx-auto px-4">
            Full-Stack Web Developer specializing in MERN + Next.js + TypeScript stack — building fast, scalable, and beautiful applications.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-8 text-center hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center text-white">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl break-words">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Tools & Platforms
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 text-center transition-all duration-300 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {tool.icon}
                </div>

                {/* Tool Name */}
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl break-words">
                  {tool.name}
                </h3>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            View My Projects
          </a>
        </div>
      </div>

      <Footer />

      {/* Animations */}
      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.3; }
        }
        .animate-pulse { animation: pulse 8s infinite ease-in-out; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </div>
  );
};

export default Skills;