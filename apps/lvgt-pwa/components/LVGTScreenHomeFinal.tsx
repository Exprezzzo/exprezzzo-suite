"use client";
import React from "react";
import { Building2, Plane, Car, CalendarHeart } from "lucide-react";

export default function LVGTScreenHomeFinal() {
  const categories = [
    { icon: <Building2 size={28} />, label: "Hotels" },
    { icon: <Plane size={28} />, label: "Flights" },
    { icon: <Car size={28} />, label: "Rental Cars" },
    { icon: <CalendarHeart size={28} />, label: "Shows" },
    { icon: <CalendarHeart size={28} />, label: "Clubs" },
    { icon: <CalendarHeart size={28} />, label: "Events" },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 24 }}>
        🎉 Welcome to Las Vegas Good Times
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {categories.map(({ icon, label }, idx) => (
          <div key={idx} style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "#f0f0f0",
            padding: 16,
            borderRadius: 12
          }}>
            {icon}
            <span style={{ fontSize: 18 }}>{label}</span>
          </div>
        ))}
      </div>
      <footer style={{ marginTop: 48, fontSize: 14 }}>
        © 2025 Las Vegas Good Times. All rights reserved.
      </footer>
    </div>
  );
}
