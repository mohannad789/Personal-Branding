export const site = {
  name: "Clear Authority",
  logoInitials: "CA",
  defaultDescription:
    "Authority infrastructure for founders and operators. Dubai · DACH · global.",
} as const;

export const home = {
  eyebrow: "Designer · Builder · Writer",
  headline: "Hi, I’m",
  headlineAccent: site.name,
  lede:
    "I help teams ship thoughtful products and clear stories. This site is the home for my work, ideas, and how to reach me.",
  /** Shown in Fraunces italic so the accent serif is easy to spot (swap for your own line). */
  pullQuote: "Small steps, clear narrative, room to grow.",
  motion: {
    title: "Charts in the browser (no Lottie)",
    intro:
      "Same idea as real analytics UIs: one chart per block can carry the motion while copy and images stay static. Below, each figure lists exactly which techniques run on that graphic.",
    funnelCaption:
      "Three-stage funnel — separate shapes with shared edges (cleaner than one blended blob).",
    funnelAnims: [
      "Staggered pulse: each stage animates opacity + brightness on a different delay (CSS @keyframes).",
      "Hairline dividers between stages (static SVG strokes).",
      "Pill labels are plain SVG shapes + text (easy to swap for your real numbers).",
    ],
    sparkCaption: "Area + line — same path drives draw, fill, and a moving marker.",
    sparkAnims: [
      "Line draw: stroke-dasharray / stroke-dashoffset matched to path length (tiny bit of JS to measure the path).",
      "Fill fade: area path opacity transitions after the line starts moving.",
      "Moving marker: circle position from getPointAtLength on a loop (requestAnimationFrame).",
    ],
  },
  about: {
    paragraphs: [
      "Replace this paragraph with your positioning: who you serve, what you care about, and the outcomes you drive. Keep it tight — two or three sentences is enough for a first impression.",
      "Add a second paragraph for credibility: notable clients, years of experience, or a line that shows your personality.",
    ],
  },
  work: {
    title: "Selected work",
    items: [
      {
        title: "Project one",
        description:
          "Short description of the problem, your role, and the result.",
        href: "/work",
        linkLabel: "View case study →",
      },
      {
        title: "Project two",
        description:
          "Another highlight — link to live site, repo, or article.",
        href: "/work",
        linkLabel: "Open link →",
      },
      {
        title: "Writing or talks",
        description:
          "Essays, newsletters, or speaking — whatever builds your brand.",
        href: "/work",
        linkLabel: "Read more →",
      },
    ],
  },
  contact: {
    intro:
      "Open to collaborations and interesting conversations. Best way to reach me:",
    channels: [
      {
        label: "Email",
        text: "hello@example.com",
        href: "mailto:hello@example.com",
      },
      {
        label: "LinkedIn",
        text: "linkedin.com/in/yourprofile",
        href: "https://www.linkedin.com/in/yourprofile",
      },
      {
        label: "GitHub",
        text: "github.com/yourusername",
        href: "https://github.com/yourusername",
      },
    ],
  },
} as const;
