import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart, 
  FileCheck2, 
  AlertTriangle,
  Send,
  ExternalLink,
  Info,
  X
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Footer() {
  const [showWmitModal, setShowWmitModal] = useState(false);

  // === STEP 11: GLOBAL TRACKING HOOK (EXACT INTEGRATION) ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };
    sendInitPayload();
    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    // Setup listener for popup trigger
    const handlePopupTrigger = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest('.wmit-popup-trigger')) {
        e.preventDefault();
        setShowWmitModal(true);
      }
    };
    document.addEventListener('click', handlePopupTrigger);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      document.removeEventListener('click', handlePopupTrigger);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Business Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A8F6A] to-[#0284C7] p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-[#0A8F6A] font-bold text-lg">
                  VP
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">{SITE_CONFIG.businessName}</h3>
                <p className="text-xs text-emerald-400 font-medium">Licensed Retail Chemist & Druggist</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Your premier local healthcare partner in Aurangabad, Bihar. Providing 100% genuine pharmaceutical drugs, cold-chain vaccines, surgical supplies, and home health devices with certified pharmacist consultations.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400">
                <FileCheck2 className="w-3.5 h-3.5" />
                Reg: {SITE_CONFIG.regNo}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> About Our Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Services & Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Store & Inventory Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> Staff / Customer Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Store Hours & Landmarks */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Working Hours & Location</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Retail Counter Hours:</strong>
                  <span>{SITE_CONFIG.hours.weekdays}</span>
                  <span className="block text-[11px] text-emerald-400 font-semibold mt-0.5">Open all 7 days</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Emergency Dispatch:</strong>
                  <span>24/7 on-call service for critical hospital admissions near Sadar Hospital.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Prime Landmark:</strong>
                  <span>Ramesh Chowk, near Sadar Hospital, Madarsa Road, Aurangabad (Bihar).</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & WhatsApp Order */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact & Support</h4>
            <div className="space-y-2.5 text-xs">
              <a 
                href={`tel:${SITE_CONFIG.phone}`} 
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-[#0284C7] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Phone Order / Call</span>
                  <span className="font-bold text-sm text-white group-hover:text-emerald-400">{SITE_CONFIG.phone}</span>
                </div>
              </a>

              <a 
                href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=Hello%20Vaishali%20Pharmaceutical,%20I%20need%20medicine%20assistance`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0A8F6A]/10 hover:bg-[#0A8F6A]/20 border border-emerald-500/30 text-white transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0A8F6A] text-white flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-300 block">WhatsApp Direct Prescription</span>
                  <span className="font-bold text-sm text-white group-hover:text-emerald-300">{SITE_CONFIG.whatsappNumberFormatted}</span>
                </div>
              </a>

              <div className="flex items-center gap-2 text-slate-400 text-xs pt-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{SITE_CONFIG.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="my-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Statutory Medical Notice:</strong> Vaishali Pharmaceutical is a registered licensed pharmacy store under the Drugs and Cosmetics Act. All Schedule H, H1, and X drugs strictly require a valid prescription by a registered medical practitioner before dispensation. Content on this website is for informational purpose and not a substitute for professional medical diagnosis or treatment.
        </div>

        {/* Bottom Copyright & WMIT Anchor Code */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
          </div>

          {/* STEP 12 MANDATORY POPUP TRIGGER IN CENTER OF COPYRIGHT LINE */}
          <div className="text-center font-medium">
            <a href="#" className="wmit-popup-trigger text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition">
              Developed by WMIT
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Drug Dispensation Policy</span>
          </div>
        </div>
      </div>

      {/* WMIT Interactive Popup Modal */}
      {showWmitModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl text-slate-900 border border-slate-100">
            <button
              onClick={() => setShowWmitModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-xl">
                W
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">WebMaker IT Solutions</h4>
                <p className="text-xs text-slate-500">Official Technology & Growth Partner</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              This high-performance, PWA-enabled digital platform for <strong>Vaishali Pharmaceutical</strong> was engineered with React, Tailwind CSS, offline service worker capability, and integrated pharmacy inventory stock checking.
            </p>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs space-y-1.5 mb-5 text-slate-600">
              <p>✓ Fast loading, progressive web app installable on Android & iOS</p>
              <p>✓ Automated WhatsApp order dispatch & inventory verification</p>
              <p>✓ Local SEO & schema optimization for healthcare search intent</p>
            </div>

            <div className="flex items-center justify-between">
              <a
                href="https://webmakerit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A8F6A] hover:underline"
              >
                <span>Visit WebMaker IT</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setShowWmitModal(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
