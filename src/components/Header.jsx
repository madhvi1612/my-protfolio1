// import React from "react";

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
//       <div className="container-fluid">
//         <a className="navbar-brand fw-bold" href="#">
//           Madhvi
//         </a>

//         <div className="d-flex gap-4">
//           <a href="/" className="nav-link text-dark">
//             Home
//           </a>
//           <a href="/about" className="nav-link text-dark">
//             About me
//           </a>
//           <a href="/contact" className="nav-link text-dark">
//             Contact Me
//           </a>
//           <a href="/skill" className="nav-link text-dark">
//             Skills
//           </a>
//           <a href="/resume" className="nav-link text-dark">
//             Resume
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-slate-950/50 backdrop-blur-md"
      }`}
      style={{
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246))",
                borderRadius: "0.5rem",
                filter: "blur(8px)",
                opacity: 0.5,
                transition: "opacity 0.3s",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                background: "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246))",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.25rem",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
              }}
            >
              M
            </div>
          </div>
          <span
            style={{
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              letterSpacing: "-0.025em",
            }}
          >
            Madhvi
            <span
              style={{
                background: "linear-gradient(to right, rgb(192, 132, 252), rgb(147, 197, 253))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              .
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          <a
            href="/"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
            }}
          >
            Home
          </a>
          <a
            href="/about"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
            }}
          >
            About me
          </a>
          <a
            href="/skill"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
            }}
          >
            Skills
          </a>
          <a
            href="/resume"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
            }}
          >
            Resume
          </a>
          <a
            href="/contact"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
            }}
          >
            Contact Me
          </a>
        </div>

        {/* CTA Button - Desktop */}
        <div style={{ display: "none" }} className="desktop-cta">
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246))",
              color: "white",
              padding: "0.625rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              boxShadow: "0 10px 15px -3px rgba(147, 51, 234, 0.3)",
              transition: "all 0.3s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(147, 51, 234, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(147, 51, 234, 0.3)";
            }}
          >
            <Sparkles size={16} />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "none",
            color: "white",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          className="mobile-menu-btn"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        style={{
          overflow: "hidden",
          transition: "max-height 0.3s",
          maxHeight: isMobileMenuOpen ? "384px" : "0",
        }}
        className="mobile-nav"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            paddingTop: "1rem",
            paddingBottom: "1.5rem",
          }}
        >
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            About me
          </a>
          <a
            href="/skill"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Skills
          </a>
          <a
            href="/resume"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Resume
          </a>
          <a
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
              color: "rgb(156, 163, 175)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgb(156, 163, 175)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Contact Me
          </a>
          <a
            href="/contact"
            style={{
              marginTop: "0.5rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              background: "linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246))",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              boxShadow: "0 10px 15px -3px rgba(147, 51, 234, 0.3)",
              textDecoration: "none",
            }}
          >
            <Sparkles size={16} />
            <span>Let's Talk</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav,
          .desktop-cta {
            display: flex !important;
          }
          .mobile-menu-btn,
          .mobile-nav {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;
