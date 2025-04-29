import React, { useState } from "react";
import {
  LayoutGrid,
  Code2,
  Database,
  Cloud,
  Server,
  Globe,
  Cpu,
  Github as Git,
  Monitor,
  Terminal,
  Box,
  Layers,
  Cpu as AiIcon,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const skills: Skill[] = [
    // Frontend
    { name: "React", icon: Code2, category: "Frontend" },
    { name: "HTML", icon: LayoutGrid, category: "Frontend" },
    { name: "CSS", icon: LayoutGrid, category: "Frontend" },
    { name: "JavaScript", icon: Cpu, category: "Frontend" },
    { name: "Bootstrap", icon: Layers, category: "Frontend" },
    { name: "Angular", icon: Globe, category: "Frontend" },

    // Backend
    { name: ".NET", icon: Box, category: "Backend" },
    { name: "ASP.NET", icon: Server, category: "Backend" },
    { name: "MVC", icon: Box, category: "Backend" },
    { name: "C#", icon: Terminal, category: "Backend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Java", icon: Terminal, category: "Backend" },

    // Database
    { name: "SQL", icon: Database, category: "Database" },
    { name: "NoSQL", icon: Database, category: "Database" },

    // Cloud
    { name: "Azure", icon: Cloud, category: "Cloud" },
    { name: "AWS", icon: Cloud, category: "Cloud" },

    // Tools
    { name: "Git", icon: Git, category: "Tools" },
    { name: "GitHub", icon: Git, category: "Tools" },
    { name: "Jira", icon: Monitor, category: "Tools" },
    { name: "Visual Studio", icon: Monitor, category: "Tools" },
    { name: "VS Code", icon: Monitor, category: "Tools" },

    // AI Tools
    { name: "GitHub Copilot", icon: AiIcon, category: "AI" },
    { name: "ChatGPT", icon: AiIcon, category: "AI" },
    { name: "Codium", icon: AiIcon, category: "AI" },
    { name: "Tabnine", icon: AiIcon, category: "AI" },
    { name: "Image Generation AI", icon: AiIcon, category: "AI" },
    { name: "Text-to-Video Generation", icon: AiIcon, category: "AI" },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Cloud",
    "Tools",
    "AI",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Skills
        </h2>

        {/* Category Filter */}
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-400"
                } px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-400 hover:text-white`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="grid gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <span className="text-gray-400 group-hover:text-blue-400 text-sm transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
