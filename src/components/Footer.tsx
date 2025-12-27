import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* SEO / Sitemap Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Thirupathi Padidepu",
            url: "https://thirupathipadidepu.in",
            jobTitle: "Full Stack Developer",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressLocality: "Hyderabad",
            },
            sameAs: ["https://github.com/", "https://linkedin.com/"],
          }),
        }}
      />

      <footer className="relative bg-gray-900 text-gray-400 pt-12 pb-28  py-12">
        <div className="container mx-auto px-4">
          {/* TOP SECTION */}
          <div className="grid md:grid-cols-3 gap-10 border-b border-gray-800 pb-8">
            {/* BRAND */}
            <div>
              <h3 className="text-white text-lg font-semibold">
                Thirupathi Padidepu
              </h3>

              <p className="text-sm mt-2 max-w-sm">
                Building scalable web apps, SaaS platforms, and AI-driven
                solutions for startups and businesses.
              </p>

              {/* Availability */}
              <div
                className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full
                bg-green-500/10 text-green-400 text-xs"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for Freelance Projects
              </div>

              {/* Location Trust */}
              <p className="text-xs mt-3 text-gray-500">
                🇮🇳 India · 🌍 Remote Worldwide
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-white font-medium mb-3">Sitemap</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="text-white font-medium mb-3">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:thirupathiraopadidepu@gmail.com"
                  className="hover:text-white transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 mt-6 gap-4">
            <p>
              © {new Date().getFullYear()} Thirupathi Padidepu. All rights
              reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white
                transition"
            >
              <ArrowUp className="w-4 h-4 justify-center" />
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
