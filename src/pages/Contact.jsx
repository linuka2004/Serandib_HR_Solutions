import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BookingWizard from '../components/ui/BookingWizard';
import Button from '../components/ui/Button';

const Contact = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: 'General Inquiry'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          subject: 'General Inquiry'
        });
        setFormSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "Level 14, East Tower, World Trade Center, Colombo 01, Sri Lanka"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+94 11 234 5678"
    },
    {
      icon: Mail,
      title: "Email",
      details: "partner@serandiphr.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:30 AM - 5:30 PM (Sri Lanka Standard Time)"
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
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit text-white leading-tight mb-6">
                We're Ready to Partner With You
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Have questions about our HR solutions? Want to schedule a consultation? Get in touch with our team and let's start a conversation about transforming your workforce.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-20 bg-brand-light relative">
          <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border-2 border-brand-navy/10 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-500 group"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold font-outfit text-brand-navy mb-2">
                      {info.title}
                    </h3>
                    <p className="text-brand-navy/70 text-sm leading-relaxed">
                      {info.details}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-4 block">
                Contact Form
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-brand-navy leading-tight mb-4">
                Send Us Your Inquiry
              </h2>
              <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 business hours with personalized guidance.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border-2 border-brand-navy/10 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                >
                  <div className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4 shadow-2xl">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center animate-bounce">
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold font-outfit text-brand-navy mb-2">Message Sent!</h3>
                    <p className="text-brand-navy/70 text-sm">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2 font-outfit">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition-all duration-300 text-brand-navy"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2 font-outfit">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition-all duration-300 text-brand-navy"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2 font-outfit">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition-all duration-300 text-brand-navy"
                    placeholder="+94 11 234 5678"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2 font-outfit">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition-all duration-300 text-brand-navy"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-navy mb-2 font-outfit">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition-all duration-300 text-brand-navy bg-white"
                >
                  <option>General Inquiry</option>
                  <option>HR Consulting Services</option>
                  <option>Recruitment & Executive Search</option>
                  <option>Payroll & Compliance</option>
                  <option>Learning & Development</option>
                  <option>HRIS Implementation</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-brand-navy mb-2 font-outfit">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-brand-navy/20 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition-all duration-300 text-brand-navy resize-none"
                  placeholder="Tell us about your HR challenges and what you're looking for..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-brand-navy/60 text-xs">
                  * Required fields
                </p>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-8 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 disabled:opacity-70 cursor-pointer w-full sm:w-auto justify-center"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Quick Booking CTA */}
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
                Ready to Get Started?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a complimentary HR audit with one of our senior consultants. We'll assess your current state and outline a tailored roadmap for success.
              </p>
              <Button
                variant="primary"
                onClick={handleOpenBooking}
                className="px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Schedule Your Free Assessment
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

export default Contact;
