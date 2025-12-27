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
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setStatus(null);

      // Admin email
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Auto-reply to customer
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Let’s Build Something Great
          </h2>
          <p className="text-gray-600">
            Have a project in mind? I help startups and businesses build
            scalable web apps, SaaS platforms, and AI-driven solutions.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for Freelance Projects
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <span>+91 7036499748</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <span>thirupathiraopadidepu@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span>Hyderabad, India</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4 text-blue-500" />
              Typically responds within 24 hours
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-2">Find me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/thirupathiraopadidepu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="https://linkedin.com/in/thirupathirao-padidepu-40298b213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 bg-white p-8 rounded-8xl shadow-lg border border-gray-300"
          >
            <input
              name="from_name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="from_email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="project_type"
              value={formData.projectType}
              onChange={(e) =>
                setFormData({ ...formData, projectType: e.target.value })
              }
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Project Type</option>
              <option>Website Development</option>
              <option>Web App / SaaS</option>
              <option>AI / Automation</option>
              <option>UI / UX Improvement</option>
              <option>Maintenance & Support</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <button
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center gap-2 px-6 py-3 rounded-lg text-white transition ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending..." : "Get a Free Project Consultation"}
            </button>
            <a
              href="https://wa.me/917036499748"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center text-sm text-green-600 hover:underline"
            >
              Prefer WhatsApp? Chat instantly →
            </a>

            <p className="text-xs text-gray-500 text-center">
              🔒 Your details are safe. No spam. No obligations.
            </p>

            {/* STATUS */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-600 text-sm mt-3">
                <CheckCircle className="w-4 h-4" />
                Thanks! I’ll get back to you within 24 hours 🚀
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 text-sm mt-3">
                <AlertCircle className="w-4 h-4" />
                Something went wrong. Please try again.
              </div>
            )}

            <div className="text-center text-sm text-gray-600 mt-4">
              ⚡ Limited freelance slots available this month
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
