import React, { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface Props {
  className?: string;
  variant?: 'primary' | 'outline' | 'nav';
}

export const PWAInstallButton: React.FC<Props> = ({ 
  className = '', 
  variant = 'nav' 
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  // If already installed, hide or show installed badge
  if (isInstalled && !justInstalled) {
    return null;
  }

  if (justInstalled) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        App Installed
      </span>
    );
  }

  const handleClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setJustInstalled(true);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // Desktop or unsupported fallback
      alert('To install Vaishali Pharmaceutical: click the Install icon in your browser address bar or use Chrome menu > Install App.');
    }
  };

  // Base styling per variant
  let btnStyle = "inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold transition-all duration-200 min-h-[42px] cursor-pointer ";

  if (variant === 'primary') {
    btnStyle += "px-4 py-2 bg-[#0A8F6A] hover:bg-[#087355] text-white rounded-xl shadow-md hover:shadow-lg active:scale-95";
  } else if (variant === 'outline') {
    btnStyle += "px-3.5 py-1.5 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-xl";
  } else {
    // Nav variant: clean pill with badge styling
    btnStyle += "px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100/80 text-[#0A8F6A] border border-emerald-200 rounded-full active:scale-95";
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`${btnStyle} ${className}`}
        aria-label="Add Vaishali Pharmaceutical to Home Screen"
        title="Add to Home Screen as an App"
      >
        <span className="text-base">📲</span>
        <span>Add to Home</span>
      </button>

      <IOSInstallGuide
        isOpen={showIOSGuide}
        onClose={() => setShowIOSGuide(false)}
      />
    </>
  );
};
