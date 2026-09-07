import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  Filter, 
  Image as ImageIcon, 
  MapPin, 
  ShieldCheck, 
  Tag,
  Building,
  Layers
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SITE_CONFIG } from '../config/siteConfig';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  gradient: string;
  iconBg: string;
  tag: string;
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = [
    'All',
    'Storefront & Counter',
    'Medicine Shelves',
    'Medical Equipment',
    'Cold Storage',
    'Healthcare Products'
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Storefront Entrance & Signage',
      category: 'Storefront & Counter',
      desc: 'Prime frontage located at Ramesh Chowk, Old GT Road Aurangabad, directly visible with prominent medical signage.',
      gradient: 'from-emerald-800 to-teal-950',
      iconBg: 'bg-emerald-500',
      tag: 'Exterior View'
    },
    {
      id: 'g-2',
      title: 'Modern Retail Dispensing Counter',
      category: 'Storefront & Counter',
      desc: 'Clean, sanitized consultation desk with computerized billing systems and prescription verification terminal.',
      gradient: 'from-sky-800 to-slate-900',
      iconBg: 'bg-sky-500',
      tag: 'Dispensation Area'
    },
    {
      id: 'g-3',
      title: 'Systematic Allopathic Medicine Shelves',
      category: 'Medicine Shelves',
      desc: 'Alphabetically organized therapeutic racks categorized by salt, brand, and pharmacological action for zero dispensing delay.',
      gradient: 'from-teal-800 to-slate-900',
      iconBg: 'bg-teal-500',
      tag: 'Alphabetical Inventory'
    },
    {
      id: 'g-4',
      title: 'Medical Devices & Diagnostic Display',
      category: 'Medical Equipment',
      desc: 'Showcase of Omron BP monitors, Accu-Chek glucometers, nebulizers, pulse oximeters, and digital clinical thermometers.',
      gradient: 'from-indigo-900 to-slate-950',
      iconBg: 'bg-indigo-500',
      tag: 'Diagnostic Tools'
    },
    {
      id: 'g-5',
      title: 'Dedicated Biologicals Cold-Chain Refrigerator',
      category: 'Cold Storage',
      desc: 'Temperature-monitored medical refrigeration unit maintaining continuous 2°C to 8°C for insulins, vaccines, and biologics.',
      gradient: 'from-blue-900 to-cyan-950',
      iconBg: 'bg-cyan-500',
      tag: 'Cold-Chain Compliant'
    },
    {
      id: 'g-6',
      title: 'Pediatric Care & Baby Formula Section',
      category: 'Healthcare Products',
      desc: 'Comprehensive section featuring infant milk formulas, pediatric drops, diapering supplies, and hypoallergenic baby care.',
      gradient: 'from-amber-800 to-slate-900',
      iconBg: 'bg-amber-500',
      tag: 'Pediatric Health'
    },
    {
      id: 'g-7',
      title: 'Hospital & Surgical First Aid Supplies',
      category: 'Medical Equipment',
      desc: 'Sterile surgical dressings, povidone ointments, crepe bandages, IV infusion sets, and disposable medical gowns.',
      gradient: 'from-rose-900 to-slate-950',
      iconBg: 'bg-rose-500',
      tag: 'Surgical Racks'
    },
    {
      id: 'g-8',
      title: 'Nutritional Supplements & Daily Wellness',
      category: 'Healthcare Products',
      desc: 'Stocked shelves of high-potency multivitamins, calcium supplements, protein powders, and immunity boosters.',
      gradient: 'from-emerald-900 to-slate-950',
      iconBg: 'bg-emerald-600',
      tag: 'Nutraceuticals'
    },
    {
      id: 'g-9',
      title: 'Interior Customer Waiting & Consultation',
      category: 'Storefront & Counter',
      desc: 'Spacious, well-ventilated waiting corridor designed for patient comfort during prescription compilation.',
      gradient: 'from-slate-800 to-slate-950',
      iconBg: 'bg-slate-600',
      tag: 'Patient Lounge'
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (item: GalleryItem) => {
    setActiveLightbox(item);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
    setZoomLevel(1);
  };

  return (
    <div className="flex flex-col gap-16 pb-20">
      <SEOHead
        title="Store & Facility Gallery - Vaishali Pharmaceutical"
        description="View photos of Vaishali Pharmaceutical: storefront, medicine shelves, medical devices, cold-chain refrigeration, and dispensing counter in Aurangabad, Bihar."
        canonicalPath="/gallery"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Visual Tour</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Store & Facilities Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Take a visual tour inside our modern, organized pharmacy located on Old GT Road, Ramesh Chowk, near Sadar Hospital Aurangabad.
          </p>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0 ml-1 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Visual Card Art */}
              <div className={`h-52 w-full bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-[11px] font-semibold text-white border border-white/20">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition duration-200">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative Emblem & Title */}
                <div className="z-10 text-white">
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md`}>
                    VP
                  </div>
                  <h3 className="text-lg font-bold drop-shadow-xs">{item.title}</h3>
                </div>

                <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <span className="text-[11px] font-bold text-[#0A8F6A] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>Ramesh Chowk Store</span>
                  </span>
                  <span className="text-[#0A8F6A] font-bold group-hover:underline">Click to View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP LIGHTBOX MODAL WITH ZOOM */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
                  {activeLightbox.tag}
                </span>
                <h4 className="text-base font-bold text-white">{activeLightbox.title}</h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.0))}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 1.0))}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white ml-2"
                  title="Close Lightbox"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Display Canvas with Zoom */}
            <div className="relative min-h-[300px] sm:min-h-[380px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-8 overflow-hidden">
              <div 
                className={`w-full max-w-lg aspect-video rounded-2xl bg-gradient-to-br ${activeLightbox.gradient} p-8 flex flex-col justify-between shadow-2xl transition-transform duration-200 border border-white/20`}
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-xl">
                    VP
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/40 text-emerald-300 border border-white/10">
                    Zoom: {Math.round(zoomLevel * 100)}%
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white drop-shadow-md mb-1">{activeLightbox.title}</h3>
                  <p className="text-xs text-slate-200 drop-shadow-xs">{SITE_CONFIG.businessName}</p>
                </div>
              </div>
            </div>

            {/* Description Details */}
            <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-emerald-400">
                <span>Department: {activeLightbox.category}</span>
                <span>Location: Ramesh Chowk, Aurangabad (Bihar)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeLightbox.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
