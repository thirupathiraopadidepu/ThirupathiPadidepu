import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white px-6 py-20">
      {/* 🌟 Breadcrumb */}
      <div className="mb-10 text-gray-300 text-sm">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-blue-400">Services</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">
        TP Freelance Services
      </h1>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
        We build everything you need for your online presence — Professional,
        Affordable, and High Quality Solutions.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Cards Data */}
        {[
          {
            title: "Logo & Branding",
            items: [
              "TP Style Logos",
              "Business Logos",
              "Personal Logo Design",
              "Social Media Branding Kits",
            ],
          },
          {
            title: "Web Development",
            items: [
              "Portfolio Websites",
              "Business Websites",
              "Corporate Websites",
              "Blogs & News Sites",
              "E-commerce Websites",
              "Custom Web Apps (React / .NET / AI)",
            ],
          },
          {
            title: "SPA / SaaS Apps",
            items: [
              "AI Notes Summarizer",
              "ATS Resume Builder",
              "Background Remover",
              "AI Caption Generator",
              "Habit & Budget Apps",
              "Invoice Generator",
              "Business Chatbots",
              "Kids Homework Helper",
            ],
          },
          {
            title: "Graphics & Creative",
            items: [
              "Posters & Banners",
              "Business Cards",
              "Social Media Posters",
              "Quote Templates",
            ],
          },
        ].map((card, index) => (
          <div
            key={index}
            className="
              p-6 bg-gray-800/60 rounded-xl shadow-lg border border-gray-700
              hover:border-blue-400 hover:shadow-blue-500/20
              transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03]
            "
          >
            <h2 className="text-xl font-semibold mb-4 text-blue-300">
              {card.title}
            </h2>

            <ul className="space-y-2 text-gray-300 text-sm">
              {card.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ⭐ WHY CHOOSE US – Special Section */}
      <div
        className="
        mt-20 py-16 px-6 
        bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-blue-900/60 
        rounded-2xl shadow-xl border border-blue-700/40
        backdrop-blur-md
      "
      >
        <h2 className="text-3xl font-bold text-center text-blue-300 mb-10">
          Why Choose TP Freelance Services?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "⚡", text: "Fast & Reliable Delivery" },
            { icon: "💰", text: "Affordable Pricing for Everyone" },
            { icon: "🛠️", text: "Latest Technologies With AI" },
            { icon: "🎨", text: "Fully Custom Designs" },
            { icon: "🤝", text: "Friendly & Dedicated Support" },
            { icon: "🚀", text: "Scalable & High Performance Solutions" },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3 group">
              <span className="text-blue-400 text-2xl group-hover:scale-125 transition">
                {item.icon}
              </span>
              <p className="text-gray-300 text-lg group-hover:text-white transition">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="tel:7036499748"
          className="px-8 py-3 bg-blue-500 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Contact Us: 7036499748
        </a>
      </div>

      {/* ⭐ Floating WhatsApp Button */}
      <a
        href="https://wa.me/917036499748?text=Hello!%20I%20want%20to%20know%20about%20your%20services."
        target="_blank"
        className="
          fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg 
          hover:bg-green-600 transition transform hover:scale-110 z-50
        "
      >
        <MessageCircle size={28} color="white" />
      </a>
    </div>
  );
};

export default ServicesPage;
