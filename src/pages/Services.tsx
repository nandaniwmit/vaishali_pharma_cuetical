import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Pill, 
  Activity, 
  Baby, 
  Sparkles, 
  Stethoscope, 
  HeartHandshake, 
  ShieldCheck, 
  Thermometer, 
  Zap, 
  Send,
  FileCheck2,
  Package,
  Layers
} from 'lucide-react';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SEOHead } from '../components/SEOHead';
import { SITE_CONFIG } from '../config/siteConfig';

interface ContextType {
  onOpenWhatsAppOrder: (medicine?: string) => void;
}

export const Services: React.FC = () => {
  const { onOpenWhatsAppOrder } = useOutletContext<ContextType>();

  const serviceCategories = [
    {
      id: 'prescription-medicines',
      icon: Pill,
      title: 'Prescription Medicines (Rx)',
      desc: 'Complete range of scheduled medications including antibiotics, anti-hypertensives, cardiac support, neuro-psychiatric tablets, and insulin biologics.',
      items: ['Schedule H & H1 Dispensation', 'Cold-Chain Insulin & Vaccines', 'Cancer Support Formulations', 'Cardiac & Blood Pressure Care'],
      ctaText: 'Order Prescription Medicines'
    },
    {
      id: 'otc-medicines',
      icon: ShieldCheck,
      title: 'OTC Medicines',
      desc: 'Safe, certified over-the-counter remedies for everyday ailments without needing a prior clinical prescription.',
      items: ['Fever & Pain Relievers', 'Antacids & Gas Relief', 'Allergy & Cold Syrups', 'Oral Rehydration Salts (ORS)'],
      ctaText: 'Inquire OTC Products'
    },
    {
      id: 'health-devices',
      icon: Activity,
      title: 'Health Devices & Diagnostics',
      desc: 'Clinically validated self-monitoring medical devices to track vital statistics at home with laboratory precision.',
      items: ['Digital BP Monitors (Omron, Dr. Morepen)', 'Glucometers & Test Strips', 'Compressor & Mesh Nebulizers', 'Pulse Oximeters & Digital Thermometers'],
      ctaText: 'Check Device Availability'
    },
    {
      id: 'medical-equipment',
      icon: Stethoscope,
      title: 'Medical Equipment & Hospital Supplies',
      desc: 'Durable equipment for home patient care, post-surgical recovery, and clinical administration.',
      items: ['Wheelchairs & Walking Sticks', 'Air Beds for Bedridden Patients', 'Oxygen Concentrators & Tubing', 'Adult Diapers & Underpads'],
      ctaText: 'Inquire Medical Equipment'
    },
    {
      id: 'baby-care',
      icon: Baby,
      title: 'Baby Care & Pediatric Nutrition',
      desc: 'Pediatrician-trusted infant milk foods, gripe waters, colic drops, gentle skincare, and ultra-dry diapering.',
      items: ['Infant Formulas (Nan Pro, Similac, Lactogen)', 'Pediatric Cough & Cold Syrups', 'Baby Shampoos & Diaper Rash Creams', 'Feeding Bottles & Sterilization Items'],
      ctaText: 'Order Baby Care Items'
    },
    {
      id: 'supplements',
      icon: Zap,
      title: 'Nutritional Supplements & Vitamins',
      desc: 'Targeted wellness vitamins, minerals, protein supplements, and geriatric nutritional formulas.',
      items: ['Calcium & Vitamin D3 Tablets', 'B-Complex with Zinc & Biotin', 'Protein Powders (Protinex, Ensure)', 'Iron & Folic Acid Formulations'],
      ctaText: 'Order Daily Supplements'
    },
    {
      id: 'personal-care',
      icon: Sparkles,
      title: 'Dermatology & Personal Care',
      desc: 'Dermatologist-recommended therapeutic skincare, medicated anti-dandruff shampoos, and oral hygiene.',
      items: ['Cetaphil & Sebamed Skincare', 'Medicated Sunscreens (SPF 50+)', 'Antifungal Dusting Powders & Soaps', 'Medicated Mouthwashes & Oral Pastes'],
      ctaText: 'Inquire Personal Care'
    },
    {
      id: 'home-care',
      icon: HeartHandshake,
      title: 'Home Care & First Aid Surgical',
      desc: 'Essential sterile bandages, antiseptic lotions, and recovery aids for prompt wound management.',
      items: ['Betadine Antiseptic Ointments', 'Sterile Gauze Pads & Micropore Tape', 'Cotton Rolls & Crepe Bandages', 'Disposable Gloves & Face Masks'],
      ctaText: 'Order First Aid Supplies'
    }
  ];

  return (
    <div className="flex flex-col gap-16 pb-20">
      <SEOHead
        title="Pharmacy Services & Live Medicine Stock Checker"
        description="Explore Vaishali Pharmaceutical services: prescription medicines, health devices, baby care, surgical supplies, and searchable online inventory."
        canonicalPath="/services"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Our Offerings</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Pharmacy Services & Inventory
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            From emergency life-saving injectables to home diagnostic tools and daily baby care essentials, discover our full spectrum of healthcare supplies.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <MedicineStockChecker onSelectMedicine={(medName) => onOpenWhatsAppOrder(medName)} />
      </section>

      {/* Category-Wise Complete Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Specialized Departments</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Complete Healthcare Categories</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Every category is maintained with proper storage compliance, verified manufacturers, and batch tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {serviceCategories.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 md:p-8 border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#0A8F6A] flex items-center justify-center group-hover:bg-[#0A8F6A] group-hover:text-white transition">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0A8F6A] transition">
                        {service.title}
                      </h3>
                      <span className="text-xs text-slate-400">Vaishali Pharmaceutical Department</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Key Items & Formulations:</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenWhatsAppOrder(service.title)}
                    className="w-full sm:w-auto flex-1 py-3 px-4 bg-[#0A8F6A] hover:bg-[#087355] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{service.ctaText}</span>
                  </button>

                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="w-full sm:w-auto py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl text-center transition"
                  >
                    Call Pharmacist
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Prescription Dispensation Guidelines */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-50 rounded-3xl p-6 md:p-8 border border-sky-100 flex flex-col md:flex-row items-start gap-5 text-sky-950">
          <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div className="space-y-2 text-xs sm:text-sm">
            <h4 className="text-base font-bold text-sky-900">Official Prescription Verification Protocol</h4>
            <p className="text-sky-800 leading-relaxed">
              In strict accordance with the Pharmacy Council of India regulations and Drug Enforcement directives, all Schedule H and antibiotic prescriptions require doctor stamp, registration number, patient name, and valid date. When ordering via WhatsApp, simply snap a clear photograph of your prescription. Our on-duty pharmacist verifies the order before dispatch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
