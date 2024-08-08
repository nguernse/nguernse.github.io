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
  | "Leaflet"
  | "NodeJS"
  | "Docker"
  | "Express";

export type Social = {
  label: string;
  url: string;
  image: string;
}

export type JobPosition = {
  title: string;
  startDate: string;
  endDate: string;
}

export type Employer = {
  company: string;
  positions: JobPosition[];
}

export type WorkExperience = Employer[];
export type VolunteerExperience = {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
}[];

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

interface BaseBio {
  name: string;
  about: string;
  profile: string;
  jobTitle: string;
  yearsExperience: number;
  jobLocations: string[];
  socials: Record<string, Social>;
  projects: Project[];
  skills: Technologies[];
  workExperience: WorkExperience;
  volunteerExperience: VolunteerExperience;
}

interface AvailableBio extends BaseBio {
  jobStatus: "available";
}

interface EmployedBio extends BaseBio {
  jobStatus: "employed";
  currentEmployer: string;
}

export type Bio = AvailableBio | EmployedBio;