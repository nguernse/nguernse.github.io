import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import JobStatus from "./JobStatus";

describe("Job Status Component", () => {
  test("renders default", () => {
    render(<JobStatus />);

    expect(screen.getByText("Happily Employed")).toBeInTheDocument();
  });

  test('renders job status: "employed"', () => {
    render(<JobStatus status="employed" />);

    expect(screen.getByText("Happily Employed")).toBeInTheDocument();
    expect(screen.queryByTestId("active-ping")).toBe(null);
  });

  test('renders job status: "available"', () => {
    render(<JobStatus status="available" />);

    expect(screen.getByText("Available for Work")).toBeInTheDocument();
    expect(screen.getByTestId("active-ping")).toBeInTheDocument();
  });
});
