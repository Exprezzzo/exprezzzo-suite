// apps/exprezzzo-global/components/Booking.tsx
'use client';

import React, { useState } from "react";
import firebaseApp from "@/lib/firebase/firebaseConfig";

export default function Booking() {
  const [name, setName] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">📅 Book a Vendor</h1>
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => {
          console.log(`Booking submitted by ${name}`);
          // Firebase logic here using firebaseApp
        }}
      >
        Submit Booking
      </button>
    </div>
  );
}