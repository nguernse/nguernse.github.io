import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { MemoryRouter } from "react-router-dom";
import ProjectLink from "./ProjectLink";

describe("Project Link Component", () => {
  test("renders", () => {
    render(
      <MemoryRouter>
        <ProjectLink
          project={{
            url: "https://example.com",
            logo: "/assets/logo.svg",
            slug: "project-one",
            title: "Project One",
            blurb: "A project for the ages",
            technologies: ["HTML", "CSS", "JavaScript"],
            images: [],
            details: [],
          }}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByText("Project One")).toBeInTheDocument();
    expect(screen.getByText("A project for the ages")).toBeInTheDocument();
    expect(screen.getAllByTestId("badge")).toHaveLength(3);
  });
});
