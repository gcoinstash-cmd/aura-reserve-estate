import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Flame, 
  Warehouse, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  UserCheck,
  X
} from 'lucide-react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import QuickActions from './components/QuickActions';
import ResidentFeed from './components/ResidentFeed';
import { AdminDashboard } from './components/AdminDashboard';
import { FeedItem, PaymentRecord, MaintenanceRequest, GuestPass } from './types';
import { INITIAL_FEED_ITEMS, INITIAL_PAYMENTS, INITIAL_REQUESTS, INITIAL_GUEST_PASSES } from './data';

export default function App() {
  // Global States holding reactive, high-fidelity mock databases
  const [feedItems, setFeedItems] = useState<FeedItem[]>(INITIAL_FEED_ITEMS);
  const [payments, setPayments] = useState<PaymentRecord[]>(INITIAL_PAYMENTS);
  const [requests, setRequests] = useState<MaintenanceRequest[]>(INITIAL_REQUESTS);
  const [guestPasses, setGuestPasses] = useState<GuestPass[]>(INITIAL_GUEST_PASSES);

  // Admin Control Room State
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAdminPassModalOpen, setIsAdminPassModalOpen] = useState(false);
  const [adminPassInput, setAdminPassInput] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // URL bypass check on boot (/admin or #admin)
  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    if (path.includes('admin') || hash.includes('admin') || search.includes('admin')) {
      setIsAdminMode(true);
      setTimeout(() => triggerToast('⚡ Cellar Master Bypass: Estate Operations Room Unlocked'), 300);
    }
  }, []);

  const handleAdminUnlock = (e: FormEvent) => {
    e.preventDefault();
    if (adminPassInput.trim() === 'reserve2026') {
      setIsAdminMode(true);
      setIsAdminPassModalOpen(false);
      setAdminPassInput('');
      triggerToast('🍷 Cellar Master Access Granted (Cheat Code Verified)');
    } else {
      triggerToast('❌ Invalid Passkey. Use demo passcode: reserve2026');
    }
  };

  // App-level state modifiers passed down to sub-components
  const handleUpdateFeedItem = (updated: FeedItem) => {
    setFeedItems(prev => prev.map(item => item.id === updated.id ? updated : item));
  };

  const handleAddRequest = (newRequest: MaintenanceRequest) => {
    setRequests(prev => [newRequest, ...prev]);
  };

  const handleAddPayment = (newPayment: PaymentRecord) => {
    setPayments(prev => {
      // Find matches if paying pending bills
      const existingPending = prev.find(p => p.status === 'Pending' && p.category === newPayment.category);
      if (existingPending) {
        return prev.map(p => p.id === existingPending.id ? { ...p, status: 'Paid', paymentMethod: newPayment.paymentMethod } : p);
      }
      return [newPayment, ...prev];
    });
  };

  const handleAddGuestPass = (newPass: GuestPass) => {
    setGuestPasses(prev => [newPass, ...prev]);
  };

  if (isAdminMode) {
    return <AdminDashboard onExit={() => setIsAdminMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#121212] flex flex-col selection:bg-[#4A1521]/15 selection:text-[#4A1521]">
      {/* Premium Navigation Header */}
      <Header onOpenAdminModal={() => setIsAdminPassModalOpen(true)} />

      {/* Main Body Grid */}
      <main className="flex-1 px-6 py-6 md:px-12 md:py-10 max-w-7xl mx-auto w-full space-y-8 self-center">
        {/* Hero Section Banner */}
        <HeroBanner />

        {/* Responsive Bento Box Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Left Columns: Action Registry & Workspace Panel */}
          <section className="lg:col-span-8 space-y-8">
            <QuickActions 
              requests={requests}
              payments={payments}
              guestPasses={guestPasses}
              onAddRequest={handleAddRequest}
              onAddPayment={handleAddPayment}
              onAddGuestPass={handleAddGuestPass}
            />

            {/* Aesthetic Middle Feature Section: Architectural standards promo */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-[#EBE8E0] rounded-xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-6"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-[#4A1521]/2 rounded-full -mr-16 -mt-16" />
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-[#AF9E81]" />
                  <span className="font-sans text-xs font-semibold tracking-wider uppercase tracking-widest text-[#AF9E81] font-bold">Design Standard Validation</span>
                </div>
                <h4 className="font-serif text-lg font-medium text-stone-900">
                  Biodynamic Terroir & Oak Aging Standards Certified
                </h4>
                <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
                  Aura Reserve promotes water conservation and architectural harmony. Residents are authorized to select approved low-water plants and native flora to earn desert sustainability rebate credits while preserving high-contrast visual unity across front porches.
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-center">
                <div className="text-center bg-[#FAF9F6] border border-[#EBE8E0] p-4 rounded-lg w-full md:w-auto">
                  <p className="font-serif text-xs font-semibold text-[#4A1521] leading-relaxed uppercase tracking-wider font-semibold">Active Credit Pool</p>
                  <p className="font-mono text-3xl font-normal text-stone-900 mt-1">450 <span className="text-xs text-[#AF9E81]">pts</span></p>
                  <p className="font-sans text-[9px] text-[#AF9E81] tracking-wider uppercase mt-1">Next rebate: $25 credit</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Right Columns: Feed & Estate Status Center */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Chronological Resident Chronicle Feeds */}
            <ResidentFeed 
              feedItems={feedItems}
              onUpdateFeedItem={handleUpdateFeedItem}
            />

            {/* Crest Smart Tech & HVAC Status Center */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#121212] text-white border border-stone-800 rounded-xl p-6 md:p-8 space-y-6 relative overflow-hidden"
            >
              <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-[#4A1521]/15 blur-2xl" />
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4.5 w-4.5 text-[#AF9E81]" />
                  <h4 className="font-serif text-sm tracking-wide text-[#FAF9F6]">
                    Estate Cellar & Terroir Telemetry
                  </h4>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Climate conditions readouts */}
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-stone-900/60 p-3.5 rounded border border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-stone-500 block">Next Cellar Allocation</span>
                    <span className="font-sans text-xs font-semibold text-[#FAF9F6]">Thursday, May 28 at 7:00 PM</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest bg-[#4A1521] text-white px-2 py-0.5 rounded font-mono font-bold">Zoom</span>
                </div>

                <div className="bg-stone-900/60 p-3.5 rounded border border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-stone-400 block font-normal">Resort Pool Status</span>
                    <span className="font-sans text-xs font-semibold text-emerald-400">OPEN • Heated at 81°F</span>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                </div>

                <div className="bg-stone-900/60 p-3.5 rounded border border-stone-800 flex items-center justify-between">
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-stone-500 block">Community Solar Efficiency</span>
                    <span className="font-mono text-xs font-bold text-[#FAF9F6]">94.2% <span className="text-stone-500 text-xs font-semibold tracking-wider font-normal font-sans">Peak Fuel</span></span>
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-emerald-400 font-mono">+12.8 kW</span>
                </div>
              </div>

              {/* Storage statement */}
              <div className="space-y-3 font-sans text-xs text-stone-400 font-light leading-relaxed">
                <p>
                  Unit 14-B systems are synchronized. Shared community gym, solar grids, premium high-desert pool systems, and Clubhouse workstation gateways are fully active and functioning.
                </p>

                <div className="p-3 bg-stone-900/40 rounded border border-stone-800/80 flex items-center justify-between">
                  <span className="text-stone-300">HOA Concierge Staff Support:</span>
                  <span className="font-mono font-semibold text-emerald-400">On-Duty</span>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </main>

      {/* Silent elegant copyright line */}
      <footer className="border-t border-[#EBE8E0] py-8 text-center bg-[#FAF9F6] text-xs font-semibold tracking-wider uppercase font-mono tracking-widest text-stone-400">
        <div>© 2026 AURA RESERVE — Private Cellar &amp; Tasting Estate OS. All Member Allocations Verified.</div>
      </footer>

      {/* ADMIN PASSKEY MODAL (AURA RESERVE CHEAT CODE) */}
      <AnimatePresence>
        {isAdminPassModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#161415] text-[#FAF9F6] border border-[#AF9E81]/40 p-8 rounded-xl max-w-md w-full shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="p-2 bg-[#4A1521] text-white rounded-lg text-lg">🍷</span>
                  <div>
                    <h3 className="text-lg font-serif tracking-wide text-white">Cellar Master Door</h3>
                    <p className="text-xs text-stone-400 font-mono">AURA RESERVE • ESTATE OS</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAdminPassModalOpen(false)}
                  className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-xs text-stone-300 mb-6 leading-relaxed">
                Enter the master cellar passkey to unlock the private tasting schedule, 50 biometric vault lockers, barrel maturation telemetry, and member allocation triage engine.
              </p>

              {/* 1-Click Auto-Fill Demo Passcode Cheat Code */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3.5 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase font-mono tracking-widest text-amber-400 block font-semibold">
                    1-CLICK CHEAT CODE (BUYER PREVIEW)
                  </span>
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    reserve2026
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setAdminPassInput('reserve2026');
                    triggerToast('⚡ Passcode Auto-Filled: reserve2026');
                  }}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-mono font-bold rounded shadow transition-all active:scale-95 cursor-pointer"
                >
                  AUTO-FILL
                </button>
              </div>

              <form onSubmit={handleAdminUnlock} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold font-mono uppercase tracking-wider text-stone-400 mb-1">
                    Cellar Passkey
                  </label>
                  <input
                    type="password"
                    value={adminPassInput}
                    onChange={(e) => setAdminPassInput(e.target.value)}
                    placeholder="Enter passkey..."
                    autoFocus
                    className="w-full bg-[#110F10] border border-stone-700 focus:border-[#AF9E81] text-white px-4 py-2.5 rounded-lg text-sm font-mono outline-none transition-colors"
                  />
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAdminPassModalOpen(false)}
                    className="flex-1 py-2.5 border border-stone-700 hover:border-stone-500 text-stone-300 text-xs uppercase tracking-widest font-mono rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#4A1521] hover:bg-[#5C1B2A] text-white font-semibold text-base font-semibold min-h-[44px] uppercase tracking-widest font-mono rounded-lg transition-all shadow cursor-pointer active:scale-95"
                  >
                    Enter Control Room
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TOAST SYSTEM */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-[#161415] text-white border border-[#AF9E81]/50 px-5 py-3.5 rounded-xl shadow-2xl flex items-center space-x-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#AF9E81] animate-ping" />
            <span className="text-xs font-mono tracking-wide">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
