export const site = {
  name: "AI with Saddam",
  tagline:
    "I'm on a mission to create 365 AI Engineers in the next 365 days.",
  bylineName: "Saddam",
  subscriberCount: "2,000+",
  profileImage: "/profile.svg",
  heroImage: "/hero.svg",
  heroAlt: "Saddam Arbaa — AI Engineering | Software Engineer",
  brandColor: "#5B4BE8",
  ogTitle: "AI with Saddam — Join the waitlist",
  ogDescription:
    "Weekly, no-fluff AI engineering — projects, playbooks, and the stack that works. Join 2,000+ engineers leveling up.",
  links: {
    terms: "#",
    privacy: "#",
    info: "#",
    learnMore: "#",
  },
} as const;

export type Site = typeof site;
