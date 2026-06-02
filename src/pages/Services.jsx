import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ComprehensiveSolutions from '../components/sections/ComprehensiveSolutions';
import BookingWizard from '../components/ui/BookingWizard';

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-brand-light flex flex-col justify-between">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-grow mt-20">
        <ComprehensiveSolutions onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking Wizard */}
      <BookingWizard isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
};

export default Services;
