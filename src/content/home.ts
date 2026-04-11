export const site = {
  name: "Your Name",
  logoInitials: "YN",
  defaultDescription:
    "Personal site — portfolio, writing, and contact.",
} as const;

export const home = {
  eyebrow: "Designer · Builder · Writer",
  headline: "Hi, I’m",
  headlineAccent: site.name,
  lede:
    "I help teams ship thoughtful products and clear stories. This site is the home for my work, ideas, and how to reach me.",
  /** Shown in Fraunces italic so the accent serif is easy to spot (swap for your own line). */
  pullQuote: "Small steps, clear narrative, room to grow.",
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
