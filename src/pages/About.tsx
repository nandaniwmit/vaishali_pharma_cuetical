import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  FileCheck2, 
  UserCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

export const About: React.FC = () => {
  const values = [
    {
      title: 'Integrity & Genuineness',
      desc: 'We guarantee zero counterfeit formulations. Every batch is sourced from verified pharmaceutical depots with verified batch certificates.'
    },
    {
      title: 'Patient Welfare First',
      desc: 'Medication dispensation is an ethical duty. We prioritize emergency patient needs, especially those arriving from Sadar Hospital.'
    },
    {
      title: 'Cold-Chain Maintenance',
      desc: 'Vaccines, insulins, and temperature-sensitive biologicals are constantly preserved inside dedicated temperature-monitored medical refrigerators.'
    },
    {
      title: 'Affordability & Fair Pricing',
      desc: 'We strictly dispense at or below printed MRP and provide high-quality generic alternatives when requested by patients.'
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Foundation at Ramesh Chowk',
      desc: 'Vaishali Pharmaceutical opened its doors with a mission to bring genuine, properly preserved medicines right to the heart of Aurangabad.'
    },
    {
      year: '2019',
      title: 'Emergency Medical Partnership',
      desc: 'Recognizing proximity to Sadar Hospital, established round-the-clock emergency prescription support and stocked rare life-saving injectables.'
    },
    {
      year: '2021',
      title: 'Expansion into Medical Devices & Surgical Care',
      desc: 'Broadened stock to include home healthcare equipment, nebulizers, oxygen accessories, orthopedic braces, and comprehensive baby nutrition.'
    },
    {
      year: 'Present',
      title: 'Digital & PWA Ordering',
      desc: 'Pioneered instant WhatsApp order verification and digital stock searching for Aurangabad families, bridging local trust with modern convenience.'
    }
  ];

  const achievements = [
    { metric: '100%', label: 'Genuine Medicine Guarantee' },
    { metric: '50,000+', label: 'Prescriptions Safely Filled' },
    { metric: '365 Days', label: 'Uninterrupted Patient Service' },
    { metric: '15+ Mins', label: 'Rapid WhatsApp Verification' }
  ];

  return (
    <div className="flex flex-col gap-16 pb-20">
      <SEOHead
        title="About Us - Vaishali Pharmaceutical"
        description="Learn about Vaishali Pharmaceutical: our history, mission, licensed pharmacists, and dedication to genuine medicine in Aurangabad, Bihar."
        canonicalPath="/about"
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Our Healthcare Heritage</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About Vaishali Pharmaceutical
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Your neighborhood pharmacy at Ramesh Chowk, Aurangabad (Bihar). Founded on the unwavering promise of genuine medication, clinical accuracy, and community empathy.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Our Story & Heritage</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Bridging Care and Quality in Aurangabad, Bihar
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Vaishali Pharmaceutical was established on Old GT Road, Ramesh Chowk, directly adjacent to Sadar Hospital. In a medical district where urgent care is a daily reality, our founder recognized the urgent need for a reliable, well-stocked pharmacy capable of fulfilling complex prescriptions without delay.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Over the years, we have built trusted relationships with doctors, hospital staff, and thousands of local families. From high-grade antibiotic courses and cardiac therapies to infant nutritional formulas and post-operative surgical dressings, our inventory is curated with clinical scrutiny.
            </p>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0A8F6A] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                We operate strictly with certified government drug licenses (Reg: {SITE_CONFIG.regNo}) and observe rigorous batch verification and expiry audits.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#0A8F6A]" />
              <span>Store Overview</span>
            </h3>

            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Prime Address:</strong>
                  <span>{SITE_CONFIG.address.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Open Schedule:</strong>
                  <span>{SITE_CONFIG.hours.weekdays} (All Days)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Pharmacist Desk:</strong>
                  <span>{SITE_CONFIG.phone} / WhatsApp Order Support</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileCheck2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Licensing:</strong>
                  <span>Retail Drug License (Form 20 & 21)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-100/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0A8F6A] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To guarantee that every patient and family in Aurangabad has immediate access to 100% genuine, uncompromised medicines at fair prices, guided by qualified pharmaceutical expertise and profound human care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To stand as the most trusted healthcare dispensary in South Bihar, seamlessly merging dependable counter availability with digital stock checking and rapid prescription dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Principles</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">The Values That Guide Our Pharmacy</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0A8F6A] flex items-center justify-center font-bold">
                0{i + 1}
              </div>
              <h4 className="text-base font-bold text-slate-900">{v.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pharmacist / Owner Message */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Message from Chief Pharmacist</h3>
                <p className="text-xs text-slate-400">Vaishali Pharmaceutical Leadership</p>
              </div>
            </div>

            <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic border-l-2 border-emerald-400 pl-4 my-4">
              "In healthcare, a minute's delay or a compromised medicine can change everything. When patients come to us at Ramesh Chowk from Sadar Hospital, they aren't just shoppers—they are families going through vulnerable moments. We pledge our professional honor to provide only authentic formulations, transparent counsel, and immediate service."
            </blockquote>

            <p className="text-xs text-emerald-300 font-semibold">
              — Pharmacist In-Charge, Vaishali Pharmaceutical
            </p>
          </div>
        </div>
      </section>

      {/* Journey & Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Milestones</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Healthcare Journey</h2>
        </div>

        <div className="relative border-l-2 border-emerald-200 ml-4 md:ml-32 space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-6">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0A8F6A] border-4 border-white shadow-xs"></span>
              <span className="text-xs font-bold text-[#0A8F6A] block">{item.year}</span>
              <h4 className="text-base font-bold text-slate-900 mt-0.5">{item.title}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {achievements.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-2xl md:text-4xl font-extrabold text-[#0A8F6A] block">{item.metric}</span>
              <span className="text-xs text-slate-600 font-medium mt-1 block">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
