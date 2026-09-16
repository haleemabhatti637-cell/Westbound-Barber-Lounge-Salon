import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { STANDALONE_HTML_STRING } from './data/standaloneHtml';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>();
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceForBooking(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceForBooking(undefined);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col selection:bg-[#DC2626] selection:text-white font-sans">
      {/* Sticky Top Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with 3-image collage, badges, and primary CTAs */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Featured Services + Tabbed Grooming Categories */}
        <ServicesSection onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Lounge Experience & Amenities */}
        <AmenitiesSection onOpenBooking={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Portfolio of Precision */}
        <PortfolioSection />

        {/* Customer Reviews & Praises */}
        <ReviewsSection />

        {/* About & Brand Story */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Location, Google Map, Hours & Inquiries */}
        <LocationSection />
      </main>

      {/* Footer with Instagram & Quick Navigation */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceForBooking}
      />

      {/* Standalone Single-File HTML Code Modal */}
      <ExportHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        htmlContent={STANDALONE_HTML_STRING}
      />
    </div>
  );
}
