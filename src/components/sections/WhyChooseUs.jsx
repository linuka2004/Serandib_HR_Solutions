import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, ShieldAlert, BarChart3, Star, CheckCircle } from 'lucide-react';

const corePillars = [
  {
    title: "Optimized Operational Costs",
    description: "Bloated admin overhead drains profits. We identify organizational redundancies, reduce employee turnover rates, and implement efficient HR pipelines that cut operational overhead by up to 35%.",
    icon: CircleDollarSign,
    stat: "35% Cost Reductions",
    color: "from-brand-gold/20 to-brand-gold/5"
  },
  {
    title: "100% Legal Peace of Mind",
    description: "Sri Lankan labor laws are complex. Our continuous Shop and Office Act compliance audits, robust employment contracts, and meticulous payroll automation insulate your company from litigation risks.",
    icon: ShieldAlert,
    stat: "Zero Legal Litigation",
    color: "from-brand-navy/20 to-brand-navy/5"
  },
  {
    title: "Data-Driven Decisions",
    description: "Legacy human resources rely on intuition. We provide executive visibility, connecting databases to advanced Power BI dashboards to track retention, L&D ROI, and hiring channels in real-time.",
    icon: BarChart3,
    stat: "100% Fact-Based Strategy",
    color: "from-[#0A255C]/20 to-[#0A255C]/5"
  }
];

const stats = [
  { number: "99.9%", label: "Payroll Accuracy Record" },
  { number: "35%", label: "Average HR Operational Cost Savings" },
  { number: "15+", label: "Industries Supported Across Sri Lanka" },
  { number: "A+", label: "Verified Regulatory Compliance Audit Rating" }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-[#071E4A] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,155,74,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-navy/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-3 block">
            Why Serandip HR Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-white leading-tight mb-4">
            Authoritative Trust Built on Data and Precision
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            We operate beyond standard staffing agencies. We build rigorous, high-yield talent architectures that drive corporate valuation and employee retention.
          </p>
        </div>

        {/* Multi-grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: 3 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {corePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-brand-dark/60 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-brand-gold/30 hover:bg-brand-dark/80 transition-all duration-500 shadow-md group"
                >
                  
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 text-brand-gold flex items-center justify-center border border-white/10 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Pillar Text */}
                  <div className="text-left">
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <h3 className="text-lg md:text-xl font-bold font-outfit text-white leading-tight">
                        {pillar.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-wider">
                        {pillar.stat}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Statistics Grid Card */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-brand-dark/40 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden"
            >
              
              {/* Floating Mesh Sphere */}
              <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-brand-gold/10 blur-[80px]" />
              
              <div className="text-left mb-8 relative z-10">
                <div className="flex items-center gap-2 text-brand-gold mb-3">
                  <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  <span className="text-xs font-bold uppercase tracking-wider font-outfit">Verified Corporate Standard</span>
                </div>
                <h3 className="text-2xl font-bold font-outfit text-white mb-4">
                  By the Numbers
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our operational metrics reflect our absolute commitment to quality control and statutory security.
                </p>
              </div>

              {/* Numerical KPIs Grid */}
              <div className="grid grid-cols-2 gap-6 md:gap-8 relative z-10 text-left">
                {stats.map((stat, i) => (
                  <div key={i} className="border-l-2 border-brand-gold pl-4 py-1.5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-r-lg">
                    <span className="text-2xl sm:text-3xl font-black font-outfit text-white block leading-none mb-1.5 select-none">
                      {stat.number}
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/50 font-medium leading-tight block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Trust Badge */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 relative z-10 text-left">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span className="text-xs text-white/60">
                  Fully licensed and compliant under Sri Lankan company registries and labor boards.
                </span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
