"use client";

import { motion } from "framer-motion";

export default function VendorCard({ vendor }: { vendor: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-400 transition-all bg-[#1a1a1a]"
    >
      <img
        src={vendor.image}
        alt={vendor.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#FFD700]">{vendor.name}</h2>
        <p className="text-sm text-gray-300">{vendor.description}</p>
        <p className="mt-2 text-xs text-gray-500">📍 {vendor.zone}</p>
      </div>
    </motion.div>
  );
}
