/** Placeholder copy for layout showcase sections — swap for your story. */
export const showcase = {
  metrics: {
    title: "Signal at a glance",
    lead:
      "Template: KPI strip / scoreboard. Numbers count up once when the section enters view — good for credibility without a full dashboard.",
    stats: [
      { target: 99, suffix: "%", label: "Client satisfaction", hint: "rolling quarter" },
      { target: 42, suffix: " ms", label: "Median response", hint: "p95 under 120ms" },
      { target: 62, suffix: "", label: "NPS-style score", hint: "0–100 scale" },
      { target: 128, suffix: "", label: "Shipped milestones", hint: "last 24 months" },
    ],
  },
  split: {
    title: "Ship the whole story",
    lead:
      "Template: asymmetric split + product chrome. One side for narrative and proof; the other for a UI frame, embed, or screenshot.",
    bullets: [
      "Use this when you need to explain *what* you built and *why* it mattered in one scan.",
      "Checkmarks sell completion; pair with metrics from the strip above.",
      "Swap the mock for a Loom, Figma link, or static capture — no Lottie required.",
    ],
    asideLabel: "Live surface (mock)",
    asideTitle: "Delivery console",
    asideLines: ["Release train · 12 environments", "Policy checks · green", "Audit trail · streaming"],
  },
  social: {
    title: "Voices in the room",
    lead:
      "Template: editorial quote band + micro-cards. Feels like a report pull-quote plus a customer wall.",
    quote:
      "The best personal brands read like a memo from someone you already trust — clear stakes, crisp verbs, no theatrics.",
    attribution: "Placeholder pull-quote",
    cards: [
      {
        quote: "“Finally someone who ships and documents.”",
        who: "A. Chen",
        role: "Product lead",
      },
      {
        quote: "“Reads like a product spec, not a portfolio.”",
        who: "M. Okonkwo",
        role: "Engineering director",
      },
      {
        quote: "“We reused their narrative structure for our board deck.”",
        who: "J. Rivera",
        role: "Founder",
      },
    ],
    logos: ["Northwind", "Helio", "Convex", "Atlas", "Riverbed"],
  },
  process: {
    title: "How the work runs",
    lead:
      "Template: horizontal process / roadmap. The rail fills when you scroll here — one motion focal point for the whole band.",
    steps: [
      { n: "01", title: "Frame", text: "Goals, constraints, success signals." },
      { n: "02", title: "Shape", text: "Flows, narrative, information design." },
      { n: "03", title: "Ship", text: "Build, instrument, cut scope smartly." },
      { n: "04", title: "Learn", text: "Measure, publish, iterate in public." },
    ],
  },
  bento: {
    title: "One surface, many threads",
    lead:
      "Template: bento grid — hero tile, tall story column, wide metrics row, CTA. Popular on modern marketing sites; dense but scannable.",
    hero: {
      kicker: "Featured",
      title: "Playbooks you can steal",
      text: "Longer tile for the one thing you want every visitor to see. Link out or deep-link to /courses later.",
      href: "/courses",
      link: "Explore courses →",
    },
    tall: {
      title: "Writing in public",
      bullets: ["Essays", "Changelog", "Office hours"],
    },
    stat: { value: "4.9", label: "Avg. workshop score", hint: "n = 220" },
    mini: {
      title: "Office hours",
      text: "First Thursday · UTC 17:00",
    },
    cta: {
      title: "Bring a messy problem",
      text: "Office hours or async — your pick.",
      href: "/contact",
      btn: "Start a thread",
    },
  },
} as const;
