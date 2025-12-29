import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const ServicesPage: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white px-6 py-20">
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          Web, SaaS & AI Development Services | Freelance React & .NET Developer
        </title>
        <meta
          name="description"
          content="Freelance Web Developer in India offering React, ASP.NET, SaaS, AI automation, and website development services. Serving clients worldwide with scalable, SEO-friendly solutions."
        />
        <meta
          name="keywords"
          content="Freelance Web Developer India, React Developer, ASP.NET Developer, SaaS Developer, AI Web Development, Website Development Services, Remote Developer"
        />
        <link
          rel="canonical"
          href="https://www.thirupathipadidepu.in/services"
        />
      </Helmet>

      {/* ================= BREADCRUMB ================= */}
      <div className="mb-10 text-gray-300 text-sm">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-blue-400">Services</span>
      </div>

      {/* ================= HERO ================= */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-400">
        Web, SaaS & AI Development Services
      </h1>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        I help startups, founders, and businesses build fast, scalable, and
        conversion-focused websites, SaaS platforms, and AI-powered applications
        using modern technologies like <strong>React</strong> and{" "}
        <strong>ASP.NET</strong>.
      </p>

      {/* ================= TRUST ================= */}
      <div className="text-center text-sm text-gray-400 mb-14">
        🇮🇳 Based in India • 🌍 Remote Worldwide • 💼 Freelance & Contract
      </div>

      {/* ================= IDEAL FOR ================= */}
      <div className="max-w-4xl mx-auto mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {["Startups", "Businesses", "Founders", "Personal Brands"].map(
          (item) => (
            <div
              key={item}
              className="bg-gray-800/60 border border-gray-700 rounded-xl py-4 text-gray-200"
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[
          {
            title: "Website Development",
            desc: "SEO-friendly, fast, and professional websites that convert visitors into customers.",
            items: [
              "Business & Corporate Websites",
              "Portfolio & Personal Branding",
              "Mobile-Responsive Design",
              "SEO-Optimized Structure",
            ],
          },
          {
            title: "Web Applications & SaaS",
            desc: "Scalable web apps and SaaS platforms built for long-term growth.",
            items: [
              "React & ASP.NET Applications",
              "Admin Dashboards",
              "Authentication & Role Management",
              "Cloud-Ready Architecture",
            ],
          },
          {
            title: "AI & Automation Solutions",
            desc: "AI-powered tools that automate workflows and improve productivity.",
            items: [
              "AI Chatbots",
              "Business Automation",
              "Generative AI Integrations",
              "Custom AI Tools",
            ],
          },
          {
            title: "UI / UX Improvements",
            desc: "Modern, clean UI with user-focused UX for higher engagement.",
            items: [
              "Website Redesign",
              "UX Optimization",
              "Conversion-Focused UI",
              "Performance Improvements",
            ],
          },
          {
            title: "Branding & Graphics",
            desc: "Strong visual identity that builds trust and recognition.",
            items: [
              "Logo Design",
              "Social Media Creatives",
              "Marketing Banners",
              "Brand Templates",
            ],
          },
          {
            title: "Maintenance & Support",
            desc: "Reliable long-term support to keep your product secure and updated.",
            items: [
              "Bug Fixes",
              "Performance Optimization",
              "Security Updates",
              "Ongoing Support",
            ],
          },
        ].map((service, index) => (
          <div
            key={index}
            className="
              p-6 bg-gray-800/60 rounded-2xl shadow-lg border border-gray-700
              hover:border-blue-400 hover:shadow-blue-500/20
              transition-all duration-300 transform hover:-translate-y-2
            "
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-300">
              {service.title}
            </h2>

            <p className="text-gray-400 text-sm mb-4">{service.desc}</p>

            <ul className="space-y-2 text-gray-300 text-sm">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ================= WHY CHOOSE ================= */}
      <div className="mt-24 py-16 px-6 bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-blue-900/60 rounded-3xl border border-blue-700/40">
        <h2 className="text-3xl font-bold text-center text-blue-300 mb-10">
          Why Choose Me?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Fast & Reliable Delivery",
            "Modern Tech + AI Expertise",
            "Clean & Scalable Code",
            "Client-First Communication",
            "Affordable Pricing",
            "Long-Term Support",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">🚀</span>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MAIN CTA ================= */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-4">
          Interested in a similar project?
        </h3>
        <p className="text-gray-400 mb-6">
          Let’s discuss your idea and build something impactful together.
        </p>

        <Link
          to="/#contact"
          className="
            inline-flex items-center gap-2 px-10 py-4 
            bg-blue-500 rounded-full font-semibold text-lg
            hover:bg-blue-600 transition shadow-xl
          "
        >
          Start Your Project <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* ================= WHATSAPP CTA ================= */}
      <a
        href="https://wa.me/917036499748?text=Hello!%20I%20want%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 left-6 bg-green-500 p-4 rounded-full shadow-lg
          hover:bg-green-600 transition transform hover:scale-110 z-50
        "
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} color="white" />
      </a>
    </section>
  );
};

export default ServicesPage;
