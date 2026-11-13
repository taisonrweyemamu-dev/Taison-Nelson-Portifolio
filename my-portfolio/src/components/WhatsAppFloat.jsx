
import React from 'react';
import { MessageCircle } from 'lucide-react'; // Hakikisha una lucide-react au unaweza kutumia SVG

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/255617925930?text=Hello%2C%20nimeona%20portfolio%20yako%20nataka%20tuzungumze."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      {/* Icon ya WhatsApp (SVG) */}
      <svg 
        className="w-7 h-7 fill-current" 
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
    </a>
  );
}
