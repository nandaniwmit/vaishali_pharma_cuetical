import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface Props {
  onOpenWhatsAppOrder: () => void;
}

export const FloatingActions: React.FC<Props> = ({ onOpenWhatsAppOrder }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Cluster on Bottom Right */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto p-3 bg-white text-slate-700 hover:text-emerald-700 rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="pointer-events-auto flex items-center justify-center p-3.5 bg-[#0284C7] hover:bg-sky-700 text-white rounded-full shadow-lg hover:shadow-sky-500/30 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
          aria-label="Call Vaishali Pharmaceutical"
          title="Call Pharmacist"
        >
          <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </a>

        {/* Floating WhatsApp Button */}
        <button
          type="button"
          onClick={onOpenWhatsAppOrder}
          className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-[#0A8F6A] hover:bg-[#087355] text-white rounded-full shadow-xl hover:shadow-emerald-600/40 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
          aria-label="Order Medicines on WhatsApp"
          title="Order Medicines on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs md:text-sm font-bold tracking-wide hidden sm:inline">WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
