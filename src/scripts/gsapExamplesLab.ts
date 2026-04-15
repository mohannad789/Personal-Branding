import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initGsapExamplesLab() {
  const root = document.querySelector<HTMLElement>("[data-gsap-lab]");
  if (!root) return;

  if (reducedMotion()) {
    root.querySelectorAll("[data-demo-load-card], [data-demo-scroll-card]").forEach((el) => {
      gsap.set(el, { clearProps: "all" });
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
    });
    return;
  }

  /* 1) Page load — staggered entrance (no scroll required) */
  gsap.from("[data-demo-load-card]", {
    y: 28,
    opacity: 0,
    duration: 0.65,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.12,
  });

  /* 2) Scroll — each card plays when it enters the viewport */
  root.querySelectorAll("[data-demo-scroll-card]").forEach((el) => {
    gsap.from(el, {
      y: 48,
      opacity: 0,
      rotation: -2,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 86%",
        toggleActions: "play none none reverse",
      },
    });
  });

  /* 3) Interaction — pointer-driven tweens (not CSS hover) */
  root.querySelectorAll("[data-demo-hover-pill]").forEach((pill) => {
    pill.addEventListener("mouseenter", () => {
      gsap.to(pill, { scale: 1.07, y: -3, duration: 0.28, ease: "power2.out" });
    });
    pill.addEventListener("mouseleave", () => {
      gsap.to(pill, { scale: 1, y: 0, duration: 0.35, ease: "power2.out" });
    });
  });

  /* 4) Timeline — ordered steps on demand */
  const playBtn = root.querySelector<HTMLButtonElement>("[data-demo-tl-play]");
  const boxes = root.querySelectorAll<HTMLElement>("[data-demo-tl-box]");
  playBtn?.addEventListener("click", () => {
    gsap.set(boxes, { clearProps: "x,backgroundColor" });
    const tl = gsap.timeline();
    tl.to(boxes[0], { x: 72, backgroundColor: "#2563eb", duration: 0.38, ease: "power2.inOut" })
      .to(boxes[1], { x: 72, backgroundColor: "#16a34a", duration: 0.38, ease: "power2.inOut" }, "-=0.2")
      .to(boxes[2], { x: 72, backgroundColor: "#c026d3", duration: 0.38, ease: "power2.inOut" }, "-=0.2")
      .to(boxes, { x: 0, duration: 0.55, ease: "power2.inOut", stagger: 0.06 })
      .to(
        boxes,
        {
          backgroundColor: "#1e293b",
          duration: 0.4,
          stagger: 0.05,
        },
        "-=0.25"
      );
  });

  /* 5) ScrollTrigger scrub — horizontal strip tied to scroll progress */
  const scrubSection = root.querySelector<HTMLElement>("[data-demo-scrub-section]");
  const scrubViewport = root.querySelector<HTMLElement>("[data-demo-scrub-viewport]");
  const scrubInner = root.querySelector<HTMLElement>("[data-demo-scrub-inner]");
  if (scrubSection && scrubViewport && scrubInner) {
    gsap.to(scrubInner, {
      x: () => Math.min(0, scrubViewport.clientWidth - scrubInner.scrollWidth),
      ease: "none",
      scrollTrigger: {
        trigger: scrubSection,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.85,
      },
    });
  }

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("resize", refresh);
  if (document.fonts?.ready) {
    void document.fonts.ready.then(refresh);
  }
  requestAnimationFrame(refresh);
}
