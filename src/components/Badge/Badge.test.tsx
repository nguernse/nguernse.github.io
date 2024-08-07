import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Badge from "./Badge";

describe("Badge Component", () => {
  test("renders", () => {
    render(<Badge>Hello World</Badge>);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("variant default", () => {
    render(<Badge variant="default">Hello World</Badge>);

    expect(screen.getByTestId("badge")).toHaveAttribute(
      "data-variant",
      "default"
    );
  });

  test("variant primary", () => {
    render(<Badge variant="primary">Hello World</Badge>);

    expect(screen.getByTestId("badge")).toHaveAttribute(
      "data-variant",
      "primary"
    );
  });

  test("variant secondary", () => {
    render(<Badge variant="secondary">Hello World</Badge>);

    expect(screen.getByTestId("badge")).toHaveAttribute(
      "data-variant",
      "secondary"
    );
  });
});
