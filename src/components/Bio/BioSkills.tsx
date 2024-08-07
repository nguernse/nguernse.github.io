import { Bio } from "../../@types";
import Badge from "../Badge/Badge";

type Props = {
  skills: Bio["skills"];
};

export default function BioSkills({ skills }: Props) {
  return (
    <section
      data-testid="bio-skills"
      className="p-4 md:p-8 bg-slate-100 rounded mb-4"
    >
      <h2 className="font-display text-2xl mb-3 text-slate-600">Tools</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
