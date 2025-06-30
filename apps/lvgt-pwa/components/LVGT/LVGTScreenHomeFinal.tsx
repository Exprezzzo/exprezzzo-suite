// File: apps/lvgt-pwa/components/LVGT/LVGTScreenHomeFinal.tsx
"use client";

import React from "react";
import { Building2, Plane, Car, CalendarDays } from "lucide-react";

function Tile({ icon, label }: { icon: React.ReactElement; label: string }) {
  return (
    <div
      style={{
        background: "#1A1A20",
        color: "white",
        padding: "16px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "8px",
        transition: "0.3s",
        width: "100px",
      }}
    >
      <div style={{ marginBottom: "8px" }}>{icon}</div>
      <div style={{ fontSize: "14px", textAlign: "center" }}>{label}</div>
    </div>
  );
}

export default function LVGTScreenHomeFinal() {
  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        padding: "24px",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>
        🎉 Welcome to Las Vegas Good Times
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <Tile icon={<Building2 />} label="Hotels" />
        <Tile icon={<Plane />} label="Flights" />
        <Tile icon={<Car />} label="Rental Cars" />
        <Tile icon={<CalendarDays />} label="Shows" />
        <Tile icon={<CalendarDays />} label="Clubs" />
        <Tile icon={<CalendarDays />} label="Events" />
      </div>
      <footer style={{ marginTop: "48px", fontSize: "12px", color: "gray" }}>
        © 2025 Las Vegas Good Times. All rights reserved.
      </footer>
    </div>
  );
}