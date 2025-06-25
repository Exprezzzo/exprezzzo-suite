"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/firebaseConfig";

export default function CategoryPage() {
  const { id } = useParams();
  const [vendors, setVendors] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const q = query(collection(db, "vendors"), where("category", "==", id));
      const snap = await getDocs(q);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVendors(data);
    };
    fetch();
  }, [id]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Vendors in {id}</h1>
      <pre>{JSON.stringify(vendors, null, 2)}</pre>
    </div>
  );
}
