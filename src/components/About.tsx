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
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Avatar Animation Section */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-float">
                <User className="w-24 h-24 text-white" />
              </div>

              {[Layout, Server, Database, Cloud, Code2, Brain].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="absolute w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center animate-orbit"
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

              <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="md:col-span-8 space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Hello! I’m <strong>Thirupathi Padidepu</strong> (also known as{" "}
              <strong>Thirupathirao Padidepu</strong>), a passionate and
              experienced <strong>Full Stack Developer</strong> specializing in{" "}
              <strong>.NET, React, and Angular</strong> technologies. With over
              2.8 years of hands-on development experience, I’ve built and
              enhanced dynamic, user-friendly, and high-performance web
              applications.
            </p>
            <p>
              I provide <strong>freelance web development services</strong> and
              collaborate remotely with startups, tech teams, and individual
              clients. Whether you need a custom website, portfolio, dashboard,
              or business application, I deliver clean code, modern UI, and
              scalable solutions.
            </p>
            <p>
              <strong>Technologies I work with include:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>.NET Core & ASP.NET</li>
              <li>React.js & Next.js</li>
              <li>Angular</li>
              <li>JavaScript, HTML, CSS</li>
              <li>SQL Server, MongoDB</li>
            </ul>
            <p>
              If you're searching for a{" "}
              <strong>.NET Full Stack Developer</strong>,{" "}
              <strong>React Developer</strong>, or a trusted{" "}
              <strong>freelancer from India</strong>, let's connect!
            </p>
            <p>
              📧 <strong>Email:</strong> thirupathiraopadidepu@gmail.com <br />
              🔗{" "}
              <a
                href="https://linkedin.com/in/thirupathirao-padidepu-40298b213"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>{" "}
              <br />
              💼{" "}
              <a
                href="https://thirupathipadidepu.in"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit My Portfolio
              </a>
            </p>

            {/* Download Resume Button */}
            <div className="mt-4">
              <a
                href="/Thiru Resume.pdf"
                download
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
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
