// import React from "react";
// import Header from "../components/Header";

// const Contact = () => {
//   return (
//     <>
//       <Header />

//       <div className="container my-5">
//         <div className="card shadow border-0 p-4">
//           <div className="card-body">
//             <h2 className="text-center text-primary fw-bold mb-4">
//               Contact Me
//             </h2>

//             <p className="lead text-center mb-4">
//               I'd love to connect! Feel free to reach out through the following contact details.
//             </p>

//             <div className="row justify-content-center">
//               <div className="col-md-6">
//                 <ul className="list-group list-group-flush">
//                   <li className="list-group-item">
//                     <strong>📞 Phone:</strong> 2525252525
//                   </li>
//                   <li className="list-group-item">
//                     <strong>📧 Email:</strong>{" "}
//                     <a href="mailto:makvanamadhvi20@gmail.com" className="text-decoration-none">
//                       makvanamadhvi20@gmail.com
//                     </a>
//                   </li>
//                   <li className="list-group-item">
//                     <strong>💼 LinkedIn:</strong>{" "}
//                     <a
//                       href="#"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-decoration-none text-primary"
//                     >
//                       Visit My LinkedIn
//                     </a>
//                   </li>
//                   <li className="list-group-item">
//                     <strong>💻 GitHub:</strong>{" "}
//                     <a
//                       href="#"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-decoration-none text-dark"
//                     >
//                       Visit My GitHub
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="text-center mt-4">
//               <a href="mailto:makvanamadhvi20@gmail.com" className="btn btn-primary px-4">
//                 Send Message
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React from "react";
import Header from "../components/Header";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import Footer from "../components/Footer";

const Contact= () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <Header />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <Send className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Get in Touch</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Contact Me
          </h1>

          <p className="text-xl md:text-2xl text-purple-300 font-medium max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether it's a project idea, job opportunity, or just to say hi — feel free to reach out.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Contact Details */}
            <div className="p-10 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>

              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center text-white">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-xl font-medium text-white">+91 25252 52525</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center text-white">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:makvanamadhvi20@gmail.com"
                      className="text-xl font-medium text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      makvanamadhvi20@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center text-white">
                    <Linkedin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/madhvi-makvana" // ← Replace with real link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      linkedin.com/in/madhvi-makvana
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center text-white">
                    <Github className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a
                      href="https://github.com/madhvi1612" // ← Replace with real link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      https://github.com/madhvi1612
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA Section */}
            <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-200 text-lg mb-10 max-w-md leading-relaxed">
                Drop me a message and I'll get back to you within 24 hours.
              </p>

              <a
                href="mailto:makvanamadhvi20@gmail.com"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-semibold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer Touch */}
        <div className="text-center mt-12 text-gray-400">
          <p className="text-lg">Looking forward to hearing from you! ✨</p>
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

export default Contact;
