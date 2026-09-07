import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  MessageCircle, 
  ShieldCheck, 
  LogIn, 
  Activity,
  ChevronRight
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PWAInstallButton } from './PWAInstallButton';

interface Props {
  onOpenWhatsAppOrder: (initialMed?: string) => void;
}

export const Navbar: React.FC<Props> = ({ onOpenWhatsAppOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login', isSpecial: true },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100">
      {/* Top Emergency & Info Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ramesh Chowk, Near Sadar Hospital, Aurangabad, Bihar</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SITE_CONFIG.hours.displayText}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Emergency 24x7 Support Available</span>
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${SITE_CONFIG.phone}`} 
              className="hover:text-emerald-300 font-medium flex items-center gap-1 transition"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A8F6A] to-[#0284C7] p-0.5 shadow-md group-hover:scale-105 transition transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-[#0A8F6A] font-extrabold text-xl tracking-tight">
                VP
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg md:text-xl font-black tracking-tight text-slate-900 group-hover:text-[#0A8F6A] transition">
                  VAISHALI
                </span>
                <span className="text-lg md:text-xl font-light text-[#0284C7] tracking-wider">
                  PHARMA
                </span>
                <ShieldCheck className="w-4 h-4 text-[#0A8F6A]" />
              </div>
              <p className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <span>Ramesh Chowk</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">Near Sadar Hospital</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              if (link.isSpecial) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`ml-2 px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      active
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>{link.name}</span>
                  </Link>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition ${
                    active
                      ? 'text-[#0A8F6A] bg-emerald-50/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: PWA Install & WhatsApp Order */}
          <div className="hidden sm:flex items-center gap-3">
            <PWAInstallButton variant="nav" />

            <button
              type="button"
              onClick={() => onOpenWhatsAppOrder()}
              className="px-4 py-2.5 bg-[#0A8F6A] hover:bg-[#087355] text-white text-xs md:text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Menu & PWA button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="block sm:hidden">
              <PWAInstallButton variant="nav" />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                    active
                      ? 'bg-emerald-50 text-[#0A8F6A] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <PWAInstallButton variant="primary" className="w-full" />

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppOrder();
              }}
              className="w-full py-2.5 px-4 bg-[#0A8F6A] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full py-2.5 px-4 bg-slate-100 text-slate-800 text-sm font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Store: {SITE_CONFIG.phone}</span>
            </a>
          </div>

          <div className="pt-2 text-[11px] text-slate-500 text-center">
            {SITE_CONFIG.address.full}
          </div>
        </div>
      )}
    </header>
  );
};
