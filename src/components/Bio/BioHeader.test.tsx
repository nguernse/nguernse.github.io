import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BioHeader from "./BioHeader";
import { Bio } from "../../@types";

const fakeBio: Bio = {
  name: "John Doe",
  about: "I am a carpenter",
  jobStatus: "available",
  jobTitle: "Carpenter",
  skills: ["CSS", "HTML", "JavaScript"],
  socials: {
    linkedin: {
      label: "LinkedIn",
      url: "https://linkedin.com/in/jd",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/jd",
    },
  },
  projects: [
    {
      title: "Project 1",
      blurb: "This is project 1",
      technologies: ["TypeScript", "React", "NextJS", "TailwindCSS"],
    },
    {
      title: "Project 2",
      blurb: "This is project 2",
      technologies: ["TypeScript", "React", "NextJS", "TailwindCSS"],
    },
    {
      title: "Project 3",
      blurb: "This is project 3",
      technologies: ["TypeScript", "React", "NextJS", "TailwindCSS"],
    },
  ],
};

describe("Bio Header Component", () => {
  test("renders", () => {
    render(<BioHeader bio={fakeBio} />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText(fakeBio.name)).toBeInTheDocument();
    expect(screen.getByText(fakeBio.about)).toBeInTheDocument();
    expect(screen.getByText(fakeBio.jobTitle)).toBeInTheDocument();
    expect(screen.getByTestId("job-status")).toBeInTheDocument();
  });
});
