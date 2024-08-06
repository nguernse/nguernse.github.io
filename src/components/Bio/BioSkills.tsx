import { Bio } from "../../@types";

type Props = {
  skills: Bio["skills"];
};

export default function BioSkills({ skills }: Props) {
  return (
    <section
      data-testid="bio-skills"
      className="p-4 md:p-8 bg-slate-100 rounded mb-4"
    >
      <h2 className="text-2xl mb-3 text-slate-600">Tools</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
