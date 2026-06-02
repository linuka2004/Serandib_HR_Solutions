import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, UserPlus, Coins, 
  GraduationCap, TrendingUp, ShieldCheck, Cpu 
} from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    title: "Strategic HR Consulting",
    subtitle: "Re-engineer your corporate structures to align with rapid scale and modern labor economics.",
    bullets: [
      "Organizational Design & Restructuring",
      "HR Policy & Handbooks Development",
      "Change Management Programs",
      "Compensation & Benefits Strategy"
    ],
    expandedContent: "We conduct detailed structural audits to design lines of authority, optimize spans of control, and author compliant, clear employment handbooks that outline strong corporate cultures.",
    icon: Users
  },
  {
    title: "Comprehensive HR Outsourcing",
    subtitle: "Deploy a high-functioning HR team without the overhead of internal headcount management.",
    bullets: [
      "Full-Lifecycle HR Management",
      "On-site/Remote HR Operations Partner",
      "Employee Grievance Handling",
      "Operational Administration & Files"
    ],
    expandedContent: "Gain the expertise of a complete HR department. From managing day-to-day employee relations and records administration to implementing premium onboarding pipelines.",
    icon: Briefcase
  },
  {
    title: "Recruitment & Executive Search",
    subtitle: "Acquire game-changing leadership and high-caliber specialists in record time.",
    bullets: [
      "Executive Headhunting & Search",
      "High-Volume Technical Recruitment",
      "Employer Branding & Advisory",
      "Candidate Assessment Center"
    ],
    expandedContent: "Leverage our extensive proprietary networks in Sri Lanka and abroad to recruit elite executives, engineers, and department heads who instantly add value.",
    icon: UserPlus
  },
  {
    title: "Payroll & Benefits Management",
    subtitle: "Ensure precision-driven payroll operations with bulletproof tax and statutory compliance.",
    bullets: [
      "Automated Monthly Payroll Runs",
      "EPF, ETF & PAYE Tax Filings",
      "Gratuity & Incentive Calculations",
      "Dedicated Employee Support Desk"
    ],
    expandedContent: "Remove payroll friction entirely. We administer secure monthly payouts, handle statutory filings (EPF/ETF/PAYE) with local authorities, and resolve employee payout queries.",
    icon: Coins
  },
  {
    title: "Learning & Development (L&D)",
    subtitle: "Up-skill your workforce to drive productivity and retain high-performing players.",
    bullets: [
      "Custom Leadership Training",
      "Functional Skills Development",
      "L&D Budget & ROI Optimization",
      "Succession Planning Frameworks"
    ],
    expandedContent: "We build custom-tailored talent progression paths and training curriculums that close technical skills gaps while securing a reliable internal leadership pipeline.",
    icon: GraduationCap
  },
  {
    title: "Performance Management",
    subtitle: "Implement goals that drive corporate accountability and celebrate high impact.",
    bullets: [
      "KPI & OKR Systems Design",
      "Continuous Feedback Pipelines",
      "Balanced Scorecard Systems",
      "Appraisal Calibration Audits"
    ],
    expandedContent: "Upgrade from manual appraisal forms. We install automated target-setting systems (KPIs/OKRs) that dynamically align employee output with executive objectives.",
    icon: TrendingUp
  },
  {
    title: "Compliance & Legal Advisory",
    subtitle: "De-risk your business against complex employment disputes and statutory penalties.",
    bullets: [
      "Shop and Office Act Auditing",
      "Termination & Disciplinary Systems",
      "Labor Court Representation Advice",
      "Statutory Employment Contracts"
    ],
    expandedContent: "Ensure complete legal alignment. We audit contracts, advise on complex disciplinary procedures, and align your terms with the Shop and Office Act of Sri Lanka.",
    icon: ShieldCheck
  },
  {
    title: "HR Digital Tech Solutions",
    subtitle: "Transition spreadsheets into advanced cloud databases and executive analytics dashboards.",
    bullets: [
      "HRIS Platform Architecture",
      "Custom Employee Portals",
      "Power BI Insights Dashboards",
      "Mobile Self-Service Integrations"
    ],
    expandedContent: "Digitize your workflows. We design modern HRIS infrastructure and connect databases with Power BI to give executives instant insight into headcount, L&D ROI, and attrition.",
    icon: Cpu
  }
];

const ComprehensiveSolutions = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-light relative">
      {/* Subtle floating background patterns */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-3 block">
            End-to-End Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-brand-navy leading-tight mb-4">
            Comprehensive HR Solutions Built for Impact
          </h2>
          <p className="text-brand-navy/70 text-base md:text-lg leading-relaxed">
            We break down the complexity of human resource management into structured, high-performance services. Each module is optimized to align employee engagement, legal compliance, and strategic growth.
          </p>
        </div>

        {/* 8-Card Grid (Antigravity Levitating Hover Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              subtitle={service.subtitle}
              bullets={service.bullets}
              expandedContent={service.expandedContent}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComprehensiveSolutions;
