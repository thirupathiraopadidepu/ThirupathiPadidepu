import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Thirupathi Padidepu",
            url: "https://thirupathipadidepu.in",
            jobTitle: "Senior Software Engineer & AI Engineer",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressLocality: "Hyderabad",
            },
            sameAs: [
              "https://github.com/thirupathiraopadidepu",
              "https://linkedin.com/in/thirupathirao-padidepu-40298b213",
            ],
          }),
        }}
      />

      <footer
        className="relative bg-black overflow-hidden
                   border-t border-white/10 pt-16 pb-28"
      >
        {/* Background Glow */}
        <div
          className="absolute inset-0
                     bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.15),transparent_35%)]"
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* TOP */}
          <div className="grid md:grid-cols-3 gap-12 pb-10 border-b border-white/10">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl
                             bg-gradient-to-br from-violet-600 to-blue-600
                             flex items-center justify-center
                             shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                >
                  <span className="text-white font-bold text-lg">TP</span>
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Thirupathi Padidepu
                  </h3>

                  <p className="text-sm text-violet-400">
                    Senior Software Engineer & AI Engineer
                  </p>
                </div>
              </div>

              <p className="text-gray-400 leading-7 max-w-sm">
                Building scalable web applications, AI-powered systems, and
                modern digital products using React, ASP.NET, cloud
                technologies, and Generative AI.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["React", "ASP.NET", "TypeScript", "AI Systems", "Cloud"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full
                               bg-white/5 border border-white/10
                               text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-white font-semibold mb-5">Navigation</h4>

              <ul className="space-y-3 text-sm">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Experience", "#experience"],
                  ["Projects", "#projects"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-violet-400 transition"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="text-white font-semibold mb-5">Connect</h4>

              <div className="flex gap-4 mb-6">
                <a
                  href="https://github.com/thirupathiraopadidepu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5
                             border border-white/10
                             hover:border-violet-500/50
                             hover:scale-105 transition-all"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://linkedin.com/in/thirupathirao-padidepu-40298b213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5
                             border border-white/10
                             hover:border-violet-500/50
                             hover:scale-105 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>

                <a
                  href="mailto:thirupathiraopadidepu@gmail.com"
                  className="p-4 rounded-2xl bg-white/5
                             border border-white/10
                             hover:border-violet-500/50
                             hover:scale-105 transition-all"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>

              {/* Status */}
              <div
                className="inline-flex items-center gap-2
                           px-4 py-2 rounded-full
                           bg-violet-500/10 border border-violet-500/20
                           text-violet-300 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Building AI-Powered Experiences
              </div>

              <p className="text-xs mt-4 text-gray-500">
                Hyderabad, India · Remote Worldwide
              </p>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="flex flex-col md:flex-row
                       items-center justify-between
                       gap-5 mt-8"
          >
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Thirupathi Padidepu. All rights
              reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2
                         px-5 py-3 rounded-full
                         bg-white/5 border border-white/10
                         text-gray-300
                         hover:bg-gradient-to-r
                         hover:from-violet-600
                         hover:to-blue-600
                         hover:text-white
                         hover:scale-105
                         transition-all"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
