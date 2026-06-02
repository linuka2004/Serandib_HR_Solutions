import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FlagshipServices from '../components/sections/FlagshipServices';
import BookingWizard from '../components/ui/BookingWizard';
import Button from '../components/ui/Button';
import { Briefcase, TrendingUp, Users, Shield, Zap, Award } from 'lucide-react';

const Industries = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const industryCategories = [
    {
      icon: Briefcase,
      title: "Technology & IT",
      description: "From startups to scaling giants, we handle high-volume technical recruitment, executive search, and retention strategies.",
      solutions: ["Technical talent acquisition", "DevOps team building", "Engineering leadership"]
    },
    {
      icon: Award,
      title: "Apparel & Manufacturing",
      description: "Navigate complex labor-intensive operations with streamlined compliance, process optimization, and production workforce management.",
      solutions: ["Shop Act compliance", "Production line staffing", "Safety & compliance audits"]
    },
    {
      icon: Users,
      title: "Hospitality & Tourism",
      description: "Manage seasonal workforce fluctuations, training pipelines, and service-level consistency across multiple properties.",
      solutions: ["Seasonal workforce planning", "Guest service training", "Multi-property HR"]
    },
    {
      icon: TrendingUp,
      title: "Banking & Finance",
      description: "Regulatory excellence, specialized talent acquisition, and compliance frameworks tailored for financial institutions.",
      solutions: ["Regulatory compliance", "Sales talent recruitment", "Risk management training"]
    },
    {
      icon: Zap,
      title: "E-commerce & Retail",
      description: "High-velocity hiring, gig economy management, and agile workforce planning for rapidly scaling commerce platforms.",
      solutions: ["High-volume recruitment", "Gig worker management", "Supply chain staffing"]
    },
    {
      icon: Shield,
      title: "Healthcare & Logistics",
      description: "Critical staffing solutions, safety compliance, and specialized credential verification for time-sensitive operations.",
      solutions: ["Healthcare staffing", "Compliance certification", " 24/7 workforce scheduling"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-light flex flex-col justify-between">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-grow mt-20">
        {/* Industries Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy/95 to-[#030D22] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(200,155,74,0.1)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-4 block">
                Industry Expertise
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit text-white leading-tight mb-6">
                Tailored HR Solutions Across Sri Lankan Industries
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                We partner with enterprises across manufacturing, technology, hospitality, finance, and beyond. Our industry expertise ensures culturally aligned, operationally optimized HR ecosystems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 md:py-28 bg-brand-light relative">
          <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-4 block">
                Our Sectors
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-brand-navy leading-tight">
                Proven Track Record Across Sectors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {industryCategories.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border-2 border-brand-navy/10 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-brand-gold/30 hover:-translate-y-2 transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold font-outfit text-brand-navy leading-tight pt-1">
                        {industry.title}
                      </h3>
                    </div>

                    <p className="text-brand-navy/70 text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    <div className="bg-brand-navy/5 rounded-lg p-4 border border-brand-navy/10">
                      <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-3 block">
                        Key Solutions
                      </p>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-brand-navy/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Flagship Services Section */}
        <FlagshipServices onOpenBooking={handleOpenBooking} />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-brand-navy to-[#030D22] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(200,155,74,0.1)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-white mb-6 leading-tight">
                Discover Your Industry-Specific Solutions
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our deep sector expertise can drive operational excellence and competitive advantage for your organization.
              </p>
              <Button
                variant="primary"
                onClick={handleOpenBooking}
                className="px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Schedule Industry Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking Wizard */}
      <BookingWizard isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
};

export default Industries;
