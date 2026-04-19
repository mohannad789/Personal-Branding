"use client";

import { motion } from "framer-motion";

export default function AnimatedHeader({ children }: { children: React.ReactNode }) {
  return (
    <motion.header
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ delay: 8.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0.75rem 1.5rem',
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        width: 'calc(100% - 3rem)',
        maxWidth: '1200px',
        zIndex: 50,
        borderRadius: '9999px',
        backgroundColor: 'color-mix(in srgb, var(--bg-color) 70%, transparent)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid color-mix(in srgb, var(--text-muted) 20%, transparent)',
        boxShadow: '0 4px 24px -8px rgba(0,0,0,0.1)'
      }}
    >
      {children}
    </motion.header>
  );
}
