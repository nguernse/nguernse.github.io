export type Technologies =
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "HTML"
  | "CSS"
  | "SCSS"
  | "Vue"
  | "React"
  | "NextJS"
  | "Vite"
  | "Vitest"
  | "Git"
  | "React Testing Library"
  | "Cypress"
  | "MongoDB"
  | "Postgres"
  | "SQL"
  | "TailwindCSS"
  | "Vercel"
  | "AWS"
  | "RadixUI"
  | "ShadCN";

export type Social = {
  label: string;
  url: string;
  image: string;
}

export type Project = {
  title: string;
  blurb: string;
  tags?: string[];
  technologies?: Technologies[];
};

export type Bio = {
  name: string;
  about: string;
  profile: string;
  jobStatus: "available" | "employed";
  jobTitle: string;
  socials: Record<string, Social>;
  projects: Project[];
  skills: Technologies[];
}