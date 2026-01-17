// import React from "react";
// import { Github, Linkedin, Mail, Heart } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border-t border-white/10">
//       {/* Subtle background glow */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse"></div>
//         <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-16">
//         <div className="grid md:grid-cols-3 gap-8 items-center">
//           {/* Left: Copyright + Made with ❤️ */}
//           <div className="text-center md:text-left">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Madhvi Makvana. All rights reserved.
//             </p>
//             <p className="text-purple-400 text-sm mt-2 pl-9 flex items-center justify-center md:justify-start gap-2">
//               Made with
//               <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
//               in India
//             </p>
//           </div>

//           {/* Center: Social Links */}
//           <div className="flex justify-center gap-6">
//             <a
//               href="https://github.com/madhvi1612"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-white/10 transition-all duration-300 hover:scale-110"
//             >
//               <Github className="w-5 h-5" />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/madhvi-makvana"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-white/10 transition-all duration-300 hover:scale-110"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>

//             <a
//               href="mailto:makvanamadhvi20@gmail.com"
//               className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-white/10 transition-all duration-300 hover:scale-110"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//           </div>

//           {/* Right: Empty or optional quick links */}
//           <div className="text-center md:text-right text-sm text-gray-400">
//             {/* You can add more links here if you want */}
//             <a href="#" className="hover:text-purple-400 transition-colors">
//               Back to Top
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          {/* Left: Copyright + Made with ❤️ */}
          <div className="text-center sm:text-left order-2 sm:order-1">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Madhvi Makvana. All rights reserved.
            </p>
            <p className="text-purple-400 text-sm mt-2 flex items-center justify-center sm:justify-start gap-2">
              Made with
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
              in India
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center gap-6 order-1 sm:order-2 relative z-10">
            <a
              href="https://github.com/madhvi1612"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/madhvi-makvana"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:makvanamadhvi20@gmail.com"
              className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/60 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Right: Back to Top */}
          <div className="text-center sm:text-right text-sm text-gray-400 order-3 relative z-10">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;