import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import BioSkills from "./BioSkills";
import { Technologies } from "../../@types";

describe("Bio Skills Component", () => {
  test("renders", () => {
    const skills: Technologies[] = ["CSS", "HTML", "JavaScript"];
    render(<BioSkills skills={skills} />);

    expect(screen.getByTestId("bio-skills")).toBeInTheDocument();
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
