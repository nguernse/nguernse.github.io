import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Section from "./Section";

describe("Section Component", () => {
  test("renders", () => {
    render(<Section>Hello World</Section>);

    expect(screen.getByText("Hello World")).toBeDefined();
  });

  test("renders with title", () => {
    render(
      <Section title="Heading">
        <p>Hello world</p>
      </Section>
    );

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Heading");
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  test("light variant", () => {
    render(
      <Section title="Heading" variant="light">
        <p>Hello world</p>
      </Section>
    );

    expect(screen.getByTestId("section")).toHaveAttribute(
      "data-variant",
      "light"
    );
  });
});
