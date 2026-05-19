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
          Full-Stack Web & SaaS Development Services | React, Angular, .NET
        </title>
        <meta
          name="description"
          content="Freelance Full-Stack Developer with 3+ years experience offering React, Angular, .NET, Node.js, SaaS, AI automation, cloud deployment, and website development services."
        />
        <meta
          name="keywords"
          content="Freelance Full Stack Developer India, React Developer, Angular Developer, ASP.NET Core Developer, SaaS Developer, AI Web Development, Azure AWS Developer"
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
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
        Web, SaaS & AI Development Services
      </h1>

      <p className="text-center text-blue-300 font-medium mb-6">
        👨‍💻 3+ Years Experience • Full-Stack Developer
      </p>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        I help startups, founders, and businesses build fast, scalable, and
        secure web applications using modern technologies like{" "}
        <strong>React</strong>, <strong>Angular</strong>, <strong>.NET</strong>,
        and <strong>Node.js</strong>.
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
          ),
        )}
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[
          {
            title: "Website Development",
            desc: "Professional, SEO-friendly websites built for performance and conversions.",
            items: [
              "Business & Corporate Websites",
              "Portfolio & Personal Branding",
              "Responsive UI",
              "SEO-Optimized Structure",
            ],
          },
          {
            title: "Web Applications & SaaS",
            desc: "Scalable SaaS platforms and custom web applications.",
            items: [
              "React / Angular Frontend",
              ".NET / Node.js Backend",
              "Authentication & Roles",
              "Admin Dashboards",
            ],
          },
          {
            title: "Backend & API Development",
            desc: "Robust, secure, and scalable backend solutions.",
            items: [
              "ASP.NET Core APIs",
              "Node.js APIs",
              "SQL Server & MongoDB",
              "Third-Party Integrations",
            ],
          },
          {
            title: "AI & Automation",
            desc: "AI-powered tools to automate workflows and boost productivity.",
            items: [
              "AI Chatbots",
              "Business Automation",
              "Generative AI Integration",
              "Custom AI Tools",
            ],
          },
          {
            title: "UI / UX Improvements",
            desc: "Modern UI with performance-focused UX improvements.",
            items: [
              "Website Redesign",
              "UX Optimization",
              "Performance Improvements",
              "Conversion-Focused UI",
            ],
          },
          {
            title: "Cloud, Maintenance & Support",
            desc: "Deployment, monitoring, and long-term support.",
            items: [
              "Azure & AWS Deployment",
              "Bug Fixing",
              "Performance Optimization",
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

      {/* ================= SERVICE PACKAGES ================= */}
      <div className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-300 mb-6">
          Service Packages & Pricing
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Transparent pricing with flexibility for custom requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* BASIC */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              🚀 Basic Web App
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>✔ React / Angular UI</li>
              <li>✔ Responsive Design</li>
              <li>✔ API Integration</li>
              <li>✔ Basic CRUD</li>
            </ul>
            <p className="text-lg font-semibold mb-4">₹5,000 – ₹8,000</p>
            <Link to="/#contact" className="text-blue-400 hover:underline">
              Enquire Now →
            </Link>
          </div>

          {/* POPULAR */}
          <div className="bg-blue-900/40 border-2 border-blue-400 rounded-2xl p-6 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 px-3 py-1 text-xs rounded-full">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              ⚡ Business / Admin Dashboard
            </h3>
            <ul className="space-y-2 text-sm text-gray-200 mb-6">
              <li>✔ React / Angular</li>
              <li>✔ .NET / Node Backend</li>
              <li>✔ SQL / MongoDB</li>
              <li>✔ Auth & Admin Panel</li>
            </ul>
            <p className="text-lg font-semibold mb-4">₹15,000 – ₹30,000</p>
            <Link to="/#contact" className="text-blue-300 hover:underline">
              Start Project →
            </Link>
          </div>

          {/* BUG FIX */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              🛠 Bug Fixing
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>✔ Frontend Issues</li>
              <li>✔ Backend/API Bugs</li>
              <li>✔ Performance Fixes</li>
            </ul>
            <p className="text-lg font-semibold mb-4">₹500 – ₹2,000 / issue</p>
            <Link to="/#contact" className="text-blue-400 hover:underline">
              Fix My Bug →
            </Link>
          </div>

          {/* MONTHLY */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              🔁 Monthly Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>✔ Bug Fixes</li>
              <li>✔ Enhancements</li>
              <li>✔ Priority Support</li>
            </ul>
            <p className="text-lg font-semibold mb-4">
              ₹5,000 – ₹15,000 / month
            </p>
            <Link to="/#contact" className="text-blue-400 hover:underline">
              Get Support →
            </Link>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to start your project?
        </h3>
        <p className="text-gray-400 mb-6">
          Let’s discuss your idea and build something impactful.
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

      {/* ================= CONTACT INFORMATION ================= */}
      <div className="mt-20 border-b border-gray-700 pb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-400 mb-6">
          Get in touch with us for any questions, project inquiries, or support
          requests.
        </p>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>
            Phone:{" "}
            <a
              href="tel:917036499748"
              className="text-blue-400 hover:underline"
            >
              917036499748
            </a>
          </li>
          <li>
            Email:{" "}
            <a
              href="mailto:contact@tp.com"
              className="text-blue-400 hover:underline"
            >
              thirupathiraopadidepu@gamail.com
            </a>
          </li>
        </ul>
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
