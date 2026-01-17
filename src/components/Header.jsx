"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Optional: hide on scroll down, show on scroll up
  // const [hidden, setHidden] = useState(false);
  // let previousScroll = 0;
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest > previousScroll && latest > 100) {
  //     setHidden(true);
  //   } else {
  //     setHidden(false);
  //   }
  //   previousScroll = latest;
  //   setIsScrolled(latest > 20);
  // });

  const linkStyle = {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    color: "rgb(156,163,175)",
    textDecoration: "none",
    transition: "all 0.3s",
    display: "block",
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-slate-950/40 backdrop-blur-md"
      }`}
      // animate={{ y: hidden ? -100 : 0 }}
      // transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with bounce entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          >
            <Link to="/" className="flex items-center gap-2.5">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold px-3 py-1.5 rounded-lg">
                M
              </div>
              <span className="text-white text-2xl font-bold">
                Madhvi<span className="text-purple-400">.</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-2"
            variants={navVariants}
          >
            {["/", "/about", "/skill", "/resume", "/contact"].map((path, i) => {
              const labels = ["Home", "About", "Skills", "Resume", "Contact"];
              return (
                <motion.div variants={itemVariants} key={path}>
                  <NavLink
                    to={path}
                    style={linkStyle}
                    className={({ isActive }) =>
                      `hover:bg-white/10 hover:text-white transition-all ${
                        isActive ? "bg-white/10 text-white" : ""
                      }`
                    }
                  >
                    {labels[i]}
                  </NavLink>
                </motion.div>
              );
            })}

            {/* Uncomment if you want fancy CTA button */}
            {/* <motion.div variants={itemVariants}>
              <NavLink
                to="/contact"
                className="ml-6 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 
                         hover:from-purple-700 hover:to-blue-600 text-white font-semibold 
                         rounded-lg transition-all shadow-lg shadow-purple-500/20 
                         hover:shadow-purple-500/40 flex items-center gap-2"
              >
                <Sparkles size={16} className="animate-pulse" />
                Let's Talk
              </NavLink>
            </motion.div> */}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-2">
          {["/", "/about", "/skill", "/resume", "/contact"].map((path, i) => {
            const labels = ["Home", "About", "Skills", "Resume", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={linkStyle}
                className={({ isActive }) =>
                  `hover:bg-white/10 hover:text-white transition-all ${
                    isActive ? "bg-white/10 text-white" : ""
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Header;