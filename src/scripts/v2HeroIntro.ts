import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EYEBROW_L1 = "For founders";
const EYEBROW_L2 = "who've outgrown word of mouth";
const TITLE_FULL = "We build personal brand positions that generate revenue.";
const PREFIX = "We build personal brand positions that generate";
const MORPH_PHRASES = [
  "revenue.",
  "Not followers.",
  "Not impressions.",
  "Not visibility.",
  "Revenue",
];

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function syncNavPad() {
  const nav = document.getElementById("v2-nav");
  if (!nav) return;
  const h = nav.offsetHeight || nav.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--v2-nav-pad", `${Math.ceil(h + 8)}px`);
}

function addGap(tl: gsap.core.Timeline, seconds: number) {
  const o = { _: 0 };
  tl.to(o, { _: 1, duration: seconds, ease: "none" });
}

type WordRevealOpts = {
  /** Total time budget spread across stagger (seconds). */
  staggerMin?: number;
  /** Per-word opacity tween duration. */
  wordDuration?: number;
};

/**
 * Word-by-word reveal (same pattern as the title prefix).
 * `staggerAmount` is the GSAP stagger `amount` (total stagger window, seconds).
 */
function revealWordsReading(el: HTMLElement, full: string, staggerAmount: number, opts?: WordRevealOpts) {
  el.textContent = "";
  const words = full.trim().split(/\s+/);
  const spans: HTMLElement[] = [];
  const staggerMin = opts?.staggerMin ?? 1.8;
  const wordDuration = opts?.wordDuration ?? 0.62;

  words.forEach((w, i) => {
    const s = document.createElement("span");
    s.className = "v2-tw-word";
    s.textContent = w;
    s.style.opacity = "0";
    s.style.display = "inline-block";
    s.style.marginRight = i < words.length - 1 ? "0.32em" : "0";
    spans.push(s);
    el.appendChild(s);
  });

  return gsap.to(spans, {
    opacity: 1,
    duration: wordDuration,
    ease: "power2.out",
    stagger: {
      amount: Math.max(staggerMin, staggerAmount),
      from: "start",
      ease: "power1.inOut",
    },
  });
}

/**
 * Phrases sit inline after “generate …”. Each phrase wipes in **right → left** (clip uncovers from the right edge).
 * Between phrases: quick wipe-out toward the right, swap copy, wipe-in again.
 */
function morphCycleRTL(el: HTMLElement, phrases: string[], wipeIn: number, wipeOut: number, hold: number) {
  const tl = gsap.timeline();

  const wipeInFromRight = () =>
    gsap.fromTo(
      el,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0 0 0)", duration: wipeIn, ease: "power2.out" }
    );

  const wipeOutToRight = () =>
    gsap.to(el, {
      clipPath: "inset(0 100% 0 0)",
      duration: wipeOut,
      ease: "power2.in",
    });

  el.textContent = phrases[0];
  gsap.set(el, { clipPath: "inset(0 100% 0 0)" });
  tl.add(wipeInFromRight());
  addGap(tl, hold);

  for (let i = 1; i < phrases.length; i++) {
    tl.add(wipeOutToRight());
    tl.add(() => {
      el.textContent = phrases[i];
      gsap.set(el, { clipPath: "inset(0 100% 0 0)" });
    });
    tl.add(wipeInFromRight());
    if (i < phrases.length - 1) addGap(tl, hold);
  }

  tl.add(() => {
    gsap.set(el, { clearProps: "clipPath" });
  });
  return tl;
}

