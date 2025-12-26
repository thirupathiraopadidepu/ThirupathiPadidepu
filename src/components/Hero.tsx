import React, { useEffect, useState } from "react";
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
    "Web Applications",
    "SaaS Platforms",
    "AI Tools",
    "Automation Systems",
    "Mobile Apps",
    "Desktop Apps",
    "Websites",
    "SPA (Single-Page Application)",
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
      { threshold: 0.5 }
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
      {/* ✅ FREELANCE BADGE — FIXED TOP LEFT */}
      <div
        className="
      absolute top-20 left-6 z-30
      inline-flex items-center gap-2
      px-4 py-1.5 rounded-full
      bg-green-500/10 text-green-400
      border border-green-500/30
      text-sm backdrop-blur-md
      shadow-lg
      pointer-events-auto
    "
      >
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Available for Freelance Projects
      </div>
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
        <div className="text-center px-4 z-10">
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
                         bg-gradient-to-r from-white to-blue-300 mb-6 
                         opacity-0 animate-title leading-tight"
          >
            I Help Startups & Businesses Build <br />
            <span className="text-blue-400">
              Scalable Web Apps & AI-Driven Solutions
            </span>
          </h1>

          {/* Typing */}
          <p className="text-blue-300 text-lg mb-6 h-6">
            {typedText}
            <span className="animate-pulse">_</span>
          </p>

          {/* Stack */}
          <h2 className="text-lg md:text-xl text-blue-300 font-medium mb-6 opacity-0 animate-role">
            React • ASP.NET • SaaS • Automation
          </h2>

          {/* Value */}
          <p className="text-gray-200 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Web & AI solutions that deliver faster development, clean
            architecture, and scalable systems designed for real business
            growth.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-blue-800 
                         text-white px-10 py-4 rounded-full 
                         hover:scale-105 hover:shadow-xl transition-all"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="border border-blue-400 text-blue-300 
                         px-10 py-4 rounded-full 
                         hover:bg-blue-400 hover:text-black transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Animated Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center"
          >
            <div>
              <Counter end={15} suffix="+" start={statsVisible} />
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <Counter end={8} suffix="+" start={statsVisible} />
              <p className="text-gray-400 text-sm">Clients</p>
            </div>

            <div>
              <Counter end={3} suffix="+" start={statsVisible} />
              <p className="text-gray-400 text-sm">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
