import { FeedItem, PaymentRecord, MaintenanceRequest, GuestPass, DocumentItem, AmenityDetail } from './types';

export const INITIAL_FEED_ITEMS: FeedItem[] = [
  {
    id: 'f1',
    category: 'Event',
    date: '2026-06-15',
    title: '2024 Rutherford Reserve Cabernet Sauvignon Private Barrel Unveiling',
    summary: 'Join our Head Winemaker and Master Sommelier for the first private tasting of our single-vineyard, French oak-aged 2024 Cabernet Sauvignon vintage.',
    content: 'Exclusive member allocation event hosted in the Grand Cave Sanctuary. Experience vertical flights across our 2020, 2022, and newly barreled 2024 Rutherford vintages accompanied by a 5-course artisanal pairing curated by Michelin-awarded guest chefs. Sommelier notes and pre-allocation order forms will be provided to all attending collectors.',
    author: 'Aura Cellar Master',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&h=600&q=80',
    rsvpCount: 28,
    rsvpStatus: null,
    likesCount: 34,
    commentsCount: 6,
  },
  {
    id: 'f2',
    category: 'Notice',
    date: '2026-06-08',
    title: 'Cellar Vault Modernization: Biometric Climate & Lock Upgrades',
    summary: 'Sectors A and B of the underground aging vaults are completing installation of dual-sensor ultrasonic humidity sensors and biometric passkey locks.',
    content: 'To safeguard your rare vintage allocations, our private vault chambers have transitioned to multi-factor biometric authentication. Private locker owners can access their personalized inventory vaults 24/7 using the updated estate member passkey. Temperature remains strictly locked at 55°F with 72% ambient humidity.',
    author: 'Estate Operations Team',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=600&q=80',
    likesCount: 22,
    commentsCount: 2,
  },
  {
    id: 'f3',
    category: 'Announcement',
    date: '2026-05-30',
    title: 'Annual Harvest & Twilight Vineyard Gala Announcement',
    summary: 'Reservations for our 2026 Twilight Harvest Gala are now open for Collector and Grand Cru guild members. Limited to 40 private patrons.',
    content: 'Celebrate the commencement of our autumn grape harvest under the Rutherford starlit canopy. Live acoustic cello performances, private library pours from the 2016 Founder Reserve, and ceremonial vineyard grape blessings will take place at the Hilltop Pavilion.',
    author: 'Grand Cru Hospitality Guild',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&h=600&q=80',
    rsvpCount: 38,
    rsvpStatus: null,
    likesCount: 45,
    commentsCount: 8,
  }
];

export const INITIAL_PAYMENTS: PaymentRecord[] = [
  {
    id: 'pay1',
    date: '2026-05-01',
    amount: 1250.00,
    category: 'HOA Assessment',
    status: 'Paid',
    paymentMethod: 'AutoPay (Visa *4288)'
  },
  {
    id: 'pay2',
    date: '2026-05-01',
    amount: 600.00,
    category: 'Reserved Parking Space Lease',
    status: 'Paid',
    paymentMethod: 'AutoPay (Visa *4288)'
  },
  {
    id: 'pay3',
    date: '2026-06-01',
    amount: 1250.00,
    category: 'HOA Assessment',
    status: 'Pending',
  },
  {
    id: 'pay4',
    date: '2026-06-01',
    amount: 600.00,
    category: 'Reserved Parking Space Lease',
    status: 'Pending',
  }
];

export const INITIAL_REQUESTS: MaintenanceRequest[] = [
  {
    id: 'req1',
    date: '2026-05-18',
    title: 'Private Cellar Vault Humidity Calibration - Locker #84',
    description: 'Requesting precision ultrasonic calibration for private vault locker #84 prior to delivery of 6 cases of 2018 Bordeaux library allocations.',
    category: 'Maintenance',
    priority: 'Routine',
    status: 'In Progress'
  },
  {
    id: 'req2',
    date: '2026-05-14',
    title: 'Sommelier Tasting Lounge Private Reservation Verification',
    description: 'Confirmed private appointment for 6 guests in the French Oak Barrel Room with cellar master pairings.',
    category: 'Security',
    priority: 'Urgent',
    status: 'Completed'
  }
];

export const INITIAL_GUEST_PASSES: GuestPass[] = [
  {
    id: 'pass1',
    guestName: 'Julian Rothschild',
    vehiclePlate: 'NAPA-V7',
    date: '2026-05-23',
    duration: '24 Hours',
    passCode: 'AR-772-V9'
  },
  {
    id: 'pass2',
    guestName: 'Camille Beaumont',
    vehiclePlate: 'CAB-992',
    date: '2026-05-21',
    duration: '3 Days',
    passCode: 'AR-394-C8'
  }
];

export const DOCUMENTS_LIST: DocumentItem[] = [
  {
    id: 'doc1',
    title: 'Aura Reserve Estate Constitution & Member Bylaws',
    category: 'Bylaws & Rules',
    fileSize: '3.4 MB',
    lastUpdated: '2026-01-15'
  },
  {
    id: 'doc2',
    title: '2026 Vintage Allocation Schedule & Sommelier Release Notes',
    category: 'Financial Reports',
    fileSize: '4.8 MB',
    lastUpdated: '2026-04-10'
  },
  {
    id: 'doc3',
    title: 'Underground Cellar Vault Temperature & Humidity Audit Report',
    category: 'Meeting Minutes',
    fileSize: '2.1 MB',
    lastUpdated: '2026-05-01'
  },
  {
    id: 'doc4',
    title: 'Private Barrel Custom Aging & Oak Selection Intake Agreement',
    category: 'Forms & Surveys',
    fileSize: '1.2 MB',
    lastUpdated: '2026-03-20'
  }
];

export const ESTATE_AMENITIES: AmenityDetail[] = [
  {
    id: 'am1',
    name: 'Grand Cave Sanctuary & Library Tasting Salon',
    description: 'Underground volcanic rock cellar featuring rare library vintages, bespoke tasting table, and sommelier flight presentations.',
    capacity: '12 Patrons',
    status: 'Open',
    timeSlots: ['12:00 PM - 02:00 PM', '03:00 PM - 05:00 PM', '06:00 PM - 08:00 PM', '08:30 PM - 10:30 PM']
  },
  {
    id: 'am2',
    name: 'Rutherford Hilltop Vineyard Terrace',
    description: 'Scenic outdoor terrace overlooking 65 acres of estate Cabernet vines with gas fire monoliths and sunset lounge cabanas.',
    capacity: '24 Guests',
    status: 'Open',
    timeSlots: ['01:00 PM - 03:00 PM', '04:00 PM - 06:00 PM', '06:30 PM - 09:30 PM']
  },
  {
    id: 'am3',
    name: 'Private Member Cellar Vault Lockers',
    description: 'Secure biometric personal wine lockers maintained at continuous 55°F with precision climate telemetry and insured storage.',
    capacity: 'Vault Access Only',
    status: 'Open',
    timeSlots: ['08:00 AM - 10:00 PM (Daily)']
  }
];
