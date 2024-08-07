import { Link } from "react-router-dom";
import { Project } from "../../@types";
import { ChevronRight } from "lucide-react";
import Avatar from "../Avatar/Avatar";

type Props = {
  project: Project;
};

export default function ProjectLink({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="
        group/project bg-white rounded-md border p-3 shadow mb-3 flex flex-col gap-y-2
        md:flex-row md:gap-x-4 md:gap-y-0 md:items-center md:hover:shadow-md"
    >
      <Avatar path={project.logo} className="self-start" />

      <div>
        <div className="font-medium text-slate-700">{project.title}</div>
        <div className="text-slate-500">{project.blurb}</div>
        <div
          data-testid="project-technologies"
          className="hidden md:flex md:flex-wrap md:gap-1 md:mt-2"
        >
          {project.technologies?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 text-slate-500 font-medium rounded-full px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div
        data-testid="project-chevron"
        className="hidden md:block ml-auto p-3"
      >
        <ChevronRight className="text-slate-700 w-8 transition-transform group-hover/project:translate-x-1" />
      </div>
    </Link>
  );
}
