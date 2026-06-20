"use client";

import React from "react";

export default function StickyWhatsAppButton() {
  const whatsappUrl = "https://wa.me/94764095180?text=Hi%20Seagull%20Mart,%20I'm%20interested%20in%20inquiring%20about%20imported%20chocolates%20and%20sweets.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:bg-whatsapp/90 hover:scale-105 active:scale-95 transition-all duration-300 group animate-glow-whatsapp"
      aria-label="Contact us on WhatsApp"
      id="whatsapp-sticky-btn"
    >
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.001-2.636-1.02-5.115-2.875-6.973C16.596 1.914 14.12 .89 11.48.889c-5.44 0-9.862 4.418-9.865 9.86-.001 1.776.475 3.51 1.378 5.04L2.01 21.57l6.05-1.586-.413.25zM19.1 15.607c-.3-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.94 1.18-.17.2-.34.225-.64.075-.303-.15-1.277-.47-2.433-1.502-.9-.8-1.507-1.79-1.684-2.09-.174-.3-.022-.465.13-.613.134-.133.3-.347.45-.52.15-.173.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.68-1.64-.93-2.245-.244-.59-.49-.51-.68-.52-.176-.01-.377-.01-.578-.01-.2 0-.527.075-.803.375-.276.3-1.055 1.03-1.055 2.516s1.08 2.917 1.23 3.117c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.175-1.43-.075-.13-.275-.205-.575-.355z" />
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-semibold">
        Chat with Us
      </span>
    </a>
  );
}

