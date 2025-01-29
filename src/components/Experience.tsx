import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-400">
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] bg-gray-800 p-2 rounded-full border-2 border-blue-400">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-900/70 transition-colors duration-300 transform hover:scale-[1.02] hover:shadow-xl">
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">Software Design Engineer</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>August 2022 - Present</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>WinWire Technologies, Hyderabad</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: 'BT Labels Project',
                      description: 'Led enhancements and bug fixes in the library services domain as an Angular and .NET developer.'
                    },
                    {
                      title: 'Gen AI ChatGPT Project',
                      description: 'Delivered UI improvements and resolved critical issues as a React developer, while directly engaging with clients to ensure project success.'
                    },
                    {
                      title: 'Internal Initiatives',
                      description: 'Contributed to internal tools like Bootstrap development and conducted GitHub Copilot analysis to optimize development workflows.'
                    }
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <h4 className="text-blue-400 font-medium mb-2">{project.title}</h4>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience