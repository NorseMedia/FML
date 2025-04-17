import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-6 w-6" />
              <span className="text-lg font-heading font-bold">Blue Anchor Studio</span>
            </div>
            <p className="text-silver mb-4">
              Anchoring your brand in digital success with innovative web design and strategic digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-silver hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-silver hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-silver hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-silver hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-silver hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-silver hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-silver hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-silver hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-silver hover:text-white transition-colors">
                  Website Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>info@blueanchorstudio.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-12 pt-6 text-center text-silver">
          <p>&copy; {new Date().getFullYear()} Blue Anchor Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;