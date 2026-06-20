import React from "react";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import BulkCallout from "@/components/BulkCallout";
import TrustPoints from "@/components/TrustPoints";
import VisitContact from "@/components/VisitContact";
import StickyWhatsAppButton from "@/components/StickyWhatsAppButton";

export default function Home() {
  const whatsappUrl = "https://wa.me/94764095180?text=Hi%20Seagull%20Mart,%20I'm%20interested%20in%20inquiring%20about%20your%20imported%20sweets.";

  return (
    <div className="w-full min-h-screen bg-subtle-pattern flex flex-col justify-between relative">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full glass-panel shadow-sm border-b border-primary/5">
        {/* Top Accent Gradient Bar */}
        <div className="w-full h-1 bg-gradient-to-r from-primary via-accent to-gold" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🍫</span>
            <span className="font-poppins font-extrabold text-base tracking-wider text-text-primary">
              SEAGULL <span className="text-primary font-bold">MART</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-extrabold uppercase tracking-wider text-text-secondary">
            <a href="#categories" className="hover:text-primary hover:scale-105 transition-all duration-200">Categories</a>
            <a href="#deals" className="hover:text-primary hover:scale-105 transition-all duration-200">Bulk Deals</a>
            <a href="#contact" className="hover:text-primary hover:scale-105 transition-all duration-200">Store Info</a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark shadow-md hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            id="nav-whatsapp-cta"
          >
            Inquire Now
          </a>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <Hero />

        {/* Categories */}
        <CategoryStrip />

        {/* Trust Points */}
        <TrustPoints />

        {/* Bulk Deals */}
        <BulkCallout />

        {/* Map & Contact info */}
        <VisitContact />
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-primary/5 to-primary/10 border-t border-primary/10 px-6 py-12 text-center text-sm text-text-secondary">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-center items-center gap-1.5">
            <span className="text-2xl">🍫</span>
            <span className="font-poppins font-extrabold text-lg tracking-wide text-text-primary font-bold">
              SEAGULL <span className="text-primary">MART</span>
            </span>
          </div>
          
          <p className="leading-relaxed max-w-md mx-auto text-xs sm:text-sm">
            233 Colombo Main Rd, Galle 80000, Sri Lanka
            <br />
            Phone: <a href="tel:+94764095180" className="underline hover:text-primary font-bold transition-colors duration-150">+94 76 409 5180</a>
          </p>

          <p className="text-[11px] sm:text-xs text-text-secondary/80 leading-normal max-w-lg mx-auto italic">
            "Prices on imported items may vary due to market conditions — message us for current pricing."
          </p>

          <div className="pt-6 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center text-xs text-text-secondary/60 gap-4">
            <p>&copy; {new Date().getFullYear()} seagullmart.lk. All rights reserved.</p>
            <p>Vibrant & Premium Redesign for Travelers & Locals in Galle.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <StickyWhatsAppButton />
    </div>
  );
}


