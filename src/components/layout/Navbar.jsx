import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/resources", label: "Resources" },
    { path: "/event", label: "Mission & Events" },
    { path: "/booking", label: "Bookings" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-2xl sm:text-3xl font-bold">
                <span className="text-purple-600 group-hover:text-purple-700 transition-colors">
                  Dola
                </span>
                <span className="text-gray-800"> Bankole</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors duration-300 ${
                    isActiveLink(link.path)
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+17133916468"
                className="group flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Contact</span>
              </a>
              <Link
                to="/booking"
                className="group flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Session</span>
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
        )}

        {/* Mobile/Tablet Menu Slide-out */}
        <div
          className={`lg:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isActiveLink(link.path)
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Section */}
            <div className="border-t border-gray-200 px-6 py-6 space-y-3 bg-gray-50">
              <a
                href="tel:+17133916468"
                className="flex items-center justify-center gap-2 w-full bg-white border-2 border-purple-600 text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300"
                onClick={toggleMenu}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <Link
                to="/booking"
                className="flex items-center justify-center gap-2 w-full bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg"
                onClick={toggleMenu}
              >
                <Calendar className="w-5 h-5" />
                <span>Book Session</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;