import { VolunteerExperience, WorkExperience } from "../../@types";
import Section from "../Section/Section";

type Props = {
  work: WorkExperience;
  volunteer: VolunteerExperience;
};

export default function BioExperience({ work, volunteer }: Props) {
  return (
    <Section variant="light">
      <h2 className="font-display text-2xl mb-3 text-gray-600 dark:text-white">
        Work Experience
      </h2>

      <ul className="dark:text-white">
        {work.map((employer, idx) => (
          <li
            key={`${employer.company}-${idx}`}
            className="mb-2"
            data-testid="work-item"
          >
            <p className="font-bold">{employer.company}</p>

            <ul className="list-disc">
              {employer.positions.map((position) => (
                <li
                  key={`${employer.company}-${idx}-${position.title}`}
                  className="ml-4"
                  data-testid="position-item"
                >
                  <p className="italic">{position.title}</p>
                  <p>
                    ({position.startDate} - {position.endDate})
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="border border-gray-300 dark:border-gray-700 my-3" />

      <h2 className="font-display text-2xl mb-3 text-gray-600 dark:text-white">
        Volunteer Experience
      </h2>

      <ul className="dark:text-white">
        {volunteer.map((item, idx) => (
          <li key={`${item.organization}-${idx}`} data-testid="volunteer-item">
            <p className="font-bold">{item.organization}</p>
            <ul className="list-disc">
              <li className="ml-4">
                <p className="italic">{item.position}</p>
                <p>
                  ({item.startDate} - {item.endDate})
                </p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
