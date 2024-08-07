import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { Bio } from "../../@types";
import ProjectLink from "../Projects/ProjectLink";

type Props = {
  projects: Bio["projects"];
};

export default function BioProjects({ projects }: Props) {
  return (
    <section
      data-testid="bio-projects"
      className="p-4 md:p-8 bg-slate-100 rounded mb-4"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-display text-2xl mb-3 text-slate-600">Projects</h2>

        <Link
          to="/projects"
          className="bg-white rounded-md border px-2 py-1 text-sm flex items-center gap-x-2 mb-3 group/view"
        >
          View All
          <MoveRight className="w-4 transition-transform group-hover/view:translate-x-0.5" />
        </Link>
      </div>

      <div>
        {projects.slice(0, 3).map((project) => (
          <ProjectLink project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
