import { describe, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";

import BioExperience from "./BioExperience";

describe("Bio Experience Component", () => {
  test("renders", () => {
    render(
      <BioExperience
        work={[
          {
            company: "Acme",
            positions: [
              {
                title: "Software Engineer",
                startDate: "Jan 2024",
                endDate: "Dec 2024",
              },
            ],
          },
        ]}
        volunteer={[
          {
            organization: "Acme Org",
            position: "Software Engineer",
            startDate: "Jan 2024",
            endDate: "Dec 2024",
          },
        ]}
      />
    );

    expect(screen.getByText("Acme")).toBeInTheDocument();
    expect(screen.getByText("Acme Org")).toBeInTheDocument();
    expect(screen.getAllByTestId("work-item")).toHaveLength(1);
    expect(screen.getAllByTestId("volunteer-item")).toHaveLength(1);
  });

  test("Company with multiple positions", () => {
    render(
      <BioExperience
        work={[
          {
            company: "Acme",
            positions: [
              {
                title: "Software Engineer",
                startDate: "Jan 2024",
                endDate: "Dec 2024",
              },
              {
                title: "Jr. Engineer",
                startDate: "Jan 2020",
                endDate: "Dec 2023",
              },
            ],
          },
        ]}
        volunteer={[
          {
            organization: "Acme Org",
            position: "Software Engineer",
            startDate: "Jan 2024",
            endDate: "Dec 2024",
          },
        ]}
      />
    );

    const workItems = screen.getAllByTestId("work-item");
    expect(workItems).toHaveLength(1);

    const positions = within(workItems[0]).getAllByTestId("position-item");
    expect(positions).toHaveLength(2);
  });

  test("Multiple companies", () => {
    render(
      <BioExperience
        work={[
          {
            company: "Big Acme",
            positions: [
              {
                title: "Software Engineer",
                startDate: "Jan 2024",
                endDate: "Dec 2024",
              },
            ],
          },
          {
            company: "Small Acme",
            positions: [
              {
                title: "Jr. Engineer",
                startDate: "Jan 2020",
                endDate: "Dec 2023",
              },
            ],
          },
        ]}
        volunteer={[
          {
            organization: "Acme Org",
            position: "Software Engineer",
            startDate: "Jan 2024",
            endDate: "Dec 2024",
          },
        ]}
      />
    );

    const workItems = screen.getAllByTestId("work-item");
    expect(workItems).toHaveLength(2);
  });

  test("Multiple volunteering", () => {
    render(
      <BioExperience
        work={[]}
        volunteer={[
          {
            organization: "Acme Org",
            position: "Software Engineer",
            startDate: "Jan 2024",
            endDate: "Dec 2024",
          },
          {
            organization: "Wiki Org",
            position: "Coder",
            startDate: "Jan 2024",
            endDate: "Dec 2024",
          },
        ]}
      />
    );

    const volunteerItems = screen.getAllByTestId("volunteer-item");
    expect(volunteerItems).toHaveLength(2);
  });
});
