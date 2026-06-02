import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Check, AlertCircle, Calendar, 
  ChevronRight, ChevronLeft, Building, 
  Users2, ShieldCheck, HeartPulse, BadgeAlert
} from 'lucide-react';
import Button from './Button';

const BookingWizard = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'Technology',
    contactEmail: '',
    headcount: '51-100',
    challenges: [],
    bookingDate: '',
    bookingTime: '10:00 AM'
  });
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const industries = [
    'Technology & IT',
    'Manufacturing & Apparel',
    'Hospitality & Tourism',
    'Banking & Finance',
    'Retail & E-commerce',
    'Healthcare',
    'Other'
  ];

  const headcountRanges = [
    { label: '1 - 20 Employees (Micro Startup)', value: '1-20' },
    { label: '21 - 50 Employees (Early Stage Growth)', value: '21-50' },
    { label: '51 - 100 Employees (Mid-Market Enterprise)', value: '51-100' },
    { label: '100+ Employees (Large Scale Organization)', value: '100+' }
  ];

  const challengeOptions = [
    { label: 'Complicated Monthly Payroll Runs', value: 'payroll' },
    { label: 'Shop & Office Act Compliance Risks', value: 'compliance' },
    { label: 'High Employee Attrition & Turnover', value: 'attrition' },
    { label: 'Spreadsheet Bloat (Need Cloud HRIS)', value: 'hris' },
    { label: 'Learning & Development Gaps', value: 'ld' }
  ];

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChallengeToggle = (value) => {
    setFormData((prev) => {
      const alreadySelected = prev.challenges.includes(value);
      const newChallenges = alreadySelected
        ? prev.challenges.filter((c) => c !== value)
        : [...prev.challenges, value];
      return { ...prev, challenges: newChallenges };
    });
  };

  // Automated custom score calculator based on inputs
  const calculateHealthScore = () => {
    let baseScore = 100;
    const challengeCount = formData.challenges.length;
    
    // Each challenge reduces score
    baseScore -= challengeCount * 12;

    // High headcount with issues is riskier
    if (formData.headcount === '100+' && challengeCount > 1) {
      baseScore -= 15;
    }
    if (formData.challenges.includes('compliance')) {
      baseScore -= 10; // Compliance is heavy risk
    }

    return Math.max(15, baseScore);
  };

  const healthScore = calculateHealthScore();
  const getRiskLevel = (score) => {
    if (score >= 80) return { level: 'Low Risk', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20', desc: 'Your HR operations appear stable. Minor optimizations can increase output.' };
    if (score >= 50) return { level: 'Moderate Risk', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20', desc: 'Identified key compliance and structural vulnerabilities. Action recommended.' };
    return { level: 'Critical High Risk', color: 'text-rose-500 bg-rose-500/10 border-rose-500/20', desc: 'Statutory compliance and operational bottlenecks found. Requires immediate audit.' };
  };

  const risk = getRiskLevel(healthScore);

  const nextStep = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-brand-navy/60 backdrop-blur-md"
      />

      {/* Main Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 15 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-[#F8F8F8] text-brand-navy w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-brand-navy/5 z-10 relative flex flex-col justify-between max-h-[92vh] md:max-h-[85vh] text-left"
      >
        
        {/* Modal Header */}
        <div className="bg-brand-navy text-white px-6 md:px-8 py-5 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
          
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold font-outfit">HR Assessment Wizard</h3>
            <p className="text-white/60 text-xs mt-0.5">Custom organizational diagnosis & scheduling</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Only visible if not fully finished) */}
        {!isCompleted && (
          <div className="w-full bg-white border-b border-brand-navy/5 flex">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s}
                className={`flex-1 text-center py-2.5 text-xs font-bold font-outfit border-b-2 transition-all duration-300 ${
                  s === step 
                    ? 'border-brand-gold text-brand-gold bg-brand-gold/5' 
                    : s < step 
                      ? 'border-brand-navy text-brand-navy bg-brand-navy/5' 
                      : 'border-transparent text-brand-navy/40'
                }`}
              >
                Step {s}
              </div>
            ))}
          </div>
        )}

        {/* Modal Content / Forms */}
        <div className="flex-grow p-6 md:p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            
            {/* SUCCESS WINDOW */}
            {isCompleted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-6 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black font-outfit text-brand-navy mb-3">Booking Confirmed!</h4>
                <p className="text-brand-navy/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  Excellent! We have generated your preliminary HR score and secured your assessment date. A Google calendar invitation with join links has been dispatched to your contact email.
                </p>

                {/* Structured Simulated Calendar Ticket */}
                <div className="w-full max-w-md bg-white border border-brand-navy/10 rounded-2xl p-5 text-left shadow-sm">
                  <div className="flex justify-between items-start border-b border-brand-navy/5 pb-4 mb-4">
                    <div>
                      <span className="text-[10px] text-brand-gold uppercase font-bold tracking-wider">Scheduled Appointment</span>
                      <h5 className="font-bold text-sm text-brand-navy">{formData.companyName} Diagnostic Audit</h5>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-navy text-white text-[9px] font-bold font-outfit uppercase">Confirmed</span>
                  </div>

                  <div className="space-y-3.5 text-xs text-brand-navy/80">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span>{formData.bookingDate} at {formData.bookingTime} (Colombo Time)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span>Serandip virtual audit pipeline</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      <span>Designated Partner: <strong className="text-brand-navy">Mr. R. de Silva (Principal Consultant)</strong></span>
                    </div>
                  </div>
                </div>

                <Button variant="primary" onClick={onClose} className="mt-8 px-6 py-2.5 rounded-lg text-sm">
                  Close Wizard
                </Button>
              </motion.div>
            ) : (
              /* FORM STEP WINDOWS */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* STEP 1: COMPANY DATA */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 text-brand-navy mb-6">
                      <Building className="w-5 h-5 text-brand-gold" />
                      <h4 className="text-lg font-bold font-outfit">Company & Contact Information</h4>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-navy/80 block">Company Registered Name</label>
                      <input 
                        type="text"
                        name="companyName"
                        required
                        placeholder="e.g. Serandip Enterprises Pvt Ltd"
                        value={formData.companyName}
                        onChange={handleTextChange}
                        className="w-full bg-white border border-brand-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors shadow-inner"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-navy/80 block">Industry Sector</label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleTextChange}
                          className="w-full bg-white border border-brand-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        >
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-brand-navy/80 block">Corporate Contact Email</label>
                        <input 
                          type="email"
                          name="contactEmail"
                          required
                          placeholder="e.g. director@company.com"
                          value={formData.contactEmail}
                          onChange={handleTextChange}
                          className="w-full bg-white border border-brand-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors shadow-inner"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: HEADCOUNT & OPERATIONS */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 text-brand-navy mb-6">
                      <Users2 className="w-5 h-5 text-brand-gold" />
                      <h4 className="text-lg font-bold font-outfit">Workforce Demographics</h4>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-semibold text-brand-navy/80 block">Total Active Employee Headcount</label>
                      <div className="grid grid-cols-1 gap-2.5">
                        {headcountRanges.map((range) => (
                          <label 
                            key={range.value}
                            className={`flex items-center justify-between p-3.5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.headcount === range.value
                                ? 'bg-brand-navy/5 border-brand-navy text-brand-navy'
                                : 'bg-white border-brand-navy/10 hover:border-brand-navy/20 text-brand-navy/70'
                            }`}
                          >
                            <span className="text-sm font-semibold pr-2">{range.label}</span>
                            <input 
                              type="radio" 
                              name="headcount"
                              value={range.value}
                              checked={formData.headcount === range.value}
                              onChange={handleTextChange}
                              className="sr-only"
                            />
                            <div className={`w-4 h-4 rounded-full border flex flex-shrink-0 items-center justify-center ${
                              formData.headcount === range.value ? 'border-brand-navy bg-brand-navy text-white' : 'border-brand-navy/20'
                            }`}>
                              {formData.headcount === range.value && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: WORKFORCE CHALLENGES */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 text-brand-navy mb-6">
                      <BadgeAlert className="w-5 h-5 text-brand-gold" />
                      <h4 className="text-lg font-bold font-outfit">Primary Workforce Challenges</h4>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-semibold text-brand-navy/80 block">Select all items currently impacting operations:</label>
                      <div className="grid grid-cols-1 gap-2.5">
                        {challengeOptions.map((opt) => {
                          const selected = formData.challenges.includes(opt.value);
                          return (
                            <button
                              type="button"
                              key={opt.value}
                              onClick={() => handleChallengeToggle(opt.value)}
                              className={`flex items-center justify-between p-3.5 rounded-xl border-2 transition-all duration-300 text-left ${
                                selected
                                  ? 'bg-brand-gold/5 border-brand-gold text-brand-navy'
                                  : 'bg-white border-brand-navy/10 hover:border-brand-navy/20 text-brand-navy/70'
                              }`}
                            >
                              <span className="text-sm font-semibold pr-2">{opt.label}</span>
                              <div className={`w-5 h-5 rounded-lg border flex flex-shrink-0 items-center justify-center ${
                                selected ? 'border-brand-gold bg-brand-gold text-brand-navy' : 'border-brand-navy/20'
                              }`}>
                                {selected && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: HEALTH DIAGNOSIS & DATE LOCK */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 text-brand-navy mb-5">
                      <HeartPulse className="w-5 h-5 text-brand-gold" />
                      <h4 className="text-lg font-bold font-outfit">Workforce Health Analysis</h4>
                    </div>

                    {/* Score display block */}
                    <div className={`border rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center mb-6 ${risk.color}`}>
                      <div className="flex-shrink-0 text-center">
                        <span className="text-[10px] uppercase font-bold tracking-widest block text-brand-navy/60">Audit Health Score</span>
                        <span className="text-3xl font-black font-outfit leading-none">{healthScore}/100</span>
                      </div>
                      <div className="text-left">
                        <h5 className="font-bold text-sm uppercase tracking-wider mb-1">{risk.level}</h5>
                        <p className="text-xs leading-relaxed opacity-90">{risk.desc}</p>
                      </div>
                    </div>

                    <div className="border-t border-brand-navy/5 pt-4">
                      <h5 className="text-sm font-bold font-outfit text-brand-navy mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-gold" />
                        <span>Lock In Your Complimentary Preliminary Audit</span>
                      </h5>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-brand-navy/80 block">Select Audit Date</label>
                          <input 
                            type="date"
                            name="bookingDate"
                            required
                            value={formData.bookingDate}
                            onChange={handleTextChange}
                            className="w-full bg-white border border-brand-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-brand-navy/80 block">Preferred Meeting Time</label>
                          <select
                            name="bookingTime"
                            value={formData.bookingTime}
                            onChange={handleTextChange}
                            className="w-full bg-white border border-brand-navy/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                          >
                            <option value="09:00 AM">09:00 AM (Colombo Time)</option>
                            <option value="10:00 AM">10:00 AM (Colombo Time)</option>
                            <option value="11:30 AM">11:30 AM (Colombo Time)</option>
                            <option value="02:00 PM">02:00 PM (Colombo Time)</option>
                            <option value="04:00 PM">04:00 PM (Colombo Time)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </form>
            )}

          </AnimatePresence>
        </div>

        {/* Modal Footer Controls */}
        {!isCompleted && (
          <div className="bg-white border-t border-brand-navy/5 px-6 py-4 flex justify-between items-center gap-4">
            <Button
              variant="secondary"
              onClick={prevStep}
              className={`px-4 py-2 text-xs md:text-sm font-semibold flex items-center gap-1 border-none ${
                step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>

            {step < 4 ? (
              <Button
                variant="primary"
                onClick={nextStep}
                disabled={step === 1 && (!formData.companyName || !formData.contactEmail)}
                className={`px-5 py-2.5 text-xs md:text-sm font-semibold flex items-center gap-1 ${
                  (step === 1 && (!formData.companyName || !formData.contactEmail)) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!formData.bookingDate}
                className={`px-5 sm:px-6 py-2.5 text-xs md:text-sm font-semibold flex items-center gap-1.5 ${
                  !formData.bookingDate ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="hidden sm:inline">Secure Slot & Generate Audit</span>
                <span className="inline sm:hidden">Confirm Assessment</span>
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              </Button>
            )}
          </div>
        )}

      </motion.div>
    </div>
  );
};

export default BookingWizard;
