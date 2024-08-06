import { Link } from "react-router-dom";
import { ChevronRight, MoveRight } from "lucide-react";
import { Bio } from "../../@types";

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
        <h2 className="text-2xl mb-3 text-slate-600">Projects</h2>

        <Link
          to="/projects"
          className="bg-white rounded-md border px-2 py-1 text-sm flex items-center gap-x-2 mb-3 group/view"
        >
          View All
          <MoveRight className="w-4 transition-transform group-hover/view:translate-x-0.5" />
        </Link>
      </div>

      <div>
        {projects.slice(0, 3).map((project, index) => (
          <Link
            key={index}
            to="/projects"
            className="
              group/project bg-white rounded-md border p-3 shadow mb-3 flex flex-col gap-y-2
              md:flex-row md:gap-x-4 md:gap-y-0 md:items-center md:hover:shadow-md"
          >
            <div className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-slate-500 rounded-full self-start" />
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
        ))}
      </div>
    </section>
  );
}
