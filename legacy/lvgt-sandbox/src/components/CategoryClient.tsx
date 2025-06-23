'use client';

import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

type Vendor = {
  id: string;
  name: string;
  zone: string;
  image: string;
  description: string;
};

export default function CategoryClient({ category }: { category: string }) {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    async function fetchVendors() {
      const q = query(collection(db, 'vendors'), where('category', '==', category));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Vendor[];
      setVendors(data);
    }

    fetchVendors();
  }, [category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vendors.map((v) => (
        <div key={v.id} className="bg-[#1a1a2e] p-4 rounded-xl shadow hover:scale-105 transition-transform">
          <img src={v.image} alt={v.name} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold">{v.name}</h2>
          <p className="text-sm text-gray-300">{v.zone}</p>
          <p className="text-sm mt-2">{v.description}</p>
        </div>
      ))}
    </div>
  );
}
