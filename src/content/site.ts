export const site = {
  url: "https://www.nickvandendungen.com",
  name: "Nick van den Dungen",
  role: "Founder-minded Full-Stack Engineer",
  location: "Helsinki, Finland",
  email: "nicktvdd@gmail.com",
  linkedin: "https://www.linkedin.com/in/nick-van-den-dungen/",
  github: "https://github.com/Nicktvdd",
  availability: "Open to CTO, founding-engineer & senior full-stack roles",
  where: "Helsinki or remote",
  description:
    "Founder-minded full-stack engineer in Helsinki. Now building Tiny Tarrasque, an offline-first tabletop RPG app; previously led engineering at Soil Scout, ingesting 6.5M+ telemetry records per hour.",
} as const;

export const alphaMailto = `mailto:${site.email}?subject=${encodeURIComponent("Tiny Tarrasque alpha")}`;
