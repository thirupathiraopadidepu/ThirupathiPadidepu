import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                <p className="text-gray-600">Information Technology</p>
              </div>
            </div>
            <p className="text-gray-600">Jawaharlal Nehru Technological University, India</p>
            <p className="text-gray-500">2017 - 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;