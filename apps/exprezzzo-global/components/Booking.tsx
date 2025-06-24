"use client";
<h1 className="text-2xl font-bold mb-4">
  Book Your Tattoo Experience
</h1>
import React, { useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [service, setService] = useState("Tattoo Session");

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book Your Experience</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 mb-3 rounded"
      />
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full border px-3 py-2 mb-3 rounded"
      >
        <option value="Tattoo Session">Tattoo Session</option>
        <option value="VIP Suite Rental">VIP Suite Rental</option>
        <option value="DJ Gig">DJ Gig</option>
      </select>
      <button className="bg-black text-white px-6 py-2 rounded w-full">
        Confirm Booking
      </button>
    </div>
  );
}
