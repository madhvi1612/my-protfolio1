"use client";
import React from "react";
import Header from "../components/Header";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden mt-15">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-700"></div>
      </div>

      <Header />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6 w-fit mx-auto">
            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
            Contact Me
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-purple-300/90 max-w-3xl mx-auto">
            I'd love to hear from you! Project ideas, opportunities or just a hi — feel free! 😊
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Contact Details */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center lg:text-left">
                Let's Connect
              </h2>

              <div className="space-y-5 sm:space-y-6 md:space-y-7">
                {/* Phone */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500/25 to-blue-500/25 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium text-white">
                      +91 8128009275
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500/25 to-blue-500/25 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <a
                      href="mailto:makvanamadhvi20@gmail.com"
                      className="text-sm sm:text-base md:text-lg font-medium text-purple-300 hover:text-purple-200 transition-colors break-all block"
                    >
                      makvanamadhvi20@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500/25 to-blue-500/25 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs sm:text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/madhvi-makvana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base md:text-lg font-medium text-purple-300 hover:text-purple-200 transition-colors break-all block"
                    >
                      linkedin.com/in/madhvi-makvana
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500/25 to-blue-500/25 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs sm:text-sm">GitHub</p>
                    <a
                      href="https://github.com/madhvi1612"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base md:text-lg font-medium text-purple-300 hover:text-purple-200 transition-colors break-all block"
                    >
                      github.com/madhvi1612
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA Section */}
            <div className="bg-gradient-to-br from-purple-600/25 to-blue-600/25 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-200 text-sm sm:text-base mb-6 sm:mb-8 max-w-md">
                Drop me a message — I'll reply within 24 hours!
              </p>
              <a
                href="mailto:makvanamadhvi20@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Final touch */}
        <div className="text-center mt-10 sm:mt-12 text-gray-400 text-sm sm:text-base">
          <p>Looking forward to connecting with you! ✨</p>
        </div>
      </div>

      <Footer />

      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.25; }
        }
        .animate-pulse {
          animation: pulse 10s infinite ease-in-out;
        }
        .delay-700 {
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
};

export default Contact;