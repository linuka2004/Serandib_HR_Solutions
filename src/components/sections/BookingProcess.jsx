import React from 'react';
import { motion } from 'framer-motion';
import { CalendarRange, Sparkles, Rocket } from 'lucide-react';
import Button from '../ui/Button';

const steps = [
  {
    number: "01",
    title: "Request Assessment",
    sinhala: "මූලික ඇගයීම",
    description: "Tell us about your organization's workforce size and primary operations. Submit your details through our interactive Booking Wizard to schedule a free 45-minute audit.",
    icon: CalendarRange,
    details: "Instantly locks a slot with a senior HR Consultant."
  },
  {
    number: "02",
    title: "Discovery & Diagnostics",
    sinhala: "හඳුනාගැනීම සහ විශ්ලේෂණය",
    description: "Our compliance and operational consultants analyze your current contracts, Shop and Office Act compliance, payroll architectures, and organizational charts to identify bottleneck gaps.",
    icon: Sparkles,
    details: "Delivers a preliminary risk mitigation report."
  },
  {
    number: "03",
    title: "Execution & Scalability",
    sinhala: "ක්‍රියාත්මක කිරීම",
    description: "Deploy robust, scalable frameworks. From full payroll outsourcing and Virtual HR leadership to digital cloud HRIS platforms and Power BI executive dashboards.",
    icon: Rocket,
    details: "Secures a smooth, compliant talent ecosystem."
  }
];

const BookingProcess = ({ onOpenBooking }) => {
  return (
    <section className="py-20 md:py-28 bg-brand-light relative overflow-hidden">
      {/* Decorative meshes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-navy/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
          <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-3 block">
            Client Onboarding Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-brand-navy leading-tight mb-4">
            How We Partner for Performance
          </h2>
          <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Transitioning your human resource strategy into a high-yield asset is seamless. Follow our clean, 3-step structured booking and activation roadmap.
          </p>
        </div>

        {/* 3-Step Stepper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative mb-16">
          
          {/* Connecting Line (Only visible on desktop lg screens) */}
          <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-gold/40 via-brand-navy/20 to-brand-gold/40 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col items-center text-center bg-white border border-brand-navy/5 rounded-3xl p-8 shadow-float hover:shadow-float-hover hover:-translate-y-2 transition-all duration-500 relative z-10"
              >
                
                {/* Float Graphic Tag */}
                <div className="absolute top-4 right-6 text-brand-navy/10 font-outfit font-black text-4xl select-none leading-none">
                  {step.number}
                </div>

                {/* Styled Step Icon Sphere */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-navy text-white group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500 shadow-md mb-6 relative">
                  <Icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Decorative outer pulse ring */}
                  <div className="absolute inset-0 rounded-2xl border border-brand-gold/30 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Step Titles */}
                <h3 className="text-xl font-bold font-outfit text-brand-navy mb-1.5 leading-tight">
                  {step.title}
                </h3>
                
                {/* Sinhalese Translation block */}
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-4 block select-none">
                  {step.sinhala}
                </span>

                {/* Step Description */}
                <p className="text-brand-navy/70 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Bullet point key summary */}
                <div className="mt-auto w-full bg-brand-light/60 border border-brand-navy/5 rounded-xl p-3 text-xs font-medium text-brand-navy/80 leading-snug">
                  📌 {step.details}
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Stepper Footer Action */}
        <div className="flex justify-center">
          {/* 10% Gold Accent CTA */}
          <Button 
            variant="primary" 
            onClick={onOpenBooking}
            className="px-8 py-4 text-base font-bold shadow-lg"
          >
            Launch Free Assessment Wizard
          </Button>
        </div>

      </div>
    </section>
  );
};

export default BookingProcess;
