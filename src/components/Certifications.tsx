import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificationCard = ({ title, issuer, date }: { title: string; issuer: string; date: string }) => (
  <div className="group bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105">
    <div className="flex items-start gap-4">
      <div className="bg-blue-400/10 p-3 rounded-lg group-hover:bg-blue-400/20 transition-colors">
        <Award className="w-6 h-6 text-blue-400" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{issuer}</p>
        <p className="text-gray-500 text-sm mt-1">{date}</p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
    </div>
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      title: 'Microsoft Azure AZ-900',
      issuer: 'Microsoft',
      date: 'March 2024'
    },
    {
      title: 'Microsoft Azure DP-900',
      issuer: 'Microsoft',
      date: 'February 2024'
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Google',
      date: 'January 2024'
    },
    {
      title: 'Introduction to Large Language Models',
      issuer: 'Google',
      date: 'December 2023'
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'AWS',
      date: 'November 2023'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications