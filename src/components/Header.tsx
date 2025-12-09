import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated nav items: scroll links & route links separated
  const navItems = [
    { type: "scroll", label: "Home", href: "#home" },
    { type: "scroll", label: "About", href: "#about" },
    { type: "scroll", label: "Experience", href: "#experience" },
    { type: "scroll", label: "Skills", href: "#skills" },
    { type: "scroll", label: "Projects", href: "#projects" },

    // ⭐ ROUTE PAGE (React Router)
    { type: "route", label: "Services", to: "/services" },
    { label: "Chat", href: "/chat" },

    { type: "scroll", label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            TP
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) =>
              item.type === "route" ? (
                // ⭐ React Router Link (Services)
                <Link
                  key={item.label}
                  to={item.to!}
                  className="text-gray-300 hover:text-blue-400 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                // ⭐ Hash-based navigation for inner sections
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.to!}
                  className="block py-2 px-4 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 px-4 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
