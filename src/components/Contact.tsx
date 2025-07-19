import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const launchConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!");
        launchConfetti();
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send message. Try again.");
      console.error("Email send error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 transition-all">
      <Toaster position="top-right" />

      {/* Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 dark:bg-purple-700 opacity-20 rounded-full filter blur-3xl animate-blob z-0" />
      <div className="absolute bottom-[-80px] right-[-100px] w-[300px] h-[300px] bg-blue-300 dark:bg-blue-800 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000 z-0" />

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-800 dark:text-white mb-14"
        >
          Let's Connect
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info Cards */}
          <div className="space-y-6">
            {[
              { icon: <Phone />, label: "Phone", value: "+91 7036499748" },
              {
                icon: <Mail />,
                label: "Email",
                value: "thirupathiraopadidepu@gmail.com",
              },
              {
                icon: <MapPin />,
                label: "Location",
                value: "Hyderabad, India",
              },
            ].map(({ icon, label, value }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4 bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-md p-5 rounded-2xl transition"
              >
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  {React.cloneElement(icon, {
                    className: "text-blue-600 dark:text-blue-300 w-6 h-6",
                  })}
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-700 dark:text-white">
                    {label}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Github />, link: "https://github.com/" },
                {
                  icon: <Linkedin />,
                  link: "https://www.linkedin.com/in/thirupathirao-padidepu-40298b213/",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="bg-white dark:bg-white/10 p-3 rounded-full shadow hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all"
                >
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 text-gray-700 dark:text-gray-200",
                  })}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 dark:bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6"
          >
            {[
              {
                label: "Name",
                name: "from_name",
                type: "text",
                value: formData.name,
              },
              {
                label: "Email",
                name: "from_email",
                type: "email",
                value: formData.email,
              },
            ].map((field, idx) => (
              <div className="relative" key={idx}>
                <input
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.name.split("_")[1]]: e.target.value,
                    })
                  }
                  required
                  className="peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-600 transition-all">
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="peer w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 peer-focus:text-xs peer-focus:top-1 peer-focus:text-blue-600 transition-all">
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold text-white text-lg transition-all ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:scale-[1.01]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
