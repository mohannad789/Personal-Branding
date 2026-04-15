import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EYEBROW = "For founders who've outgrown word of mouth";
const TITLE = "We build personal brand positions that generate revenue.";

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Character-by-character reveal; duration scales with length. */
function typewriter(el: HTMLElement, full: string, duration: number) {
  el.textContent = "";
  const state = { n: 0 };
  return gsap.to(state, {
    n: full.length,
    duration,
    ease: "none",
    onUpdate: () => {
      el.textContent = full.slice(0, Math.round(state.n));
    },
  });
}

function swapCycleWord(slot: HTMLElement, next: string) {
  const tl = gsap.timeline();
  tl.to(slot, { opacity: 0, y: 5, duration: 0.12, ease: "power2.in" });
  tl.add(() => {
    slot.textContent = next;
  });
  tl.fromTo(slot, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" });
  return tl;
}

export function initV2HeroIntro() {
  const stage = document.querySelector<HTMLElement>("[data-v2-hero-stage]");
  const eyebrow = stage?.querySelector<HTMLElement>("[data-v2-hero-eyebrow]");
  const shell = stage?.querySelector<HTMLElement>("[data-v2-hero-title-shell]");
  const title = stage?.querySelector<HTMLElement>("[data-v2-hero-title]");
  const cycleBlock = stage?.querySelector<HTMLElement>("[data-v2-hero-cycle-block]");
  const cycleLine = stage?.querySelector<HTMLElement>("[data-v2-hero-cycle-line]");
  const slot = stage?.querySelector<HTMLElement>("[data-v2-hero-cycle-slot]");
  const revenueEl = stage?.querySelector<HTMLElement>("[data-v2-hero-revenue]");
  const rest = stage?.querySelector<HTMLElement>("[data-v2-hero-rest]");

  if (!stage || !eyebrow || !shell || !title || !cycleBlock || !cycleLine || !slot || !revenueEl || !rest) return;

  const eyebrowPlain = (eyebrow.textContent || "").trim() || EYEBROW;
  const titlePlain = (title.textContent || "").trim() || TITLE;

  if (prefersReduced()) {
    stage.removeAttribute("aria-busy");
    eyebrow.textContent = eyebrowPlain;
    title.textContent = titlePlain;
    cycleBlock.setAttribute("hidden", "");
    cycleBlock.style.display = "none";
    revenueEl.setAttribute("hidden", "");
    revenueEl.style.display = "none";
    gsap.set(rest, { clearProps: "all" });
    return;
  }

  const run = () => {
    stage.setAttribute("aria-busy", "true");

    gsap.set(rest, { autoAlpha: 0 });
    gsap.set(cycleBlock, { autoAlpha: 0 });
    gsap.set(revenueEl, { autoAlpha: 0 });
    revenueEl.removeAttribute("hidden");

    eyebrow.textContent = "";
    eyebrow.classList.add("v2-eyebrow--intro");
    title.textContent = "";

    const measureEyebrow = () => {
      eyebrow.textContent = "X";
      eyebrow.classList.add("v2-eyebrow--intro");
      const csIntro = getComputedStyle(eyebrow);
      const fsIntro = parseFloat(csIntro.fontSize);
      const lsIntroRaw = csIntro.letterSpacing;
      const lsIntro = parseFloat(lsIntroRaw);
      eyebrow.classList.remove("v2-eyebrow--intro");
      const csEnd = getComputedStyle(eyebrow);
      const fsEnd = parseFloat(csEnd.fontSize);
      const lsEndRaw = csEnd.letterSpacing;
      eyebrow.classList.add("v2-eyebrow--intro");
      eyebrow.textContent = "";
      return {
        fsIntro,
        lsIntro: Number.isFinite(lsIntro) ? lsIntro : 0,
        fsEnd,
        lsEndStr: Number.isFinite(parseFloat(lsEndRaw)) ? `${parseFloat(lsEndRaw)}px` : lsEndRaw || "0.18em",
        lsIntroStr: Number.isFinite(lsIntro) ? `${lsIntro}px` : lsIntroRaw || "0.04em",
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

    const eyebrowTypeDur = Math.min(2.2, eyebrowPlain.length * 0.034);
    tl.add(typewriter(eyebrow, eyebrowPlain, eyebrowTypeDur));
    tl.fromTo(
      eyebrow,
      { fontSize: m.fsIntro, letterSpacing: m.lsIntroStr, y: 32 },
      {
        fontSize: m.fsEnd,
        letterSpacing: m.lsEndStr,
        y: 0,
        duration: 0.92,
        ease: "power2.inOut",
        onComplete: () => {
          eyebrow.classList.remove("v2-eyebrow--intro");
          gsap.set(eyebrow, { clearProps: "fontSize,letterSpacing,y" });
        },
      }
    );

    tl.set(shell, { transformOrigin: "50% 0%", scale: 2 });
    const titleTypeDur = Math.min(1.45, titlePlain.length * 0.018);
    tl.add(typewriter(title, titlePlain, titleTypeDur));
    tl.to(shell, { scale: 1, duration: 0.78, ease: "power2.inOut" }, ">-0.08");

    tl.to(cycleBlock, { autoAlpha: 1, duration: 0.32 });
    tl.to({}, { duration: 0.38 });
    tl.add(swapCycleWord(slot, "impressions"));
    tl.to({}, { duration: 0.36 });
    tl.add(swapCycleWord(slot, "visibility"));
    tl.to({}, { duration: 0.4 });
    tl.to(cycleLine, { autoAlpha: 0, y: -8, duration: 0.22, ease: "power2.in" });
    tl.set(cycleLine, { visibility: "hidden" });
    tl.add(() => revenueEl.removeAttribute("aria-hidden"));
    tl.fromTo(
      revenueEl,
      { autoAlpha: 0, y: 16, scale: 0.94 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.48, ease: "power2.out" }
    );
    tl.to({}, { duration: 0.28 });
    tl.to(rest, { autoAlpha: 1, duration: 0.62, ease: "power2.out" });
  };

  let ran = false;
  const runOnce = () => {
    if (ran) return;
    ran = true;
    try {
      run();
    } catch (e) {
      console.error(e);
      stage.removeAttribute("aria-busy");
      eyebrow.textContent = eyebrowPlain;
      title.textContent = titlePlain;
      eyebrow.classList.remove("v2-eyebrow--intro");
      gsap.set([rest, cycleBlock, revenueEl, shell], { clearProps: "all" });
      revenueEl.setAttribute("hidden", "");
      cycleBlock.style.display = "";
      gsap.set(rest, { autoAlpha: 1 });
    }
  };

  /* Run on the next frame — do not wait on fonts.ready (it can stall and left the old CSS hiding the whole hero). */
  requestAnimationFrame(() => {
    runOnce();
    void document.fonts?.ready?.then(() => ScrollTrigger.refresh());
  });
}
