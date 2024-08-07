import ProjectLink from "../../components/Projects/ProjectLink";
import { BIO } from "../../utils/constants";

export default function ProjectsPage() {
  return (
    <div className="bg-white border rounded p-4">
      <h1 className="text-xl text-slate-800 mb-3">Projects</h1>

      <section
        data-testid="project-list"
        className="p-4 md:p-8 bg-slate-100 rounded mb-4"
      >
        {BIO.projects.map((project) => (
          <ProjectLink project={project} key={project.slug} />
        ))}
      </section>
    </div>
  );
}
