import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  icon: IconComponent = null
}) => {
  // Brand color tokens applied using 60-30-10 rule
  const baseStyle = "relative inline-flex items-center justify-center font-outfit font-medium text-sm md:text-base px-6 py-3.5 rounded-xl transition-all duration-300 overflow-hidden outline-none select-none active:scale-[0.98]";
  
  const variants = {
    // 10% Gold Accent: Solid Gold CTA
    primary: "bg-brand-gold text-brand-navy font-semibold shadow-[0_4px_20px_-4px_rgba(200,155,74,0.4)] hover:shadow-[0_8px_30px_rgba(200,155,74,0.6)] hover:-translate-y-[2px] before:absolute before:inset-0 before:bg-white/10 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300",
    
    // 30% Navy: Outline with Navy Hover
    secondary: "border-2 border-brand-navy/20 text-brand-navy hover:border-brand-navy hover:bg-brand-navy hover:text-white hover:-translate-y-[2px] shadow-sm hover:shadow-md",
    
    // Solid Navy for Dark Backgrounds
    navy: "bg-brand-navy text-white shadow-md hover:bg-brand-navy/95 hover:shadow-lg hover:-translate-y-[2px]",
    
    // Gold Outline
    outlineGold: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy hover:-translate-y-[2px] shadow-sm hover:shadow-md",
    
    // Pure text with gold icon
    text: "text-brand-navy hover:text-brand-gold transition-colors inline-flex items-center gap-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {IconComponent && <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

export default Button;
