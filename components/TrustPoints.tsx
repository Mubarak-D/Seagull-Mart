import React from "react";

const trustPoints = [
  {
    title: "Unbeatable Pricing",
    description: "Highly competitive prices on all imported goods. Bulk buying discounts that beat generic supermarket pricing.",
    iconColor: "text-primary bg-primary/10 border-primary/20",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Loved by Customers",
    description: "Consistently praised across 30+ reviews for friendly, helpful customer service and safe regional delivery.",
    iconColor: "text-accent bg-accent/10 border-accent/20",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "100% Genuine Selection",
    description: "Directly imported European and international chocolates, coffees, snacks, and sweets, curated and well-organized.",
    iconColor: "text-gold bg-gold/15 border-gold/35",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function TrustPoints() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-gold/5 border-y border-primary/10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 p-6 rounded-2xl glass-card hover:bg-white/95 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 border border-primary/5 group"
            >
              {/* Glowing Icon Wrapper */}
              <div className={`p-3.5 rounded-full shrink-0 border flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 ${point.iconColor}`}>
                {point.icon}
              </div>
              <div>
                <h4 className="font-poppins text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                  {point.title}
                </h4>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

