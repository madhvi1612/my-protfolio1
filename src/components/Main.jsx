
import React, { useState } from "react";
import { Linkedin, Github, Mail, Download, ArrowRight, Sparkles } from "lucide-react";

const ModernPortfolioHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-6xl w-full">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 w-fit">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">Available for work</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                Madhvi Makvana
              </h1>
              
              <p className="text-xl lg:text-2xl text-purple-300 font-semibold mb-4">
                Full-Stack Web Developer
              </p>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Building complete, scalable web applications from end to end. Expert in React, Node.js, TypeScript, databases (MongoDB, PostgreSQL), and modern DevOps practices. Passionate about clean architecture, performance, and delivering exceptional user experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button 
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  View Full Profile
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </button>
                
                 <a
                 href="/Madhvi_Resume.pdf"
                download="Madhvi_Resume.pdf"
                 className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/madhvi1612" 
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="makvanamadhvi20@gmail.com" 
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative p-8 md:p-12 lg:p-16 flex items-center justify-center">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/50 to-blue-500/50 rounded-full animate-spin-slow opacity-30"></div>
                
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative z-10">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-6xl font-bold">
                      MM
                    </div>
                  </div>
                  
                  {/* Floating elements - updated for full-stack */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/30 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center transform rotate-12 animate-float">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <div className="absolute bottom-8 -left-8 w-20 h-20 bg-blue-500/30 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center transform -rotate-12 animate-float-delayed">
                    <span className="text-2xl">🌐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar - updated for full-stack */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">6</div>
            <div className="text-gray-400 text-sm mt-1">Months Internship</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">4+</div>
            <div className="text-gray-400 text-sm mt-1">Full-Stack Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">100%</div>
            <div className="text-gray-400 text-sm mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-20px) rotate(-12deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ModernPortfolioHero;
