import React, { useState } from 'react';
import { 
  Wine, 
  Users, 
  Calendar, 
  ShieldCheck, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  ArrowRight,
  LogOut,
  Layers,
  Thermometer,
  Lock,
  Plus
} from 'lucide-react';

export interface CellarReservation {
  id: string;
  memberName: string;
  memberTier: 'Collector' | 'Grand Cru' | 'Founder Circle';
  experience: string;
  date: string;
  timeSlot: string;
  guestsCount: number;
  status: 'Confirmed' | 'In Cellar' | 'Completed' | 'Pending';
  sommelier: string;
  allocationNotes: string;
}

interface AdminDashboardProps {
  onExit: () => void;
}

export function AdminDashboard({ onExit }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'reservations' | 'cellar_vaults' | 'allocations'>('reservations');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const [reservations, setReservations] = useState<CellarReservation[]>([
    {
      id: 'res-101',
      memberName: 'Julian Rothschild',
      memberTier: 'Grand Cru',
      experience: '2024 Reserve Barrel Tasting Flight',
      date: 'Today',
      timeSlot: '3:00 PM - 5:00 PM',
      guestsCount: 4,
      status: 'In Cellar',
      sommelier: 'Master Sommelier Jean-Luc',
      allocationNotes: 'Pre-ordered 3 cases 2022 Cabernet Reserve. French oak pairing.'
    },
    {
      id: 'res-102',
      memberName: 'Camille Beaumont',
      memberTier: 'Founder Circle',
      experience: 'Library Vintage Omakase Salon',
      date: 'Tomorrow',
      timeSlot: '6:30 PM - 9:00 PM',
      guestsCount: 6,
      status: 'Confirmed',
      sommelier: 'Sommelier Elena Vance',
      allocationNotes: 'Vertical pour 2016 Founder Reserve with Michelin pairing.'
    },
    {
      id: 'res-103',
      memberName: 'Harrison Vance',
      memberTier: 'Collector',
      experience: 'Private Vault Allocation Inspection',
      date: 'Friday',
      timeSlot: '1:00 PM - 2:30 PM',
      guestsCount: 2,
      status: 'Pending',
      sommelier: 'Cellar Master David',
      allocationNotes: 'Depositing 6 cases 2018 Bordeaux library vintages into Locker #84.'
    }
  ]);

  const handleUpdateStatus = (id: string, newStatus: CellarReservation['status']) => {
    setReservations(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  const filteredReservations = reservations.filter(r => {
    if (statusFilter === 'All') return true;
    return r.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-[#0F0D0E] text-[#FAF9F6] font-sans">
      {/* Top Bar */}
      <header className="border-b border-stone-800 bg-[#161415] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[#4A1521] text-white rounded-lg">
            <Wine size={20} />
          </div>
          <div>
            <h1 className="font-serif text-lg font-semibold tracking-wide text-white">
              AURA RESERVE • CELLAR MASTER COMMAND
            </h1>
            <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
              Estate Operations &amp; Allocation Gateway • v1.0.0
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-stone-300 bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Vault Biometrics: SECURE</span>
          </div>

          <button
            onClick={onExit}
            className="flex items-center space-x-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 rounded-lg text-xs font-mono transition-all cursor-pointer"
          >
            <LogOut size={14} />
            <span>Return to Public Estate</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* KPI Telemetry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#161415] border border-stone-800 p-5 rounded-xl">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2">
              <span>ACTIVE ALLOCATIONS</span>
              <DollarSign size={14} className="text-[#AF9E81]" />
            </div>
            <p className="font-mono text-2xl font-bold text-white">$148,250</p>
            <p className="text-[11px] text-emerald-400 font-mono mt-1">+18.4% vs last vintage</p>
          </div>

          <div className="bg-[#161415] border border-stone-800 p-5 rounded-xl">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2">
              <span>CELLAR CLIMATE</span>
              <Thermometer size={14} className="text-[#AF9E81]" />
            </div>
            <p className="font-mono text-2xl font-bold text-white">55°F / 72%</p>
            <p className="text-[11px] text-emerald-400 font-mono mt-1">Optimal Oak Aging State</p>
          </div>

          <div className="bg-[#161415] border border-stone-800 p-5 rounded-xl">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2">
              <span>MEMBER VAULTS</span>
              <Lock size={14} className="text-[#AF9E81]" />
            </div>
            <p className="font-mono text-2xl font-bold text-white">48 / 50</p>
            <p className="text-[11px] text-amber-400 font-mono mt-1">96% Vault Capacity Filled</p>
          </div>

          <div className="bg-[#161415] border border-stone-800 p-5 rounded-xl">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono mb-2">
              <span>RESERVED TASTINGS</span>
              <Users size={14} className="text-[#AF9E81]" />
            </div>
            <p className="font-mono text-2xl font-bold text-white">12 Scheduled</p>
            <p className="text-[11px] text-stone-400 font-mono mt-1">Next: Julian Rothschild (3 PM)</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 border-b border-stone-800 pb-3">
          <button
            onClick={() => setActiveTab('reservations')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'reservations'
                ? 'bg-[#4A1521] text-white font-semibold'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            Tasting Reservations ({reservations.length})
          </button>
          <button
            onClick={() => setActiveTab('cellar_vaults')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'cellar_vaults'
                ? 'bg-[#4A1521] text-white font-semibold'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            Biometric Wine Vaults (50 Units)
          </button>
          <button
            onClick={() => setActiveTab('allocations')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'allocations'
                ? 'bg-[#4A1521] text-white font-semibold'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            Vintage Allocations &amp; Barrels
          </button>
        </div>

        {/* Tab 1: Tasting Reservations */}
        {activeTab === 'reservations' && (
          <div className="bg-[#161415] border border-stone-800 rounded-xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-lg font-medium text-white">Private Tasting Schedule</h3>
                <p className="text-xs text-stone-400 font-mono">Triage guest arrivals, sommelier assignments, and cellar pours.</p>
              </div>

              {/* Status Filter */}
              <div className="flex items-center space-x-2">
                {['All', 'Confirmed', 'In Cellar', 'Pending', 'Completed'].map(status => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                      statusFilter === status
                        ? 'bg-stone-800 text-white font-semibold border border-stone-700'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Reservations List */}
            <div className="space-y-3">
              {filteredReservations.map(res => (
                <div
                  key={res.id}
                  className="bg-[#110F10] border border-stone-800 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-serif text-base font-semibold text-white">{res.memberName}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                        {res.memberTier}
                      </span>
                      <span className="text-xs font-mono text-stone-500">#{res.id}</span>
                    </div>
                    <p className="text-xs text-stone-300 font-sans">
                      <span className="text-[#AF9E81] font-semibold">{res.experience}</span> • {res.guestsCount} Patrons
                    </p>
                    <p className="text-[11px] text-stone-400 font-mono">
                      📅 {res.date} at {res.timeSlot} • Assigned: {res.sommelier}
                    </p>
                    <p className="text-[11px] text-stone-400 italic">
                      "{res.allocationNotes}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    {res.status !== 'In Cellar' && (
                      <button
                        onClick={() => handleUpdateStatus(res.id, 'In Cellar')}
                        className="px-3 py-1.5 bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 border border-amber-600/30 text-xs font-mono rounded-lg transition-all cursor-pointer"
                      >
                        Seat In Cellar
                      </button>
                    )}
                    {res.status !== 'Completed' && (
                      <button
                        onClick={() => handleUpdateStatus(res.id, 'Completed')}
                        className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-600/30 text-xs font-mono rounded-lg transition-all cursor-pointer"
                      >
                        Complete
                      </button>
                    )}
                    <span className={`px-3 py-1.5 text-xs font-mono rounded-lg uppercase tracking-wider font-bold ${
                      res.status === 'In Cellar'
                        ? 'bg-amber-500 text-black'
                        : res.status === 'Confirmed'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : res.status === 'Completed'
                        ? 'bg-stone-800 text-stone-400'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {res.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Wine Vaults */}
        {activeTab === 'cellar_vaults' && (
          <div className="bg-[#161415] border border-stone-800 rounded-xl p-6 space-y-4">
            <h3 className="font-serif text-lg font-medium text-white">Biometric Vault Locker Status</h3>
            <p className="text-xs text-stone-400 font-mono">Real-time status of 50 private patron lockers in the Grand Underground Cave.</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="bg-[#110F10] border border-stone-800 p-3 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-white">VAULT #{i + 70}</span>
                    <span className="block text-[10px] text-stone-400 font-mono">{i === 14 ? 'VACANT' : 'ALLOCATED'}</span>
                  </div>
                  <span className={`w-2 h-2 rounded-full ${i === 14 ? 'bg-stone-600' : 'bg-emerald-400'}`}></span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Vintage Allocations */}
        {activeTab === 'allocations' && (
          <div className="bg-[#161415] border border-stone-800 rounded-xl p-6 space-y-4">
            <h3 className="font-serif text-lg font-medium text-white">2024–2026 Vintage Allocation Ledger</h3>
            <p className="text-xs text-stone-400 font-mono">Current French oak barrels undergoing maturation in the reserve cave.</p>
            <div className="space-y-3 pt-2">
              <div className="bg-[#110F10] border border-stone-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">2024 Rutherford Single-Vineyard Cabernet</h4>
                  <p className="text-xs text-stone-400 font-mono">18 Barrels • Taransaud French Oak (Medium+ Toast) • 96 Cases Pre-Committed</p>
                </div>
                <span className="px-3 py-1 bg-[#4A1521] text-white text-xs font-mono font-bold rounded">Active Oak Aging</span>
              </div>
              <div className="bg-[#110F10] border border-stone-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">2023 Grand Cru Proprietary Red Blend</h4>
                  <p className="text-xs text-stone-400 font-mono">12 Barrels • Sylvain French Oak • 100% Sold Out to Founder Circle</p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold rounded">Bottling Scheduled</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
