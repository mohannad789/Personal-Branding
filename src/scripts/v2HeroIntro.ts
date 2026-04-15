import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EYEBROW = "For founders who've outgrown word of mouth";
const TITLE = "We build personal brand positions that generate revenue.";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function syncNavPad() {
  const nav = document.getElementById("v2-nav");
  if (!nav) return;
  const h = nav.offsetHeight || nav.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--v2-nav-pad", `${Math.ceil(h + 8)}px`);
}

/** Reliable timeline gap (never use `tl.to({}, {duration})` — it breaks playback in GSAP 3). */
function addGap(tl: gsap.core.Timeline, seconds: number) {
  const o = { _: 0 };
  tl.to(o, { _: 1, duration: seconds, ease: "none" });
}

/**
 * Smooth “typewriter”: full string is in the DOM from frame one (spans), only opacity animates — no reflow / no choppy push.
 */
function revealCharsSmooth(el: HTMLElement, full: string, staggerAmount: number) {
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
    duration: 0.48,
    ease: "power2.out",
    stagger: {
      amount: Math.max(0.35, staggerAmount),
      from: "start",
      ease: "power1.inOut",
    },
  });
}

/** Word-by-word fade (smoother on long headlines than per-character). */
function revealWordsSmooth(el: HTMLElement, full: string, staggerAmount: number) {
  el.textContent = "";
  const words = full.trim().split(/\s+/);
  const spans: HTMLElement[] = [];
  words.forEach((w, i) => {
    const s = document.createElement("span");
    s.className = "v2-tw-word";
    s.textContent = w;
    s.style.opacity = "0";
    s.style.display = "inline-block";
    s.style.marginRight = i < words.length - 1 ? "0.3em" : "0";
    spans.push(s);
    el.appendChild(s);
  });
  return gsap.to(spans, {
    opacity: 1,
    duration: 0.52,
    ease: "power2.out",
    stagger: {
      amount: Math.max(0.4, staggerAmount),
      from: "start",
      ease: "power1.inOut",
    },
  });
}

