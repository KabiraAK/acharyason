import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <ChefHat className="h-6 w-6 text-amber-500" />
              <span className="ml-2 text-lg font-semibold text-white">Saveur</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Crafting unforgettable dining experiences with locally-sourced ingredients and 
              innovative culinary techniques since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-amber-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm hover:text-amber-500 transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-amber-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-amber-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-amber-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm">Monday - Friday: 11am - 10pm</li>
              <li className="text-sm">Saturday: 10am - 11pm</li>
              <li className="text-sm">Sunday: 10am - 9pm</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-amber-500 flex-shrink-0" />
                <span className="text-sm">123 Culinary Street, Foodville, FC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-amber-500 flex-shrink-0" />
                <span className="text-sm">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-amber-500 flex-shrink-0" />
                <span className="text-sm">info@saveurrestaurant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Saveur Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;