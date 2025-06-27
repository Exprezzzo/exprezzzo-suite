// File: apps/exprezzzo-global/app/vendor/[id]/page.tsx

import { db } from "@/lib/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import BookingModal from "@/components/BookingModal";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const docRef = doc(db, "vendors", params.id);
  const snap = await getDoc(docRef);
  const data = snap.data();
  return {
    title: data?.name || "Vendor Details",
    description: `Details for ${data?.name || "vendor"}`,
  };
}

export default async function VendorPage({ params }: { params: { id: string } }) {
  const docRef = doc(db, "vendors", params.id);
  const snap = await getDoc(docRef);
  const vendor = snap.data();

  if (!vendor) return <div className="p-4">Vendor not found.</div>;

  return (
    <main className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">{vendor.name}</h1>
      <p className="text-gray-600">
        {vendor.category} · {vendor.zone}
      </p>
      <div className="flex flex-wrap gap-2">
        {vendor.tags?.map((tag: string) => (
          <span key={tag} className="bg-black text-white text-xs px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm mt-2 text-gray-700">{vendor.description}</p>

      <section id="book">
        <BookingModal vendorId={params.id} />
      </section>
    </main>
  );
}