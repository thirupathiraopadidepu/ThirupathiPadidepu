import React from "react";
import { Code, Globe, Briefcase } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons
import { Mail, Phone } from "lucide-react"; // Import Mail and Phone from lucide-react

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={40} className="text-blue-400 mb-4" />,
      title: "Web Development",
      description:
        "Custom websites designed to suit the unique needs of your business or personal brand. Whether you're an individual or a business, we offer responsive, user-friendly websites.",
      badge: "Popular",
      badgeColor: "bg-blue-500 animate-pulse",
    },
    {
      icon: <Globe size={40} className="text-green-400 mb-4" />,
      title: "Business Websites & Portfolios",
      description:
        "Elevate your online presence with dynamic websites or personal portfolios. Ideal for businesses, entrepreneurs, and professionals to showcase their work and services.",
      badge: "New",
      badgeColor: "bg-green-500 animate-pulse",
    },
    {
      icon: <Briefcase size={40} className="text-purple-400 mb-4" />,
      title: "Client-Specific Solutions",
      description:
        "Tailored websites and portfolios for clients across various industries. From static websites to dynamic platforms, we deliver solutions that align with your business objectives.",
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Providing high-quality websites and portfolios tailored to
            individuals, businesses, and clients.
          </p>
        </div>

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
              {/* Animated Badge */}
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

        {/* Free Consultation and Contact Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Get a Free Consultation
          </h3>
          <p className="text-gray-400 mb-6">
            Feel free to contact us anytime. Just call, ping us on WhatsApp, or
            send us an email.
          </p>

          <div className="flex justify-center space-x-6">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/+917036499748?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={50} />
            </a>

            {/* Email Icon */}
            <a
              href="mailto:thirupathiraopadidepu@gmail.com?subject=Inquiry:%20Web%20Development%20Services"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Mail size={50} />
            </a>

            {/* Phone Icon */}
            <a
              href="tel:+917036499748"
              className="text-blue-400 hover:text-blue-500 transition-colors"
            >
              <Phone size={50} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
