import React from "react";
import { Award, ExternalLink, BadgeCheck } from "lucide-react";

/* ================= CERT CARD ================= */
const CertificationCard = ({
  title,
  issuer,
  date,
  category,
  relevance,
  link,
}: {
  title: string;
  issuer: string;
  date: string;
  category: string;
  relevance: string;
  link?: string;
}) => (
  <div className="group relative bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-[1.03]">
    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="bg-blue-400/10 p-3 rounded-lg group-hover:bg-blue-400/20 transition-colors">
        <Award className="w-6 h-6 text-blue-400" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">{issuer}</p>
        <p className="text-gray-500 text-xs mt-1">{date}</p>

        {/* Category Tag */}
        <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/20">
          {category}
        </span>

        {/* Relevance */}
        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          {relevance}
        </p>
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 group-hover:text-blue-400 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      )}
    </div>

    {/* Hover glow */}
    <div className="absolute inset-0 bg-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
);

/* ================= CERTIFICATIONS ================= */
const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Azure AZ-900",
      issuer: "Microsoft",
      date: "March 2024",
      category: "Cloud Fundamentals",
      relevance:
        "Validates strong understanding of cloud concepts, Azure services, pricing, and security fundamentals.",
    },
    {
      title: "Microsoft Azure DP-900",
      issuer: "Microsoft",
      date: "February 2024",
      category: "Data & Analytics",
      relevance:
        "Demonstrates foundational knowledge of relational and non-relational data workloads on Azure.",
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Google",
      date: "January 2024",
      category: "Generative AI",
      relevance:
        "Covers core GenAI concepts, model usage, and real-world AI application foundations.",
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Google",
      date: "December 2023",
      category: "AI / LLMs",
      relevance:
        "Explains how LLMs work, their limitations, and best practices for applied AI solutions.",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      date: "November 2023",
      category: "Cloud Fundamentals",
      relevance:
        "Establishes solid understanding of AWS cloud architecture, billing, and core services.",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-recognized certifications validating cloud, data, and AI
            expertise with real-world application focus.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-12 flex justify-center items-center gap-2 text-gray-400 text-sm">
          <BadgeCheck className="w-4 h-4 text-blue-400" />
          Certifications from Microsoft, Google & AWS
        </div>
      </div>
    </section>
  );
};

export default Certifications;
