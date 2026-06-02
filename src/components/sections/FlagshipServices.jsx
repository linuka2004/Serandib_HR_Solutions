import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCheck, Terminal, AreaChart, 
  ArrowUpRight, Users2, Brain, FileSpreadsheet,
  CheckCircle2, CircleDollarSign, CalendarDays
} from 'lucide-react';
import Button from '../ui/Button';

// Mock Data for the interactive Power BI dashboard
const dashboardData = {
  All: {
    headcount: 342,
    attrition: "4.8%",
    ldBudget: "$42,500",
    openRoles: 18,
    metrics: [
      { name: "Employee Engagement", score: 86, color: "bg-brand-gold" },
      { name: "Compliance Rating", score: 98, color: "bg-brand-navy" },
      { name: "Payroll Accuracy", score: 100, color: "bg-emerald-500" },
      { name: "Training Completion", score: 92, color: "bg-blue-500" }
    ],
    growth: [
      { label: "Q1", value: 70 },
      { label: "Q2", value: 85 },
      { label: "Q3", value: 92 },
      { label: "Q4", value: 100 }
    ]
  },
  Engineering: {
    headcount: 114,
    attrition: "3.2%",
    ldBudget: "$24,000",
    openRoles: 8,
    metrics: [
      { name: "Employee Engagement", score: 90, color: "bg-brand-gold" },
      { name: "Compliance Rating", score: 100, color: "bg-brand-navy" },
      { name: "Payroll Accuracy", score: 100, color: "bg-emerald-500" },
      { name: "Training Completion", score: 95, color: "bg-blue-500" }
    ],
    growth: [
      { label: "Q1", value: 65 },
      { label: "Q2", value: 80 },
      { label: "Q3", value: 88 },
      { label: "Q4", value: 95 }
    ]
  },
  Operations: {
    headcount: 148,
    attrition: "6.1%",
    ldBudget: "$10,500",
    openRoles: 4,
    metrics: [
      { name: "Employee Engagement", score: 81, color: "bg-brand-gold" },
      { name: "Compliance Rating", score: 96, color: "bg-brand-navy" },
      { name: "Payroll Accuracy", score: 100, color: "bg-emerald-500" },
      { name: "Training Completion", score: 88, color: "bg-blue-500" }
    ],
    growth: [
      { label: "Q1", value: 72 },
      { label: "Q2", value: 84 },
      { label: "Q3", value: 90 },
      { label: "Q4", value: 98 }
    ]
  },
  Sales: {
    headcount: 80,
    attrition: "5.5%",
    ldBudget: "$8,000",
    openRoles: 6,
    metrics: [
      { name: "Employee Engagement", score: 85, color: "bg-brand-gold" },
      { name: "Compliance Rating", score: 98, color: "bg-brand-navy" },
      { name: "Payroll Accuracy", score: 100, color: "bg-emerald-500" },
      { name: "Training Completion", score: 94, color: "bg-blue-500" }
    ],
    growth: [
      { label: "Q1", value: 75 },
      { label: "Q2", value: 90 },
      { label: "Q3", value: 95 },
      { label: "Q4", value: 100 }
    ]
  }
};

