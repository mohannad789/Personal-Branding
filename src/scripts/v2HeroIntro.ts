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

/** Reading-pace character reveal (layout pre-reserved; opacity only). */
function revealCharsReading(el: HTMLElement, full: string, staggerAmount: number) {
  el.textContent = "";
  const spans: HTMLElement[] = [];
  for (let i = 0; i < full.length; i++) {
    const ch = full[i];
    const s = document.createElement("span");
    s.className = "v2-tw-char";
    s.textContent = ch === " " ? " " : ch;
    spans.push(s);
    el.appendChild(s);
  }
  return gsap.to(spans, {
    opacity: 1,
    duration: 0.55,
    ease: "power2.out",
    stagger: { amount: Math.max(1.2, staggerAmount), from: "start", ease: "power1.inOut" },
  });
}

/** Reading-pace word reveal for the headline prefix. */
function revealWordsReading(el: HTMLElement, full: string, staggerAmount: number) {
  el.textContent = "";
  const words = full.trim().split(/\s+/);
  const spans: HTMLElement[] = [];
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
    duration: 0.62,
    ease: "power2.out",
    stagger: { amount: Math.max(1.8, staggerAmount), from: "start", ease: "power1.inOut" },
  });
}

function morphCycle(el: HTMLElement, phrases: string[], fade: number, hold: number) {
  const tl = gsap.timeline();
  el.textContent = phrases[0];
  tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: fade * 1.1, ease: "power2.out" });
  addGap(tl, hold);
  for (let i = 1; i < phrases.length; i++) {
    tl.to(el, { autoAlpha: 0, duration: fade * 0.55, ease: "power2.in" });
    tl.add(() => {
      el.textContent = phrases[i];
    });
    tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: fade, ease: "power2.out" });
    if (i < phrases.length - 1) addGap(tl, hold);
  }
  return tl;
}

function parseLetterSpacing(raw: string): string {
  const n = parseFloat(raw);
  return Number.isFinite(n) ? `${n}px` : "0.18em";
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

    eyebrow.classList.add("v2-eyebrow--intro");

    const measureEyebrow = () => {
      eyebrow.classList.add("v2-eyebrow--intro");
      line1.textContent = "X";
      const csIntro = getComputedStyle(eyebrow);
      const fsIntro = parseFloat(csIntro.fontSize);
      const lsIntroRaw = csIntro.letterSpacing;
      eyebrow.classList.remove("v2-eyebrow--intro");
      const csEnd = getComputedStyle(eyebrow);
      const fsEnd = parseFloat(csEnd.fontSize);
      const lsEndRaw = csEnd.letterSpacing;
      eyebrow.classList.add("v2-eyebrow--intro");
      line1.textContent = "";
      return {
        fsIntro: Number.isFinite(fsIntro) ? fsIntro : 32,
        lsIntroStr: parseLetterSpacing(lsIntroRaw),
        fsEnd: Number.isFinite(fsEnd) ? fsEnd : 11,
        lsEndStr: parseLetterSpacing(lsEndRaw),
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

    const l1Dur = Math.max(2.4, EYEBROW_L1.length * 0.09);
    tl.add(revealCharsReading(line1, EYEBROW_L1, l1Dur));
    const l2Dur = Math.max(3.2, EYEBROW_L2.length * 0.085);
    tl.add(revealCharsReading(line2, EYEBROW_L2, l2Dur));

    tl.fromTo(
      eyebrow,
      { fontSize: m.fsIntro, letterSpacing: m.lsIntroStr },
      {
        fontSize: m.fsEnd,
        letterSpacing: m.lsEndStr,
        duration: 1.05,
        ease: "power2.inOut",
        onComplete: () => {
          eyebrow.classList.remove("v2-eyebrow--intro");
          gsap.set(eyebrow, { clearProps: "fontSize,letterSpacing" });
        },
      }
    );

    const wordCount = PREFIX.split(/\s+/).length;
    const prefixStagger = Math.max(3.2, wordCount * 0.28);
    tl.add(revealWordsReading(prefix, PREFIX, prefixStagger));

    const morphTl = morphCycle(morph, MORPH_PHRASES, 0.42, 0.62);
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
