"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function CategoryPage() {
  const { id } = useParams();
  const [vendors, setVendors] = useState<any[]>([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const q = query(collection(db, "vendors"), where("category", "==", id));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setVendors(data);
    };

    fetchVendors();
  }, [id]);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Category: {id}</h1>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor.id} className="border p-2 rounded shadow">
            {vendor.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
