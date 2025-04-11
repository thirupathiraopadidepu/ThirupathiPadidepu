import React, { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  link?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (project.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [project.images.length]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>
        {project.images.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImage(
                  (prev) =>
                    (prev - 1 + project.images.length) % project.images.length
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentImage((prev) => (prev + 1) % project.images.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className={`text-gray-600 mb-4 ${isExpanded ? "" : "line-clamp-2"}`}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
      >
        {isExpanded ? "Show less" : "Learn more"}
        <ExternalLink className="w-4 h-4" />
      </button>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          Visit Site <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "BT Labels Project",
      description:
        "Led the development of a comprehensive library services application, implementing key features and resolving critical issues. Utilized Angular and .NET to create a robust and user-friendly interface for managing library resources and services.",
      technologies: ["Angular", ".NET", "C#", "SQL Server"],
      images: [
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60",
      ],
    },
    {
      title: "Gen AI ChatGPT Project",
      description:
        "Developed and enhanced a generative AI chat application, focusing on UI improvements and bug resolution. Worked directly with clients to ensure project requirements were met and implemented effectively.",
      technologies: ["React", "TypeScript", "Azure", "AI/ML"],
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1675426513141-f0020092d72e?w=800&auto=format&fit=crop&q=60",
      ],
    },
    {
      title: "Internal Tools Development",
      description:
        "Contributed to various internal initiatives including Bootstrap development and GitHub Copilot analysis. Created tools and workflows to improve development efficiency and team productivity.",
      technologies: ["Bootstrap", "GitHub Copilot", "JavaScript"],
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      ],
    },
    {
      title: "D&N Craft Project",
      description:
        "Designed and developed a modern, responsive website for D&N Craft, an interior design company. Showcased portfolio and services using React.",
      technologies: ["React", "GitHub Copilot", "JavaScript"],
      link: "https://www.dncraft.in/",
      images: [
        "public/ASSET TELEMATICS4.jpg",
        "public/VALUE CREED3.png",
        "public/meslova3.jpg",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
