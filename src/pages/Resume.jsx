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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <Header />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">My Resume</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
            Professional Resume
          </h1>

          <p className="text-xl text-purple-300 font-medium max-w-2xl mx-auto">
            A detailed overview of my skills, experience, and achievements as a Full-Stack Web Developer.
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-4">
              Resume Preview
            </h3>
            <p className="text-gray-400 mb-8">
              Click the button below to view the full resume in a new tab
            </p>

            {/* Preview Button */}
            <button
              onClick={openPreview}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Eye className="w-6 h-6" />
              View Resume Preview
            </button>

            {/* Download Button */}
            <div className="mt-8">
              <a
                href="/Madhvi_Resume.pdf"
                download="Madhvi_Resume.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Full Resume (PDF)
              </a>
            </div>
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

export default Resume;