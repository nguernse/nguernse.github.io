import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BioHeader from "./BioHeader";

describe("Bio Header Component", () => {
  test("renders", () => {
    render(
      <BioHeader
        name="John Doe"
        jobTitle="Designer"
        about="I am an interior designer."
        socials={{
          linkedin: {
            label: "LinkedIn",
            image: "/assets/linkedin.png",
            url: "https://linkedin.com/in/jd",
          },
          github: {
            label: "GitHub",
            image: "/assets/github.svg",
            url: "https://github.com/jd",
          },
        }}
        jobStatus="employed"
        profile="/assets/profile.jpeg"
      />
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("I am an interior designer.")).toBeInTheDocument();
    expect(screen.getByText("Designer")).toBeInTheDocument();
    expect(screen.getByTestId("job-status")).toBeInTheDocument();
  });
});
