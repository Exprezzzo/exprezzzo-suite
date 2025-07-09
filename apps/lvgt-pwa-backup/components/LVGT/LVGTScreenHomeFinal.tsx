// File: apps/lvgt-pwa/components/LVGT/LVGTScreenHomeFinal.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

interface Vendor {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  imageUrl?: string;
}

export default function LVGTScreenHomeFinal() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const snapshot = await getDocs(collection(db, 'vendors'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Vendor[];
      setVendors(data);
    };
    fetchVendors();
  }, []);

  return (
    <main className="bg-black min-h-screen text-white p-4">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl font-bold text-yellow-300 mb-6"
      >
        🎉 Welcome to Las Vegas Good Times
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {vendors.map((vendor) => (
          <motion.div
            key={vendor.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-xl p-4 text-center shadow-lg"
          >
            {vendor.imageUrl && (
              <img src={vendor.imageUrl} alt={vendor.name} className="w-full h-24 object-cover rounded-lg mb-2" />
            )}
            <div className="font-semibold text-lg text-yellow-200">{vendor.name}</div>
            <div className="text-sm text-gray-300">{vendor.category}</div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}