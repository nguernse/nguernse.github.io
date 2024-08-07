import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BioFooter from "./BioFooter";

describe("Bio Footer", () => {
  test("renders", () => {
    render(
      <BioFooter
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
      />
    );

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });
});