const FlagshipServices = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('powerbi');
  const [dashboardDept, setDashboardDept] = useState('All');

  const deptData = dashboardData[dashboardDept];

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#071E4A] text-white relative overflow-hidden">
      {/* Decorative Gradients (Antigravity Theme) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(200,155,74,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#030D22]/80 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-brand-gold uppercase tracking-wider text-xs font-bold font-outfit mb-3 block">
            Premier Flagship Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit text-white leading-tight mb-4">
            Authoritative Solutions Engineering Growth
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Our premier services are crafted for ambitious enterprises demanding elite execution. Discover our high-end dedicated resource options, tailored HRIS integrations, and custom Power BI reporting.
          </p>
        </div>

        {/* Multi-column Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Tab 1: Power BI Dashboards */}
            <button
              onClick={() => setActiveTab('powerbi')}
              className={`p-6 rounded-2xl text-left border transition-all duration-500 relative overflow-hidden group select-none ${
                activeTab === 'powerbi'
                  ? 'bg-white/5 border-brand-gold shadow-[0_15px_30px_-5px_rgba(200,155,74,0.15)]'
                  : 'bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
              }`}
            >
              {activeTab === 'powerbi' && (
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-gold" />
              )}
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-2.5 rounded-xl border transition-colors ${
                  activeTab === 'powerbi' ? 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold' : 'bg-white/5 border-white/10 text-white'
                }`}>
                  <AreaChart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg font-outfit">Power BI Dashboards</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Connect your database to high-end analytics. Visualize attrition, labor costs, and operational training in real-time.
              </p>
            </button>

            {/* Tab 2: Virtual HR Manager */}
            <button
              onClick={() => setActiveTab('virtualhr')}
              className={`p-6 rounded-2xl text-left border transition-all duration-500 relative overflow-hidden group select-none ${
                activeTab === 'virtualhr'
                  ? 'bg-white/5 border-brand-gold shadow-[0_15px_30px_-5px_rgba(200,155,74,0.15)]'
                  : 'bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
              }`}
            >
              {activeTab === 'virtualhr' && (
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-gold" />
              )}
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-2.5 rounded-xl border transition-colors ${
                  activeTab === 'virtualhr' ? 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold' : 'bg-white/5 border-white/10 text-white'
                }`}>
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg font-outfit">Virtual HR Manager</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Inject a senior strategic leader to run your complete human resource cycle, compliance audits, and strategic staffing.
              </p>
            </button>

            {/* Tab 3: HRIS Implementation */}
            <button
              onClick={() => setActiveTab('hris')}
              className={`p-6 rounded-2xl text-left border transition-all duration-500 relative overflow-hidden group select-none ${
                activeTab === 'hris'
                  ? 'bg-white/5 border-brand-gold shadow-[0_15px_30px_-5px_rgba(200,155,74,0.15)]'
                  : 'bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
              }`}
            >
              {activeTab === 'hris' && (
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-gold" />
              )}
              <div className="flex items-center gap-4 mb-3">
                <div className={`p-2.5 rounded-xl border transition-colors ${
                  activeTab === 'hris' ? 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold' : 'bg-white/5 border-white/10 text-white'
                }`}>
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg font-outfit">HRIS Implementation</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Modernize spreadsheet-heavy structures with robust, cloud-based configurations customized for Sri Lankan operations.
              </p>
            </button>

          </div>

          {/* Right Column: Visual Displays (Dynamic tab switching) */}
          <div className="lg:col-span-8 w-full">
            <AnimatePresence mode="wait">
              
              {/* DISPLAY 1: INTERACTIVE POWER BI DASHBOARD MOCKUP */}
              {activeTab === 'powerbi' && (
                <motion.div
                  key="powerbi"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="bg-brand-dark/90 rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative Dashboard Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Live Power BI Integration</span>
                      </div>
                      <h4 className="text-xl font-bold font-outfit text-white">Executive HR Analytics Dashboard</h4>
                    </div>
                    
                    {/* Department Toggles */}
                    <div className="flex flex-wrap gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5">
                      {['All', 'Engineering', 'Operations', 'Sales'].map((dept) => (
                        <button
                          key={dept}
                          onClick={() => setDashboardDept(dept)}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold font-outfit transition-all duration-300 ${
                            dashboardDept === dept
                              ? 'bg-brand-gold text-brand-navy shadow-sm'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4 KPI Cards Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-left">
                      <span className="text-[10px] text-white/50 uppercase font-semibold font-outfit mb-1 block">Total Headcount</span>
                      <span className="text-2xl font-black font-outfit text-white leading-none block">{deptData.headcount}</span>
                      <span className="text-[9px] text-emerald-400 mt-1 block">▲ +4.2% Month-over-Month</span>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-left">
                      <span className="text-[10px] text-white/50 uppercase font-semibold font-outfit mb-1 block">Attrition Rate</span>
                      <span className="text-2xl font-black font-outfit text-brand-gold leading-none block">{deptData.attrition}</span>
                      <span className="text-[9px] text-white/40 mt-1 block">Sri Lanka Avg: 7.2%</span>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-left">
                      <span className="text-[10px] text-white/50 uppercase font-semibold font-outfit mb-1 block">L&D Budget Allocation</span>
                      <span className="text-2xl font-black font-outfit text-white leading-none block">{deptData.ldBudget}</span>
                      <span className="text-[9px] text-white/40 mt-1 block">94.2% ROI Efficiency</span>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-left">
                      <span className="text-[10px] text-white/50 uppercase font-semibold font-outfit mb-1 block">Open Roles</span>
                      <span className="text-2xl font-black font-outfit text-white leading-none block">{deptData.openRoles}</span>
                      <span className="text-[9px] text-brand-gold/80 mt-1 block">Avg Time-to-Fill: 18 days</span>
                    </div>

                  </div>

                  {/* Primary Metrics Graph & Performance Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Performance Progress Bars (Left) */}
                    <div className="md:col-span-7 bg-white/[0.01] border border-white/5 rounded-xl p-4 text-left flex flex-col justify-between gap-4">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-white/60 font-outfit mb-2">Key Quality Performance Indicators</h5>
                      
                      <div className="space-y-4">
                        {deptData.metrics.map((metric) => (
                          <div key={metric.name}>
                            <div className="flex justify-between text-xs font-semibold mb-1 text-white/90">
                              <span>{metric.name}</span>
                              <span>{metric.score}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${metric.score}%` }}
                                transition={{ duration: 0.5 }}
                                className={`h-full rounded-full ${metric.color}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Growth Chart Projection Simulation (Right) */}
                    <div className="md:col-span-5 bg-white/[0.01] border border-white/5 rounded-xl p-4 text-left flex flex-col justify-between">
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-white/60 font-outfit mb-1">QoQ Performance Projection</h5>
                        <p className="text-[10px] text-white/40 mb-4">Calculated based on optimized structures</p>
                      </div>

                      {/* Bar graph representation */}
                      <div className="h-32 flex items-end justify-around gap-2 px-2">
                        {deptData.growth.map((bar) => (
                          <div key={bar.label} className="flex flex-col items-center w-full h-full justify-end">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${bar.value * 0.8}%` }}
                              transition={{ duration: 0.5 }}
                              className="w-8 bg-gradient-to-t from-brand-gold/40 to-brand-gold rounded-t-md relative group"
                            >
                              {/* Hover Tooltip */}
                              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-brand-navy text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                                {bar.value}%
                              </div>
                            </motion.div>
                            <span className="text-[10px] text-white/40 font-bold mt-2">{bar.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="mt-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-xs leading-relaxed max-w-lg">
                      *This dashboard is a fully interactive simulation of the bespoke enterprise Power BI reports we design and build for clients.
                    </p>
                    <Button
                      variant="primary"
                      onClick={onOpenBooking}
                      className="px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 group whitespace-nowrap shadow-md self-stretch sm:self-auto"
                    >
                      <span>Deploy Custom Dashboards</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>

                </motion.div>
              )}

              {/* DISPLAY 2: VIRTUAL HR MANAGER DETAIL MOCKUP */}
              {activeTab === 'virtualhr' && (
                <motion.div
                  key="virtualhr"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="bg-brand-dark/90 rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl relative text-left"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Premium HR Leadership</span>
                      <h4 className="text-xl font-bold font-outfit text-white mt-1">Virtual HR Manager Partnership</h4>
                    </div>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-brand-gold border border-brand-gold/30">Senior Level Officer</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h5 className="text-lg font-bold font-outfit text-white mb-4">Dedicated, High-Impact HR Director</h5>
                      <p className="text-white/70 text-sm leading-relaxed mb-6">
                        Ambition requires leadership. Our Virtual HR Manager program pairs your organization with an experienced HR Director backed by a fully staffed administrative operations office. Perfect for companies scaling from 50 to 500+ employees.
                      </p>

                      <ul className="space-y-3.5">
                        {[
                          "Bespoke Strategic Staffing & Succession Roadmaps",
                          "Continuous Compliance & Shop and Office Act Audits",
                          "Employee Relations Oversight & Executive Calibrations",
                          "Complete Grievance & Disciplinary Infrastructure Support"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                            <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Card showing the Virtual team ecosystem */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-[300px]">
                      
                      <div className="flex justify-between items-start mb-6">
                        <Users2 className="w-8 h-8 text-brand-gold" />
                        <div className="text-right">
                          <span className="text-[10px] uppercase text-white/50 block font-semibold">Availability</span>
                          <span className="text-xs font-bold text-white block">24/7 Priority Emergency Desk</span>
                        </div>
                      </div>

                      {/* Diagram representation */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                          <div className="w-7 h-7 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold text-xs font-outfit">H</div>
                          <div className="text-left leading-tight">
                            <p className="text-xs font-bold text-white">Dedicated Sr. HR Partner</p>
                            <p className="text-[10px] text-white/50">Strategy, Auditing & Management</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                          <div className="w-7 h-7 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center font-bold text-xs font-outfit border border-brand-gold/30">O</div>
                          <div className="text-left leading-tight">
                            <p className="text-xs font-bold text-white">Back-Office Operations Team</p>
                            <p className="text-[10px] text-white/50">Admin, Payroll, Contracts & Files</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button 
                          variant="primary" 
                          onClick={onOpenBooking}
                          className="w-full text-sm font-bold"
                        >
                          Appoint Your Virtual HR Manager
                        </Button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}

              {/* DISPLAY 3: HRIS IMPLEMENTATION DETAIL MOCKUP */}
              {activeTab === 'hris' && (
                <motion.div
                  key="hris"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="bg-brand-dark/90 rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl relative text-left"
                >
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">Cloud Modernization</span>
                      <h4 className="text-xl font-bold font-outfit text-white mt-1">HRIS Implementation Blueprint</h4>
                    </div>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-brand-gold border border-brand-gold/30">End-to-End Delivery</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h5 className="text-lg font-bold font-outfit text-white mb-4">Digitize & Scale Without Spreadsheets</h5>
                      <p className="text-white/70 text-sm leading-relaxed mb-6">
                        Manual spreadsheets fail under pressure. We design, configure, and migrate your entire workforce database to an advanced cloud HRIS. Experience frictionless leave management, automated attendance logging, and clear employee self-service records.
                      </p>

                      <ul className="space-y-3.5">
                        {[
                          "Customized Platform Configuration (OrangeHRM, Zoho, Custom)",
                          "Seamless Employee File Migration & Verification",
                          "Leave, Attendance, & OT System Automation",
                          "Continuous System Administration & Technical Training"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                            <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step-by-Step implementation flowchart */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-[300px]">
                      
                      <div className="flex justify-between items-start mb-4">
                        <Brain className="w-8 h-8 text-brand-gold" />
                        <div className="text-right">
                          <span className="text-[10px] uppercase text-white/50 block font-semibold">Delivery Time</span>
                          <span className="text-xs font-bold text-white block">4 to 6 Weeks Integration</span>
                        </div>
                      </div>

                      {/* Flowchart steps */}
                      <div className="relative border-l border-white/10 pl-6 ml-2 space-y-4">
                        <div className="relative">
                          <span className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-brand-gold flex items-center justify-center text-[10px] text-brand-navy font-bold font-outfit">1</span>
                          <h6 className="text-xs font-bold text-white">System Architecture Design</h6>
                          <p className="text-[10px] text-white/40">Custom mapping of leave rules and shifts</p>
                        </div>
                        <div className="relative">
                          <span className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-brand-navy font-bold font-outfit">2</span>
                          <h6 className="text-xs font-bold text-white">Migration & Cleanse</h6>
                          <p className="text-[10px] text-white/40">Automated loading of history & files</p>
                        </div>
                        <div className="relative">
                          <span className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] text-brand-navy font-bold font-outfit">3</span>
                          <h6 className="text-xs font-bold text-white">Go-Live & Support desk</h6>
                          <p className="text-[10px] text-white/40">Employee training and desk support</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button 
                          variant="primary" 
                          onClick={onOpenBooking}
                          className="w-full text-sm font-bold"
                        >
                          Request Custom Demo Blueprint
                        </Button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FlagshipServices;
