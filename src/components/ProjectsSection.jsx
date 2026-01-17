import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Swingzula",
    description:
      "A modern, responsive business website built with Next.js, focused on performance, SEO, and clean UI. Designed to deliver a smooth and fast user experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://swingzula.megascale.co.in/",
  },
  {
    title: "Annapurna Khakhra",
    description:
      "An e-commerce style product showcase website built using Next.js. Optimized for speed, SEO, and mobile-first responsiveness with a strong brand-focused design.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://annapurnakhakhra.storeview.in/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          My work
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium cursor-pointer"
  onClick={(e) => {
    e.preventDefault();  // Prevent default <a> behavior
    window.open(project.link, '_blank', 'noopener,noreferrer');  // Force open new tab
  }}
>
  View Live Project <ExternalLink className="w-4 h-4" />
</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
