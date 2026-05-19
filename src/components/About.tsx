import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Brain,
  Server,
  Cloud,
  User,
  Download,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* ================= AVATAR SECTION (UNCHANGED) ================= */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-float">
                <User className="w-24 h-24 text-white" />
              </div>

              {[Layout, Server, Database, Cloud, Code2, Brain].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="absolute w-12 h-12 bg-gray-100 dark:bg-gray-800 
                               rounded-full flex items-center justify-center animate-orbit"
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      left: `${Math.cos(index * (Math.PI / 3)) * 100 + 92}px`,
                      top: `${Math.sin(index * (Math.PI / 3)) * 100 + 92}px`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  </div>
                ),
              )}

              <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            </div>
          </div>
          {/* ================= CONTENT ================= */}
          <motion.div
            className="md:col-span-8 space-y-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Intro */}
            <p className="text-lg leading-8">
              Senior Software Engineer & AI Engineer focused on building
              scalable web applications, AI-powered systems, and modern digital
              products. Experienced in React, ASP.NET, cloud technologies,
              Generative AI, and enterprise application development.
            </p>

            {/* Engineering Focus */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Engineering Focus
              </h3>

              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Scalable SaaS platforms & enterprise applications",
                  "AI-powered systems & automation workflows",
                  "Modern React & TypeScript frontend architectures",
                  "ASP.NET backend APIs & microservices",
                  "Generative AI integrations & intelligent assistants",
                  "Cloud-ready high-performance applications",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 bg-gray-100 dark:bg-gray-800/60 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-violet-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Approach */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Professional Approach
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Build scalable and maintainable software architectures</li>
                <li>Focus on performance, clean code, and user experience</li>
                <li>
                  Develop AI-enhanced workflows and modern engineering systems
                </li>
                <li>
                  Collaborate effectively across product and engineering teams
                </li>
                <li>Continuously explore emerging AI and cloud technologies</li>
              </ul>
            </div>

            {/* Experience Highlights */}
            <div
              className="bg-gradient-to-r from-violet-500/10 to-blue-500/10 
                  border border-violet-500/20 rounded-xl p-5 text-sm"
            >
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-white">4+</h4>
                  <p>Years Experience</p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">15+</h4>
                  <p>Projects Built</p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">
                    AI + Full Stack
                  </h4>
                  <p>Engineering Expertise</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2 text-sm">
              <p>
                📧 <strong>Email:</strong> thirupathiraopadidepu@gmail.com
              </p>

              <p>
                🔗{" "}
                <a
                  href="https://linkedin.com/in/thirupathirao-padidepu-40298b213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500 hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 
                 text-white rounded-lg hover:scale-105 transition-all shadow-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-violet-500 text-violet-400
                 rounded-lg hover:bg-violet-500 hover:text-white transition"
              >
                Contact
              </a>

              <a
                href="/THIRUPATHI PADIDEPU - .NET.pdf"
                download
                className="px-6 py-3 flex items-center gap-2 text-gray-600 
                 dark:text-gray-300 hover:text-violet-500 transition"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* SEO */}
            <span className="sr-only">
              Senior Software Engineer and AI Engineer specializing in React,
              ASP.NET, Generative AI, cloud technologies, scalable SaaS
              applications, and enterprise software systems.
            </span>
          </motion.div>{" "}
        </div>
      </div>

      {/* ================= KEYFRAMES (UNCHANGED) ================= */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
