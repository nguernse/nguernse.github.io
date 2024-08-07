import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Project } from "../../@types";
import BioProjects from "./BioProjects";
import { MemoryRouter } from "react-router-dom";

const projects: Project[] = [
  {
    logo: "/assets/logo.svg",
    title: "Project 1",
    blurb: "This is project 1",
    technologies: ["TypeScript", "React", "NextJS", "TailwindCSS"],
    url: "https://example.com",
    slug: "project-1",
    images: [],
    details: [],
  },
  {
    logo: "/assets/logo.svg",
    title: "Project 2",
    blurb: "This is project 2",
    technologies: ["TypeScript", "React", "NextJS", "TailwindCSS"],
    url: "https://example.com",
    slug: "project-2",
    images: [],
    details: [],
  },
  {
    logo: "/assets/logo.svg",
    title: "Project 3",
    blurb: "This is project 3",
    technologies: ["TypeScript", "React", "NextJS", "TailwindCSS"],
    url: "https://example.com",
    slug: "project-3",
    images: [],
    details: [],
  },
];

describe("Bio Projects Component", () => {
  test("renders", () => {
    render(
      <MemoryRouter>
        <BioProjects projects={projects} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("bio-projects")).toBeInTheDocument();

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.blurb)).toBeInTheDocument();
    });
  });
});