function swapCycleWord(slot: HTMLElement, next: string) {
  const tl = gsap.timeline();
  tl.to(slot, { opacity: 0, y: 5, duration: 0.14, ease: "power2.in" });
  tl.add(() => {
    slot.textContent = next;
  });
  tl.fromTo(slot, { opacity: 0, y: -5 }, { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" });
  return tl;
}

function parseLetterSpacing(raw: string): string {
  const n = parseFloat(raw);
  return Number.isFinite(n) ? `${n}px` : "0.18em";
}

export function initV2HeroIntro() {
  syncNavPad();

  const stage = document.querySelector<HTMLElement>("[data-v2-hero-stage]");
  const eyebrow = stage?.querySelector<HTMLElement>("[data-v2-hero-eyebrow]");
  const shell = stage?.querySelector<HTMLElement>("[data-v2-hero-title-shell]");
  const title = stage?.querySelector<HTMLElement>("[data-v2-hero-title]");
  const cycleBlock = stage?.querySelector<HTMLElement>("[data-v2-hero-cycle-block]");
  const cycleLine = stage?.querySelector<HTMLElement>("[data-v2-hero-cycle-line]");
  const slot = stage?.querySelector<HTMLElement>("[data-v2-hero-cycle-slot]");
  const revenueEl = stage?.querySelector<HTMLElement>("[data-v2-hero-revenue]");
  const rest = stage?.querySelector<HTMLElement>("[data-v2-hero-rest]");

  if (!stage || !eyebrow || !shell || !title || !cycleBlock || !cycleLine || !slot || !revenueEl || !rest) {
    return;
  }

  const eyebrowPlain = (eyebrow.textContent || "").trim() || EYEBROW;
  const titlePlain = (title.textContent || "").trim() || TITLE;

  const showStaticHero = () => {
    stage.removeAttribute("aria-busy");
    eyebrow.textContent = eyebrowPlain;
    title.textContent = titlePlain;
    eyebrow.classList.remove("v2-eyebrow--intro");
    cycleBlock.removeAttribute("hidden");
    cycleBlock.style.removeProperty("display");
    revenueEl.setAttribute("hidden", "");
    revenueEl.style.removeProperty("display");
    gsap.set([rest, cycleBlock, revenueEl, shell, eyebrow, title], { clearProps: "all" });
    gsap.set(rest, { autoAlpha: 1 });
  };

  if (prefersReduced()) {
    stage.removeAttribute("aria-busy");
    eyebrow.textContent = eyebrowPlain;
    title.textContent = titlePlain;
    eyebrow.classList.remove("v2-eyebrow--intro");
    cycleBlock.setAttribute("hidden", "");
    cycleBlock.style.display = "none";
    revenueEl.setAttribute("hidden", "");
    revenueEl.style.display = "none";
    gsap.set(rest, { clearProps: "all" });
    return;
  }

  const run = () => {
    syncNavPad();
    stage.setAttribute("aria-busy", "true");

    gsap.set(rest, { autoAlpha: 0 });
    gsap.set(cycleBlock, { autoAlpha: 0 });
    gsap.set(revenueEl, { autoAlpha: 0 });
    revenueEl.removeAttribute("hidden");
    gsap.set(slot, { clearProps: "opacity,visibility,transform" });
    gsap.set(cycleLine, { clearProps: "opacity,visibility,transform" });

    eyebrow.textContent = "";
    eyebrow.classList.add("v2-eyebrow--intro");
    title.textContent = "";

    const measureEyebrow = () => {
      eyebrow.textContent = "X";
      eyebrow.classList.add("v2-eyebrow--intro");
      const csIntro = getComputedStyle(eyebrow);
      const fsIntro = parseFloat(csIntro.fontSize);
      const lsIntroRaw = csIntro.letterSpacing;
      eyebrow.classList.remove("v2-eyebrow--intro");
      const csEnd = getComputedStyle(eyebrow);
      const fsEnd = parseFloat(csEnd.fontSize);
      const lsEndRaw = csEnd.letterSpacing;
      eyebrow.classList.add("v2-eyebrow--intro");
      eyebrow.textContent = "";
      return {
        fsIntro: Number.isFinite(fsIntro) ? fsIntro : 32,
        lsIntroStr: parseLetterSpacing(lsIntroRaw),
        fsEnd: Number.isFinite(fsEnd) ? fsEnd : 11,
        lsEndStr: parseLetterSpacing(lsEndRaw),
      };
    };

    const m = measureEyebrow();

    const tl = gsap.timeline({
      delay: 0.12,
      onComplete: () => {
        stage.removeAttribute("aria-busy");
        gsap.set(shell, { clearProps: "scale,transform" });
        ScrollTrigger.refresh();
      },
    });

    const eyebrowStagger = Math.min(1.85, eyebrowPlain.length * 0.028);
    tl.add(revealCharsSmooth(eyebrow, eyebrowPlain, eyebrowStagger));
    /* No vertical slide here — it was pulling the hero up under the sticky nav. */
    tl.fromTo(
      eyebrow,
      { fontSize: m.fsIntro, letterSpacing: m.lsIntroStr },
      {
        fontSize: m.fsEnd,
        letterSpacing: m.lsEndStr,
        duration: 0.95,
        ease: "power2.inOut",
        onComplete: () => {
          eyebrow.classList.remove("v2-eyebrow--intro");
          gsap.set(eyebrow, { clearProps: "fontSize,letterSpacing" });
        },
      }
    );

    tl.set(shell, { transformOrigin: "50% 0%", scale: 2 });
    const titleStagger = Math.min(1.65, titlePlain.split(/\s+/).length * 0.09);
    tl.add(revealWordsSmooth(title, titlePlain, titleStagger));
    tl.to(shell, { scale: 1, duration: 0.82, ease: "power2.inOut" }, ">-0.06");

    tl.to(cycleBlock, {
      autoAlpha: 1,
      duration: 0.36,
      ease: "power2.out",
      onComplete: () => {
        gsap.set([slot, cycleLine], { clearProps: "opacity,visibility,y,transform" });
      },
    });
    addGap(tl, 0.42);
    tl.add(swapCycleWord(slot, "impressions"));
    addGap(tl, 0.38);
    tl.add(swapCycleWord(slot, "visibility"));
    addGap(tl, 0.42);
    tl.to(cycleLine, { autoAlpha: 0, y: -6, duration: 0.24, ease: "power2.in" });
    tl.set(cycleLine, { visibility: "hidden" });
    tl.add(() => revenueEl.removeAttribute("aria-hidden"));
    tl.fromTo(
      revenueEl,
      { autoAlpha: 0, y: 14, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.52, ease: "power2.out" }
    );
    addGap(tl, 0.28);
    tl.to(rest, { autoAlpha: 1, duration: 0.65, ease: "power2.out" });
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
