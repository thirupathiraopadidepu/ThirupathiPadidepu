import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code,
  Terminal,
  Database,
  Cloud,
  Server,
  Layout,
} from "lucide-react";

const useTypewriter = (words: string[]) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);

        if (charIndex === word.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(word.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex, words]);

  return text;
};

const Counter = ({
  end,
  suffix = "",
  start,
}: {
  end: number;
  suffix?: string;
  start: boolean;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0); // 🔥 reset when not visible
      return;
    }

    let startTime: number | null = null;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * end;

      setValue(Number(current.toFixed(1)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, end]);

  return (
    <p className="text-3xl font-bold text-white">
      {value}
      {suffix}
    </p>
  );
};

const Hero = () => {
  const typedText = useTypewriter([
    "Full Stack Engineer",
    "AI Engineer",
    "React & ASP.NET Developer",
    "Senior Software Engineer",
    "Building AI-Powered Products",
    "Generative AI Enthusiast",
  ]);
  const icons = [
    { Icon: Code, top: "12%", left: "10%" },
    { Icon: Terminal, top: "30%", left: "75%" },
    { Icon: Database, top: "65%", left: "15%" },
    { Icon: Cloud, top: "20%", left: "45%" },
    { Icon: Server, top: "70%", left: "70%" },
    { Icon: Layout, top: "45%", left: "90%" },
  ];

  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden tech-bg"
    >
      <div className="absolute inset-0 tech-overlay"></div>
      {/* subtle animated background icons left as visual interest */}
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {icons.map(({ Icon, top, left }, index) => (
          <div
            key={index}
            className="absolute animate-float-slow"
            style={{
              top,
              left,
              animationDelay: `${index * 6}s`,
            }}
          >
            <Icon className="w-8 h-8 text-blue-400 opacity-25" />
          </div>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4 z-10"
        >
          {/* Animated Avatar */}
          <div className="relative mb-12 animate-float">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center animate-glow">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-4xl text-white font-bold">TP</span>
              </div>
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse-slow opacity-50 blur-xl"></div>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
               bg-gradient-to-r from-white via-violet-300 to-blue-400 
               mb-6 leading-tight"
          >
            Senior Software Engineer & AI Engineer
          </h1>

          <p className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-8">
            Building scalable web applications, AI-powered systems, and modern
            digital products using React, ASP.NET, cloud technologies, and
            Generative AI.
          </p>

          <p className="text-blue-300 text-lg mb-6 h-6">
            {typedText}
            <span className="animate-pulse">_</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full hover:scale-105 hover:shadow-xl transition-all"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="border border-blue-400 text-blue-300 px-8 py-3 rounded-full hover:bg-blue-400 hover:text-black transition-all"
            >
              Contact
            </a>
          </div>

          {/* Animated Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:scale-105 transition-all">
              <Counter end={15} suffix="+" start={statsVisible} />
              <p className="text-gray-400 text-sm mt-1">Projects Built</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:scale-105 transition-all">
              <Counter end={4} suffix="+" start={statsVisible} />
              <p className="text-gray-400 text-sm mt-1">Years Experience</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:scale-105 transition-all">
              <Counter end={3} suffix="+" start={statsVisible} />
              <p className="text-gray-400 text-sm mt-1">
                AI & Enterprise Domains
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
