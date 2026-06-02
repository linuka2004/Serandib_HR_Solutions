import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-panel shadow-md py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Image Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.jpeg" 
              alt="Serandip HR Solutions" 
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative font-outfit text-sm font-medium text-brand-navy/80 hover:text-brand-navy transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+94112345678" 
              className="flex items-center gap-2 text-sm font-medium text-brand-navy/70 hover:text-brand-gold transition-colors duration-300"
            >
              <PhoneCall className="w-4 h-4 text-brand-gold" />
              <span className="font-outfit">+94 11 234 5678</span>
            </a>
            
            {/* 10% Gold Accent CTA */}
            <Button 
              variant="primary" 
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-lg text-sm"
            >
              Book Free Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-brand-navy/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <img 
                src="/logo.jpeg" 
                alt="Serandip HR Solutions" 
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-brand-navy hover:bg-brand-navy/5 transition-colors focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-outfit text-lg font-semibold text-brand-navy/80 hover:text-brand-gold transition-colors py-2 border-b border-brand-navy/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a 
              href="tel:+94112345678" 
              className="flex items-center gap-3 font-medium text-brand-navy/70 hover:text-brand-gold transition-colors duration-300 py-2"
            >
              <PhoneCall className="w-5 h-5 text-brand-gold" />
              <span className="font-outfit text-base">+94 11 234 5678</span>
            </a>
            
            <Button 
              variant="primary" 
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center"
            >
              Book Free Assessment
            </Button>
          </div>
        </div>
      </div>
      
      {/* Drawer Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-brand-navy/20 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
