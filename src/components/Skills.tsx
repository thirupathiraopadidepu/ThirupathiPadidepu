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
  level: "Core" | "Advanced" | "Working";
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const skills: Skill[] = [
    /* ================= UI & FRONTEND ================= */
    { name: "React", icon: Code2, category: "UI & Frontend", level: "Core" },
    { name: "JavaScript", icon: Cpu, category: "UI & Frontend", level: "Core" },
    {
      name: "HTML",
      icon: LayoutGrid,
      category: "UI & Frontend",
      level: "Core",
    },
    { name: "CSS", icon: LayoutGrid, category: "UI & Frontend", level: "Core" },
    {
      name: "Angular",
      icon: Globe,
      category: "UI & Frontend",
      level: "Advanced",
    },
    {
      name: "Bootstrap",
      icon: Layers,
      category: "UI & Frontend",
      level: "Advanced",
    },

    /* ================= BACKEND & APIs ================= */
    { name: ".NET", icon: Box, category: "Backend & APIs", level: "Core" },
    {
      name: "ASP.NET",
      icon: Server,
      category: "Backend & APIs",
      level: "Core",
    },
    { name: "C#", icon: Terminal, category: "Backend & APIs", level: "Core" },
    { name: "MVC", icon: Box, category: "Backend & APIs", level: "Advanced" },
    {
      name: "Node.js",
      icon: Server,
      category: "Backend & APIs",
      level: "Advanced",
    },
    {
      name: "Java",
      icon: Terminal,
      category: "Backend & APIs",
      level: "Working",
    },

    /* ================= DATABASES ================= */
    {
      name: "SQL Server",
      icon: Database,
      category: "Databases",
      level: "Core",
    },
    {
      name: "MongoDB",
      icon: Database,
      category: "Databases",
      level: "Advanced",
    },

    /* ================= CLOUD & DEVOPS ================= */
    { name: "Azure", icon: Cloud, category: "Cloud & DevOps", level: "Core" },
    { name: "AWS", icon: Cloud, category: "Cloud & DevOps", level: "Working" },

    /* ================= DEV TOOLS ================= */
    { name: "Git", icon: Git, category: "Dev Tools", level: "Core" },
    { name: "GitHub", icon: Git, category: "Dev Tools", level: "Core" },
    { name: "VS Code", icon: Monitor, category: "Dev Tools", level: "Core" },
    {
      name: "Visual Studio",
      icon: Monitor,
      category: "Dev Tools",
      level: "Advanced",
    },
    { name: "Jira", icon: Monitor, category: "Dev Tools", level: "Advanced" },

    /* ================= AI & AUTOMATION ================= */
    {
      name: "GitHub Copilot",
      icon: AiIcon,
      category: "AI & Automation",
      level: "Core",
    },
    {
      name: "ChatGPT",
      icon: AiIcon,
      category: "AI & Automation",
      level: "Core",
    },
    {
      name: "Tabnine",
      icon: AiIcon,
      category: "AI & Automation",
      level: "Working",
    },
    {
      name: "Codium",
      icon: AiIcon,
      category: "AI & Automation",
      level: "Working",
    },
    {
      name: "Image Generation AI",
      icon: AiIcon,
      category: "AI & Automation",
      level: "Working",
    },
    {
      name: "Text-to-Video AI",
      icon: AiIcon,
      category: "AI & Automation",
      level: "Working",
    },
  ];

  const categories = [
    "All",
    "UI & Frontend",
    "Backend & APIs",
    "Databases",
    "Cloud & DevOps",
    "Dev Tools",
    "AI & Automation",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Skills & Expertise
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          A modern full-stack skillset focused on building scalable web
          applications, SaaS platforms, and AI-powered solutions for real
          business needs.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm transition-all
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-blue-500 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-gray-800/60 rounded-xl p-4 
                           hover:bg-gray-800 transition-all duration-300 
                           transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-8 h-8 text-blue-400 mb-2 group-hover:text-blue-300" />
                  <span className="text-gray-300 text-sm font-medium">
                    {skill.name}
                  </span>

                  {/* Skill Level Badge */}
                  <span
                    className={`mt-2 text-xs px-2 py-0.5 rounded-full
                      ${
                        skill.level === "Core"
                          ? "bg-green-500/20 text-green-400"
                          : skill.level === "Advanced"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-gray-500/20 text-gray-400"
                      }`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills → Projects CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-5">
            These skills power real-world projects, products, and business
            solutions.
          </p>
          <a
            href="#projects"
            className="inline-block px-10 py-4 bg-blue-600 text-white 
                       rounded-full hover:bg-blue-700 transition-all"
          >
            See Skills in Action →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
