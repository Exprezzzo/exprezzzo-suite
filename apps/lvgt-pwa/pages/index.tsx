import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';

// Mock vendor data - replace with your Firestore data structure
interface Vendor {
  id: number;
  name: string;
  isOpen: boolean;
  category: string;
}

const mockVendors: Vendor[] = [
  { id: 1, name: 'Neon Eats', isOpen: true, category: 'Food Truck' },
  { id: 2, name: 'Golden Casino', isOpen: false, category: 'Entertainment' },
  { id: 3, name: 'The Velvet Rope', isOpen: true, category: 'Nightclub' },
  { id: 4, name: 'Aces High', isOpen: true, category: 'Bar' },
  { id: 5, name: 'Jackpot Java', isOpen: false, category: 'Coffee' },
  { id: 6, name: 'Sin City Souvenirs', isOpen: true, category: 'Shopping' },
];

const VendorCard = ({ vendor }: { vendor: Vendor }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="relative bg-gray-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-lg shadow-lg overflow-hidden"
  >
    <div className="absolute top-2 right-2">
      <span className={`px-2 py-1 text-xs font-bold rounded-full ${vendor.isOpen ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'}`}>
        {vendor.isOpen ? 'OPEN' : 'CLOSED'}
      </span>
    </div>
    <div className="p-6">
      <div className="h-32 bg-gray-700/50 rounded-md mb-4 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Image</span>
      </div>
      <h3 className="text-xl font-bold text-yellow-300">{vendor.name}</h3>
      <p className="text-gray-400">{vendor.category}</p>
    </div>
  </motion.div>
);

const IndexPage: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate Firestore data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              Welcome to Vegas
            </span>
          </h1>
          <p className="text-gray-300 mt-2 text-lg">Your guide to the city of lights</p>
        </motion.header>

        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loader"
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400 mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading vendors from Firestore...</p>
            </motion.div>
          ) : (
            <motion.div
              key="vendors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mockVendors.map(vendor => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IndexPage;

// Enforce static generation for this page
export const dynamic = "force-static";
