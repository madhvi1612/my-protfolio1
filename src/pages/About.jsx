
import React from "react";
import Header from "../components/Header";
import { Download, MapPin, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <Header />

      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">About Me</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
            Madhvi Makvana
          </h1>
          <p className="text-xl text-purple-300 font-medium">
            Full-Stack Web Developer
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Personal Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-15 h-12 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center text-2xl">
                    👩‍💻
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Personal Details</h3>
                    <p className="text-gray-400 mt-2">
                      <strong>Name:</strong> Makvana Madhvi B.
                    </p>
                    <p className="text-gray-400 mt-1 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Village: Kandhi, TA: Gir Gadhda, Dist: Gir Somnath, Gujarat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center text-2xl">
                    <GraduationCap className="w-12 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                    <ul className="mt-3 space-y-3 text-gray-400">
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

            {/* Right: Experience & Intro */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center text-2xl">
                  <Briefcase className="w-12 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    I recently completed my BCA graduation and a <strong>6-month intensive internship</strong> as a 
                    <span className="text-purple-300 font-medium"> MERN Stack Developer</span>, where I built full-stack applications from scratch using React, Node.js, Express, and MongoDB.
                  </p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Passionate about clean code, modern architecture, and creating seamless user experiences.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 ">
                <a
                   href="/Madhvi_Resume.pdf"
                download="Madhvi_Resume.pdf"
                  className="inline-flex items-center text-white gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">6</div>
            <p className="text-gray-400 mt-2">Months Internship</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">89%</div>
            <p className="text-gray-400 mt-2">BCA Score</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">MERN</div>
            <p className="text-gray-400 mt-2">Stack Expert</p>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>

      {/* Animations */}
      <style jsx>{`
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
