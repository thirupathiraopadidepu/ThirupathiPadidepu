import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setStatus(null);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_40%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-5
                       bg-gradient-to-r from-violet-400 to-blue-400
                       text-transparent bg-clip-text"
          >
            Let’s Connect
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            Open to engineering collaborations, AI innovation, product
            development, and impactful software opportunities.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {[
              "React",
              "ASP.NET",
              "TypeScript",
              "Generative AI",
              "Cloud",
              "Full Stack",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5
                           border border-white/10 text-sm text-gray-300
                           backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Phone */}
            <div
              className="bg-white/5 border border-white/10
                         backdrop-blur-xl rounded-2xl p-5
                         hover:border-violet-500/40 transition"
            >
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-violet-400" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white">+91 7036499748</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div
              className="bg-white/5 border border-white/10
                         backdrop-blur-xl rounded-2xl p-5
                         hover:border-violet-500/40 transition"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-violet-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">thirupathiraopadidepu@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              className="bg-white/5 border border-white/10
                         backdrop-blur-xl rounded-2xl p-5
                         hover:border-violet-500/40 transition"
            >
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-violet-400" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4 text-violet-400" />
              Typically responds within 24 hours
            </div>

            {/* Socials */}
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/thirupathiraopadidepu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10
                             hover:border-violet-500/50 hover:scale-105
                             transition-all"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://linkedin.com/in/thirupathirao-padidepu-40298b213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10
                             hover:border-violet-500/50 hover:scale-105
                             transition-all"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 bg-white/5 backdrop-blur-2xl
                       border border-white/10 p-8 rounded-3xl
                       shadow-[0_0_40px_rgba(139,92,246,0.08)]"
          >
            <input
              name="from_name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
              className="w-full bg-black/40 border border-white/10
                         px-4 py-3 rounded-xl text-white
                         focus:ring-2 focus:ring-violet-500
                         outline-none"
            />

            <input
              name="from_email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
              className="w-full bg-black/40 border border-white/10
                         px-4 py-3 rounded-xl text-white
                         focus:ring-2 focus:ring-violet-500
                         outline-none"
            />

            <input
              name="company"
              placeholder="Company / Organization"
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
              className="w-full bg-black/40 border border-white/10
                         px-4 py-3 rounded-xl text-white
                         focus:ring-2 focus:ring-violet-500
                         outline-none"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              required
              className="w-full bg-black/40 border border-white/10
                         px-4 py-3 rounded-xl text-white
                         focus:ring-2 focus:ring-violet-500
                         outline-none resize-none"
            />

            {/* Button */}
            <button
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center gap-2
                          px-6 py-4 rounded-xl text-white
                          transition-all duration-300
                          ${
                            isSubmitting
                              ? "bg-gray-700 cursor-not-allowed"
                              : "bg-gradient-to-r from-violet-600 to-blue-600 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                          }`}
            >
              <Send className="w-4 h-4" />

              {isSubmitting ? "Connecting..." : "Connect Now"}
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917036499748"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm text-green-400 hover:text-green-300 transition"
            >
              Message on WhatsApp →
            </a>

            {/* Privacy */}
            <p className="text-xs text-gray-500 text-center">
              🔒 Your details are safe and secure.
            </p>

            {/* Status */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                Message sent successfully 🚀
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                Something went wrong. Please try again.
              </div>
            )}

            {/* Footer */}
            <div className="text-center text-sm text-gray-500 pt-2">
              Building AI-powered applications, scalable systems, and modern
              digital experiences.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
