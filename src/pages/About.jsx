"use client";

import React from "react";
import { Linkedin, Github, Mail, Download, MapPin, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden mt-15">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl -top-32 -left-32 sm:-top-48 sm:-left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-32 -right-32 sm:-bottom-48 sm:-right-48 animate-pulse delay-700"></div>
      </div>

      <Header />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 w-fit mx-auto">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-xs sm:text-sm font-medium text-purple-300">About Me</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Madhvi Makvana
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-purple-300 font-semibold mb-4">
            Full-Stack Web Developer
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Right: Experience & Intro */}
            <div className="space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
                  <Briefcase className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Experience</h3>
                  <p className="text-gray-300 mt-3 leading-relaxed text-sm sm:text-base">
                    I recently completed my BCA graduation and a <strong>6-month intensive internship</strong> as a 
                    <span className="text-purple-300 font-medium"> MERN Stack Developer</span>, where I built full-stack applications from scratch using React, Node.js, Express, and MongoDB.
                  </p>
                  <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
                    Passionate about clean code, modern architecture, and creating seamless user experiences.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="/Madhvi_Resume.pdf"
                  download="Madhvi_Resume.pdf"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Left: Personal Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
                    👩‍💻
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Personal Details</h3>
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      <strong>Name:</strong> Makvana Madhvi B.
                    </p>
                    <p className="text-gray-300 mt-2 flex items-start gap-2 text-sm sm:text-base">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5" />
                      Village: Kandhi, TA: Gir Gadhda, Dist: Gir Somnath, Gujarat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
                    <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Education</h3>
                    <ul className="mt-3 space-y-3 text-gray-300 text-sm sm:text-base">
                      <li className="flex items-center gap-2">
                        <span className="text-purple-400">•</span>
                        STD 12 (Rajula) – 72%
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-400">•</span>
                        BCA (Smt. V.B. Nandola Computer Science College, Bhacha) – 89%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Optional Stats */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">6</div>
            <p className="text-gray-400 text-sm sm:text-base mt-2">Months Internship</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">89%</div>
            <p className="text-gray-400 text-sm sm:text-base mt-2">BCA Score</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">MERN</div>
            <p className="text-gray-400 text-sm sm:text-base mt-2">Stack Expert</p>
          </div>
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

export default About;