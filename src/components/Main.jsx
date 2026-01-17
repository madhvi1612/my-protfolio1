import React, { useState } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Download,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ModernPortfolioHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
      </div>

      <div className="relative max-w-6xl w-full">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">

            {/* ================= RIGHT SIDE (ANIMATED) ================= */}
            <div className="relative p-8 md:p-12 lg:p-16 flex items-center justify-center">
              <div className="relative group perspective-1000">

                {/* Breathing glow */}
                <div className="absolute inset-[-25%] bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-breathe" />

                {/* Orbiting dots */}
                <div className="absolute inset-[-40%] animate-orbit">
                  <span className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full" />
                  <span className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full" />
                </div>

                {/* Floating profile */}
                <div className="relative animate-float-slow transition-transform duration-700 group-hover:rotate-x-6 group-hover:-rotate-y-6">

                  {/* Rotating ring */}
                  <div className="absolute -inset-6 rounded-full border border-purple-500/30 animate-spin-slow" />

                  {/* Profile */}
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-6xl font-bold relative z-10">
                    MM
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 right-4 w-18 h-18 bg-purple-500/30 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center animate-float">
                    <span className="text-2xl">⚛️</span>
                  </div>

                  <div className="absolute bottom-6 -left-6 w-18 h-18 bg-blue-500/30 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center animate-float-delayed">
                    <span className="text-2xl">🌐</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= LEFT SIDE (UNCHANGED) ================= */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 w-fit">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">
                  Available for work
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Madhvi Makvana
              </h1>

              <p className="text-xl lg:text-2xl text-purple-300 font-semibold mb-4">
                Full-Stack Web Developer
              </p>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Building complete, scalable web applications from end to end.
                Expert in React, Node.js, TypeScript, MongoDB & PostgreSQL.
                Focused on clean architecture and performance.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-10 relative z-10">
                <button
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  View Full Profile
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  />
                </button>

                <a
                  href="/Madhvi_Resume.pdf"
                  download
                  className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer relative z-10"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </div>

              {/* Socials */}
              <div className="flex gap-4 relative z-10">
                <a 
                  href="https://www.linkedin.com/in/madhvi-makvana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/madhvi1612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:makvanamadhvi20@gmail.com"
                  className="social-btn"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            ["6", "Months Internship"],
            ["4+", "Full-Stack Projects"],
            ["100%", "Client Satisfaction"],
          ].map(([value, label], i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CSS ANIMATIONS ================= */}
      <style jsx="true">{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .social-btn {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          z-index: 10;
        }

        .social-btn:hover {
          transform: scale(1.1);
          color: white;
          border-color: rgba(168, 85, 247, 0.6);
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 7s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 18s linear infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }

        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3.5s ease-in-out infinite;
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
};

export default ModernPortfolioHero;
