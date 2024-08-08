import { Link } from "react-router-dom";
import { Project } from "../../@types";
import { ChevronRight } from "lucide-react";
import Avatar from "../Avatar/Avatar";
import Badge from "../Badge/Badge";
import clsx from "clsx";

type Props = {
  project: Project;
  className?: string;
};

export default function ProjectLink({ project, className }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={clsx(
        "group/project bg-white rounded-md border p-3 shadow flex flex-col gap-y-2 md:flex-row md:gap-x-4 md:gap-y-0 md:items-center md:hover:shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-700",
        className
      )}
    >
      <Avatar path={project.logo} className="self-start" alt={project.title} />

      <div>
        <div className="font-medium text-gray-700 dark:text-white">
          {project.title}
        </div>
        <div className="text-gray-500 dark:text-gray-100">{project.blurb}</div>
        <div
          data-testid="project-technologies"
          className="hidden md:flex md:flex-wrap md:gap-1 md:mt-2"
        >
          {project.technologies?.slice(0, 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
      <div
        data-testid="project-chevron"
        className="hidden md:block ml-auto p-3"
      >
        <ChevronRight className="text-gray-700 dark:text-gray-100 w-8 transition-transform group-hover/project:translate-x-1" />
      </div>
    </Link>
  );
}
