import React, { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= TYPES ================= */
interface Project {
  title: string;
  role?: string;
  description: string;
  outcome?: string;
  technologies: string[];
  images: string[];
  link?: string;
  status: "live" | "ongoing";
}

/* ================= PROJECT CARD ================= */
const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (project.images.length > 1 && !paused) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [project.images.length, paused]);

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] duration-300">
      {/* STATUS BADGE */}
      <span
        className={`absolute top-3 right-3 z-20 text-xs font-semibold px-3 py-1.5 rounded-full
        ${
          project.status === "live"
            ? "bg-green-600 text-white"
            : "bg-yellow-500 text-white"
        }`}
      >
        {project.status === "live" ? "Live" : "Ongoing"}
      </span>

      {/* IMAGE SLIDER */}
      <div
        className="relative aspect-video mb-4 overflow-hidden rounded-lg group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {project.images.map((img, index) => (
            <a
              key={index}
              href={project.status === "live" ? project.link : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-full relative"
            >
              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {project.status === "live" && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
                  Live • Click to Visit
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImage(
                  (prev) =>
                    (prev - 1 + project.images.length) % project.images.length
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentImage((prev) => (prev + 1) % project.images.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* DOTS */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {project.images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentImage ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <h3 className="text-xl font-semibold">{project.title}</h3>

      {project.role && (
        <p className="text-sm text-gray-500 mb-2">
          <strong>Role:</strong> {project.role}
        </p>
      )}

      <p className={`text-gray-600 mb-3 ${isExpanded ? "" : "line-clamp-3"}`}>
        {project.description}
      </p>

      {project.outcome && (
        <p className="text-sm bg-green-50 text-green-700 p-2 rounded mb-3">
          ✅ <strong>Result:</strong> {project.outcome}
        </p>
      )}

      {/* TECH */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 text-sm flex items-center gap-1"
        >
          {isExpanded ? "Show less" : "Learn more"}
          <ExternalLink className="w-4 h-4" />
        </button>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm flex items-center gap-1"
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
      role: "Angular & .NET Developer",
      description:
        "Library services application with feature enhancements and bug fixes using Angular and .NET.",
      outcome:
        "Result: Increased system stability and improved end-user experience by resolving critical issues and enhancing core features.",
      technologies: ["Angular", ".NET", "C#", "SQL Server"],
      images: [
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
      ],
      status: "live",
    },
    {
      title: "Gen AI ChatGPT Project",
      role: "Frontend Developer",
      description:
        "UI improvements and issue resolution for a generative AI chat application.",
      outcome:
        "Enhanced usability and client satisfaction through faster UI workflows.",
      technologies: ["React", "TypeScript", "Azure", "AI"],
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      ],
      status: "live",
    },
    {
      title: "Internal Tools Development",
      role: "Full Stack Developer",
      description:
        "Contributed to internal initiatives including Bootstrap development and GitHub Copilot analysis to improve team productivity.",
      outcome:
        "Result: Improved developer efficiency and reduced repetitive coding tasks through optimized internal tools and workflows.",
      technologies: ["Bootstrap", "GitHub Copilot", "JavaScript"],
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      ],
      status: "live",
    },

    {
      title: "D&N Craft Project",
      role: "Frontend Developer",
      description:
        "Responsive website for an interior design company showcasing portfolio and services.",
      outcome:
        "Result: Strengthened online brand presence and improved client enquiries through a modern, mobile-friendly UI.",
      technologies: ["React", "GitHub Copilot", "JavaScript"],
      link: "https://www.dncraft.in/",
      images: ["/ASSET TELEMATICS4.jpg", "/VALUE CREED3.png", "/meslova3.jpg"],
      status: "live",
    },

    {
      title: "Spacewave – Premium Commercial Spaces",
      role: "Frontend Lead",
      description:
        "High-conversion real estate website with enquiry forms, WhatsApp CTAs, countdown offers, and responsive UI.",
      outcome:
        "Increased inbound enquiries and lead engagement through optimized CTAs and UX.",
      technologies: ["React", "TypeScript", "Tailwind", "SEO"],
      link: "https://www.spacewave.in/",
      images: ["/spacewave-1.jpg", "/spacewave-2.avif"],
      status: "live",
    },
    {
      title: "SV Industries",
      role: "Full Stack Developer",
      description:
        "Modern product-focused website showcasing fans, categories, and dealership opportunities.",
      outcome: "Improved brand credibility and boosted dealership enquiries.",
      technologies: ["React", "Tailwind", "Vercel", "SEO"],
      link: "https://www.svcoolingfans.com",
      images: ["/ef.jpeg", "/pcf1.jpg"],
      status: "live",
    },
    {
      title: "Vistora Marketing Solutions",
      role: "Frontend Developer",
      description:
        "Ongoing development and maintenance of healthcare and business websites.",
      technologies: ["React", "HTML", "CSS", "SEO"],
      images: ["/vistora/aboutimg.png"],
      status: "ongoing",
    },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "live", "ongoing"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-5 py-2 rounded-full text-sm ${
                filter === f ? "bg-blue-600 text-white" : "bg-white border"
              }`}
            >
              {f === "all" ? "All Projects" : f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Interested in a similar project?</p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700"
          >
            Let’s build something together →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
