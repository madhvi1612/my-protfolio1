


import React from "react";
import Header from "../components/Header";
import Main from "../components/Main"; // We'll make this the hero section
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
// import About from "./About";


const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white">
      <div>
        {/* Header (Navigation) */}
        <Header />
      </div>

      <div className="mt-20">
        {/* Hero Section (Main) */}
        <Main />
      </div>

      {/* Optional: Add more sections below */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
           <ProjectsSection />
      </section>
      {/* <About /> */}

      {/* Footer */}
      <footer >
        <Footer />
      </footer>
    </div>
      </>
  );
};

export default Home;
