import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Paragraph from "./Paragraph";

describe("Paragraph Component", () => {
  test("renders", () => {
    render(<Paragraph>Hello World</Paragraph>);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
