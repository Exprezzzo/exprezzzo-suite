"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, Hotel, Car, Ship } from "lucide-react";

function Tile({ icon, label }: { icon: React.ReactElement; label: string }) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#1e1e2f] text-white"
    >
      <div className="mb-2">{icon}</div>
      <p className="text-sm">{label}</p>
    </motion.div>
  );
}

export default function LVGTScreenHomeFinal() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white px-4 py-6">
      <h1 className="text-[#FFD700] text-center text-3xl font-bold mb-4">
        🎉 Welcome to Las Vegas Good Times
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <Tile icon={<Plane />} label="Flights" />
        <Tile icon={<Hotel />} label="Hotels" />
        <Tile icon={<Car />} label="Cars" />
        <Tile icon={<Ship />} label="Cruises" />
      </div>
      <p className="text-center text-sm text-[#ccc]">More categories coming soon…</p>
    </main>
  );
}