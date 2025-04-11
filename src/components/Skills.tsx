import React from "react";
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
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "React", icon: Code2, category: "Frontend" },
    { name: "Angular", icon: Globe, category: "Frontend" },
    { name: ".NET", icon: Box, category: "Backend" },
    { name: "C#", icon: Terminal, category: "Backend" },
    { name: "SQL Server", icon: Database, category: "Database" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Azure", icon: Cloud, category: "Cloud" },
    { name: "Azure functions", icon: Cloud, category: "Cloud" },
    { name: "Git", icon: Git, category: "Tools" },
    { name: "VS Code", icon: Monitor, category: "Tools" },
    { name: "ASP.NET", icon: Server, category: "Backend" },
    { name: "HTML/CSS", icon: LayoutGrid, category: "Frontend" },
    { name: "JavaScript", icon: Cpu, category: "Frontend" },
    { name: "Bootstrap", icon: Layers, category: "Frontend" },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Skills
        </h2>

        <div className="grid gap-8">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
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

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
