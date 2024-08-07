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
  | "GitHub"
  | "React Testing Library"
  | "Cypress"
  | "MongoDB"
  | "Postgres"
  | "SQL"
  | "TailwindCSS"
  | "Vercel"
  | "AWS"
  | "RadixUI"
  | "ShadCN"
  | "Leaflet";

export type Social = {
  label: string;
  url: string;
  image: string;
}

export type ProjectImages = {
  alt: string;
  mobile: {
    webp: string;
    jpeg: string;
  },
  tablet: {
    webp: string;
    jpeg: string;
  }
};

export type Project = {
  logo: string;
  title: string;
  blurb: string;
  tags?: string[];
  technologies: Technologies[];
  slug: string;
  url: string;
  images: ProjectImages[];
  details: string[];
};

export type Bio =
  | {
    name: string;
    about: string;
    profile: string;
    jobStatus: "available";
    jobTitle: string;
    yearsExperience: number;
    jobLocations: string[];
    socials: Record<string, Social>;
    projects: Project[];
    skills: Technologies[];
  }
  | {
    name: string;
    about: string;
    profile: string;
    jobStatus: "employed";
    jobTitle: string;
    currentEmployer: string;
    yearsExperience: number;
    jobLocations: string[];
    socials: Record<string, Social>;
    projects: Project[];
    skills: Technologies[];
  }