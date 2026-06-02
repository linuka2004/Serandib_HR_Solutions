import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';

const Footer = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: 'HR Consulting', path: '/services' },
      { name: 'HR Outsourcing', path: '/services' },
      { name: 'Recruitment & Executive Search', path: '/services' },
      { name: 'Payroll & Compliance', path: '/services' },
      { name: 'Learning & Development', path: '/services' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Success Stories', path: '/' },
      { name: 'Latest Insights', path: '/' },
      { name: 'Careers', path: '/' },
    ],
    industries: [
      { name: 'IT & Technology', path: '/industries' },
      { name: 'Apparel & Manufacturing', path: '/industries' },
      { name: 'Hospitality & Tourism', path: '/industries' },
      { name: 'Banking & Finance', path: '/industries' },
      { name: 'Retail & E-commerce', path: '/industries' },
    ]
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-brand-gold/15 relative overflow-hidden">
      {/* Decorative Gold Top Border and Background Accent */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-gold" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Footer Top Promo Section */}
        <div className="bg-brand-dark border border-brand-gold/20 rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl text-left">
            <span className="text-brand-gold uppercase tracking-wider text-xs font-semibold font-outfit mb-3 block">
              Strategic Partnership Opportunity
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-3">
              Ready to Optimize Your Strategic Human Capital?
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Book a complimentary preliminary HR audit. Let our senior consultants evaluate your processes, compliance, and structure to draft a custom optimization blueprint.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            {/* 10% Gold Accent CTA */}
            <Button 
              variant="primary" 
              onClick={onOpenBooking}
              className="w-full md:w-auto px-8 py-4 text-base font-semibold shadow-lg"
            >
              Request Free Assessment
            </Button>
          </div>
        </div>

        {/* Multi-column Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Logo and About Column */}
          <div className="lg:col-span-2 text-left">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.jpeg" 
                alt="Serandip HR Solutions" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A premium human capital services and advisory firm in Sri Lanka. We partner with fast-growing startups, manufacturing giants, and conglomerates to implement high-impact HR ecosystems.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-gold hover:text-brand-navy transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-gold hover:text-brand-navy transition-all duration-300" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-gold hover:text-brand-navy transition-all duration-300" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column: Services */}
          <div className="text-left">
            <h4 className="text-brand-gold font-outfit text-sm font-semibold uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 text-sm hover:text-brand-gold transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Industries */}
          <div className="text-left">
            <h4 className="text-brand-gold font-outfit text-sm font-semibold uppercase tracking-wider mb-5">
              Industries
            </h4>
            <ul className="space-y-3">
              {links.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 text-sm hover:text-brand-gold transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-left">
            <h4 className="text-brand-gold font-outfit text-sm font-semibold uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Level 14, East Tower, World Trade Center, Colombo 01, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  +94 11 234 5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-white/70 text-sm hover:text-brand-gold transition-colors duration-200">
                  partner@serandiphr.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Divider Line */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Footer Bottom Metadata and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>&copy; {currentYear} Serandip HR Solutions Pvt Ltd. All Rights Reserved.</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>Designed by <a href="https://linuka-portfolio-04.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors font-semibold">Linuka Jayasinghe</a></span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
