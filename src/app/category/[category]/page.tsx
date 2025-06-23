import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import VendorCard from "@/components/VendorCard";
import { notFound } from "next/navigation";

interface Vendor {
  id: string;
  name: string;
  category: string;
  zone: string;
  image: string;
  description: string;
  bookingType: string;
}

export async function generateStaticParams() {
  const snapshot = await getDocs(collection(db, "categories"));
  return snapshot.docs.map(doc => ({
    category: doc.id,
  }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const vendorsSnapshot = await getDocs(collection(db, "vendors"));
  const allVendors: Vendor[] = vendorsSnapshot.docs.map(doc => {
    const data = doc.data() as Omit<Vendor, "id">;
    return { id: doc.id, ...data };
  });

  const filtered = allVendors.filter(v => v.category === params.category);

  if (filtered.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-[#FFD700] mb-4">
        {params.category.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}
