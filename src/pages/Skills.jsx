// import React from "react";
// import Header from "../components/Header";

// const Skills = () => {
//   return (
//     <>
//       <Header />

//       <div className="container my-5">
//         <div className="card shadow border-0 p-4">
//           <div className="card-body">
//             <h2 className="text-center text-primary fw-bold mb-4">
//               My Skills
//             </h2>

//             <p className="lead text-center mb-4">
//               I am a passionate <strong>MERN Stack Developer</strong> skilled in
//               building modern and responsive web applications using the latest
//               technologies.
//             </p>

//             {/* --- Technical Skills Section --- */}
//             <h4 className="fw-bold text-secondary mb-3">Technical Skills</h4>
//             <div className="row row-cols-2 row-cols-md-3 g-3 text-center mb-4">
//               {[
//                 "React.js",
//                 "Node.js",
//                 "Express.js",
//                 "MongoDB",
//                 "Tailwind CSS",
//                 "HTML",
//                 "CSS",
//                 "JavaScript",
//                 "Bootstrap",
//               ].map((skill, index) => (
//                 <div key={index} className="col">
//                   <div className="border rounded py-3 shadow-sm bg-light fw-semibold">
//                     {skill}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* --- Tools Section --- */}
//             <h4 className="fw-bold text-secondary mb-3">Tools & Platforms</h4>
//             <div className="row row-cols-2 row-cols-md-3 g-3 text-center">
//               {["Postman", "VS Code", "Git / GitHub"].map((tool, index) => (
//                 <div key={index} className="col">
//                   <div className="border rounded py-3 shadow-sm bg-light fw-semibold">
//                     {tool}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* --- Button Section --- */}
//             <div className="text-center mt-5">
//               <a href="#" className="btn btn-primary px-4">
//                 View My Projects
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;

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
    { name: "React.js", icon: <Code className="w-8 h-8" /> },
    { name: "Next.js", icon: <Globe className="w-8 h-8" /> },
    { name: "Node.js", icon: <Server className="w-8 h-8" /> },
    { name: "Express.js", icon: <Terminal className="w-8 h-8" /> },
    { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
    { name: "Tailwind CSS", icon: <Layout className="w-8 h-8" /> },
    { name: "TypeScript", icon: <Code className="w-8 h-8" /> }, // Added TypeScript!
    { name: "JavaScript (ES6+)", icon: <Code className="w-8 h-8" /> },
    { name: "HTML5 & CSS3", icon: <Layout className="w-8 h-8" /> },
    { name: "WooCommerce", icon: <ShoppingCart className="w-8 h-8" /> },
  ];

  const tools = [
    { name: "Git / GitHub", icon: <GitBranch className="w-8 h-8" /> },
    { name: "VS Code", icon: <Terminal className="w-8 h-8" /> },
    { name: "Postman", icon: <Database className="w-8 h-8" /> },
    // { name: "Figma", icon: <Layout className="w-8 h-8" /> },
  ];

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
            <span className="text-sm font-medium text-purple-300">
              My Skills
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h1>

          <p className="text-xl text-purple-300 font-medium max-w-2xl mx-auto">
            Full-Stack Web Developer specializing in MERN + Next.js + TypeScript
            stack — building fast, scalable, and beautiful applications.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center text-white">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Tools & Platforms
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center transition-all duration-300 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {tool.icon}
                </div>

                {/* Tool Name */}
                <h3 className="font-semibold text-xl text-white">
                  {tool.name}
                </h3>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            View My Projects
          </a>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse {
          animation: pulse 8s infinite ease-in-out;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default Skills;
