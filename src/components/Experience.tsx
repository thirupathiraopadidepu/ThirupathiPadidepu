import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />

      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-400">
            {/* ================= FREELANCE EXPERIENCE ================= */}
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] bg-gray-800 p-2 rounded-full border-2 border-green-400">
                <Briefcase className="w-6 h-6 text-green-400" />
              </div>

              <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-900/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    Freelance Full Stack Developer
                  </h3>

                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>February 2025 – Present</span>
                  </div>

                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>

                <div className="space-y-3 text-gray-300">
                  <p>
                    Working independently with startups and businesses to build
                    <strong className="text-white">
                      {" "}
                      scalable web applications, business websites, and
                      AI-driven tools
                    </strong>
                    .
                  </p>

                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Developed and maintained React-based websites for real
                      estate, manufacturing, and healthcare domains
                    </li>
                    <li>
                      Built high-conversion landing pages with lead generation,
                      WhatsApp & call integrations
                    </li>
                    <li>
                      Provided ongoing website maintenance, performance
                      optimization, and SEO improvements
                    </li>
                    <li>
                      Collaborated remotely with digital marketing teams and
                      business owners
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================= WINWIRE EXPERIENCE ================= */}
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] bg-gray-800 p-2 rounded-full border-2 border-blue-400">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    Software Design Engineer
                  </h3>

                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>August 2022 – January 2025</span>
                  </div>

                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>WinWire Technologies, Hyderabad</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "BT Labels Project",
                      description:
                        "Worked on a library services platform, handling feature enhancements, bug fixes, and performance improvements using Angular and .NET.",
                    },
                    {
                      title: "Gen AI ChatGPT Project",
                      description:
                        "Developed UI enhancements and resolved critical issues in a generative AI chat application using React, while collaborating directly with clients.",
                    },
                    {
                      title: "Internal Engineering Initiatives",
                      description:
                        "Contributed to internal tools, Bootstrap framework improvements, and GitHub Copilot analysis to improve development efficiency.",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <h4 className="text-blue-400 font-medium mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* ======================================================= */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
