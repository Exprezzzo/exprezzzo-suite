import React, { useState, useEffect, useRef, useMemo } from "react";

// Production-grade, Googie-style Las Vegas sign with Exprezzzo brand colors and day/night neon mode
const THEMES = {
  exprezzzo: {
    star: "#ad0000",
    starGlow: "#ff0000",
    welcomeCircles: "#FFFFFF",
    welcomeText: "#ad0000",
    welcomeStroke: "#FFD700",
    toText: "#3577ae",
    mainText: "#FFFFFF",
    mainBg: "#ad0000",
    borderOuter: "#FFD700",
    borderInner: "#c55ff7",
    bulbOn: "#FFD700",
    bulbOff: "#664400",
    bulbGlow: "#FFFACD",
    neonAccent: "#c55ff7",
  }
};

const getBulbPositions = () => {
  // 89 bulbs along the Googie perimeter (approximated for SVG 800x400)
  const positions = [];
  // Top horizontal
  for (let i = 0; i < 13; i++) positions.push({ x: 280 + i * 20, y: 60 });
  // Right diagonal down
  for (let i = 0; i < 15; i++) positions.push({ x: 520 + i * 8, y: 60 + i * 9 });
  // Right side
  for (let i = 0; i < 15; i++) positions.push({ x: 640 - i * 8, y: 195 + i * 9 });
  // Bottom arc
  for (let i = 0; i < 7; i++) positions.push({ x: 520 - i * 34.3, y: 330 - i * 2 });
  // Left diagonal up
  for (let i = 0; i < 15; i++) positions.push({ x: 280 - i * 8, y: 330 - i * 9 });
  // Left side
  for (let i = 0; i < 15; i++) positions.push({ x: 160 + i * 8, y: 195 - i * 9 });
  // Close loop
  for (let i = 0; i < 4; i++) positions.push({ x: 280, y: 60 });
  return positions.slice(0, 89);
};

export default function LasVegasGoodTimesSign({
  theme = "exprezzzo",
  animationSpeed = 100,
  glowIntensity = 1,
  bulbBrightness = 1,
  dayMode = false,
  showBackText = false,
  className = "",
}) {
  const [frame, setFrame] = useState(0);
  const animationRef = useRef();
  const colors = THEMES[theme] || THEMES.exprezzzo;
  const bulbPositions = useMemo(getBulbPositions, []);

  useEffect(() => {
    if (dayMode) return;
    const animate = () => {
      setFrame(f => f + 1);
      animationRef.current = setTimeout(animate, animationSpeed);
    };
    animationRef.current = setTimeout(animate, animationSpeed);
    return () => animationRef.current && clearTimeout(animationRef.current);
  }, [animationSpeed, dayMode]);

  const getBulbState = idx => {
    if (dayMode) return 0.9;
    const pos = (frame + idx * 2) % 20;
    if (pos < 5) return 1;
    if (pos < 10) return 0.7;
    if (pos < 15) return 0.3;
    return 0.5;
  };

  return (
    <svg
      viewBox="0 0 800 400"
      width="100%"
      height="auto"
      className={className}
      role="img"
      aria-label="Welcome to Las Vegas Good Times animated sign"
      style={{ background: dayMode ? "#fff" : "#0a0a0a" }}
    >
      <defs>
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={4 * glowIntensity} result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bulbGlow" x="-200%" y="-200%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation={6 * glowIntensity} result="starBlur" />
          <feMerge>
            <feMergeNode in="starBlur" />
            <feMergeNode in="starBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Starburst */}
      <g transform="translate(400, 30)">
        <g transform={`rotate(${frame * 0.5})`}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
            <path
              key={i}
              d={`M 0,0 L ${i % 2 === 0 ? 30 : 20},0`}
              transform={`rotate(${a})`}
              stroke={colors.star}
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              filter="url(#starGlow)"
            />
          ))}
          <circle cx="0" cy="0" r="10" fill={colors.starGlow} />
          <circle cx="0" cy="0" r="7" fill={colors.star} />
        </g>
      </g>

      {/* WELCOME circles */}
      {["W", "E", "L", "C", "O", "M", "E"].map((letter, i) => {
        const x = 220 + i * 80;
        const y = 80;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="28" fill="none" stroke={colors.welcomeStroke} strokeWidth="3" opacity="0.8" />
            <circle cx={x} cy={y} r="25" fill={colors.welcomeCircles} stroke={colors.welcomeStroke} strokeWidth="2" />
            <text x={x} y={y + 8} textAnchor="middle" fontSize="28" fontWeight="900" fontFamily="Arial Black, sans-serif" fill={colors.welcomeText}>{letter}</text>
          </g>
        );
      })}

      {/* TO text */}
      <text x="400" y="135" textAnchor="middle" fontSize="32" fontFamily="Georgia, serif" fontStyle="italic" fill={colors.toText} filter="url(#neonGlow)">TO</text>

      {/* Main diamond/arrow shape with borders */}
      <g>
        <path
          d="M 200 180 L 600 180 L 680 240 L 600 300 L 400 380 L 200 300 L 120 240 Z"
          fill={colors.borderOuter}
          stroke={colors.borderOuter}
          strokeWidth="4"
        />
        <path
          d="M 210 188 L 590 188 L 665 240 L 590 292 L 400 368 L 210 292 L 135 240 Z"
          fill={colors.borderInner}
        />
        <path
          d="M 220 196 L 580 196 L 650 240 L 580 284 L 400 356 L 220 284 L 150 240 Z"
          fill={colors.mainBg}
          filter="url(#neonGlow)"
        />
      </g>

      {/* Animated bulbs */}
      {bulbPositions.map((pos, i) => {
        const brightness = getBulbState(i) * bulbBrightness;
        const isLit = brightness > 0.5;
        return (
          <g key={i}>
            {isLit && <circle cx={pos.x} cy={pos.y} r={12 + brightness * 6} fill={colors.bulbGlow} opacity={brightness * 0.4} filter="url(#bulbGlow)" />}
            <circle cx={pos.x} cy={pos.y} r="8" fill="#2C2C2C" stroke="#1A1A1A" strokeWidth="1" />
            <circle cx={pos.x} cy={pos.y} r="6" fill={isLit ? colors.bulbOn : colors.bulbOff} fillOpacity={0.5 + brightness * 0.5} />
            {isLit && <circle cx={pos.x - 1} cy={pos.y - 1} r="2" fill="#FFFFFF" opacity={brightness * 0.8} />}
          </g>
        );
      })}

      {/* LASVEGASGOODTIMES main text */}
      <text
        x="400"
        y="255"
        textAnchor="middle"
        fontSize="42"
        fontWeight="900"
        fontFamily="Impact, Arial Black, sans-serif"
        letterSpacing="-2"
        fill={colors.mainText}
        stroke={colors.mainText}
        strokeWidth="1"
        filter="url(#neonGlow)"
      >LASVEGASGOODTIMES</text>
    </svg>
  );
}
