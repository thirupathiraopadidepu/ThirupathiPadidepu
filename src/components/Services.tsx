import React from "react";
import { Code, Globe, Briefcase, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={40} className="text-blue-400 mb-4" />,
      title: "Web Development",
      description:
        "I build responsive, modern websites tailored to your personal or business needs using the latest technologies like React and .NET. From concept to deployment, every project is custom-built for performance and scalability.",
      badge: "Popular",
      badgeColor: "bg-blue-500 animate-pulse",
    },
    {
      icon: <Globe size={40} className="text-green-400 mb-4" />,
      title: "Business Websites & Portfolios",
      description:
        "Get a sleek online presence with custom portfolio sites and business websites. Ideal for professionals, startups, freelancers, or small businesses looking to stand out online.",
      badge: "New",
      badgeColor: "bg-green-500 animate-pulse",
    },
    {
      icon: <Briefcase size={40} className="text-purple-400 mb-4" />,
      title: "Client-Specific Solutions",
      description:
        "From static landing pages to fully dynamic platforms, I craft personalized solutions that match your brand and goals. Let’s build a site that speaks your business language.",
      badge: "Trending",
      badgeColor: "bg-purple-500 animate-pulse",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Providing high-quality websites and portfolios tailored to
            individuals, businesses, and clients.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform duration-500 hover:rotate-y-6 hover:scale-105 shadow-lg hover:shadow-2xl stagger-item"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`absolute top-4 right-4 px-3 py-1 text-sm text-white rounded-full ${service.badgeColor}`}
              >
                {service.badge}
              </div>
              {service.icon}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Free Consultation Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Get a Free Consultation
          </h3>
          <p className="text-gray-400 mb-6">
            Feel free to contact us anytime. Just call, ping us on WhatsApp, or
            send us an email.
          </p>

          <div className="flex justify-center space-x-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/+917036499748?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={50} />
            </a>

            {/* Email */}
            <a
              href="mailto:thirupathiraopadidepu@gmail.com?subject=Inquiry:%20Web%20Development%20Services"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Mail size={50} />
            </a>

            {/* Phone */}
            <a
              href="tel:+917036499748"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <Phone size={50} />
            </a>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Why Choose Me?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            I don’t just build websites — I build your online presence. With
            experience in both front-end and full-stack development, I offer
            efficient, aesthetic, and SEO-ready solutions tailored to your
            needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-white mb-2">
                Custom Solutions
              </h4>
              <p className="text-gray-400 text-sm">
                Every website is uniquely designed to reflect your goals, brand,
                and user needs.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-white mb-2">
                End-to-End Support
              </h4>
              <p className="text-gray-400 text-sm">
                From domain setup to deployment, I handle the complete process
                smoothly.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-white mb-2">
                Modern Tech Stack
              </h4>
              <p className="text-gray-400 text-sm">
                Using React, .NET, Tailwind, and more to deliver fast,
                responsive, and modern experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
