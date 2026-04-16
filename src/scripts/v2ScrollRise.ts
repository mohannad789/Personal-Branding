import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Below-the-hero content rises in (y + fade) as it enters the viewport while scrolling.
 */
export function initV2ScrollRise() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const main = document.querySelector("main.v2-wrap");
  if (!main) return;

  const hero = main.querySelector<HTMLElement>("[data-v2-hero-stage]");
  const rise = (el: HTMLElement) => {
    if (!el || el.dataset.v2RiseInit) return;
    el.dataset.v2RiseInit = "1";
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.78,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 89%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  main.querySelectorAll<HTMLElement>("section:not([data-v2-hero-stage]) > *").forEach(rise);

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener("resize", refresh);
  if (document.fonts?.ready) {
    void document.fonts.ready.then(refresh);
  }
  requestAnimationFrame(refresh);
}
