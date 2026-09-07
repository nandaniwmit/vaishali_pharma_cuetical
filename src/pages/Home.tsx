import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  PhoneCall, 
  MessageCircle, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  Award, 
  Truck, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Stethoscope, 
  Pill, 
  Sparkles, 
  Baby, 
  Activity, 
  Search,
  Star,
  ChevronDown,
  Mail,
  Send,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

interface ContextType {
  onOpenWhatsAppOrder: (medicine?: string) => void;
}

export const Home: React.FC = () => {
  const { onOpenWhatsAppOrder } = useOutletContext<ContextType>();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const featuredServices = [
    {
      id: 'prescriptions',
      icon: Pill,
      title: 'Prescription Drugs',
      desc: '100% genuine allopathic medicines from certified Indian & global pharmaceutical manufacturers.',
      link: '/services'
    },
    {
      id: 'devices',
      icon: Activity,
      title: 'Health & Medical Devices',
      desc: 'Digital BP monitors, glucometers, nebulizers, pulse oximeters, and clinical thermometers.',
      link: '/services'
    },
    {
      id: 'baby-care',
      icon: Baby,
      title: 'Baby Care & Nutrition',
      desc: 'Top brand infant formulas, gripe water, baby skincare, diapers, and pediatric supplements.',
      link: '/services'
    },
    {
      id: 'surgical',
      icon: Stethoscope,
      title: 'Surgical & Wound Care',
      desc: 'Hospital-grade sterile gauze, bandages, antiseptic povidone dressings, and IV cannulas.',
      link: '/services'
    },
    {
      id: 'chronic',
      icon: ShieldCheck,
      title: 'Cardiac & Diabetic Care',
      desc: 'Dedicated inventory for regular blood sugar control, insulin vials, and hypertension medicines.',
      link: '/services'
    },
    {
      id: 'otc-wellness',
      icon: Sparkles,
      title: 'OTC & Wellness',
      desc: 'Multivitamins, pain sprays, digestive aids, herbal cough syrups, and skin protectants.',
      link: '/services'
    }
  ];

  const featuredProducts = [
    {
      name: 'Omron Digital BP Monitor',
      category: 'Diagnostic Device',
      mrp: '₹2,150',
      tag: 'Best Seller',
      desc: 'Clinically accurate upper arm monitor with hypertension indicator.'
    },
    {
      name: 'Accu-Chek Active 50 Strips',
      category: 'Diabetic Care',
      mrp: '₹1,050',
      tag: 'High Demand',
      desc: 'Blood glucose test strips with double-check visual technology.'
    },
    {
      name: 'Becosules Z Multivitamins',
      category: 'Daily Wellness',
      mrp: '₹56',
      tag: 'Essential',
      desc: 'Vitamin B-Complex with Zinc & Vitamin C for daily immunity.'
    },
    {
      name: 'Dr. Morepen Compressor Nebulizer',
      category: 'Respiratory Care',
      mrp: '₹1,890',
      tag: 'Reliable',
      desc: 'Low noise compressor nebulizer kit with pediatric and adult masks.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '100% Genuine Medicines',
      desc: 'Sourced directly from authorized C&F distributors and renowned pharmaceutical companies.'
    },
    {
      icon: Clock,
      title: 'Near Sadar Hospital (Fast Access)',
      desc: 'Located at Ramesh Chowk, steps away from Aurangabad Sadar Hospital for emergency medicine needs.'
    },
    {
      icon: HeartHandshake,
      title: 'Qualified Pharmacist Guidance',
      desc: 'Professional assistance on drug dosage, adverse reactions, and safe storage requirements.'
    },
    {
      icon: Truck,
      title: 'WhatsApp Order & Fast Pickup',
      desc: 'Send your prescription on WhatsApp and have your package verified and ready in minutes.'
    }
  ];

  const faqs = [
    {
      q: 'Do I need a prescription to buy medicines at Vaishali Pharmaceutical?',
      a: 'All Schedule H and H1 medicines (such as antibiotics, cardiac drugs, and prescription sedatives) legally require a valid doctor prescription. Over-the-counter (OTC) products, vitamins, and first aid devices do not require a prescription.'
    },
    {
      q: 'How does WhatsApp medicine ordering work?',
      a: 'Simply click "WhatsApp Order" or message 7004305057 with a photo of your prescription or list of items. Our pharmacist verifies availability and prepares your package for doorstep delivery or priority counter pickup.'
    },
    {
      q: 'Where is Vaishali Pharmaceutical located in Aurangabad?',
      a: 'We are situated on Old GT Road, Ramesh Chowk, right near Sadar Hospital and Madarsa Road in Aurangabad, Bihar (PIN 824101).'
    },
    {
      q: 'What are your working hours?',
      a: 'Our retail counter is open every day from 8:00 AM to 10:30 PM. For emergency prescription needs near Sadar Hospital, our telephone and WhatsApp lines remain reachable 24/7.'
    }
  ];

  const healthTips = [
    {
      title: 'Proper Storage of Insulin & Cold-Chain Drugs',
      category: 'Diabetic Health',
      readTime: '3 min read',
      excerpt: 'Learn why unpunctured insulin vials must strictly remain between 2°C to 8°C and never in freezer compartments.'
    },
    {
      title: 'Understanding Antibiotic Courses: Why Completion Matters',
      category: 'Medicine Safety',
      readTime: '4 min read',
      excerpt: 'Stopping antibiotic treatment prematurely can cause bacterial resistance and relapse. Complete your physician-prescribed dosage.'
    },
    {
      title: 'Daily Blood Pressure Log: Tips for Accurate Readings',
      category: 'Cardiology',
      readTime: '3 min read',
      excerpt: 'Rest quietly for 5 minutes before cuff measurement, avoid caffeine 30 minutes prior, and keep your arm supported at heart level.'
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      <SEOHead 
        title="Vaishali Pharmaceutical | Trusted Medical Store in Aurangabad, Bihar"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, and daily medical essentials at affordable prices. Located at Ramesh Chowk near Sadar Hospital."
        canonicalPath="/"
        faqSchemaItems={faqs.map(f => ({ question: f.q, answer: f.a }))}
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Background glow & subtle patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,143,106,0.25),transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Licensed Chemist & Druggist • Ramesh Chowk</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Your Trusted Medical Store for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300">Genuine Medicines</span> & Healthcare Needs
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices. Located right next to Sadar Hospital Aurangabad for instant community care.
              </p>

              {/* Action Buttons: Call Now, WhatsApp Order, Get Directions */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl shadow-lg hover:shadow-sky-500/30 transition flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenWhatsAppOrder()}
                  className="px-6 py-3.5 bg-[#0A8F6A] hover:bg-[#087355] text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-600/30 transition flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={SITE_CONFIG.socials.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-700 transition flex items-center gap-2 text-sm sm:text-base"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Authentic Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Certified Pharmacists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Near Sadar Hospital</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Counter Highlights */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/15 text-white shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider block">Store Location</span>
                    <h3 className="text-lg font-bold">Ramesh Chowk, Aurangabad</h3>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-400/30">
                    Open Now
                  </span>
                </div>

                <div className="space-y-3.5 text-xs text-slate-200">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Clock className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Operating Hours:</span>
                      <span>8:00 AM - 10:30 PM (All 7 Days)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-sky-400 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Live Stock Search:</span>
                      <span>Check real-time medicine availability before visiting counter.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/services"
                    className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition"
                  >
                    <Search className="w-4 h-4" />
                    <span>Check Medicine Stock Live</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xs">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">About Vaishali Pharmaceutical</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Serving Aurangabad with Dedication, Genuine Healthcare, and Trust
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Situated strategically at Ramesh Chowk near Sadar Hospital, Vaishali Pharmaceutical has grown into one of the city's most dependable pharmaceutical retail centers. We understand that during health emergencies, there is zero tolerance for counterfeit or expired medicines.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our registered pharmacists verify each prescription, ensure cold-chain maintenance for life-saving biologicals, and assist patients with transparent pricing and empathetic care.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A8F6A] hover:text-[#087355] transition group"
              >
                <span>Read Our Full Story & Values</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-center">
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A8F6A] block">100%</span>
              <span className="text-xs font-semibold text-slate-700 mt-1 block">Genuine & Verified</span>
            </div>
            <div className="p-6 rounded-2xl bg-sky-50 border border-sky-100">
              <span className="text-3xl md:text-4xl font-extrabold text-sky-600 block">5,000+</span>
              <span className="text-xs font-semibold text-slate-700 mt-1 block">Medicines in Stock</span>
            </div>
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
              <span className="text-3xl md:text-4xl font-extrabold text-amber-600 block">365</span>
              <span className="text-xs font-semibold text-slate-700 mt-1 block">Days Open Yearly</span>
            </div>
            <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200">
              <span className="text-3xl md:text-4xl font-extrabold text-slate-800 block">Near</span>
              <span className="text-xs font-semibold text-slate-700 mt-1 block">Sadar Hospital</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Our Core Services</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Comprehensive Healthcare Solutions</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From daily prescription fills to surgical requirements and home diagnostic tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A8F6A] flex items-center justify-center mb-4 group-hover:bg-[#0A8F6A] group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="text-xs font-bold text-[#0A8F6A] group-hover:text-[#087355] flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenWhatsAppOrder(service.title)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition"
          >
            <span>View All Pharmacy Services & Stock</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-slate-100/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Patient Centered Care</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Aurangabad Relies On Us</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              We prioritize patient well-being, strict storage temperature controls, and authentic medication sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Popular In-Store Items</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Featured Medical Essentials</h2>
          </div>
          <Link
            to="/services"
            className="text-xs sm:text-sm font-bold text-[#0A8F6A] hover:underline flex items-center gap-1"
          >
            <span>Search 5000+ Items In Stock</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {prod.category}
                  </span>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                    {prod.tag}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">{prod.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{prod.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Est. MRP</span>
                  <span className="text-sm font-bold text-slate-900">{prod.mrp}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenWhatsAppOrder(prod.name)}
                  className="py-1.5 px-3 bg-[#0A8F6A] hover:bg-[#087355] text-white text-xs font-bold rounded-lg transition"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Community Feedback</span>
            <h2 className="text-2xl sm:text-3xl font-bold">What Local Residents Say</h2>
            <p className="text-xs text-slate-300">
              Summarized experiences from patients and families visiting Ramesh Chowk & Sadar Hospital Aurangabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "When my uncle was admitted at Sadar Hospital Aurangabad, we urgently needed a specific injectable at 10 PM. Vaishali Pharmaceutical had the genuine stock ready immediately. Lifesaving service."
              </p>
              <div className="pt-2 border-t border-white/10 text-xs">
                <strong className="text-white block">P. K. Verma</strong>
                <span className="text-slate-400 text-[11px]">Local Resident, Aurangabad</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "Very polite pharmacist. They clearly explain medicine dosage, check doctor handwriting carefully, and provide authentic computerized bills for health insurance claims."
              </p>
              <div className="pt-2 border-t border-white/10 text-xs">
                <strong className="text-white block">Anjali Singh</strong>
                <span className="text-slate-400 text-[11px]">Ramesh Chowk, Bihar</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "Ordering on WhatsApp is extremely convenient. I just send our monthly diabetic medicine list, and they keep the sealed package packed so I can pick it up without waiting."
              </p>
              <div className="pt-2 border-t border-white/10 text-xs">
                <strong className="text-white block">Manoj Gupta</strong>
                <span className="text-slate-400 text-[11px]">Regular Customer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Common Questions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-slate-900 hover:text-[#0A8F6A]"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#0A8F6A] flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Pharmacist Advice</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Latest Health & Medicine Tips</h2>
          </div>
          <span className="text-xs text-slate-500">Curated by registered pharmacists</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-emerald-300 transition">
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-[#0A8F6A] bg-emerald-50 px-2 py-0.5 rounded-md">
                    {tip.category}
                  </span>
                  <span className="text-slate-400">{tip.readTime}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">{tip.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{tip.excerpt}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onOpenWhatsAppOrder(`Advice on: ${tip.title}`)}
                  className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ask Pharmacist About This</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A8F6A] via-emerald-700 to-sky-700 rounded-3xl p-8 md:p-12 text-white text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">Immediate Support Available</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Need Urgent Medicine Near Sadar Hospital?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Call our store directly or send your prescription via WhatsApp for lightning-fast verification and packaging.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl text-sm hover:bg-slate-100 transition flex items-center gap-2 shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-emerald-700" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenWhatsAppOrder()}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="max-w-3xl mx-auto px-4 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0A8F6A] flex items-center justify-center mx-auto">
          <Mail className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Stay Updated with Health Tips & Vaccine Alerts</h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Subscribe to seasonal healthcare advice, pulse polio updates, and availability notifications for critical batches.
        </p>

        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            required
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
          />
          <button
            type="submit"
            className="py-2.5 px-5 bg-[#0A8F6A] hover:bg-[#087355] text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Subscribe</span>
          </button>
        </form>

        {newsletterSuccess && (
          <p className="text-xs text-emerald-600 font-semibold animate-in fade-in">
            Thank you! You have been subscribed to healthcare updates.
          </p>
        )}
      </section>
    </div>
  );
};
