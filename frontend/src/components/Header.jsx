import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`
      }>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-25">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://customer-assets.emergentagent.com/job_7e015201-97ad-4ef2-a812-8a1721981a86/artifacts/e0n0q32q_WhatsApp%20Image%202025-08-11%20at%2019.45.27_4b0fb809.jpg"
              alt="Jaydev Associates Logo"
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 relative group ${
              location.pathname === link.path ?
              'text-[#F5C842]' :
              'text-white hover:text-[#F5C842]'}`
              }>

                {link.name}
                <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#F5C842] transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`
                }>
              </span>
              </Link>
            )}
          </div>

          {/* Call Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:7744975512"
              className="flex items-center space-x-2 px-6 py-2.5 bg-[#F5C842] text-black font-semibold rounded-lg hover:bg-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#F5C842]/50 hover:scale-105">

              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-[#F5C842] transition-colors duration-300">

            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-lg border-t border-[#F5C842]/20">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-base font-medium transition-colors duration-300 ${
              location.pathname === link.path ?
              'text-[#F5C842]' :
              'text-white hover:text-[#F5C842]'}`
              }>

                  {link.name}
                </Link>
            )}
              <a
              href="tel:7744975512"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-[#F5C842] text-black font-semibold rounded-lg hover:bg-[#D4AF37] transition-all duration-300">

                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        }
      </nav>
    </header>);

};

export default Header;