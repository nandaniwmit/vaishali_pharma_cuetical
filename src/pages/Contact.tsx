import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Navigation, 
  PhoneCall, 
  CheckCircle2, 
  AlertCircle,
  FileCheck2,
  Building2
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Medicine Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Also format a WhatsApp message if the user prefers instant dispatch
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 800);
  };

  const handleSendWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.businessName}, I would like to make an inquiry regarding medicines / supplies at your Ramesh Chowk store.`
    );
    window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col gap-16 pb-20">
      <SEOHead
        title="Contact Us & Store Location - Vaishali Pharmaceutical"
        description="Contact Vaishali Pharmaceutical in Aurangabad, Bihar. Located at Old GT Road, Ramesh Chowk, near Sadar Hospital. Phone / WhatsApp: 7004305057."
        canonicalPath="/contact"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact Vaishali Pharmaceutical
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Conveniently situated at Ramesh Chowk next to Sadar Hospital. Reach our certified pharmacists for prescription questions, bulk medical orders, or urgent assistance.
          </p>
        </div>
      </section>

      {/* Quick Action Bar: Call Button, WhatsApp Button, Directions Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call: {SITE_CONFIG.phone}</span>
          </a>

          <button
            type="button"
            onClick={handleSendWhatsAppInquiry}
            className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-[#0A8F6A] hover:bg-[#087355] text-white font-bold text-sm shadow-md transition cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp: {SITE_CONFIG.phone}</span>
          </button>

          <a
            href={SITE_CONFIG.socials.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition"
          >
            <Navigation className="w-5 h-5 text-emerald-400" />
            <span>Get Directions on Map</span>
          </a>
        </div>
      </section>

      {/* Main Grid: Business Info & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Business Info & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Store Location</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{SITE_CONFIG.businessName}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{SITE_CONFIG.tagline}</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0A8F6A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Store Address:</strong>
                    <span>{SITE_CONFIG.address.full}</span>
                    <span className="block text-slate-400 text-xs mt-0.5">Landmark: {SITE_CONFIG.address.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Direct Phone Line:</strong>
                    <span>+91 {SITE_CONFIG.phone}</span>
                    <span className="block text-slate-400 text-xs mt-0.5">Immediate counter pickup assistance</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0A8F6A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">WhatsApp Prescription Desk:</strong>
                    <span>+91 {SITE_CONFIG.whatsappNumber}</span>
                    <span className="block text-slate-400 text-xs mt-0.5">Send photo for instant stock verification</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Email:</strong>
                    <span>{SITE_CONFIG.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold">Counter Working Hours</h4>
                  <p className="text-xs text-slate-400">Standard & Emergency Timings</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span>Monday - Saturday:</span>
                  <span className="font-bold text-white">{SITE_CONFIG.hours.weekdays}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span>Sunday:</span>
                  <span className="font-bold text-white">{SITE_CONFIG.hours.weekends}</span>
                </div>
                <div className="flex justify-between py-1 text-emerald-400 font-semibold">
                  <span>Urgent Hospital Orders:</span>
                  <span>24x7 Reachable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Prescription Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
            <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Online Inquiry</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">Send Us a Message</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Have a question regarding specific pharmaceutical salts, bulk clinical purchases, or prescription availability? Fill out this quick form.
            </p>

            {isSuccess ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#0A8F6A] mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Inquiry Received Successfully!</h4>
                <p className="text-xs sm:text-sm text-emerald-800">
                  Our registered pharmacist has received your request. We will contact you at your phone number shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 bg-[#0A8F6A] text-white text-xs font-semibold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject / Topic
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] bg-white"
                    >
                      <option value="Medicine Inquiry">Medicine Inquiry / Stock Check</option>
                      <option value="Prescription Dispensation">Prescription Dispensation</option>
                      <option value="Medical Device Availability">Medical Device Availability</option>
                      <option value="Hospital / Surgical Order">Hospital / Surgical Supplies</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Medicine Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention the medicine brand, dosage, required strips, or your query..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#0A8F6A] hover:bg-[#087355] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Visit Our Pharmacy at Ramesh Chowk</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Old GT Road, Ramesh Chowk, near Sadar Hospital, Aurangabad, Bihar 824101
              </p>
            </div>

            <a
              href={SITE_CONFIG.socials.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#0A8F6A] hover:bg-[#087355] text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          <div className="w-full h-80 bg-slate-100 relative">
            <iframe
              title="Vaishali Pharmaceutical Map Location"
              src="https://maps.google.com/maps?q=Ramesh+Chowk+near+Sadar+Hospital+Aurangabad+Bihar+824101&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
