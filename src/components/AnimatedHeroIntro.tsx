"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  BETWEEN_WORDS_MS,
  HERO_PHASE5_MS,
  HERO_PHASE6_MS,
  HERO_TITLE_REVEAL_MS,
  READ_BEFORE_STRIKE_MS,
  ROTATING_WORD_INITIAL_MS,
  STRIKE_DRAW_MS,
  WORD_ENTER_MS,
} from "@/lib/heroTiming";

export default function AnimatedHeroIntro() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timeouts = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 1900),
      setTimeout(() => setPhase(4), HERO_TITLE_REVEAL_MS),
      setTimeout(() => setPhase(5), HERO_PHASE5_MS),
      setTimeout(() => {
        setPhase(6);
        document.body.style.overflow = "auto";
      }, HERO_PHASE6_MS),
    ];

    return () => {
      timeouts.forEach(clearTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  const isEyebrowMassive = phase < 4;

  return (
    <AuroraBackground>
      <section
        className="section-padding container flex min-h-screen flex-col items-center justify-center text-center"
        style={{ paddingTop: "5.5rem", paddingBottom: "4rem" }}
      >
        <motion.div
          layout
          animate={{
            fontSize: isEyebrowMassive
              ? "clamp(0.875rem, 2.5vw, 3rem)"
              : "0.875rem",
            marginBottom: isEyebrowMassive ? "3rem" : "1.5rem",
          }}
          style={{
            display: "flex",
            gap: "0.4em",
            flexWrap: "nowrap",
            justifyContent: "center",
            whiteSpace: "nowrap",
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "var(--accent-color)",
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: phase >= 1 ? 1 : 0,
              x: phase >= 1 ? 0 : -20,
            }}
          >
            FOR FOUNDERS
          </motion.span>
          <motion.span
            layout
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: phase >= 2 ? 1 : 0,
              x: phase >= 2 ? 0 : 20,
            }}
          >
            {"WHO'VE OUTGROWN"}
          </motion.span>
          <motion.span
            layout
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: phase >= 3 ? 1 : 0,
              x: phase >= 3 ? 0 : 20,
            }}
          >
            WORD OF MOUTH
          </motion.span>
        </motion.div>

        <motion.h1
          layout
          initial="hidden"
          animate={phase >= 4 ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 1 },
            show: { opacity: 1, transition: { staggerChildren: 0.4 } },
          }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            marginBottom: "2rem",
            textTransform: "capitalize",
            lineHeight: 1.1,
            pointerEvents: phase >= 6 ? "auto" : "none",
            display: phase >= 4 ? "block" : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.3em",
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.3 },
                },
              }}
            >
              We
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.3 },
                },
              }}
            >
              Build
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.3 },
                },
              }}
            >
              Personal
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.3 },
                },
              }}
            >
              Brand
            </motion.span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.3em",
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.3 },
                },
              }}
            >
              Positions
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.3 },
                },
              }}
            >
              That
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.3 },
                },
              }}
            >
              Generate
            </motion.span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.3em",
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 20, filter: "blur(5px)" },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.3 },
                },
              }}
            >
              {phase >= 4 && <RotatingWord />}
            </motion.span>
          </div>
        </motion.h1>

        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase >= 6 ? 1 : 0, y: phase >= 6 ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pointerEvents: phase >= 6 ? "auto" : "none",
          }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "700px",
              marginBottom: "1.5rem",
              color: "var(--text-muted)",
            }}
          >
            We build high-ticket lead generation infrastructure. The kind of
            asymmetric leverage where strangers contact you pre-sold, sales
            cycles halve, and your pipeline stops depending on who you had dinner
            with last quarter. Money is the consensus mechanism of your market.
            We engineer that consensus.
          </p>

          <p
            style={{
              fontWeight: 700,
              fontSize: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            Book a strategy call to see how.
          </p>

          <button className="cta-button">Book a Strategy Call</button>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}

type WordItem = { text: string; color: string; strike: boolean };

const WORDS: WordItem[] = [
  { text: "Revenue.", color: "var(--accent-color)", strike: false },
  { text: "Not followers", color: "#ef4444", strike: true },
  { text: "Not visibility", color: "#ef4444", strike: true },
  { text: "Not impressions", color: "#ef4444", strike: true },
  { text: "Revenue.", color: "var(--accent-color)", strike: false },
];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [strike, setStrike] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeoutIds: number[] = [];
    const delay = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutIds.push(
          window.setTimeout(() => {
            if (!cancelled) resolve();
          }, ms)
        );
      });

    (async () => {
      await delay(ROTATING_WORD_INITIAL_MS);
      if (cancelled) return;

      for (let step = 1; step < WORDS.length; step++) {
        setStrike(false);
        setIndex(step);
        await delay(WORD_ENTER_MS);
        if (cancelled) return;

        if (WORDS[step].strike) {
          await delay(READ_BEFORE_STRIKE_MS);
          if (cancelled) return;
          setStrike(true);
          await delay(STRIKE_DRAW_MS);
          if (cancelled) return;
        }

        await delay(BETWEEN_WORDS_MS);
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const word = WORDS[index];

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -14, filter: "blur(3px)" }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        style={{ color: word.color, display: "inline-block" }}
        className="relative"
      >
        <span className="relative inline-block whitespace-nowrap">
          {word.text}
          {word.strike && strike && (
            <motion.span
              aria-hidden
              className="absolute left-0 top-[52%] h-[0.1em] w-full rounded-full bg-current opacity-95"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "0% 50%" }}
            />
          )}
        </span>
      </motion.span>
    </AnimatePresence>
  );
}
