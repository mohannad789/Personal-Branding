"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react";

export default function BackgroundShaders({ isPaused = false }: { isPaused?: boolean }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = resolvedTheme === "light";

  // Light mode: white and very light grays
  // Dark mode: black and very dark grays
  const meshColors = isLight 
    ? ["#ffffff", "#fafafa", "#f5f5f5", "#f0f0f0"]
    : ["#000000", "#0a0a0a", "#111111", "#171717"];

  const bgColor = isLight ? "#ffffff" : "#000000";
  const dotColor = isLight ? "#e5e5e5" : "#1a1a1a";
  const orbitColor = isLight ? "#f0f0f0" : "#0a0a0a";

  // If paused, we could technically unmount it, but that might cause a flash. 
  // For now we'll just let it run or set speed to 0. 
  // Let's set speed to 0 to "pause" it, minimizing GPU usage.
  const speed = isPaused ? 0 : 0.5;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={meshColors}
        speed={speed}
        backgroundColor={bgColor}
      />
      <div className="w-full h-full absolute inset-0 opacity-60">
        <DotOrbit
          className="w-full h-full"
          dotColor={dotColor}
          orbitColor={orbitColor}
          speed={speed * 3}
          intensity={0.8}
        />
      </div>
    </div>
  );
}
