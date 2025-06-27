// File: apps/exprezzzo-global/components/BookingModal.tsx

"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/firebaseConfig";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/lib/firebase/useAuth";

export default function BookingModal({ vendorId }: { vendorId: string }) {
  const { toast } = useToast();
  const { user } = useAuth();

  const [bookingType, setBookingType] = useState("RSVP");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleConfirmBooking() {
    if (!user) {
      toast({ title: "Please sign in first", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const bookingData = {
        vendorId,
        userId: user.uid,
        type: bookingType,
        notes,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "bookings"), bookingData);

      toast({ title: "Booking Confirmed!", description: "We'll follow up soon." });
      setNotes("");
    } catch (error) {
      console.error("Error creating booking:", error);
      toast({ title: "Booking failed", description: "Try again later", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Confirm Your Booking</h2>
      <select value={bookingType} onChange={(e) => setBookingType(e.target.value)}>
        <option value="RSVP">RSVP</option>
        <option value="Bid">Bid</option>
        <option value="Direct">Direct</option>
        <option value="Group">Group</option>
      </select>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add notes..."
        className="w-full border px-3 py-2 rounded"
      />
      <button
        onClick={handleConfirmBooking}
        className="bg-black text-white px-6 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </div>
  );
}