import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  subtitle, 
  bullets = [], 
  expandedContent = '',
  icon: IconComponent, 
  index 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`group relative flex flex-col justify-between bg-white rounded-2xl p-6 md:p-8 border border-brand-navy/5 shadow-float hover:shadow-float-hover transition-all duration-500 hover:-translate-y-2.5 overflow-hidden`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Decorative Top Accent Line (Gold) */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Background Radial Glow */}
      <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-brand-gold/5 blur-2xl group-hover:bg-brand-gold/10 transition-colors duration-500" />

      <div>
        {/* Icon & Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-all duration-500 shadow-sm">
            {IconComponent && <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:rotate-6" />}
          </div>
          <h3 className="text-xl font-bold text-brand-navy leading-tight">{title}</h3>
        </div>

        {/* Short Description */}
        <p className="text-brand-navy/70 text-sm md:text-base mb-6 leading-relaxed">
          {subtitle}
        </p>

        {/* Custom Bullet Points with Styled Checkmarks */}
        {bullets.length > 0 && (
          <ul className="space-y-2.5 mb-6">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-brand-navy/80">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-gold mt-2" />
                <span className="leading-tight">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Expandable Section for Detailed HR Insights */}
      {expandedContent && (
        <div className="mt-4 pt-4 border-t border-brand-navy/5">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-brand-navy/60 hover:text-brand-gold transition-colors duration-300"
          >
            <span>{isExpanded ? 'Hide Details' : 'Read Deep Analysis'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4 text-brand-gold" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          <div 
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? 'max-h-48 mt-3 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-sm text-brand-navy/70 leading-relaxed bg-brand-light/50 p-3 rounded-lg border border-brand-navy/5">
              {expandedContent}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
