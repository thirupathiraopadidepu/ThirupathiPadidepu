import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Thirupathi Padidepu. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;