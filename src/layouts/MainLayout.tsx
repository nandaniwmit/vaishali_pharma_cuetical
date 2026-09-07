import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';

export const MainLayout: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<string>('');

  const handleOpenOrder = (medicineName?: string) => {
    setSelectedMedicine(medicineName || '');
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
    setSelectedMedicine('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <Navbar onOpenWhatsAppOrder={handleOpenOrder} />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        <Outlet context={{ onOpenWhatsAppOrder: handleOpenOrder }} />
      </main>

      {/* Global Floating Actions */}
      <FloatingActions onOpenWhatsAppOrder={() => handleOpenOrder()} />

      {/* Global WhatsApp Order Form Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        initialMedicine={selectedMedicine}
      />

      {/* Footer with Global Tracking & WMIT Integration */}
      <Footer />
    </div>
  );
};
