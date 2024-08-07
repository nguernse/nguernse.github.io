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