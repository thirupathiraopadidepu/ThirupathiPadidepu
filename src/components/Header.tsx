import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveRoute = (path?: string) => path && location.pathname === path;

  type ScrollNav = { type: "scroll"; label: string; href: string };
  type RouteNav = { type: "route"; label: string; to: string };
  type NavItem = ScrollNav | RouteNav;

  const navItems: NavItem[] = [
    { type: "scroll", label: "Home", href: "#home" },
    { type: "scroll", label: "About", href: "#about" },
    { type: "scroll", label: "Experience", href: "#experience" },
    { type: "scroll", label: "Skills", href: "#skills" },
    { type: "scroll", label: "Projects", href: "#projects" },

    // { type: "route", label: "Chat", to: "/chat" },

    { type: "scroll", label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <a
            href="#home"
            className="text-xl font-bold text-blue-400 hover:text-blue-300 transition"
          >
            TP
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.to!}
                  className={`nav-link ${
                    isActiveRoute(item.to) ? "active" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-gray-300"
                >
                  {item.label}
                </a>
              ),
            )}

            {/* CTA */}
            <a
              href="/#contact"
              className="ml-4 px-5 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition shadow-md"
            >
              Let's Connect
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 py-4 bg-gray-900/95 backdrop-blur-md rounded-lg">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.to!}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block mx-4 mb-2 nav-link ${
                    isActiveRoute(item.to) ? "active" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-4 mb-2 nav-link text-gray-300"
                >
                  {item.label}
                </a>
              ),
            )}

            {/* MOBILE CTA */}
            <a
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 mx-4 text-center py-2 rounded-lg bg-blue-500 text-white font-medium"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
