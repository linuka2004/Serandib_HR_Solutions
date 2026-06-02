import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Award, BarChart3, ShieldAlert, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const slides = [
  {
    id: 1,
    title: "Your Strategic Human Capital Partner in Sri Lanka",
    sinhala: "ශ්‍රී ලංකාවේ ඔබේ උපායමාර්ගික මානව ප්‍රාග්ධන සහකරු",
    description: "We engineer scalable HR infrastructures that align talent strategy with corporate growth, enabling Sri Lanka's leading enterprises to build world-class workforces.",
    icon: Award,
    badge: "Enterprise HR Excellence",
    gradient: "from-[#0A255C] via-[#071E4A] to-[#030D22]"
  },
  {
    id: 2,
    title: "Scale Safely with Bulletproof Compliance & Payroll",
    sinhala: "නෛතික අනුකූලතාවය සහ නිවැරදි වැටුප් කළමනාකරණය",
    description: "Navigate local labor laws effortlessly. Our expert compliance framework, comprehensive audits, and robust payroll automation provide 100% peace of mind.",
    icon: ShieldAlert,
    badge: "Regulatory & Compliance Advisory",
    gradient: "from-[#082E5C] via-[#071E4A] to-[#04122C]"
  },
  {
    id: 3,
    title: "Unlock Performance Through Data-Driven Talent Analytics",
    sinhala: "දත්ත මත පදනම් වූ මානව සම්පත් විශ්ලේෂණ",
    description: "Transform raw employee insights into strategic actionable intelligence. From customized HRIS architectures to advanced Power BI dashboards, we lead with data.",
    icon: BarChart3,
    badge: "Modern HR Tech Solutions",
    gradient: "from-[#103E70] via-[#071E4A] to-[#05183A]"
  }
];

const Hero = ({ onOpenBooking }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy pt-20 select-none touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      
      {/* Background Grid Pattern & Mesh Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(200,155,74,0.1)_0%,transparent_70%)] opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Graphic Mesh Orbs (Antigravity Feel) */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-gold/10 blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-navy/60 blur-[120px] animate-float-delayed pointer-events-none" />

      {/* Slide Content Carousel */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20 text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Slide Information */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start bg-white/5 border border-brand-gold/25 text-brand-gold text-xs uppercase tracking-widest font-bold py-1.5 px-3.5 rounded-full mb-6 shadow-sm backdrop-blur-sm animate-pulse-slow">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slides[current].badge}</span>
              </div>

              {/* Title - 30% Navy background, but highly readable and large on dark backdrop */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-extrabold text-white leading-[1.1] mb-4">
                {slides[current].title}
              </h1>

              {/* Sinhala Subtext (Refined styling with gold accents) */}
              <div className="border-l-2 border-brand-gold pl-4 py-1 mb-6 bg-white/[0.02] rounded-r-lg max-w-xl">
                <p className="text-brand-gold font-semibold text-base sm:text-lg leading-relaxed select-none">
                  {slides[current].sinhala}
                </p>
              </div>

              {/* Description */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
                {slides[current].description}
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                {/* 10% Gold Accent Solid CTA */}
                <Button 
                  variant="primary" 
                  onClick={onOpenBooking}
                  className="px-6 py-4 text-base font-semibold shadow-xl w-full sm:w-auto"
                >
                  Book Your Free HR Assessment
                </Button>
                
                {/* Outline CTA */}
                <Link to="/services" className="w-full sm:w-auto">
                  <Button 
                    variant="outlineGold" 
                    className="w-full sm:w-auto px-6 py-4 text-base bg-white/5 backdrop-blur-sm"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>

            </div>

            {/* Slide Visual Mockup Area (Antigravity Floating Card Display) */}
            <div className="lg:col-span-5 hidden lg:flex justify-center relative select-none">
              
              {/* Outer floating ring */}
              <div className="absolute inset-0 w-[420px] h-[420px] rounded-full border border-white/5 animate-float-delayed pointer-events-none" />

              {/* Floating Primary visual tile */}
              <div className="relative w-[380px] h-[400px] glass-panel-navy rounded-3xl p-8 border border-white/10 shadow-2xl animate-float flex flex-col justify-between">
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 flex items-center justify-center text-brand-gold border border-brand-gold/25">
                    {React.createElement(slides[current].icon, { className: "w-6 h-6" })}
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-gold" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="text-2xl font-bold font-outfit text-white mb-3">
                    Corporate Growth
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    A secure ecosystem that combines premium technology setups, localized workflows, and top-tier Sri Lankan talent solutions.
                  </p>
                </div>

                {/* Simulated Growth Chart Graphic */}
                <div className="w-full h-24 bg-white/5 border border-white/10 rounded-xl p-3 flex items-end gap-1.5 justify-between">
                  <div className="w-[10%] h-[30%] bg-brand-gold/20 rounded-t-sm" />
                  <div className="w-[10%] h-[45%] bg-brand-gold/30 rounded-t-sm" />
                  <div className="w-[10%] h-[40%] bg-brand-gold/30 rounded-t-sm" />
                  <div className="w-[10%] h-[60%] bg-brand-gold/50 rounded-t-sm" />
                  <div className="w-[10%] h-[55%] bg-brand-gold/50 rounded-t-sm" />
                  <div className="w-[10%] h-[75%] bg-brand-gold/75 rounded-t-sm" />
                  <div className="w-[10%] h-[90%] bg-brand-gold rounded-t-sm animate-pulse" />
                </div>
              </div>

              {/* Floating secondary decorative items */}
              <div className="absolute -bottom-8 -left-8 w-44 glass-panel rounded-2xl p-4 border border-white/20 shadow-xl animate-float-delayed flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-brand-gold font-bold text-xs">
                  99%
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-semibold text-brand-navy uppercase tracking-wider">Retention</p>
                  <p className="text-[9px] text-brand-navy/60 leading-none">Compliant Processes</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-36 glass-panel rounded-2xl p-4 border border-white/20 shadow-xl animate-float flex flex-col gap-2">
                <p className="text-[10px] font-bold text-brand-gold uppercase tracking-wider text-left">Audit Score</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-brand-navy font-outfit">A+</span>
                  <span className="text-[10px] text-brand-navy/50">Verified</span>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel controls - Navy with Gold details */}
        <div className="flex items-center gap-4 mt-12 md:mt-16 relative z-10 justify-start select-none">
          <button 
            onClick={prevSlide}
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 text-white/70"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 text-white/70"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
};

export default Hero;
