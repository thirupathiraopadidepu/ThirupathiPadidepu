import React, { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= TYPES ================= */
interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  link?: string;
  status: "live" | "ongoing";
}

/* ================= PROJECT CARD ================= */
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
    <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300">
      {/* STATUS BADGE */}
      <span
        className={`absolute top-3 right-3 z-20 text-xs font-semibold px-3 py-1.5 rounded-full
  backdrop-blur-md shadow-lg ring-1
  ${
    project.status === "live"
      ? "bg-green-600/90 text-white ring-green-300"
      : "bg-yellow-500/90 text-white ring-yellow-300"
  }`}
      >
        {project.status === "live" ? "Live" : "Ongoing"}
      </span>

      {/* IMAGE SLIDER */}
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
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={() =>
                setCurrentImage((prev) => (prev + 1) % project.images.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* CONTENT */}
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      <p className={`text-gray-600 mb-4 ${isExpanded ? "" : "line-clamp-3"}`}>
        {project.description}
      </p>

      {/* TECH STACK */}
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

      {/* ACTIONS */}
      <div className="flex justify-between items-center">
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
    </div>
  );
};

/* ================= PROJECTS SECTION ================= */
const Projects = () => {
  const [filter, setFilter] = useState<"all" | "live" | "ongoing">("all");

  const projects: Project[] = [
    {
      title: "BT Labels Project",
      description:
        "Led the development of a comprehensive library services application, implementing key features and resolving critical issues. Utilized Angular and .NET to create a robust and user-friendly interface for managing library resources and services.",
      technologies: ["Angular", ".NET", "C#", "SQL Server"],
      images: [
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60",
      ],
      status: "live",
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
      status: "live",
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
      status: "live",
    },
    {
      title: "D&N Craft Project",
      description:
        "Designed and developed a modern, responsive website for D&N Craft, an interior design company. Showcased portfolio and services using React.",
      technologies: ["React", "GitHub Copilot", "JavaScript"],
      link: "https://www.dncraft.in/",
      images: ["/ASSET TELEMATICS4.jpg", "/VALUE CREED3.png", "/meslova3.jpg"],
      status: "live",
    },
    {
      title: "SV Industries",
      description:
        "Designed and developed a modern, responsive website for SV Industries, a leading fan manufacturer in India. Showcased product categories and dealership opportunities using React and Vercel deployment.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Vercel", "SEO"],
      link: "https://www.svcoolingfans.com",
      images: ["/ef.jpeg", "/pcf1.jpg", "/pcf3.avif", "/sf.jpeg", "/wf.jpeg"],
      status: "live",
    },
    {
      title: "Spacewave – Premium Commercial Spaces",
      description:
        "Designed and developed a high-conversion real estate website for Spacewave, focused on premium commercial spaces. Implemented enquiry forms, WhatsApp and call CTAs, countdown-based offers, and a responsive UI to drive qualified leads and customer engagement.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Lead Generation",
        "UI/UX",
        "SEO",
      ],
      link: "https://www.spacewave.in/",
      images: [
        "/spacewave-1.jpg",
        "/spacewave-2.avif",
        "/spacewave-3.avif",
        "/spacewave-4.bmp",
      ],
      status: "live",
    },
    {
      title: "Vistora Marketing Solutions – Digital Marketing",
      description:
        "Working with Vistora Marketing Solutions, a digital marketing company, on multiple client websites—primarily in the healthcare domain. Responsible for developing, maintaining, and optimizing hospital and business websites, including UI updates, performance improvements, SEO-friendly structures, and ongoing support.",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Website Maintenance",
        "Digital Marketing",
        "Healthcare Websites",
        "SEO",
      ],
      images: [
        "/vistora/aboutimg.png",
        "/vistora/clientimg.jpg",
        "/vistora/cutomers.jpg",
        "/vistora/Dm.png",
        "/vistora/dm1.webp",
        "/vistora/SEO.png",
      ],
      status: "ongoing",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Projects
        </h2>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "live", "ongoing"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item as any)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  filter === item
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border hover:bg-blue-50"
                }`}
            >
              {item === "all" && "All Projects"}
              {item === "live" && "Live Projects"}
              {item === "ongoing" && "Ongoing"}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
