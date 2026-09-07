import React from 'react';
import { X, Share, PlusSquare, Smartphone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-modal-title"
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0A8F6A]">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 id="ios-modal-title" className="text-lg font-bold text-slate-900">
              Install {SITE_CONFIG.shortName} App
            </h3>
            <p className="text-xs text-slate-500">Quick access directly from your iOS Home Screen</p>
          </div>
        </div>

        <div className="space-y-3.5 my-5 text-sm">
          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white font-semibold flex items-center justify-center text-xs">1</span>
            <div className="flex-1">
              <p className="text-slate-700">
                Tap the <strong className="text-slate-900">Share</strong> icon <Share className="inline w-4 h-4 text-emerald-600 mx-1 align-sub" /> at the bottom of Safari.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white font-semibold flex items-center justify-center text-xs">2</span>
            <div className="flex-1">
              <p className="text-slate-700">
                Scroll down and select <strong className="text-slate-900">Add to Home Screen</strong> <PlusSquare className="inline w-4 h-4 text-emerald-600 mx-1 align-sub" />.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white font-semibold flex items-center justify-center text-xs">3</span>
            <div className="flex-1">
              <p className="text-slate-700">
                Tap <strong className="text-slate-900">Add</strong> in the top right corner. The app icon will appear instantly on your home screen!
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-[#0A8F6A] hover:bg-[#087355] text-white font-semibold rounded-xl text-sm transition shadow-md shadow-emerald-700/10"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  );
};
