import React from 'react';
import { Code2, Database, Layout, Brain, Server, Cloud, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Animated Character Section */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              {/* Main Avatar Circle */}
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-float">
                <User className="w-24 h-24 text-white" />
              </div>
              
              {/* Orbiting Skill Icons */}
              {[
                { Icon: Layout, delay: '0s' },
                { Icon: Server, delay: '0.5s' },
                { Icon: Database, delay: '1s' },
                { Icon: Cloud, delay: '1.5s' },
                { Icon: Code2, delay: '2s' },
                { Icon: Brain, delay: '2.5s' }
              ].map(({ Icon, delay }, index) => (
                <div
                  key={index}
                  className="absolute w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center animate-orbit"
                  style={{
                    animation: `orbit 10s linear infinite`,
                    animationDelay: delay,
                    transformOrigin: '50% 50%',
                    left: `${Math.cos(index * (Math.PI / 3)) * 100 + 92}px`,
                    top: `${Math.sin(index * (Math.PI / 3)) * 100 + 92}px`
                  }}
                >
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
              ))}
              
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="md:col-span-8">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Professional Background</h3>
                <p className="text-gray-300 leading-relaxed">
                  As a committed professional, I bring a strong background in .NET, React, Angular, and Microsoft technologies to application development. My expertise spans across multiple domains and technologies, allowing me to deliver comprehensive solutions.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Project Experience</h3>
                <p className="text-gray-300 leading-relaxed">
                  I have contributed to diverse projects across industries such as logistics services, library services, and Generative AI, showcasing expertise in front-end and back-end development using modern frameworks and tools.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Core Strengths</h3>
                <p className="text-gray-300 leading-relaxed">
                  My dedication to delivering high-quality solutions, problem-solving skills, and adaptability make me a valuable asset to any team. I consistently strive for excellence in every project I undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add animation keyframes to index.css */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
        
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default About;