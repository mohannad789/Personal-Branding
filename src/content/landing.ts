/** Long-form landing copy — company voice (no individual names). */
export const landing = {
  metaDescription:
    "Authority infrastructure for founders and operators who are done being the best-kept secret in their industry. Dubai · DACH · global.",

  hero: {
    headlineEn: "You've built something real. It's time the world knew.",
    headlineDe: "Sie haben etwas aufgebaut. Es wird Zeit, dass die Welt es erfährt.",
    subEn:
      "We build the authority infrastructure behind founders who are done being the best-kept secret in their industry.",
    ctaEn: "Let's audit your visibility",
    ctaDe: "Lassen Sie uns Ihre Sichtbarkeit analysieren",
    ctaHref: "/contact",
  },

  mirror: {
    openEn:
      "You didn't build your career by following a template. So why does your brand look like one?",
    recognitionEn:
      "You're good at what you do. Genuinely good. You have the track record, the results, the stories — but somewhere between your reality and how you appear online, something gets lost in translation.",
    pullDe:
      "Zwischen dem, was Sie wirklich sind, und dem, was die Welt von Ihnen sieht — liegt eine Lücke. Wir schließen sie.",
    diagnosisEn:
      "This isn't a content problem. It's not a platform problem. It's an architecture problem — and architecture can be fixed.",
  },

  indictment: {
    bodyEn:
      "You've probably tried an agency. Got a nice deck. Fourteen buzzwords. A content calendar that felt like it was written about someone else. And leads that never came.",
    turnEn: "The problem was never your story. It was the architecture around it.",
  },

  offer: {
    leadEn:
      "We don't manage your social media. We engineer how the market perceives you.",
    bodyEn:
      "That means a positioning strategy that sounds like you — on your best day. Content that converts without feeling like it's trying to. A digital presence that earns trust before you've said a word. And a system that keeps working, whether you post three times a week or three times a month.",
    pillars: [
      { key: "strategy", label: "Strategy", icon: "target" as const },
      { key: "authority", label: "Authority", icon: "signal" as const },
      { key: "growth", label: "Growth", icon: "rise" as const },
    ],
    captionDe: "Drei Säulen. Ein System. Ihr Name, der für Sie arbeitet.",
  },

  avatars: {
    cards: [
      {
        title: "The expert who needs reach",
        bodyEn:
          "You've been building for years. The expertise is real, the results are documented, the reputation exists — in rooms you've already been in. You need it to travel further, faster, and without you having to be in every room.",
      },
      {
        title: "The visible professional who sounds off",
        bodyEn:
          "You're already visible. You post, you show up, you put in the time. But the content doesn't sound like you — it sounds like what someone told you content should sound like. And you can feel the difference, even if you can't name it yet.",
      },
    ],
  },

  proof: {
    openerEn:
      "We work with a small number of clients at a time. That's not a limitation — it's the point.",
    quoteEn:
      "For the first time, what we publish matches how we actually show up with clients. No performance theatre — just clarity.",
    attribution: "Placeholder client, Managing Partner",
    facts: [
      { text: "10+ years in marketing leadership" },
      { text: "Based in Dubai" },
      { text: "DACH market specialists" },
    ],
    lineEn:
      "Based in Dubai. Thinking in German. Working globally. With a firm belief that most personal branding is far too polite to actually work.",
  },

  about: {
    bodyEn:
      "We are a marketing and brand team with more than a decade building authority for companies across Dubai and Europe. We've run marketing departments, launched campaigns across three continents, and watched too many capable operators get outshone by louder voices with less depth. That's the gap we close — with systems, not slogans.",
  },

  close: {
    headlineEn: "Your reputation is either working for you, or it isn't. Let's find out which.",
    ctaEn: "Request your visibility audit — no decks, no pitches, no fourteen buzzwords.",
    ctaDe: "Fordern Sie Ihr Sichtbarkeits-Audit an — klar, direkt, ohne Umwege.",
    ctaHref: "/contact",
  },
} as const;
