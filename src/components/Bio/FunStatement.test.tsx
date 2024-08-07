import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import FunStatement from "./FunStatement";

describe("Fun Statement Component", () => {
  test("renders", () => {
    render(<FunStatement yearsExperience={2} />);

    expect(screen.getByText(/for over 2 years/i)).toBeInTheDocument();
  });
});
