import React from "react";

export default function BulkCallout() {
  const whatsappUrl = "https://wa.me/94764095180?text=Hi%20Seagull%20Mart,%20I'm%20interested%20in%20hearing%20more%20about%20your%20wholesale%20bulk%20packet%20offers%20for%20chocolates/toffees.";

  return (
    <section id="deals" className="py-16 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="relative overflow-hidden gradient-chocolate-dark text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-primary-dark/50">
        
        {/* Animated decorative circles */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/25 rounded-full blur-3xl pointer-events-none animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none animate-float-delayed" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-left">
            {/* Gold Badge */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black bg-gold text-text-primary uppercase tracking-widest mb-6 shadow-md border border-white/20">
              ✨ Wholesale Bulk Deals
            </span>

            <h3 className="font-poppins text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Planning a Party, Gift or Event?
            </h3>
            
            <p className="mt-4 text-base text-white/90 leading-relaxed max-w-xl">
              We sell full retail bulk chocolate and toffee packets at wholesale-competitive prices. Get your favorite imported international brands in bulk and save big!
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/95">
              <li className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-6 h-6 bg-gold/25 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Genuine Imported Brands</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="flex-shrink-0 w-6 h-6 bg-gold/25 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Special Event Rates</span>
              </li>
            </ul>
          </div>

          <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-10 py-5 bg-gold hover:bg-gold/95 text-text-primary font-black rounded-2xl shadow-xl hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 animate-glow-gold text-base"
              id="bulk-whatsapp-cta"
            >
              📊 Inquire Wholesale Rates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

