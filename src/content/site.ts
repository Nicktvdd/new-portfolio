export const site = {
  url: "https://www.nickvandendungen.com",
  name: "Nick van den Dungen",
  role: "Founder-minded Full-Stack Engineer",
  location: "Helsinki, Finland",
  email: "nicktvdd@gmail.com",
  linkedin: "https://www.linkedin.com/in/nick-van-den-dungen/",
  github: "https://github.com/Nicktvdd",
  cv: "/nick-van-den-dungen-cv.pdf",
  availability: "Open to CTO, founding-engineer & full-stack roles",
  where: "Helsinki or remote",
  logistics: "Based in Helsinki, free to work in Finland (no visa needed) and available right away.",
  description:
    "Founder-minded full-stack engineer in Helsinki. Now building Tiny Tarrasque, an offline-first tabletop RPG app; before that, Lead Full Stack Engineer at Soil Scout (6.5M+ sensor uploads an hour).",
} as const;

export const alphaMailto = `mailto:${site.email}?subject=${encodeURIComponent("Tiny Tarrasque alpha")}`;
