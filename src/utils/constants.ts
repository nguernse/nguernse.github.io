import { Bio } from "../@types";

export const BIO: Bio = {
  name: 'Nick Guernsey',
  about: "Software engineer with experience developing, maintaining, and supporting SaaS applications.",
  profile: "/assets/profile.jpeg",
  jobStatus: 'available',
  jobTitle: 'Software Engineer',
  socials: {
    linkedin: {
      label: "Let's connect",
      url: "https://linkedin.com/in/nguernse",
      image: "/assets/linkedin.png"
    },
    github: {
      label: "GitHub",
      url: "https://github.com/nguernse",
      image: "/assets/github.svg"
    },
  },
  skills: [
    "TypeScript",
    "JavaScript",
    "CSS",
    "Git",
    "SCSS",
    "TailwindCSS",
    "React",
    "Vue",
    "HTML",
    "SQL",
    "Vitest"
  ],
  projects: [
    {
      slug: 'project-national-parks',
      url: "https://projectnationalparks.com",
      title: 'Project National Parks',
      blurb: 'Explore the natural beauty of the National Parks',
      technologies: [
        "TypeScript", "React", "NextJS", "TailwindCSS"
      ]
    },
    {
      slug: 'power-searches',
      url: "https://powersearches.org",
      title: 'Power Searches',
      blurb: 'Find the information you want with curated search shortcuts.',
      technologies: [
        "TypeScript", "React", "NextJS", "Vercel", "TailwindCSS"
      ]
    },
    {
      slug: 'down-down-up',
      url: "https://downdownup.pages.dev/",
      title: 'Down Down Up',
      blurb: 'A game to test your keyboard skills',
      technologies: [
        "TypeScript", "Vue",
      ]
    },
  ],
}