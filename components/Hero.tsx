import React from "react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/94764095180?text=Hi%20Seagull%20Mart,%20I'm%20interested%20in%20viewing%20your%20latest%20imported%20chocolate%20catalog!";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background soft blur shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-12 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute -bottom-10 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Small Tag */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gold-light text-primary border border-gold/40 mb-6 uppercase tracking-wider shadow-sm animate-float">
            🍫 Galle's Premium Imported Sweets Hub
          </span>

          {/* Title */}
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-tight">
            Seagull Mart <br />
            <span className="text-primary font-extrabold bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
              Chocolate Shop
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl">
            Indulge in our exquisite collection of imported European chocolates, premium coffees, and international treats. Located in the heart of Galle, we bring world-class sweetness right to your hands.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md lg:max-w-none lg:justify-start justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp/90 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-whatsapp/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 animate-glow-whatsapp"
              id="hero-whatsapp-cta"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.001-2.636-1.02-5.115-2.875-6.973C16.596 1.914 14.12 .89 11.48.889c-5.44 0-9.862 4.418-9.865 9.86-.001 1.776.475 3.51 1.378 5.04L2.01 21.57l6.05-1.586-.413.25zM19.1 15.607c-.3-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.94 1.18-.17.2-.34.225-.64.075-.303-.15-1.277-.47-2.433-1.502-.9-.8-1.507-1.79-1.684-2.09-.174-.3-.022-.465.13-.613.134-.133.3-.347.45-.52.15-.173.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.68-1.64-.93-2.245-.244-.59-.49-.51-.68-.52-.176-.01-.377-.01-.578-.01-.2 0-.527.075-.803.375-.276.3-1.055 1.03-1.055 2.516s1.08 2.917 1.23 3.117c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.175-1.43-.075-.13-.275-.205-.575-.355z" />
              </svg>
              Order via WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-primary/20 hover:border-primary/40 text-text-primary hover:text-primary font-bold text-base rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              📍 Find Our Store
            </a>
          </div>
          
          <p className="text-xs text-text-secondary mt-4 flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            Active on WhatsApp (Avg response: &lt;5 mins)
          </p>
        </div>

        {/* Right Column: Creative Visual Display */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[360px] select-none mt-8 lg:mt-0">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Backdrop glowing rings */}
            <div className="absolute inset-0 border border-primary/5 rounded-full scale-110 animate-float" />
            <div className="absolute inset-4 border border-gold/10 rounded-full scale-95 animate-float-delayed" />
            
            {/* Center Master Card */}
            <div className="z-10 w-48 h-48 bg-gradient-to-tr from-primary to-accent rounded-3xl shadow-2xl p-6 flex flex-col justify-between text-white border border-white/20 relative animate-float">
              <div className="absolute top-0 right-0 bg-gold text-text-primary text-[10px] font-extrabold px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
                Luxury
              </div>
              <div className="text-4xl">🎁</div>
              <div>
                <h4 className="font-poppins font-bold text-sm tracking-wide">ASSORTED BOX</h4>
                <p className="text-[10px] text-white/80 mt-1">Premium Imported Mix</p>
              </div>
            </div>

            {/* Floating Element 1: Chocolate Bar */}
            <div className="absolute -top-4 -left-6 z-20 glass-card p-3 rounded-2xl shadow-lg border border-primary/10 flex items-center gap-2 animate-float-delayed hover:scale-105 transition-transform duration-200">
              <span className="text-2xl">🍫</span>
              <div>
                <p className="text-[10px] font-bold text-text-primary">Fine Chocolate</p>
                <p className="text-[8px] text-text-secondary">Premium European</p>
              </div>
            </div>

            {/* Floating Element 2: Coffee Cup */}
            <div className="absolute top-1/2 -right-8 z-20 glass-card p-3 rounded-2xl shadow-lg border border-primary/10 flex items-center gap-2 animate-float hover:scale-105 transition-transform duration-200">
              <span className="text-2xl">☕</span>
              <div>
                <p className="text-[10px] font-bold text-text-primary">Rich Coffee</p>
                <p className="text-[8px] text-text-secondary">Beans & Ground</p>
              </div>
            </div>

            {/* Floating Element 3: Gold Badge */}
            <div className="absolute -bottom-6 left-1/3 z-20 glass-card p-3 rounded-2xl shadow-lg border border-primary/10 flex items-center gap-2 animate-float hover:scale-105 transition-transform duration-200">
              <span className="text-2xl">🥜</span>
              <div>
                <p className="text-[10px] font-bold text-text-primary">Healthy Nuts</p>
                <p className="text-[8px] text-text-secondary">Dates & Almonds</p>
              </div>
            </div>
            
            {/* Small decorative bubbles */}
            <div className="absolute top-2 right-4 w-3 h-3 bg-accent/30 rounded-full animate-ping" />
            <div className="absolute bottom-8 left-0 w-2.5 h-2.5 bg-gold/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

