import { Bio } from "../../@types";
import Badge from "../Badge/Badge";
import Section from "../Section/Section";

type Props = {
  skills: Bio["skills"];
};

export default function BioSkills({ skills }: Props) {
  return (
    <Section
      testid="bio-skills"
      variant="light"
      title="Skills"
      className="md:p-8"
    >
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
