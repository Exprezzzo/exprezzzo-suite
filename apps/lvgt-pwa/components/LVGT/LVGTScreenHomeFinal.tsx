// File: apps/lvgt-pwa/components/LVGT/LVGTScreenHomeFinal.tsx
import React from "react";
import {
  Hotel,
  Plane,
  Car,
  Calendar,
} from "lucide-react";

const tileStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "16px",
};

const labelStyle = {
  fontSize: "16px",
  marginTop: "8px",
};

const containerStyle = {
  padding: "24px",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
};

export default function LVGTScreenHomeFinal() {
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>🎉 Welcome to Las Vegas Good Times</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={tileStyle}><Hotel /><div style={labelStyle}>Hotels</div></div>
        <div style={tileStyle}><Plane /><div style={labelStyle}>Flights</div></div>
        <div style={tileStyle}><Car /><div style={labelStyle}>Rental Cars</div></div>
        <div style={tileStyle}><Calendar /><div style={labelStyle}>Shows</div></div>
        <div style={tileStyle}><Calendar /><div style={labelStyle}>Clubs</div></div>
        <div style={tileStyle}><Calendar /><div style={labelStyle}>Events</div></div>
      </div>
      <div style={{ marginTop: "32px", fontSize: "12px" }}>
        © 2025 Las Vegas Good Times. All rights reserved.
      </div>
    </div>
  );
}
