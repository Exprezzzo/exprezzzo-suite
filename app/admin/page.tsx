"use client";

import React from "react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Exprezzzo Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">📦 Bookings</h2>
          <p className="text-sm text-gray-600">View and manage recent vendor bookings.</p>
          <button className="mt-3 px-4 py-2 bg-black text-white rounded">Open Panel</button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">🧠 AI Suggestions</h2>
          <p className="text-sm text-gray-600">Realtime Exprezzzo AI feedback on vendor trends.</p>
          <button className="mt-3 px-4 py-2 bg-black text-white rounded">Run Model</button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">📍 Map Intel</h2>
          <p className="text-sm text-gray-600">Geo-tagged activity and hot zones (via MappingIntel).</p>
          <button className="mt-3 px-4 py-2 bg-black text-white rounded">View Heatmap</button>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">⚙️ Settings</h2>
          <p className="text-sm text-gray-600">Control Firestore rules, triggers, and exports.</p>
          <button className="mt-3 px-4 py-2 bg-black text-white rounded">Go to Controls</button>
        </div>
      </div>
    </div>
  );
}
