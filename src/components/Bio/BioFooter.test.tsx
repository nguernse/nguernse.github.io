import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BioFooter from "./BioFooter";

describe("Bio Footer", () => {
  test("renders", () => {
    render(<BioFooter />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });
});
