import React from "react";
import CircularGallery from "./Components/CircularGallery/CircularGallery";

const projects = [
  {
    imageUrl: "/ASSET TELEMATICS4.jpg",
    title: "D&N Craft Project",
    description: "Responsive portfolio website for interior design company",
  },
  {
    imageUrl: "/ef.jpeg",
    title: "SV Industries",
    description: "Modern website for Indian fan manufacturing brand",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
    title: "Gen AI ChatGPT",
    description: "Interactive generative AI chatbot platform",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
    title: "BT Labels Project",
    description: "Comprehensive library services system",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    title: "Internal Tools",
    description: "Internal GitHub Copilot tools and workflows",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>

        <CircularGallery
          items={projects.map((project) => ({
            image: project.imageUrl,
            text: project.title,
          }))}
        />
      </div>
    </section>
  );
};

export default Projects;
