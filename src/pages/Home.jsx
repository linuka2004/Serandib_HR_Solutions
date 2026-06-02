import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import BookingProcess from '../components/sections/BookingProcess';
import BookingWizard from '../components/ui/BookingWizard';
import Button from '../components/ui/Button';
import { ArrowRight, Briefcase, Users, Shield, TrendingUp } from 'lucide-react';

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const services = [
    {
      icon: Briefcase,
      title: "Strategic HR Consulting",
      description: "Re-engineer your corporate structures and HR policies for modern, scalable growth.",
      link: "/services"
    },
    {
      icon: Users,
      title: "Recruitment & Talent",
      description: "Executive headhunting and high-volume technical recruitment tailored to your needs.",
      link: "/services"
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      description: "Navigate Sri Lankan labor laws with bulletproof compliance frameworks and audits.",
      link: "/services"
    },
    {
      icon: TrendingUp,
      title: "Data & Analytics",
      description: "Transform employee data into strategic insights with Power BI dashboards.",
      link: "/services"
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-light flex flex-col justify-between">
      {/* Sticky Global Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Header Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy/95 to-[#030D22] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(200,155,74,0.1)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-4 block">
                Welcome to Serandip HR Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit text-white leading-tight mb-6">
                Your Strategic Human Capital Partner
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                We engineer scalable HR infrastructures that align talent strategy with corporate growth, enabling Sri Lanka's leading enterprises to build world-class workforces.
              </p>
            </motion.div>
          </div>
        </section>

        <Hero onOpenBooking={handleOpenBooking} />

        {/* Services Preview Section */}
        <section className="py-20 md:py-28 bg-brand-light relative">
          <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-3 block">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-brand-navy leading-tight mb-4">
                Comprehensive HR Solutions
              </h2>
              <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                We provide end-to-end human capital services designed to align talent strategy with your corporate growth objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border border-brand-navy/10 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand-gold/30 hover:-translate-y-2 transition-all duration-500 group flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center mb-5 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-outfit text-brand-navy mb-3 text-left">
                      {service.title}
                    </h3>
                    <p className="text-brand-navy/70 text-sm leading-relaxed text-left flex-grow">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="flex items-center gap-2 text-brand-gold font-semibold text-sm mt-4 hover:text-brand-navy transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2"
              >
                <Button variant="primary">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Industries Preview */}
        <section className="py-16 md:py-20 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,155,74,0.08)_0%,transparent_60%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-4 block">
                  Industry Expertise
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-outfit text-white leading-tight mb-4">
                  Proven Excellence Across 15+ Industries
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  From technology startups to manufacturing conglomerates, hospitality chains to financial institutions—we've engineered high-performance HR ecosystems across Sri Lanka's most demanding sectors.
                </p>
                <Link to="/industries">
                  <Button variant="primary">
                    View Our Industry Solutions
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {['Technology & IT', 'Apparel & Manufacturing', 'Hospitality & Tourism', 'Banking & Finance', 'E-commerce & Retail', 'Healthcare & Logistics'].map((industry, idx) => (
                  <div
                    key={industry}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500"
                  >
                    <p className="text-sm font-semibold text-white/90">{industry}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <BookingProcess onOpenBooking={handleOpenBooking} />
      </main>

      {/* Global Corporate Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Multi-step Assessment Wizard Pop-up */}
      <BookingWizard isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
};

export default Home;
