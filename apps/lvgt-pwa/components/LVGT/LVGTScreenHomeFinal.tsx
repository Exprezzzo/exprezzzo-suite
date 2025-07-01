import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card } from '@/components/ui/card';

export default function VendorTiles() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const querySnapshot = await getDocs(collection(db, 'vendors'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVendors(data);
    };
    fetchVendors();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {vendors.map(vendor => (
        <Card key={vendor.id} className="p-4 bg-white shadow-md hover:shadow-lg transition rounded-xl">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{vendor.name}</h3>
          <p className="text-sm text-gray-600">{vendor.description}</p>
        </Card>
      ))}
    </div>
  );
}