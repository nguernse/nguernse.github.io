import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import EmploymentStatement from "./EmploymentStatement";

describe("Employment Statement Component", () => {
  test("renders", () => {
    render(<EmploymentStatement employer="Acme" />);

    expect(screen.getByText(/pushing code for Acme/i)).toBeInTheDocument();
  });
});
