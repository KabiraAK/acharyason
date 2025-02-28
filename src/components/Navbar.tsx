import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'Menu', path: '/menu' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <ChefHat className="h-8 w-8 text-amber-600" />
            <span className="ml-2  font-semibold text-stone-800">Acharya & Son's</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  location.pathname === link.path
                    ? 'text-amber-600'
                    : scrolled
                    ? 'text-stone-800'
                    : 'text-stone-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-stone-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium py-2 transition-colors hover:text-amber-600 ${
                    location.pathname === link.path ? 'text-amber-600' : 'text-stone-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 w-full text-center bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;