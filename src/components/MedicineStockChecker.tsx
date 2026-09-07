import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertCircle, CheckCircle2, Clock, Send, ShieldCheck, RefreshCw } from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { SITE_CONFIG } from '../config/siteConfig';

interface Props {
  onSelectMedicine?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<Props> = ({ onSelectMedicine }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const categories = useMemo(() => {
    const list = Array.from(new Set(medicineData.map((item) => item.category)));
    return ['All', ...list];
  }, []);

  const filteredMedicines = useMemo(() => {
    return medicineData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, statusFilter]);

  const handleOrderWhatsApp = (medicineName: string, brand: string) => {
    if (onSelectMedicine) {
      onSelectMedicine(`${medicineName} (${brand})`);
    } else {
      const text = encodeURIComponent(
        `Hello ${SITE_CONFIG.businessName}, I would like to inquire/order: ${medicineName} (${brand}). Please confirm availability.`
      );
      window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#0A8F6A] border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A]" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5 md:p-7">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium mb-2 border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Live Pharmacy Inventory Checker
            </div>
            <h3 className="text-xl md:text-2xl font-bold">Search Medicine Availability</h3>
            <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
              Instantly check in-store stock, MRP, batch expiry, and order directly on WhatsApp with prescription verification.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700 self-start md:self-auto">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Updated Daily at Counter</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Medicine Name, Salt/Generic, or Brand..."
              className="w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-800 text-white border border-slate-700 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  Category: {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-800 text-white border border-slate-700 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
            >
              <option value="All">All Statuses</option>
              <option value="Available">Available Only</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
        <span>Showing <strong>{filteredMedicines.length}</strong> items in inventory</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> In Stock</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Limited</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Reordering</span>
        </div>
      </div>

      {/* Medicine Grid */}
      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="group bg-white rounded-xl border border-slate-200/80 p-4 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status)}
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0A8F6A] transition">
                  {med.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Salt: {med.genericName}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Mfg / Brand: <span className="text-slate-700 font-semibold">{med.brand}</span>
                </p>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                  {med.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-3 text-xs">
                  <div>
                    <span className="text-slate-400 text-[11px]">MRP: </span>
                    <span className="text-sm font-bold text-slate-900">₹{med.mrp.toFixed(2)}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-[11px]">Exp: </span>
                    <span className="text-slate-700 font-medium">{med.expiry}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOrderWhatsApp(med.name, med.brand)}
                    className="flex-1 py-2 px-3 bg-emerald-50 hover:bg-[#0A8F6A] text-[#0A8F6A] hover:text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer border border-emerald-200 hover:border-[#0A8F6A]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Order / Inquire</span>
                  </button>
                  {med.prescriptionRequired && (
                    <span 
                      className="px-2 py-2 text-[11px] font-semibold text-rose-600 bg-rose-50 border border-rose-100 rounded-lg cursor-help"
                      title="Doctor Prescription Required"
                    >
                      Rx
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-base font-semibold text-slate-700">No medicines matched "{searchTerm}"</p>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We stock over 5,000+ pharmaceutical formulations. Contact our pharmacist directly via WhatsApp to request special stock arrangement.
            </p>
            <button
              onClick={() => handleOrderWhatsApp(searchTerm || 'Unlisted Medicine', 'General Inquiry')}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#0A8F6A] text-white text-xs font-semibold rounded-xl hover:bg-[#087355] transition"
            >
              <Send className="w-3.5 h-3.5" />
              Ask Pharmacist on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
