import React from "react";
import {
  ChevronDown,
  Code,
  Terminal,
  Database,
  Cloud,
  Server,
  Layout,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden tech-bg"
    >
      <div className="absolute inset-0 tech-overlay"></div>

      {/* Animated Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Code, Terminal, Database, Cloud, Server, Layout].map(
          (Icon, index) => (
            <div
              key={index}
              className="absolute animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.5}s`,
                transform: `scale(${0.8 + Math.random() * 0.4})`,
              }}
            >
              <Icon className="w-8 h-8 text-blue-400 opacity-30" />
            </div>
          )
        )}
      </div>

      {/* Centered Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10 text-center">
        {/* Avatar */}
        <div className="relative mb-12 animate-float">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center animate-glow">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-4xl text-white font-bold">TP</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse-slow opacity-50 blur-xl"></div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 mb-6 opacity-0 animate-title">
          Thirupathi Padidepu
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-12 opacity-0 animate-role">
          SOFTWARE DESIGN ENGINEER
        </h2>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Explore My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm mb-2 opacity-75">Scroll to discover</p>
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
