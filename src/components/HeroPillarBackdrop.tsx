"use client";

import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import LightPillar from "@/components/ui/LightPillar";
import HeroAuroraLight from "@/components/HeroAuroraLight";

const SECTION_AFTER_HERO_ID = "home-section-after-hero";

export default function HeroPillarBackdrop() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const fadeRef = useRef({ start: 800, end: 1600 });
  const { scrollY } = useScroll();

  const measureFade = useCallback(() => {
    const el = document.getElementById(SECTION_AFTER_HERO_ID);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const mid = top + rect.height * 0.5;
    const lead = Math.min(280, Math.max(120, rect.height * 0.14));
    const start = Math.max(0, top - lead);
    fadeRef.current = { start, end: mid };
  }, []);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    measureFade();
    window.addEventListener("resize", measureFade, { passive: true });
    const el = document.getElementById(SECTION_AFTER_HERO_ID);
    const ro = new ResizeObserver(measureFade);
    if (el) ro.observe(el);
    return () => {
      window.removeEventListener("resize", measureFade);
      if (el) ro.unobserve(el);
      ro.disconnect();
    };
  }, [mounted, measureFade]);

  const opacity = useTransform(scrollY, (y) => {
    const { start, end } = fadeRef.current;
    if (end <= start) return 1;
    if (y <= start) return 1;
    if (y >= end) return 0;
    return 1 - (y - start) / (end - start);
  });

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{ opacity }}
      aria-hidden
    >
      <div
        className={`absolute inset-0 ${isDark ? "bg-[#120F17]" : "bg-white"}`}
      />
      <div className="absolute inset-0">
        {isDark ? (
          <LightPillar
            key="dark"
            topColor="#10204e"
            bottomColor="#297fb5"
            intensity={0.96}
            rotationSpeed={0.28}
            glowAmount={0.005}
            pillarWidth={3.0}
            pillarHeight={0.4}
            noiseIntensity={0}
            pillarRotation={-25}
            interactive={false}
            mixBlendMode="screen"
            quality="low"
            clearColor="#ffffff"
            clearAlpha={0}
            transparentOutput={false}
            className="opacity-[0.925]"
          />
        ) : (
          <HeroAuroraLight />
        )}
      </div>
    </motion.div>
  );
}
