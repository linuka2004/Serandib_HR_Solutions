import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Globe, CheckCircle2, TrendingUp } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BookingWizard from '../components/ui/BookingWizard';
import Button from '../components/ui/Button';

const About = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const missionVision = [
    {
      title: "Our Mission",
      icon: Target,
      description: "To engineer scalable HR infrastructures that align talent strategy with corporate growth, enabling Sri Lanka's leading enterprises to build world-class workforces.",
      points: [
        "Design high-performance organizational structures",
        "Implement compliant, scalable HR systems",
        "Drive measurable business impact through talent",
      ]
    },
    {
      title: "Our Vision",
      icon: Globe,
      description: "To be the strategic human capital partner of choice for enterprises across Sri Lanka, transforming how organizations attract, develop, and retain top talent.",
      points: [
        "Lead HR digital transformation in South Asia",
        "Set industry standards for compliance and excellence",
        "Build lasting partnerships based on trust and results",
      ]
    }
  ];

  const values = [
    {
      icon: Users,
      title: "People-Centric Approach",
      description: "We believe that exceptional organizations are built by exceptional people. Every solution we craft prioritizes employee engagement and growth."
    },
    {
      icon: Award,
      title: "Excellence & Precision",
      description: "Precision-driven execution with meticulous attention to detail. From compliance audits to payroll accuracy, we deliver 99.9% standards."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Strategy",
      description: "We leverage advanced analytics and insights to transform raw employee data into strategic intelligence that drives boardroom decisions."
    },
    {
      icon: Globe,
      title: "Local Expertise, Global Standards",
      description: "Deep knowledge of Sri Lankan labor laws combined with international best practices. We navigate complexity with confidence and clarity."
    }
  ];

  const team = [
    {
      name: "Roshan Perera",
      role: "Founder & Chief Strategist",
      background: "15+ years in strategic HR consulting and organizational transformation"
    },
    {
      name: "Priya Jayawardena",
      role: "Head of Compliance & Legal",
      background: "Expert in Sri Lankan labor law with certified compliance auditor credentials"
    },
    {
      name: "Anil Dissanayake",
      role: "VP, Recruitment & Talent",
      background: "20+ years in executive search and high-volume technical recruitment"
    },
    {
      name: "Lakshmi Karunaratne",
      role: "Director, L&D & Organizational Design",
      background: "Specializes in succession planning and leadership development programs"
    }
  ];

  return (
    <div className="relative min-h-screen bg-brand-light flex flex-col justify-between">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-navy/95 to-[#030D22] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(200,155,74,0.1)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-4 block">
                About Serandip HR Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit text-white leading-tight mb-6">
                Strategic Human Capital Partners for Sri Lanka
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                We're not just an HR consulting firm. We're architects of scalable talent ecosystems that drive corporate valuation, regulatory peace of mind, and measurable business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 md:py-28 bg-brand-light relative">
          <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {missionVision.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border-2 border-brand-navy/10 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-outfit text-brand-navy leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-brand-navy/70 text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span className="text-brand-navy/80 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 md:py-28 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,155,74,0.08)_0%,transparent_60%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-4 block">
                Core Values
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-white leading-tight">
                How We Operate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500 text-white group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-outfit mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 md:py-28 bg-brand-light relative">
          <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-4 block">
                Leadership Team
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-brand-navy leading-tight">
                Meet Our Experts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-brand-navy/10 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500 group"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-gold to-brand-navy mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold font-outfit group-hover:scale-110 transition-transform duration-500">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold font-outfit text-brand-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">
                    {member.background}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Ready to Transform Your HR Strategy?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a complimentary HR audit with our senior consultants to discover how we can optimize your talent ecosystem and drive business growth.
              </p>
              <Button
                variant="primary"
                onClick={handleOpenBooking}
                className="px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Book Free Assessment
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

export default About;
