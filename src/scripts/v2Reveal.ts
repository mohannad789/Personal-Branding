import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COLOR_DIM = "#94a3b8";
const COLOR_ON = "#020617";

function wrapWords(block: HTMLElement) {
  const text = (block.textContent || "").replace(/\s+/g, " ").trim();
  if (!text) return;
  const words = text.split(" ");
  block.textContent = "";
  words.forEach((w, idx) => {
    const span = document.createElement("span");
    span.className = "v2-word";
    span.textContent = w;
    block.appendChild(span);
    if (idx < words.length - 1) {
      block.appendChild(document.createTextNode(" "));
    }
  });
}

function syncNavPad() {
  const nav = document.getElementById("v2-nav");
  if (!nav) return;
  const h = nav.offsetHeight || nav.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--v2-nav-pad", `${Math.ceil(h + 8)}px`);
}

/**
 * Scroll-scrubbed word colour: dim → black, driven by ScrollTrigger.
 * Hero: first ~420px of scroll (reliable when the title is already on-screen).
 * Other titles: scrub while the block moves from “entering” to “top 30%” of the viewport.
 */
export function initV2Reveal() {
  syncNavPad();
  ScrollTrigger.addEventListener("refreshInit", syncNavPad);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll<HTMLElement>("[data-v2-reveal-title]").forEach((block) => {
    if (block.dataset.v2RevealInit) return;
    block.dataset.v2RevealInit = "1";
    wrapWords(block);
    const words = block.querySelectorAll<HTMLElement>(".v2-word");
    if (!words.length) return;

    if (reduced) {
      gsap.set(words, { color: COLOR_ON });
      return;
    }

    gsap.set(words, { color: COLOR_DIM });

    const isHero = block.classList.contains("v2-hero-title");

    const scrollTrigger = isHero
      ? {
          trigger: block,
          start: "top bottom",
          end: "+=420",
          scrub: 0.45,
        }
      : {
          trigger: block,
          start: "top 92%",
          end: "top 30%",
          scrub: 0.45,
        };

    gsap.fromTo(
      words,
      { color: COLOR_DIM },
      {
        color: COLOR_ON,
        ease: "none",
        stagger: { each: 0.055, from: "start" },
        scrollTrigger,
      }
    );
  });

  const refresh = () => {
    syncNavPad();
    ScrollTrigger.refresh();
  };

  window.addEventListener("resize", refresh);
  window.addEventListener("load", refresh);
  if (document.fonts?.ready) {
    void document.fonts.ready.then(refresh);
  }

  requestAnimationFrame(refresh);
}
