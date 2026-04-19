"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedHeroIntro() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const timeouts = [
      setTimeout(() => setPhase(1), 500),  // "FOR FOUNDERS"
      setTimeout(() => setPhase(2), 1200), // "WHO'VE OUTGROWN"
      setTimeout(() => setPhase(3), 1900), // "WORD OF MOUTH"
      setTimeout(() => setPhase(4), 3000), // Eyebrow shrinks. Title appears massively (staggered).
      // Title stagger takes ~3s. Revenue appears at ~6s. Rotation takes ~3.5s.
      setTimeout(() => setPhase(5), 10500), // Title shrinks.
      setTimeout(() => {
        setPhase(6); // Rest of content fades in
        document.body.style.overflow = 'auto'; // Unlock scroll
      }, 11500) 
    ];

    return () => {
      timeouts.forEach(clearTimeout);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isEyebrowMassive = phase < 4;
  const isTitleMassive = phase === 4;

  return (
    <section className="section-padding container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", paddingTop: '8rem' }}>
      
      {/* Eyebrow */}
      <motion.div 
        layout
        animate={{
          fontSize: isEyebrowMassive ? 'clamp(0.875rem, 2.5vw, 3rem)' : '0.875rem',
          marginBottom: isEyebrowMassive ? '3rem' : '1.5rem'
        }}
        style={{ 
          display: 'flex', gap: '0.4em', flexWrap: 'nowrap', justifyContent: 'center', whiteSpace: 'nowrap',
          fontWeight: 700, letterSpacing: '0.05em', color: 'var(--accent-color)',
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: phase >= 1 ? 1 : 0, x: phase >= 1 ? 0 : -20 }}>FOR FOUNDERS</motion.span>
        <motion.span layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: phase >= 2 ? 1 : 0, x: phase >= 2 ? 0 : 20 }}>WHO'VE OUTGROWN</motion.span>
        <motion.span layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: phase >= 3 ? 1 : 0, x: phase >= 3 ? 0 : 20 }}>WORD OF MOUTH</motion.span>
      </motion.div>

      {/* Title */}
      <motion.h1 
        layout
        initial="hidden"
        animate={phase >= 4 ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 1 },
          show: { opacity: 1, transition: { staggerChildren: 0.4 } }
        }}
        style={{ 
          fontSize: isTitleMassive ? 'clamp(2rem, 5vw, 6rem)' : 'clamp(2.5rem, 5vw, 4.5rem)',
          marginBottom: isTitleMassive ? '4rem' : '2rem',
          textTransform: 'capitalize', lineHeight: 1.1,
          pointerEvents: phase >= 6 ? 'auto' : 'none',
          display: phase >= 4 ? 'block' : 'none'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em' }}>
          <motion.span variants={{ hidden: { opacity: 0, x: 20, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } } }}>We</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, x: 20, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } } }}>Build</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, x: 20, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } } }}>Personal</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, x: 20, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } } }}>Brand</motion.span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em' }}>
          <motion.span variants={{ hidden: { opacity: 0, x: 20, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } } }}>Positions</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, x: 20, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } } }}>That</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, x: 20, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } } }}>Generate</motion.span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em' }}>
          <motion.span variants={{ hidden: { opacity: 0, x: 20, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.3 } } }}>
            {phase >= 4 && <RotatingWord />}
          </motion.span>
        </div>
      </motion.h1>

      {/* Rest of Hero */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: phase >= 6 ? 1 : 0, y: phase >= 6 ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: phase >= 6 ? 'auto' : 'none' }}
      >
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
          We build high-ticket lead generation infrastructure. The kind of asymmetric leverage where strangers contact you pre-sold, sales cycles halve, and your pipeline stops depending on who you had dinner with last quarter. Money is the consensus mechanism of your market. We engineer that consensus.
        </p>
        
        <p style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '2rem' }}>
          Book a strategy call to see how.
        </p>
        
        <button className="cta-button">
          Book a Strategy Call
        </button>
      </motion.div>

    </section>
  );
}

function RotatingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = [
    { text: "Revenue.", color: "var(--accent-color)" },
    { text: "Not followers", color: "#ef4444" },
    { text: "Not visibility", color: "#ef4444" },
    { text: "Not impressions", color: "#ef4444" },
    { text: "Revenue.", color: "var(--accent-color)" }
  ];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    const runSequence = async () => {
      // The word staggering takes 2.8s to reach this word.
      // Wait another 800ms for user to read "Revenue." before switching.
      await new Promise(r => { const t = setTimeout(r, 3600); timeouts.push(t); });
      setWordIndex(1);
      await new Promise(r => { const t = setTimeout(r, 1000); timeouts.push(t); });
      setWordIndex(2);
      await new Promise(r => { const t = setTimeout(r, 1000); timeouts.push(t); });
      setWordIndex(3);
      await new Promise(r => { const t = setTimeout(r, 1000); timeouts.push(t); });
      setWordIndex(4);
    };
    runSequence();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={wordIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ color: words[wordIndex].color, display: 'inline-block' }}
      >
        {words[wordIndex].text}
      </motion.span>
    </AnimatePresence>
  );
}
