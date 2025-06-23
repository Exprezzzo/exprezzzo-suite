import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";

// ✅ Required for output: "export"
export async function generateStaticParams() {
  const snapshot = await getDocs(collection(db, "vendors"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
  }));
}

export default async function VendorPage({ params }: { params: { id: string } }) {
  const docRef = doc(db, "vendors", params.id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    notFound();
  }

  const vendor = snapshot.data();

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">{vendor.name}</h1>
        <p className="text-gray-300 mb-2">{vendor.description}</p>
        <p className="text-sm text-purple-400">Zone: {vendor.zone}</p>

        <div className="mt-6">
          {vendor.bookingType === "direct" && (
            <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full">
              🎫 Book Now
            </button>
          )}

          {vendor.bookingType === "inquiry" && (
            <button className="bg-pink-600 text-white font-bold py-2 px-6 rounded-full">
              💬 Request Info
            </button>
          )}

          {vendor.bookingType === "phone" && vendor.phone && (
            <a
              href={`tel:${vendor.phone}`}
              className="bg-green-600 text-white font-bold py-2 px-6 rounded-full inline-block"
            >
              📞 Call {vendor.phone}
            </a>
          )}
        </div>

        {/* ✅ Booking Form at Bottom */}
        <div className="mt-10">
          <BookingForm vendorId={params.id} vendorName={vendor.name} />
        </div>
      </div>
    </div>
  );
}
