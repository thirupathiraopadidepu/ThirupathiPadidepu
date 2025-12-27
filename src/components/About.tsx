import React from "react";
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
                )
              )}

              <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            </div>
          </div>

          {/* ================= CONTENT (IMPROVED) ================= */}
          {/* ================= CONTENT ================= */}
          <div className="md:col-span-8 space-y-6 text-gray-700 dark:text-gray-300">
            {/* Intro */}
            <p className="text-lg">
              I’m <strong>Thirupathi Padidepu</strong>, a Full Stack Engineer
              helping <strong>startups and businesses</strong> build{" "}
              <strong>
                scalable, high-performance web & AI-driven solutions
              </strong>
              .
            </p>

            <p>
              With <strong>3+ years of hands-on experience</strong>, I
              specialize in turning ideas into production-ready systems —
              focusing on{" "}
              <strong>
                clean architecture, performance, and long-term scalability
              </strong>
              .
            </p>

            {/* What I Help Build */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                What I Help You Build
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Scalable SaaS platforms & dashboards",
                  "High-conversion business websites",
                  "AI-powered tools & automation systems",
                  "Secure backend APIs & microservices",
                  "Performance-optimized frontends",
                  "Enterprise & startup-grade applications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How I Work */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                How I Work
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Understand business goals before writing code</li>
                <li>Design scalable architecture from day one</li>
                <li>Communicate clearly with regular updates</li>
                <li>Deliver clean, maintainable, documented code</li>
              </ul>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm">
              ✔ 15+ real-world projects delivered <br />
              ✔ Experience across SaaS, healthcare & real estate <br />✔ Trusted
              by startups & agencies
            </div>

            {/* Contact Info */}
            <p className="text-sm">
              📧 <strong>Email:</strong> thirupathiraopadidepu@gmail.com <br />
              🔗{" "}
              <a
                href="https://linkedin.com/in/thirupathirao-padidepu-40298b213"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Connect on LinkedIn
              </a>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg 
                           hover:bg-blue-700 transition shadow"
              >
                Let’s Work Together
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-blue-500 text-blue-500 
                           rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                View My Projects
              </a>

              <a
                href="/THIRUPATHI PADIDEPU - .NET.pdf"
                download
                className="px-6 py-3 flex items-center gap-2 text-gray-600 
                           dark:text-gray-300 hover:text-blue-500 transition"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* SEO (hidden) */}
            <span className="sr-only">
              Full Stack Developer in India specializing in React, ASP.NET,
              SaaS, and AI-powered web applications.
            </span>
          </div>
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
