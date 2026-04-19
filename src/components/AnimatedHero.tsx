"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const REPLACEMENT_WORDS = [
  "Not acceptable.",
  "Not standard.",
  "Not generic.",
  "Exceptional."
];

export default function AnimatedHero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % REPLACEMENT_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ paddingBottom: "100vh" }}>
      <section style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        
        {/* Scroll scaling animation */}
        <motion.div style={{ scale, opacity, marginBottom: "2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.1, letterSpacing: "-0.04em" }}>
            The New Standard
          </h1>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.25rem" }}>
            Scroll down to see the message grow.
          </p>
        </motion.div>

        {/* Word replacement animation */}
        <div style={{ 
          fontSize: "2rem", 
          fontFamily: "var(--font-serif)", 
          display: "flex", 
          alignItems: "center", 
          gap: "0.5rem" 
        }}>
          <span>What we do is</span>
          <div style={{ position: "relative", width: "200px", height: "40px", overflow: "hidden" }}>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={wordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  fontWeight: 600,
                  color: wordIndex === REPLACEMENT_WORDS.length - 1 ? "var(--text-color)" : "var(--text-muted)",
                  textDecoration: wordIndex === REPLACEMENT_WORDS.length - 1 ? "none" : "line-through"
                }}
              >
                {REPLACEMENT_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

      </section>
      
      {/* Scroll target space */}
      <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2 style={{ fontSize: "3rem" }}>This is the journey.</h2>
      </section>
    </div>
  );
}
