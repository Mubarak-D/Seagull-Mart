import React from "react";

const categories = [
  {
    name: "Imported Chocolates",
    description: "Premium European & foreign chocolates, bars, and boxes.",
    icon: "🍫",
    tag: "Top Choice",
    tagColor: "bg-accent/15 text-accent border border-accent/25",
    message: "Hi Seagull Mart, I'm interested in your imported chocolates.",
  },
  {
    name: "Coffee & Espresso",
    description: "Rich blends and foreign espresso grounds for coffee lovers.",
    icon: "☕",
    tag: "Fresh Stock",
    tagColor: "bg-primary/10 text-primary border border-primary/20",
    message: "Hi Seagull Mart, I'm interested in your imported coffee & espresso selection.",
  },
  {
    name: "Nuts & Dried Fruit",
    description: "High-quality imported almonds, pistachios, dates & snacks.",
    icon: "🥜",
    tag: "Healthy Pick",
    tagColor: "bg-green-100 text-green-800 border border-green-200",
    message: "Hi Seagull Mart, I'm interested in your nuts & dried fruits.",
  },
  {
    name: "Bulk Packets",
    description: "Wholesale-priced chocolate & toffee bulk bags. Great for gifts!",
    icon: "📦",
    tag: "Best Value",
    tagColor: "bg-gold/15 text-text-primary border border-gold/30",
    message: "Hi Seagull Mart, I'm interested in wholesale/bulk packets of chocolates.",
  },
];

export default function CategoryStrip() {
  return (
    <section id="categories" className="py-20 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
      {/* Decorative side blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-accent mb-2">
          Delicious Offerings
        </span>
        <h2 className="font-poppins text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
          Explore Our Catalog
        </h2>
        <div className="h-1 w-16 bg-primary mx-auto mt-4 rounded-full" />
        <p className="text-text-secondary mt-4 text-sm sm:text-base leading-relaxed">
          Tap any category below to immediately browse our available selection and inquire via WhatsApp. We source only genuine international brands.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => {
          const whatsappUrl = `https://wa.me/94764095180?text=${encodeURIComponent(cat.message)}`;
          return (
            <a
              key={idx}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between p-6 glass-card glass-card-hover rounded-2xl relative overflow-hidden group shadow-sm"
              id={`cat-${idx}`}
            >
              {/* Card top decorative accent lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Container with glowing highlight */}
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-primary/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {cat.icon}
                  </div>
                  {/* Dynamic Category Tag */}
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${cat.tagColor}`}>
                    {cat.tag}
                  </span>
                </div>

                <h3 className="font-poppins text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                  {cat.name}
                </h3>
                <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-primary/5 flex items-center text-xs font-bold text-accent group-hover:text-primary transition-colors duration-200">
                Inquire on WhatsApp
                <svg
                  className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

