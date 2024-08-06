import { Bio } from "../@types";

export const BIO: Bio = {
  name: 'Nick Guernsey',
  about: "Software Engineer that enjoys working on the Frontend and continually learning new things",
  jobStatus: 'available',
  jobTitle: 'Software Engineer',
  socials: {
    linkedin: {
      label: "Let's connect",
      url: "https://linkedin.com/in/nguernse",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/nguernse",
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
      title: 'Project National Parks',
      blurb: 'Explore the natural beauty of the National Parks',
      technologies: [
        "TypeScript", "React", "NextJS", "TailwindCSS"
      ]
    },
    {
      title: 'Power Searches',
      blurb: 'Find the information you want with curated search shortcuts.',
      technologies: [
        "TypeScript", "React", "NextJS", "Vercel", "TailwindCSS"
      ]
    },
    {
      title: 'Down Down Up',
      blurb: 'A game to test your keyboard skills',
      technologies: [
        "TypeScript", "Vue",
      ]
    },
  ],
}