export function initV2HeroIntro() {
  syncNavPad();

  const stage = document.querySelector<HTMLElement>("[data-v2-hero-stage]");
  const inner = stage?.querySelector<HTMLElement>("[data-v2-hero-inner]");
  const eyebrow = stage?.querySelector<HTMLElement>("[data-v2-hero-eyebrow]");
  const line1 = eyebrow?.querySelector<HTMLElement>("[data-v2-eyebrow-l1]");
  const line2 = eyebrow?.querySelector<HTMLElement>("[data-v2-eyebrow-l2]");
  const shell = stage?.querySelector<HTMLElement>("[data-v2-hero-title-shell]");
  const title = stage?.querySelector<HTMLElement>("[data-v2-hero-title]");
  const prefix = title?.querySelector<HTMLElement>("[data-v2-hero-title-prefix]");
  const morph = title?.querySelector<HTMLElement>("[data-v2-hero-morph]");
  const rest = stage?.querySelector<HTMLElement>("[data-v2-hero-rest]");

  if (!stage || !inner || !eyebrow || !line1 || !line2 || !shell || !title || !prefix || !morph || !rest) {
    return;
  }

  const showStaticHero = () => {
    stage.removeAttribute("aria-busy");
    gsap.set(inner, { autoAlpha: 1, clearProps: "opacity,visibility" });
    line1.textContent = EYEBROW_L1;
    line2.textContent = EYEBROW_L2;
    eyebrow.classList.remove("v2-eyebrow--intro");
    title.textContent = TITLE_FULL;
    gsap.set([rest, shell, eyebrow, title], { clearProps: "all" });
    gsap.set(rest, { autoAlpha: 1 });
  };

  if (prefersReduced()) {
    stage.removeAttribute("aria-busy");
    gsap.set(inner, { autoAlpha: 1 });
    line1.textContent = EYEBROW_L1;
    line2.textContent = EYEBROW_L2;
    eyebrow.classList.remove("v2-eyebrow--intro");
    title.textContent = TITLE_FULL;
    gsap.set(rest, { clearProps: "all" });
    return;
  }

  line1.textContent = "";
  line2.textContent = "";
  gsap.set(inner, { autoAlpha: 0 });
  gsap.set(rest, { autoAlpha: 0 });

  const run = () => {
    syncNavPad();
    stage.setAttribute("aria-busy", "true");

    gsap.set(inner, { autoAlpha: 0 });
    gsap.set(rest, { autoAlpha: 0 });
    line1.textContent = "";
    line2.textContent = "";
    prefix.textContent = "";
    morph.textContent = "";
    morph.style.removeProperty("opacity");
    gsap.set(morph, { clearProps: "clipPath" });

    eyebrow.classList.add("v2-eyebrow--intro");

    const measureEyebrow = () => {
      eyebrow.classList.add("v2-eyebrow--intro");
      line1.textContent = "X";
      const csIntro = getComputedStyle(eyebrow);
      const fsIntro = parseFloat(csIntro.fontSize);
      eyebrow.classList.remove("v2-eyebrow--intro");
      const csEnd = getComputedStyle(eyebrow);
      const fsEnd = parseFloat(csEnd.fontSize);
      eyebrow.classList.add("v2-eyebrow--intro");
      line1.textContent = "";
      return {
        fsIntro: Number.isFinite(fsIntro) ? fsIntro : 32,
        fsEnd: Number.isFinite(fsEnd) ? fsEnd : 14,
      };
    };

    const m = measureEyebrow();

    const tl = gsap.timeline({
      delay: 0.15,
      onComplete: () => {
        stage.removeAttribute("aria-busy");
        gsap.set(shell, { clearProps: "transform" });
        ScrollTrigger.refresh();
      },
    });

    tl.to(inner, { autoAlpha: 1, duration: 0.45, ease: "power2.out" });

    /* Eyebrow: word-by-word per line; stagger `amount` is total window (seconds), so keep it modest. */
    const l1Words = EYEBROW_L1.trim().split(/\s+/).length;
    tl.add(
      revealWordsReading(line1, EYEBROW_L1, l1Words * 0.4, {
        staggerMin: 0.75,
        wordDuration: 0.4,
      })
    );
    const l2Words = EYEBROW_L2.trim().split(/\s+/).length;
    tl.add(
      revealWordsReading(line2, EYEBROW_L2, l2Words * 0.34, {
        staggerMin: 1.55,
        wordDuration: 0.4,
      })
    );

    /* Shrink + settle down only: do not tween letter-spacing (it shifts long vs short lines sideways while width changes). */
    tl.fromTo(
      eyebrow,
      {
        fontSize: m.fsIntro,
        y: -16,
        x: 0,
      },
      {
        fontSize: m.fsEnd,
        y: 0,
        x: 0,
        duration: 0.95,
        ease: "power2.inOut",
        onComplete: () => {
          eyebrow.classList.remove("v2-eyebrow--intro");
          gsap.set(eyebrow, { clearProps: "fontSize,letterSpacing,y,transform" });
        },
      }
    );

    const wordCount = PREFIX.split(/\s+/).length;
    const prefixStagger = Math.max(3.2, wordCount * 0.28);
    tl.add(revealWordsReading(prefix, PREFIX, prefixStagger));

    const morphTl = morphCycleRTL(morph, MORPH_PHRASES, 0.78, 0.38, 0.52);
    tl.add(morphTl);

    tl.to(rest, { autoAlpha: 1, duration: 0.75, ease: "power2.out" }, "+=0.2");
  };

  let ran = false;
  const runOnce = () => {
    if (ran) return;
    ran = true;
    try {
      run();
    } catch (e) {
      console.error("[v2HeroIntro]", e);
      showStaticHero();
    }
  };

  requestAnimationFrame(() => {
    runOnce();
    void document.fonts?.ready?.then(() => {
      syncNavPad();
      ScrollTrigger.refresh();
    });
  });
}
