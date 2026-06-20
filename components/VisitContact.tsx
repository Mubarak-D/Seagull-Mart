import React from "react";

export default function VisitContact() {
  const mapUrl = "https://maps.google.com/maps?q=Seagull%20Mart%20Chocolate%20Shop,%20233%20Colombo%20Main%20Rd,%20Galle%2080000,%20Sri%20Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8" id="contact">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
          Find Us
        </span>
        <h2 className="font-poppins text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
          Visit or Contact Us
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full" />
        <p className="text-text-secondary mt-4 text-sm sm:text-base leading-relaxed">
          Stop by our retail store in Galle to browse the full selection or order online with regional delivery options.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Info & Hours */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass-card border border-primary/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md">
          <div>
            <h3 className="font-poppins text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
              📍 Location Details
            </h3>
            <p className="text-text-primary font-bold text-base">
              Seagull Mart Chocolate Shop
            </p>
            <p className="text-text-secondary text-sm mt-2 leading-relaxed">
              233 Colombo Main Rd, Galle 80000, Sri Lanka
            </p>
            
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 bg-gold-light border border-gold/30 rounded-xl text-xs text-text-primary font-bold shadow-sm">
              <span>💳</span> Card Payments Accepted In-Store
            </div>
          </div>

          <div>
            <h3 className="font-poppins text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
              🕒 Store Operating Hours
            </h3>
            <div className="space-y-3.5 text-sm text-text-secondary">
              <div className="flex justify-between pb-2.5 border-b border-primary/5">
                <span className="font-medium">Monday – Thursday</span>
                <span className="font-bold text-text-primary">10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between pb-2.5 border-b border-primary/5">
                <span className="font-medium">Friday</span>
                <span className="font-bold text-text-primary flex flex-col items-end">
                  <span>2:00 PM – 9:00 PM</span>
                  <span className="text-[10px] text-accent font-semibold mt-0.5">(Midday Prayer Break)</span>
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday – Sunday</span>
                <span className="font-bold text-text-primary">10:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-primary/10 bg-accent-light/20 p-4 rounded-2xl border border-accent/5">
            <h4 className="font-poppins text-xs font-extrabold text-accent uppercase tracking-wider mb-2">
              ⚠️ Important Price Note
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed italic">
              "Due to market conditions, prices of imported items are subject to change without prior notice."
            </p>
          </div>
        </div>

        {/* Map Embed */}
        <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden border border-primary/15 shadow-md hover:shadow-xl transition-shadow duration-300">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "380px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for Seagull Mart Chocolate Shop"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

