"use client";

import React from "react";
import Header from "../components/Header";
import { Download, Sparkles, Eye } from "lucide-react";
import Footer from "../components/Footer";

const Resume = () => {
  // Function to open PDF preview in a new tab
  const openPreview = () => {
    window.open("/Madhvi_Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden mt-15">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl -top-32 -left-32 sm:-top-48 sm:-left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-32 -right-32 sm:-bottom-48 sm:-right-48 animate-pulse delay-700"></div>
      </div>

      <Header />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 w-fit mx-auto">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-xs sm:text-sm font-medium text-purple-300">My Resume</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 leading-tight">
            Professional Resume
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-purple-300 font-medium max-w-3xl mx-auto px-4">
            A detailed overview of my skills, experience, and achievements as a Full-Stack Web Developer.
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
          <div className="text-center mb-8 sm:mb-10 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300 mb-4">
              Resume Preview
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
              Click the button below to view the full resume in a new tab
            </p>

            {/* Preview Button */}
            <button
              onClick={openPreview}
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 mb-6 sm:mb-8 cursor-pointer relative z-10"
            >
              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              View Resume Preview
            </button>

            {/* Download Button */}
            <div className="mt-4 sm:mt-6 relative z-10">
              <a
                href="/Madhvi_Resume.pdf"
                download="Madhvi_Resume.pdf"
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                Download Full Resume (PDF)
              </a>
            </div>
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

export default Resume;