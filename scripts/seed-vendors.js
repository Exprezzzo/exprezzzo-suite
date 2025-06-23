// scripts/seed-vendors.js
const admin = require('firebase-admin');
const serviceAccount = require('../service-account-key.json'); // Adjust if your file is elsewhere

// Initialize Firebase Admin with service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const sampleVendors = [
  // Nightlife
  {
    name: "Omnia Nightclub",
    category: "nightlife",
    zone: "The Strip",
    description: "Premier nightclub at Caesars Palace featuring world-class DJs and stunning views",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800",
    featured: true,
    bookingType: "reservation",
    address: "3570 Las Vegas Blvd S, Las Vegas, NV 89109"
  },
  {
    name: "XS Nightclub",
    category: "nightlife",
    zone: "The Strip",
    description: "Lavish nightclub at Wynn with poolside ambiance and top EDM artists",
    image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
    featured: false,
    bookingType: "reservation",
    address: "3131 Las Vegas Blvd S, Las Vegas, NV 89109"
  },
  {
    name: "Drai's Beachclub",
    category: "nightlife",
    zone: "The Strip",
    description: "Rooftop beach club with panoramic Strip views and live performances",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
    featured: true,
    bookingType: "reservation",
    address: "3595 Las Vegas Blvd S, Las Vegas, NV 89109"
  },

  // Restaurants
  {
    name: "Gordon Ramsay Hell's Kitchen",
    category: "restaurants",
    zone: "The Strip",
    description: "Celebrity chef restaurant with signature dishes from the famous TV show",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    featured: true,
    bookingType: "reservation",
    address: "3570 Las Vegas Blvd S, Las Vegas, NV 89109"
  },
  {
    name: "Joël Robuchon",
    category: "restaurants",
    zone: "The Strip",
    description: "Michelin 3-star French fine dining experience at MGM Grand",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    featured: true,
    bookingType: "reservation",
    address: "3799 Las Vegas Blvd S, Las Vegas, NV 89109"
  },
  {
    name: "Lotus of Siam",
    category: "restaurants",
    zone: "East Side",
    description: "Award-winning authentic Thai cuisine, a local favorite off the Strip",
    image: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=800",
    featured: false,
    bookingType: "direct",
    address: "620 E Flamingo Rd, Las Vegas, NV 89119"
  },

  // Shows
  {
    name: "Cirque du Soleil - O",
    category: "shows",
    zone: "The Strip",
    description: "Aquatic masterpiece at Bellagio combining surrealism and theatrical romance",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
    featured: true,
    bookingType: "ticket",
    address: "3600 Las Vegas Blvd S, Las Vegas, NV 89109"
  },
  {
    name: "Absinthe",
    category: "shows",
    zone: "The Strip",
    description: "Raunchy and hilarious circus-cabaret show at Caesars Palace",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800",
    featured: false,
    bookingType: "ticket",
    address: "3570 Las Vegas Blvd S, Las Vegas, NV 89109"
  },

  // Hotels
  {
    name: "The Cosmopolitan",
    category: "hotels",
    zone: "The Strip",
    description: "Modern luxury resort with unique design and rooftop pools",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    featured: true,
    bookingType: "inquiry",
    address: "3708 Las Vegas Blvd S, Las Vegas, NV 89109"
  },
  {
    name: "ARIA Resort & Casino",
    category: "hotels",
    zone: "The Strip",
    description: "High-tech luxury resort at the heart of CityCenter",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    featured: true,
    bookingType: "inquiry",
    address: "3730 Las Vegas Blvd S, Las Vegas, NV 89158"
  },

  // Tours & Activities
  {
    name: "Grand Canyon Helicopter Tour",
    category: "tours",
    zone: "Off-Strip",
    description: "Breathtaking aerial views of the Grand Canyon with champagne landing",
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=800",
    featured: true,
    bookingType: "reservation",
    address: "5596 Haven St, Las Vegas, NV 89119"
  },
  {
    name: "High Roller Observation Wheel",
    category: "activities",
    zone: "The Strip",
    description: "World's tallest observation wheel with 360-degree views of Vegas",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800",
    featured: false,
    bookingType: "ticket",
    address: "3545 Las Vegas Blvd S, Las Vegas, NV 89109"
  },

  // Pool Parties
  {
    name: "Encore Beach Club",
    category: "pools",
    zone: "The Strip",
    description: "Premier dayclub with world-class DJs and luxury cabanas",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
    featured: true,
    bookingType: "reservation",
    address: "3121 Las Vegas Blvd S, Las Vegas, NV 89109"
  },
  {
    name: "Wet Republic",
    category: "pools",
    zone: "The Strip",
    description: "Ultra pool at MGM Grand with signature party atmosphere",
    image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800",
    featured: false,
    bookingType: "reservation",
    address: "3799 Las Vegas Blvd S, Las Vegas, NV 89109"
  },

  // Shopping
  {
    name: "The Forum Shops",
    category: "shopping",
    zone: "The Strip",
    description: "Luxury shopping destination at Caesars Palace",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
    featured: false,
    bookingType: "direct",
    address: "3500 Las Vegas Blvd S, Las Vegas, NV 89109"
  },

  // Spas
  {
    name: "The Spa at ARIA",
    category: "wellness",
    zone: "The Strip",
    description: "World-class spa offering Japanese-inspired treatments",
    image: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
    featured: true,
    bookingType: "reservation",
    address: "3730 Las Vegas Blvd S, Las Vegas, NV 89158"
  },

  // Transportation
  {
    name: "Presidential Limousine",
    category: "transportation",
    zone: "All Vegas",
    description: "Luxury transportation services including limos and party buses",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
    featured: false,
    bookingType: "inquiry",
    address: "5010 S Valley View Blvd, Las Vegas, NV 89118"
  }
];

const categories = [
  { id: "nightlife", name: "Nightlife", icon: "🎉", count: 3 },
  { id: "restaurants", name: "Restaurants", icon: "🍽️", count: 3 },
  { id: "shows", name: "Shows", icon: "🎭", count: 2 },
  { id: "hotels", name: "Hotels", icon: "🏨", count: 2 },
  { id: "tours", name: "Tours", icon: "🚁", count: 1 },
  { id: "activities", name: "Activities", icon: "🎢", count: 1 },
  { id: "pools", name: "Pool Parties", icon: "🏖️", count: 2 },
  { id: "shopping", name: "Shopping", icon: "🛍️", count: 1 },
  { id: "wellness", name: "Spas & Wellness", icon: "💆", count: 1 },
  { id: "transportation", name: "Transportation", icon: "🚗", count: 1 }
];

async function seedData() {
  try {
    console.log('🎰 Starting Las Vegas data seed...');

    console.log('📁 Seeding categories...');
    for (const category of categories) {
      await db.collection('categories').doc(category.id).set({
        ...category,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
    }
    console.log(`✅ ${categories.length} categories seeded!`);

    console.log('🏢 Seeding vendors...');
    for (const vendor of sampleVendors) {
      await db.collection('vendors').add({
        ...vendor,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
    }
    console.log(`✅ ${sampleVendors.length} vendors seeded!`);

    console.log('🎉 All data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
}

seedData();
