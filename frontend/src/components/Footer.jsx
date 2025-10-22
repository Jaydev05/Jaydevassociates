import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-[#F5C842]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src="https://customer-assets.emergentagent.com/job_7e015201-97ad-4ef2-a812-8a1721981a86/artifacts/e0n0q32q_WhatsApp%20Image%202025-08-11%20at%2019.45.27_4b0fb809.jpg"
              alt="Jaydev Associates Logo"
              className="h-16 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for Recruitment, Security, Facility Management, IT Solutions, and Real Estate Services.
            </p>
            <p className="text-[#F5C842] font-semibold text-lg">Your Growth, Our Commitment</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F5C842] font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#F5C842] font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Recruitment Solutions</li>
              <li className="text-gray-400 text-sm">Security Services</li>
              <li className="text-gray-400 text-sm">Facility Management</li>
              <li className="text-gray-400 text-sm">IT Solutions</li>
              <li className="text-gray-400 text-sm">Real Estate Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F5C842] font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F5C842] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  489, Near SBI Bank, Old Bazar Peth, Goregaon, Mangaon, Raigad, Maharashtra - 402103
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F5C842] flex-shrink-0" />
                <a href="tel:7744975512" className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300 text-sm">
                  +91 7744975512
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F5C842] flex-shrink-0" />
                <a href="mailto:jaydevassociates25@gmail.com" className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300 text-sm">
                  jaydevassociates25@gmail.com
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3">Business Hours</h4>
              <p className="text-gray-400 text-sm">Mon-Fri: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-400 text-sm">Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-[#F5C842]/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F5C842] transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Jaydev Associates LLP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;