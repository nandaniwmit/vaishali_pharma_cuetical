import React, { useState, useEffect } from 'react';
import { X, Send, PhoneCall, UploadCloud, CheckCircle, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<Props> = ({ isOpen, onClose, initialMedicine = '' }) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicine, setMedicine] = useState('');
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('No');
  const [prescriptionFile, setPrescriptionFile] = useState<string | null>(null);
  const [deliveryTime, setDeliveryTime] = useState('Earliest Possible / Within 2 Hours');
  const [notes, setNotes] = useState('');
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (initialMedicine) {
      setMedicine(initialMedicine);
    }
  }, [initialMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0].name);
      setHasPrescription('Yes');
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setValidated(true);

    if (!customerName.trim() || !phone.trim() || !medicine.trim()) {
      return;
    }

    const messageLines = [
      `*Hello ${SITE_CONFIG.businessName}*`,
      `*Medicine Order / Inquiry:*`,
      `--------------------------`,
      `*Customer Name:* ${customerName.trim()}`,
      `*Phone:* ${phone.trim()}`,
      email ? `*Email:* ${email.trim()}` : null,
      `*Medicine Required:* ${medicine.trim()}`,
      `*Delivery Address:* ${address.trim() || 'Store Pickup / Ramesh Chowk'}`,
      `*Prescription Attached/Available:* ${hasPrescription} ${prescriptionFile ? `(${prescriptionFile})` : ''}`,
      `*Preferred Delivery Time:* ${deliveryTime}`,
      notes.trim() ? `*Notes:* ${notes.trim()}` : null,
      `--------------------------`,
      `Sent via Vaishali Pharmaceutical Portal`
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(messageLines);
    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A8F6A] to-[#0284C7] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-xs">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 id="order-modal-title" className="text-lg font-bold">Quick WhatsApp Order</h2>
              <p className="text-xs text-emerald-100">Send order directly to our pharmacist desk</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="p-5 md:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Quick Notice */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs border border-emerald-100">
            <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#0A8F6A]" />
            <span>Fast verification: We check batch stock & respond within 5-10 minutes.</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/30 focus:border-[#0A8F6A]"
              />
              {validated && !customerName && (
                <span className="text-xs text-rose-500">Name is required</span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/30 focus:border-[#0A8F6A]"
              />
              {validated && !phone && (
                <span className="text-xs text-rose-500">Phone number is required</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Medicine Name & Quantity <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              placeholder="e.g. Dolo 650 (2 strips), Augmentin 625 (1 strip), ORS powder"
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/30 focus:border-[#0A8F6A]"
            />
            {validated && !medicine && (
              <span className="text-xs text-rose-500">Please mention the medicine required</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Delivery Address or Store Pickup
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. Near Sadar Hospital Gate / Ramesh Chowk, Aurangabad"
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/30 focus:border-[#0A8F6A]"
            />
          </div>

          {/* Prescription Upload / Toggle */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">Do you have a Doctor's Prescription?</span>
              <div className="flex items-center gap-2 text-xs">
                <label className="inline-flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="Yes"
                    checked={hasPrescription === 'Yes'}
                    onChange={() => setHasPrescription('Yes')}
                    className="accent-[#0A8F6A]"
                  />
                  <span>Yes</span>
                </label>
                <label className="inline-flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="prescription"
                    value="No"
                    checked={hasPrescription === 'No'}
                    onChange={() => setHasPrescription('No')}
                    className="accent-[#0A8F6A]"
                  />
                  <span>No (OTC only)</span>
                </label>
              </div>
            </div>

            {hasPrescription === 'Yes' && (
              <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-emerald-200 hover:border-[#0A8F6A] rounded-xl cursor-pointer bg-white transition group">
                <UploadCloud className="w-5 h-5 text-emerald-600 mb-1 group-hover:scale-110 transition" />
                <span className="text-xs text-slate-600">
                  {prescriptionFile ? (
                    <span className="font-semibold text-[#0A8F6A]">Selected: {prescriptionFile}</span>
                  ) : (
                    "Click to attach Prescription (or send photo directly in WhatsApp chat)"
                  )}
                </span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/30 focus:border-[#0A8F6A] bg-white"
              >
                <option value="Immediate / Emergency (Within 1 Hour)">Immediate / Emergency (Within 1 Hour)</option>
                <option value="Today (Within 2-3 Hours)">Today (Within 2-3 Hours)</option>
                <option value="Evening Delivery (6 PM - 9 PM)">Evening Delivery (6 PM - 9 PM)</option>
                <option value="Store Pickup at Counter">Store Pickup at Counter</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Special Notes (Optional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Call before coming"
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]/30 focus:border-[#0A8F6A]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-[#0A8F6A] hover:bg-[#087355] text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#0284C7]" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
